/*
Imagínese que tiene la tarea de desarrollar un sistema de gestión de usuarios, donde cada usuario se identifica de forma única 
mediante un ID y se asocia con datos como el nombre y el correo electrónico. Para garantizar una recuperación y actualizaciones 
eficientes, ha elegido utilizar una estructura de datos de Mapa para almacenar esta información. Su objetivo es implementar 
funciones que gestionen la adición, actualización y recuperación de datos de usuarios con precisión, aprovechando las capacidades 
del Mapa. 
*/

interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function manageUsers(users: Map<number, User>): void {
    const newUser: User = { id: 1, name: "John Doe", email: "john@example.com" };
    users.set(newUser.id, newUser);
  
    if (users.has(newUser.id)) {
      const updatedUser = { ...users.get(newUser.id)!, name: "Jane Doe" };
      users.set(newUser.id, updatedUser);
    }
  
    const retrievedUser = users.get(newUser.id);
    console.log(retrievedUser);
  }
  
  const users = new Map<number, User>();
  manageUsers(users);