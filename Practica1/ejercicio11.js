function obtenerUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ id: 1, nombre: "William" }), 1000);
    });
}

function obtenerPosts(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Post 1", "Post 2", "Post 3"]), 1000);
    });
}

function obtenerComentarios(post) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(["Comentario 1", "Comentario 2"]), 1000);
    });
}

obtenerUsuario()
    .then((usuario) => {
        console.log(usuario);
        return obtenerPosts(usuario);
    })
    .then((posts) => {
        console.log(posts);
        return obtenerComentarios(posts[0]);
    })
    .then((comentarios) => {
        console.log(comentarios);
    });