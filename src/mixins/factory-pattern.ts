interface Animal {
  speak(): void;
}

interface AnimalConstructor {
  new (speakTerm: string, name: string, legs: number): Animal;
}

const animalFactory = (
  ctor: AnimalConstructor,
  name: string,
  legs: number,
  speakTerm: string
) => {
  return new ctor(speakTerm, name, legs);
};

class Dog implements Animal {
  private name: string;
  private legs: number;
  private speakTerm: string;

  constructor(speakTerm: string, name: string, legs: number) {
    this.speakTerm = speakTerm;
    this.legs = legs;
    this.name = name;

    console.log("Dog initialized...");
  }

  speak(): void {
    console.log("Dog " + this.speakTerm + " I have " + this.legs + " legs");
  }
}

class Cat implements Animal {
  private name: string;
  private legs: number;
  private speakTerm: string;

  constructor(speakTerm: string, name: string, legs: number) {
    this.speakTerm = speakTerm;
    this.legs = legs;
    this.name = name;

    console.log("Cat initialized...");
  }

  speak(): void {
    console.log("Cat " + this.speakTerm + " I have " + this.legs + " legs");
  }
}

const dog = animalFactory(Dog, "dog", 2, "woof");
const cat = animalFactory(Cat, "cat", 2, "meaw");
