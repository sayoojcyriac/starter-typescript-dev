import { Project, Size } from "../common/types";

// Mixins needs to be aware about the constructor of the class that we are adding Mixins for!!
export class CoreAPI {
  constructor(public baseUrl: string) {
    console.log("CoreAPI instantiated...");
  }
}

// Type that represents the constructor of the class that would return CoreAPI
export type BaseAPIConstructor = new (...args: any[]) => CoreAPI;

// Then the core part
// Function which is aware about the constructor type that it is extending
// Retruning a class extending from it
function ImagesAPI<TBase extends BaseAPIConstructor>(Base: TBase) {
  return class extends Base {
    getImages(): Promise<{
      src: string;
      dimensions: Size;
    }> {
      return Promise.resolve({
        src: "http://a-fake-url.com/image-id",
        dimensions: {
          height: 100,
          width: 300,
        },
      });
    }

    saveImage(src: string): Promise<number> {
      return Promise.resolve(10);
    }
  };
}

class ApiClient extends ImagesAPI(CoreAPI) {
  getProjects(): Promise<Project[]> {
    return Promise.resolve([]);
  }

  saveProject(): Promise<string> {
    return Promise.resolve("1");
  }

  deleteProject(): Promise<void> {
    return Promise.resolve();
  }
}

const api = new ApiClient("http://testURL.com");
