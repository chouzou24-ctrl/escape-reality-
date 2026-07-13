/* ====================================== */
/* ELEMENTS */
/* ====================================== */

const music = document.getElementById("music");
const enterButton = document.getElementById("enterButton");
const continueButton = document.getElementById("continueButton");
const hugButton = document.getElementById("hugButton");

const sections = document.querySelectorAll("section");



/* ====================================== */
/* INTRO */
/* ====================================== */

enterButton.addEventListener("click",()=>{

document.getElementById("welcome").scrollIntoView({

behavior:"smooth"

});

});



continueButton.addEventListener("click",()=>{

document.getElementById("gallery").scrollIntoView({

behavior:"smooth"

});

});



/* ====================================== */
/* MUSIC */
/* ====================================== */

let musicStarted=false;

enterButton.addEventListener("click",()=>{

if(!musicStarted){

music.volume=0;

music.play();

musicStarted=true;

let volume=0;

const fade=setInterval(()=>{

volume+=0.02;

music.volume=Math.min(volume,1);

if(volume>=1){

clearInterval(fade);

}

},120);

}

});



/* ====================================== */
/* SCROLL ANIMATION */
/* ====================================== */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:.2

});

sections.forEach(section=>{

observer.observe(section);

});



/* ====================================== */
/* PHOTO LIGHTBOX */
/* ====================================== */

const images=document.querySelectorAll(".photo-card img");

const lightbox=document.createElement("div");

lightbox.className="lightbox";

lightbox.innerHTML=`

<span class="close-lightbox">&times;</span>

<img>

`;

document.body.appendChild(lightbox);

const lightboxImage=lightbox.querySelector("img");

images.forEach(image=>{

image.addEventListener("click",()=>{

lightbox.classList.add("active");

lightboxImage.src=image.src;

});

});

lightbox.addEventListener("click",()=>{

lightbox.classList.remove("active");

});



/* ====================================== */
/* HUG BUTTON */
/* ====================================== */

hugButton.addEventListener("click",()=>{

alert("🫂 Si pudiera... ahora mismo te estaría abrazando muy fuerte.\n\nTe amo muchísimo, mi conejita. ❤️");

});

/* ====================================== */
/* HAPPINESS JAR */
/* ====================================== */

const jar=document.getElementById("jar");

const jarMessage=document.getElementById("jarMessage");

const messages=[

"Estoy muy orgullosa de ti. 🤍",

"Gracias por seguir aquí.",

"Respira... todo va a estar bien.",

"Te amo muchísimo.",

"Eres mucho más fuerte de lo que crees.",

"Siempre tendrás un hogar en mi corazón.",

"Mi conejita favorita. 🐇",

"Hoy también elegí amarte.",

"No estás sola.",

"Estoy contigo.",

"Descansa un poquito.",

"Estoy sonriendo mientras escribo esto.",

"Gracias por existir.",

"Lo estás haciendo muy bien.",

"Tu sonrisa sigue siendo mi lugar favorito.",

"Espero abrazarte muy pronto.",

"Estoy contando los días para verte.",

"Qué orgullosa estoy de ti.",

"Siempre voy a creer en ti.",

"Nunca olvides cuánto te amo.",

"Un día todo esto será solo un recuerdo.",

"Prometo seguir haciéndote sonreír.",

"Eres mi persona favorita.",

"Mi lugar favorito siempre serás tú.",

"Te elegiría una y otra vez.",

"Estoy aquí.",

"Todo irá bien.",

"Te mando un abrazo enorme.",

"Gracias por hacerme tan feliz.",

"Siempre serás mi conejita."

];

jar.addEventListener("click",()=>{

const random=Math.floor(Math.random()*messages.length);

jarMessage.textContent=messages[random];

});



/* ====================================== */
/* BUNNY GAME */
/* ====================================== */

const gameArea=document.getElementById("gameArea");

const bunnyMessages=[

"🐇 ¡Me encontraste!",

"Siempre encuentras el camino hacia mí. ❤️",

"Sabía que vendrías.",

"Premio: un abrazo gigante. 🤍",

"Mi conejita ganó. 🐇"

];

const startGame=document.getElementById("startGame");

startGame.addEventListener("click",()=>{

gameArea.innerHTML="";

const bunny=Math.floor(Math.random()*12);

for(let i=0;i<12;i++){

const star=document.createElement("div");

star.className="star-box";

star.textContent="⭐";

star.onclick=()=>{

if(i===bunny){

star.textContent="🐇";

setTimeout(()=>{

alert(bunnyMessages[Math.floor(Math.random()*bunnyMessages.length)]);

},200);

}else{

star.textContent="✨";

}

};

gameArea.appendChild(star);

}

});



/* ====================================== */
/* LAST MESSAGE */
/* ====================================== */

const cards=document.querySelectorAll(".memory-card");

const believe=document.getElementById("believe");

cards[cards.length-1].addEventListener("click",()=>{

setTimeout(()=>{

believe.scrollIntoView({

behavior:"smooth"

});

},1800);

});



/* ====================================== */
/* SMALL HEARTS */
/* ====================================== */

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize="20px";

heart.style.zIndex="99999";

heart.style.transition="1s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-80px)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},1000);

});

/* ====================================== */
/* HAPPINESS JAR */
/* ====================================== */

const jar=document.getElementById("jar");

const jarMessage=document.getElementById("jarMessage");

const messages=[

"Estoy muy orgullosa de ti. 🤍",

"Gracias por seguir aquí.",

"Respira... todo va a estar bien.",

"Te amo mucho.",

"Eres mucho más fuerte de lo que crees.",

"Siempre tendrás un hogar en mi corazón.",

"Mi conejito favorito. 🐇",

"Hoy también elegí amarte.",

"No estás sola.",

"Estoy contigo.",

"Descansa un poquito.",

"Estoy sonriendo mientras escribo esto.",

"Gracias por existir.",

"Lo estás haciendo muy bien.",

"Tu sonrisa sigue la mas preciosa del mundo.",

"Espero abrazarte muy pronto.",

"Estoy contando los días para verte.",

"Qué orgullosa estoy de ti.",

"Siempre voy a creer en ti.",

"Nunca olvides cuánto te amo.",

"Un día todo esto será solo un recuerdo.",

"Prometo seguir haciéndote sonreír.",

"Eres mia, mi persona favorita.",

"dejame creer en nosotros.",

"Te elegiría una y otra vez.",

"Estoy aquí.",

"Todo irá bien.",

"Te mando un abrazo enorme.",

"respira mi amor todo es temporary.",

"Siempre serás mi precioso bebé."

];

jar.addEventListener("click",()=>{

const random=Math.floor(Math.random()*messages.length);

jarMessage.textContent=messages[random];

});



/* ====================================== */
/* BUNNY GAME */
/* ====================================== */

const gameArea=document.getElementById("gameArea");

const bunnyMessages=[

"🐇 ¡Me encontraste!",

"Siempre encuentras el camino hacia mí. ❤️",

"Sabía que vendrías.",

"Premio: un abrazo gigante. 🤍",

"conejito ganó. 🐇"

];

const startGame=document.getElementById("startGame");

startGame.addEventListener("click",()=>{

gameArea.innerHTML="";

const bunny=Math.floor(Math.random()*12);

for(let i=0;i<12;i++){

const star=document.createElement("div");

star.className="star-box";

star.textContent="⭐";

star.onclick=()=>{

if(i===bunny){

star.textContent="🐇";

setTimeout(()=>{

alert(bunnyMessages[Math.floor(Math.random()*bunnyMessages.length)]);

},200);

}else{

star.textContent="✨";

}

};

gameArea.appendChild(star);

}

});



/* ====================================== */
/* LAST MESSAGE */
/* ====================================== */

const cards=document.querySelectorAll(".memory-card");

const believe=document.getElementById("believe");

cards[cards.length-1].addEventListener("click",()=>{

setTimeout(()=>{

believe.scrollIntoView({

behavior:"smooth"

});

},1800);

});



/* ====================================== */
/* SMALL HEARTS */
/* ====================================== */

document.addEventListener("click",(e)=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=e.clientX+"px";

heart.style.top=e.clientY+"px";

heart.style.pointerEvents="none";

heart.style.fontSize="20px";

heart.style.zIndex="99999";

heart.style.transition="1s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform="translateY(-80px)";

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},1000);

});
