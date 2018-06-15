// Roles
enum Roles {
    Admin,
    User
}; // Admin = 0, User = 1

let user: Roles = Roles.Admin;

// Assign specific index to enum value
enum Roles2 {
    Admin = 1,
    User
};
let user2: Roles2 = Roles2.Admin; // This will return a 1

// Assign all indexes
enum Roles3 {
    Admin = 1,
    User = 3,
    Guest = 0
};
