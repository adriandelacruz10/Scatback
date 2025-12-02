document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".login-form");
    const errorMessage = document.getElementById("error-message");

    auth.onAuthStateChanged((user) => {
        if (user) {
            // Obtener datos guardados del usuario en localStorage
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (storedUser) {
                switch (storedUser.rol) {
                    case "FABRICA":
                        window.location.href = "../html/fabrica.html";
                        break;
                    case "CUENCA":
                        window.location.href = "../html/cuenca.html";
                        break;
                    case "QUITO":
                        window.location.href = "../html/quito.html";
                        break;
                    case "ADMIN":
                        window.location.href = "../html/admin.html";
                        break;
                }
                
            }
        }
    });

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = loginForm.querySelector("input[type='text']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return db.collection("USUARIOS").where("usuario", "==", user.email).get();
        })
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const userData = doc.data();
                    localStorage.setItem("user", JSON.stringify(userData));

                    switch (userData.rol) {
                        case "FABRICA":
                            window.location.href = "../html/fabrica.html";
                            break;
                        case "CUENCA":
                            window.location.href = "../html/cuenca.html";
                            break;
                        case "QUITO":
                            window.location.href = "../html/quito.html";
                            break;
                        case "ADMIN":
                            window.location.href = "../html/admin.html";
                            break;
                    }
                });
            } else {
                showError("Rol no asignado al usuario");
            }
        })
        .catch((error) => {
            showError(error.message);
        });
    });

    // Función para mostrar errores en pantalla
    function showError(message) {
        errorMessage.innerText = message;
        errorMessage.style.display = "block";

        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000);
    }
});