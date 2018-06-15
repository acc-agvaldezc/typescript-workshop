// Any object type
let list: any[] = [1, '2', true];

// Generic object type
let user: Object = {
    name: "Tu nombre",
    age: 29,
    havePets: true,
    tellName: () => {
        return this.name;
    }
};

console.log(list[0], user.tellName());
