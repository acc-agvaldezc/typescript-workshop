// Interface
interface Puppy {
    name: string,
    age: number
};

// Valid puppy declaration
const puppy: Puppy = {
   name: "Mascota",
   age: 2
};

// Invalid puppy declaration
const invalidPuppy: Puppy = {
   eat: true
};

// Interface it an optiona age property
interface Puppy2 {
    name: string,
    age?: string
};

const puppy2: Puppy2 = {
   name: "Mascota"
};
