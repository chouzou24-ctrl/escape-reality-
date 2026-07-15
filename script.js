/* ==========================================================
   ESCAPE REALITY - SCRIPT FINAL
   PARTIE 1
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       ELEMENTS
    ========================================== */

    const loader = document.getElementById("loader");
    const music = document.getElementById("music");

    const intro = document.getElementById("intro");
    const welcome = document.getElementById("welcome");

    const enterButton = document.getElementById("enterButton");
    const continueButton = document.getElementById("continueButton");

    const sections = document.querySelectorAll("section");



    /* ==========================================
       LOADER
    ========================================== */

    setTimeout(() => {

        if(loader){

            loader.style.opacity = "0";

            setTimeout(()=>{

                loader.style.display="none";

            },800);

        }

    },1800);



    /* ==========================================
       INTRO
    ========================================== */

    sections.forEach(section=>{

        section.classList.add("show");

    });



    /* ==========================================
       MUSIQUE
    ========================================== */

    let musicStarted = false;

    function startMusic(){

        if(musicStarted) return;

        musicStarted = true;

        if(music){

            music.volume = 0.35;

            music.play().catch(()=>{

                console.log("Lecture bloquée jusqu'au clic.");

            });

        }

    }

    document.body.addEventListener("click",startMusic,{once:true});



    /* ==========================================
       BOUTON INTRO
    ========================================== */

    if(enterButton){

        enterButton.addEventListener("click",()=>{

            startMusic();

            intro.scrollIntoView({

                behavior:"smooth"

            });

            setTimeout(()=>{

                welcome.scrollIntoView({

                    behavior:"smooth"

                });

            },700);

        });

    }



    /* ==========================================
       BOUTON CONTINUER
    ========================================== */

    if(continueButton){

        continueButton.addEventListener("click",()=>{

            document.getElementById("gallery").scrollIntoView({

                behavior:"smooth"

            });

        });

    });



    /* ==========================================
       REVEAL AU SCROLL
    ========================================== */

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    sections.forEach(section=>observer.observe(section));
    /* ==========================================
       GALERIE PHOTO
    ========================================== */

    const galleryImages = document.querySelectorAll(".photo-card img");

    galleryImages.forEach(image=>{

        image.style.cursor="pointer";

        image.addEventListener("click",()=>{

            const overlay=document.createElement("div");

            overlay.style.position="fixed";
            overlay.style.top="0";
            overlay.style.left="0";
            overlay.style.width="100%";
            overlay.style.height="100%";
            overlay.style.background="rgba(0,0,0,.95)";
            overlay.style.display="flex";
            overlay.style.alignItems="center";
            overlay.style.justifyContent="center";
            overlay.style.zIndex="999999";
            overlay.style.cursor="zoom-out";

            const big=document.createElement("img");

            big.src=image.src;
            big.style.maxWidth="90%";
            big.style.maxHeight="90%";
            big.style.borderRadius="20px";
            big.style.boxShadow="0 0 40px rgba(255,255,255,.3)";
            big.style.animation="fadeIn .3s";

            overlay.appendChild(big);

            overlay.addEventListener("click",()=>{

                overlay.remove();

            });

            document.body.appendChild(overlay);

        });

    });



    /* ==========================================
       CARTES QUI SE RETOURNENT
    ========================================== */

    const memoryCards=document.querySelectorAll(".memory-card");

    memoryCards.forEach(card=>{

        card.addEventListener("click",()=>{

            card.classList.toggle("flip");

        });

    });



    /* ==========================================
       HAPPINESS JAR
    ========================================== */

    const jar=document.getElementById("jar");
    const jarMessage=document.getElementById("jarMessage");

    const messages=[

        "Siempre estaré contigo. ❤️",

        "Estoy orgullosa de ti.",

        "Respira profundamente amor. Todo pasará.",

        "Eres mucho más fuerte de lo que crees.",

        "Nunca estarás sola.",

        "Mi preciosa princesa. ",

        "Te amo ❤️ .",

        "Todavía nos quedan miles de recuerdos por crear.",

        "Gracias por existir.",

        "Si me quieres, siempre estaré tu lugar seguro.",

        "Eres mi persona favorita.",

        "Un día todo esto será solo un recuerdo lejano.",

        "Te abrazaría ahora mismo si pudiera.",

        "Sonríe, todo estará bien."

    ];

    if(jar && jarMessage){

        jar.addEventListener("click",()=>{

            const random=Math.floor(Math.random()*messages.length);

            jarMessage.style.opacity="0";

            setTimeout(()=>{

                jarMessage.innerHTML=messages[random];

                jarMessage.style.opacity="1";

            },200);

        });

    }



    /* ==========================================
       BOTÓN ABRAZO
    ========================================== */

    const hugButton=document.getElementById("hugButton");

    if(hugButton){

        hugButton.addEventListener("click",()=>{

            const hugs=[

                "🫂 Abrazo enviado desde Argelia hasta Florida ❤️",

                "🐇 Ven aquí... déjame abrazarte un ratito.",

                "❤️ Si pudiera, nunca te soltaría.",

                "🌎 Aunque haya un océano entre nosotras, mi abrazo siempre llega.",

                "🤍 Estoy contigo, incluso en los días más difíciles."

            ];

            alert(hugs[Math.floor(Math.random()*hugs.length)]);

        });

    }



    /* ==========================================
       EFECTO ESTRELLAS
    ========================================== */

    const stars=document.getElementById("stars");

    if(stars){

        for(let i=0;i<120;i++){

            const star=document.createElement("div");

            star.className="star";

            star.style.position="absolute";
            star.style.left=Math.random()*100+"%";
            star.style.top=Math.random()*100+"%";
            star.style.width=(Math.random()*3+1)+"px";
            star.style.height=star.style.width;
            star.style.borderRadius="50%";
            star.style.background="white";
            star.style.opacity=Math.random();

            stars.appendChild(star);

        }

    }



    /* ==========================================
       SCROLL SUAVE
    ========================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const target=document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });
    /* ==========================================
       MESSAGE FINAL
    ========================================== */

    console.log("❤️ Escape Reality chargé avec succès ❤️");



    /* ==========================================
       PETITES ANIMATIONS
    ========================================== */

    document.querySelectorAll("button").forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="scale(1.05)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="scale(1)";

        });

    });



    /* ==========================================
       EFFET SUR LES VIDEOS
    ========================================== */

    document.querySelectorAll("video").forEach(video=>{

        video.addEventListener("play",()=>{

            video.style.boxShadow="0 0 35px rgba(255,255,255,.45)";

        });

        video.addEventListener("pause",()=>{

            video.style.boxShadow="";

        });

        video.addEventListener("ended",()=>{

            video.style.boxShadow="";

        });

    });



    /* ==========================================
       VERIFICATION DES IMAGES
    ========================================== */

    document.querySelectorAll("img").forEach(img=>{

        img.onerror=()=>{

            console.warn("Image introuvable :",img.src);

        };

    });



    /* ==========================================
       VERIFICATION DES VIDEOS
    ========================================== */

    document.querySelectorAll("video").forEach(video=>{

        video.onerror=()=>{

            console.warn("Vidéo introuvable.");

        };

    });



    /* ==========================================
       VERIFICATION DE LA MUSIQUE
    ========================================== */

    if(music){

        music.onerror=()=>{

            console.warn("Musique introuvable.");

        };

    }



}); // ← NE SUPPRIME PAS CETTE LIGNE
