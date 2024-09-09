const emailList = [
    "javascript@gmail.com",
    "abc.com",
    "mydomain.com",
    "Python@hotmail.com",
    "test",
    "anotherEmail@kenkoo.com",
    "typescript@gmail.com",
    "mailOfPikachu@@@@@",
    "elta@kkk.co",
    "user123.....",
    "wrongEmail@gmail.com",
    "kattis.go",
    "java@gamil.com",
  ];
  
  // Función para filtrar emails válidos
  function filterValidEmails(emails) {
    return emails.filter(email => email.includes('@') && email.endsWith('.com'));
  }
  
  // Filtrar la lista de emails
  const validEmails = filterValidEmails(emailList);
  
  // Imprimir el resultado
  console.log(validEmails);
  