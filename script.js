document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // LOADER
    // ===========================

    const loader = document.getElementById("loader");

    setTimeout(() => {
        if (loader) loader.style.display = "none";
    }, 2000);


    // ===========================
    // MUSIQUE
    // ===========================

    const music = document.getElementById("music");

    function playMusic() {
        if (music) {
            music.play().catch(() => {});
        }
    }

    document.addEventListener("click", playMusic, { once: true });


    // ===========================
    // AFFICHER TOUTES LES SECTIONS
    // ===========================

    document.querySelectorAll("section").forEach(section => {
        section.classList.add("show");
    });


    // ===========================
    // GALERIE PHOTO
    // ===========================

    const images = document.querySelectorAll(".photo-card img");

    images.forEach(img => {

        img.style.cursor = "pointer";

        img.addEventListener("click", () => {

            const overlay = document.createElement("div");

            overlay.style.position = "fixed";
            overlay.style.top = "0";
            overlay.style.left = "0";
            overlay.style.width = "100%";
            overlay.style.height = "100%";
            overlay.style.background = "rgba(0,0,0,.9)";
            overlay.style.display = "flex";
            overlay.style.alignItems = "center";
            overlay.style.justifyContent = "center";
            overlay.style.zIndex = "99999";

            const big = document.createElement("img");

            big.src = img.src;
            big.style.maxWidth = "90%";
            big.style.maxHeight = "90%";
            big.style.borderRadius = "20px";

            overlay.appendChild(big);

            overlay.addEventListener("click", () => overlay.remove());

            document.body.appendChild(overlay);

        });

    });


    // ===========================
    // CARTES
    // ===========================

    document.querySelectorAll(".memory-card").forEach(card => {

        card.addEventListener("click", () => {

            card.classList.toggle("flip");

        });

    });


    // ===========================
    // JEU DU LAPIN
    // ===========================

    const startGame = document.getElementById("startGame");
    const gameArea = document.getElementById("gameArea");

    if (startGame && gameArea) {

        startGame.addEventListener("click", () => {

            gameArea.innerHTML = "";

            const bunny = document.createElement("div");

            bunny.innerHTML = "🐇";

            bunny.style.position = "absolute";
            bunny.style.fontSize = "40px";
            bunny.style.cursor = "pointer";

            bunny.style.left = Math.random() * 80 + "%";
            bunny.style.top = Math.random() * 80 + "%";

            bunny.onclick = () => {

                alert("¡¡Me encontraste!! ❤️");

            };

            gameArea.style.position = "relative";
            gameArea.style.height = "250px";

            gameArea.appendChild(bunny);

        });

    }


    // ===========================
    // JAR
    // ===========================

    const jar = document.getElementById("jar");
    const jarMessage = document.getElementById("jarMessage");

    const messages = [

        "Siempre estaré contigo. ❤️",

        "Estoy orgullosa de ti.",

        "Respira... mañana será un día nuevo y mejor.",

        "Eres suficiente.",

        "Nunca estarás sola.",

        "Te amo muchísimo.",

        "Mi bella hermosa, adorable. 🐇",

        "Todavía nos quedan miles de recuerdos."

    ];

    if (jar && jarMessage) {

        jar.addEventListener("click", () => {

            jarMessage.innerHTML =
                messages[Math.floor(Math.random() * messages.length)];

        });

    }


    // ===========================
    // BOTÓN FINAL
    // ===========================

    const hugButton = document.getElementById("hugButton");

    if (hugButton) {

        hugButton.addEventListener("click", () => {

            alert("🫂 Un abrazo enorme desde Argelia hasta Florida. Te amo. ❤️");

        });

    }

});
