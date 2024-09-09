function createUser(name: string, ci: string, email: string): { name: string; ci: string; email: string } {
    return {
      name: name,
      ci: ci,
      email: email
    };
  }
  const user = createUser('Wendy Meriles', '5545111', 'wendymeriles@example.com');
  console.log(user);
  