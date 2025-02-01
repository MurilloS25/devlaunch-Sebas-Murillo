/*
Imagínese como el arquitecto de una comunidad en línea vibrante donde los usuarios se conectan, comparten e interactúan entre sí. Para enriquecer 
la experiencia del usuario, está introduciendo una función que sugiere nuevas conexiones en función de los usuarios que una persona ya sigue. Esta es la hoja de ruta:

Comenzaremos por definir la interfaz `User`, capturando los atributos clave que definen el perfil de un usuario:

- `id`: Un identificador único asignado a cada usuario, asegurando una identificación distintiva dentro de la plataforma.
- `name`: El nombre del usuario, brindando un toque personalizado a su perfil.
- `followers`: Una matriz de objetos `User` que representan a quienes siguen al usuario, fomentando un sentido de comunidad e interacción.
- `following`: Una matriz de objetos `User` que representan a los usuarios que el usuario sigue, dando forma a su red y fuente de contenido.

Una vez establecida la base, el siguiente paso es crear una función diseñada para sugerir nuevas conexiones a un usuario en función de su red actual. 
Esta función recibirá un objeto `User` y una matriz de objetos `User` como parámetros de entrada. ¿Su misión? Explorar la red de usuarios que sigue la 
entrada `Usuario` e identificar conexiones potenciales que no estén ya seguidas por la entrada `Usuario`.
*/

interface User {
    id: number;
    name: string;
    followers: User[];
    following: User[];
}

function suggestUsersToFollow(user: User): User[] {
    const userFollowingSet = new Set(user.following); 
    const suggestedUsers = new Set<User>(); 

    user.following.forEach(friend => {
        friend.following.forEach(potential => {
            if (potential.id !== user.id && !userFollowingSet.has(potential)) {
                suggestedUsers.add(potential);
            }
        });
    });

    return Array.from(suggestedUsers);
}

const alice: User = {
    id: 1,
    name: "Alice",
    followers: [],
    following: [],
};

const bob: User = {
    id: 2,
    name: "Bob",
    followers: [alice],
    following: [alice],
};

const charlie: User = {
    id: 3,
    name: "Charlie",
    followers: [alice, bob],
    following: [bob],
};

const diana: User = {
    id: 4,
    name: "Diana",
    followers: [alice, charlie],
    following: [charlie],
};


const suggestedUsers = suggestUsersToFollow(diana);
console.log("Sugerencias para Diana:", suggestedUsers.map(u => u.name));
