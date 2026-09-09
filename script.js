/* =========================
   COUNTDOWN
========================= */

const weddingDate = new Date("October 11, 2026 18:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance <= 0) {
        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================
   MUSIC
========================= */

const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

let isPlaying = false;

musicButton.addEventListener("click", () => {
    if (isPlaying) {
        music.pause();
        musicButton.textContent = "♫";
        isPlaying = false;
    } else {
        music.play()
            .then(() => {
                musicButton.textContent = "❚❚";
                isPlaying = true;
            })
            .catch(() => {
                console.log("Music could not be played.");
            });
    }
});


/* =========================
   LANGUAGE
========================= */

const translations = {

    uz: {
        heroSmall: "BIZNING TO‘YIMIZ",
        invitationLabel: "TAKLIF",
        invitationTitle: "SIZNI TO‘YIMIZGA<br>TAKLIF QILAMIZ",

        invitationText:
            "Hayotimizdagi eng go‘zal kunlardan birini siz bilan birga nishonlashdan mamnun bo‘lamiz. Ushbu quvonchli kunimizda sizni aziz mehmonimiz sifatida kutib qolamiz.",

        month: "OKTABR",

        countdownLabel: "BIZNING KUNIMIZ",
        countdownTitle: "TO‘YIMIZGA QOLDI",

        days: "KUN",
        hours: "SOAT",
        minutes: "DAQIQA",
        seconds: "SONIYA",

        locationLabel: "MANZIL",
        locationTitle: "SHODIYONA<br>TO‘YXONASI",

        locationAddress:
            "Namangan viloyati,<br>Uchqo‘rg‘on tumani,<br>Qayqi qishlog‘i",

        mapButton: "XARITADA KO‘RISH",

        rsvpLabel: "RSVP",
        rsvpTitle: "TASHRIFINGIZNI<br>TASDIQLANG",

        rsvpText:
            "Sizni ushbu quvonchli kunimizda ko‘rishdan xursand bo‘lamiz.",

        yes: "KELAMAN",
        no: "KELA OLMAYMAN",

        finalSmall: "SIZNI KUTIB QOLAMIZ",

        credit:
            "Taklifnoma Onlayn Taklifnoma tomonidan tayyorlandi"
    },

    ru: {
        heroSmall: "НАША СВАДЬБА",
        invitationLabel: "ПРИГЛАШЕНИЕ",
        invitationTitle: "ПРИГЛАШАЕМ ВАС<br>НА НАШУ СВАДЬБУ",

        invitationText:
            "Мы будем рады разделить с вами один из самых прекрасных дней нашей жизни. Будем счастливы видеть вас среди дорогих гостей в этот особенный день.",

        month: "ОКТЯБРЯ",

        countdownLabel: "НАШ ОСОБЕННЫЙ ДЕНЬ",
        countdownTitle: "ДО СВАДЬБЫ ОСТАЛОСЬ",

        days: "ДНЕЙ",
        hours: "ЧАСОВ",
        minutes: "МИНУТ",
        seconds: "СЕКУНД",

        locationLabel: "АДРЕС",
        locationTitle: "РЕСТОРАН<br>SHODIYONA",

        locationAddress:
            "Наманганская область,<br>Учкурганский район,<br>село Кайки",

        mapButton: "ПОКАЗАТЬ НА КАРТЕ",

        rsvpLabel: "RSVP",
        rsvpTitle: "ПОДТВЕРДИТЕ<br>ВАШЕ ПРИСУТСТВИЕ",

        rsvpText:
            "Будем очень рады видеть вас в этот особенный для нас день.",

        yes: "БУДУ",
        no: "НЕ СМОГУ ПРИЙТИ",

        finalSmall: "БУДЕМ ЖДАТЬ ВАС",

        credit:
            "Приглашение подготовлено Onlayn Taklifnoma"
    },

    en: {
        heroSmall: "OUR WEDDING",
        invitationLabel: "INVITATION",
        invitationTitle: "YOU ARE INVITED<br>TO OUR WEDDING",

        invitationText:
            "We would be delighted to celebrate one of the most beautiful days of our lives with you. It would mean a lot to have you as our special guest on this joyful day.",

        month: "OCTOBER",

        countdownLabel: "OUR SPECIAL DAY",
        countdownTitle: "UNTIL OUR WEDDING",

        days: "DAYS",
        hours: "HOURS",
        minutes: "MINUTES",
        seconds: "SECONDS",

        locationLabel: "LOCATION",
        locationTitle: "SHODIYONA<br>WEDDING HALL",

        locationAddress:
            "Namangan Region,<br>Uchqo‘rg‘on District,<br>Qayqi Village",

        mapButton: "VIEW ON MAP",

        rsvpLabel: "RSVP",
        rsvpTitle: "PLEASE CONFIRM<br>YOUR ATTENDANCE",

        rsvpText:
            "We would be delighted to celebrate this special day with you.",

        yes: "I'M COMING",
        no: "I CAN'T COME",

        finalSmall: "WE'LL BE WAITING FOR YOU",

        credit:
            "Invitation prepared by Onlayn Taklifnoma"
    }
};


/* =========================
   APPLY LANGUAGE
========================= */

const langButtons = document.querySelectorAll(".lang");

function changeLanguage(language) {

    const t = translations[language];

    document.querySelector(".hero-small").innerHTML =
        t.heroSmall;

    document.querySelector(
        ".invitation .section-label"
    ).innerHTML = t.invitationLabel;

    document.querySelector(
        ".invitation h2"
    ).innerHTML = t.invitationTitle;

    document.querySelector(
        ".invitation-text"
    ).innerHTML = t.invitationText;

    document.querySelector(
        ".invitation-date small"
    ).innerHTML = t.month;

    document.querySelector(
        ".countdown-section .section-label"
    ).innerHTML = t.countdownLabel;

    document.querySelector(
        ".countdown-section h2"
    ).innerHTML = t.countdownTitle;

    document.querySelector(
        ".count-box:nth-child(1) span"
    ).innerHTML = t.days;

    document.querySelector(
        ".count-box:nth-child(2) span"
    ).innerHTML = t.hours;

    document.querySelector(
        ".count-box:nth-child(3) span"
    ).innerHTML = t.minutes;

    document.querySelector(
        ".count-box:nth-child(4) span"
    ).innerHTML = t.seconds;

    document.querySelector(
        ".location .section-label"
    ).innerHTML = t.locationLabel;

    document.querySelector(
        ".location h2"
    ).innerHTML = t.locationTitle;

    document.querySelector(
        ".location-address"
    ).innerHTML = t.locationAddress;

    document.querySelector(
        ".map-button"
    ).innerHTML = `${t.mapButton} <span>↗</span>`;

    document.querySelector(
        ".rsvp .section-label"
    ).innerHTML = t.rsvpLabel;

    document.querySelector(
        ".rsvp h2"
    ).innerHTML = t.rsvpTitle;

    document.querySelector(
        ".rsvp-text"
    ).innerHTML = t.rsvpText;

    document.querySelector(
        ".rsvp-buttons button:first-child"
    ).innerHTML = t.yes;

    document.querySelector(
        ".rsvp-buttons button:last-child"
    ).innerHTML = t.no;

    document.querySelector(
        ".final-small"
    ).innerHTML = t.finalSmall;

    document.querySelector(
        ".credit"
    ).innerHTML = t.credit;

    langButtons.forEach(button => {
        button.classList.remove("active");

        if (button.dataset.lang === language) {
            button.classList.add("active");
        }
    });

    document.documentElement.lang = language;
}


/* =========================
   LANGUAGE BUTTONS
========================= */

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.lang;

        changeLanguage(language);

    });

});


/* DEFAULT LANGUAGE */

changeLanguage("uz");

// =========================
// RSVP → CLOUDFLARE → TELEGRAM
// =========================

const guestName = document.getElementById("guestName");
const rsvpButtons = document.querySelectorAll(".rsvp-button");
const rsvpMessage = document.getElementById("rsvpMessage");

const rsvpServer =
    "https://jamshidbek-rsvp.shahnozabonusherqoziyeva.workers.dev/rsvp";


rsvpButtons.forEach(button => {

    button.addEventListener("click", async () => {

        const name = guestName.value.trim();

        if (!name) {

            guestName.focus();

            rsvpMessage.textContent =
                "Avval ismingizni kiriting.";

            return;
        }


        const response =
            button.dataset.response;


        // Tugmani belgilash
        rsvpButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Yuklanayotgan holat
        rsvpMessage.textContent =
            "Javobingiz yuborilmoqda...";


        try {

            const result = await fetch(
                rsvpServer,
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        response: response
                    })
                }
            );


            const data = await result.json();


            if (data.success) {

                if (response === "KELAMAN") {

                    rsvpMessage.textContent =
                        `Rahmat, ${name}! 🤍 Sizni to‘yimizda kutamiz.`;

                } else {

                    rsvpMessage.textContent =
                        `Rahmat, ${name}! 🤍 Javobingiz qabul qilindi.`;
                }

            } else {

                rsvpMessage.textContent =
                    "Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.";

            }


        } catch (error) {

            console.error(error);

            rsvpMessage.textContent =
                "Javob yuborilmadi. Internetni tekshirib qayta urinib ko‘ring.";

        }

    });

});