/* =========================================
           ELEMENTS
        ========================================= */

const envelope = document.getElementById("envelope");

const envelopePage = document.getElementById("envelopePage");

const detailsPage = document.getElementById("detailsPage");

const music = document.getElementById("weddingMusic");

const musicButton = document.getElementById("musicButton");

const yesButton = document.getElementById("yesButton");

const noButton = document.getElementById("noButton");

/* =========================================
           OPEN ENVELOPE
 ========================================= */

envelope.addEventListener(
  "click",

  function () {
    envelope.classList.add("open");

    startMusic();

    createPetals();

    /*Wait for the envelope animation to finish. */

    setTimeout(
      function () {
        envelopePage.style.opacity = "0";

        envelopePage.style.transform = "scale(0.9)";
      },

      1800,
    );

    /* Show invitation page.*/

    setTimeout(
      function () {
        envelopePage.style.display = "none";

        detailsPage.style.display = "flex";

        window.scrollTo({
          top: 0,

          behavior: "smooth",
        });
      },

      2800,
    );
  },
);

/* =========================================
           MUSIC
 ========================================= */

function startMusic() {
  music.play().catch(function () {
    console.log("Music requires user interaction.");
  });

  musicButton.innerHTML = "♫";
}

musicButton.addEventListener(
  "click",

  function (event) {
    event.stopPropagation();

    if (music.paused) {
      music.play();

      musicButton.innerHTML = "♫";
    } else {
      music.pause();

      musicButton.innerHTML = "🔇";
    }
  },
);

/* =========================================
           FLOWER PETALS
========================================= */

function createPetals() {
  setInterval(
    function () {
      const petal = document.createElement("div");

      petal.className = "petal";

      const flowers = ["🌸", "🌸", "🌸", "🌺", "🌺", "🌺", "✿", "✿", "✿", "❀"];

      petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];

      petal.style.left = Math.random() * 100 + "vw";

      petal.style.fontSize = 15 + Math.random() * 22 + "px";

      petal.style.animationDuration = 6 + Math.random() * 8 + "s";

      document.body.appendChild(petal);

      setTimeout(
        function () {
          petal.remove();
        },

        15000,
      );
    },

    500,
  );
}

/* =========================================
           COUNTDOWN
 ========================================= */

/*CHANGE YOUR DATE HERE*/

const weddingDate = new Date("September 3, 2026 19:00:00").getTime();

const countdown = setInterval(
  function () {
    const now = new Date().getTime();

    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
      clearInterval(countdown);

      document.getElementById("days").innerHTML = "♥";
    }
  },

  1000,
);
