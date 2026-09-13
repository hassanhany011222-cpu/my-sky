/* ==========================================
   SAMIRA STARS
   الجزء الثالث — إنشاء النجوم
========================================== */


/* ==============================
   العناصر الأساسية
============================== */

const app = document.getElementById("app");
const startBtn = document.getElementById("startBtn");


/* ==============================
   إنشاء النجوم
============================== */

function createStars() {

    const starsContainer = document.createElement("div");

    starsContainer.id = "starsContainer";

    app.appendChild(starsContainer);


    // عدد النجوم
    const numberOfStars = 140;


    for (let i = 0; i < numberOfStars; i++) {

        const star = document.createElement("span");

        star.classList.add("background-star");


        // حجم عشوائي
        const size = Math.random() * 3 + 1;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;


        // مكان عشوائي
        star.style.left = `${Math.random() * 100}%`;

        star.style.top = `${Math.random() * 100}%`;


        // تأخير عشوائي للوميض
        star.style.animationDelay =
            `${Math.random() * 5}s`;


        // مدة عشوائية للوميض
        star.style.animationDuration =
            `${2 + Math.random() * 4}s`;


        starsContainer.appendChild(star);
    }
}


/* ==============================
   تشغيل النجوم
============================== */

createStars();
