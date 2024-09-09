function createUser(name, ci, email) {
    return {
        name: name,
        ci: ci,
        email: email
    };
}
var user = createUser('Wendy Meriles', '5545111', 'wendymeriles@example.com');
console.log(user);
