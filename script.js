/* =========================================================
   COUNTDOWN
========================================================= */

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

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

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


/* =========================================================
   MUSIC
========================================================= */

const music = document.getElementById("weddingMusic");
const musicButton = document.getElementById("musicButton");

let isPlaying = false;


/* MUSIQANI BOSHLASH */

function startMusic() {

    music.play()
        .then(() => {

            isPlaying = true;
            musicButton.textContent = "❚❚";

        })
        .catch(() => {

            const startOnInteraction = () => {

                music.play()
                    .then(() => {

                        isPlaying = true;
                        musicButton.textContent = "❚❚";

                    })
                    .catch(() => {});

                document.removeEventListener(
                    "touchstart",
                    startOnInteraction
                );

                document.removeEventListener(
                    "click",
                    startOnInteraction
                );
            };

            document.addEventListener(
                "touchstart",
                startOnInteraction,
                { once: true }
            );

            document.addEventListener(
                "click",
                startOnInteraction,
                { once: true }
            );
        });
}


/* SAYT OCHILISHI BILAN URINAMIZ */

startMusic();


/* MUSIC BUTTON */

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

                console.log(
                    "Music could not be played."
                );

            });
    }
});


/* =========================================================
   LANGUAGE
========================================================= */

const translations = {

    /* =====================================================
       UZBEK
    ===================================================== */

    uz: {

        heroSmall:
            "BIZNING TO‘YIMIZ",

        invitationLabel:
            "TAKLIF",

      invitationTitle:
    "Sizni to‘yimizga<br>taklif qilamiz",

        invitationText:
            "Hayotimizdagi eng go‘zal kunlardan birini siz bilan birga nishonlashdan mamnun bo‘lamiz. Ushbu quvonchli kunimizda sizni aziz mehmonimiz sifatida kutib qolamiz.",

        month:
            "OKTABR",

        countdownLabel:
            "BIZNING KUNIMIZ",

        countdownTitle:
    "To‘yimizga qoldi",

        days:
            "KUN",

        hours:
            "SOAT",

        minutes:
            "DAQIQA",

        seconds:
            "SONIYA",

        locationLabel:
            "MANZIL",

       locationTitle:
    "Shodiyona<br>To‘yxonasi",

        locationAddress:
            "Namangan viloyati,<br>Uchqo‘rg‘on tumani,<br>Qayqi qishlog‘i",

        mapButton:
            "XARITADA KO‘RISH",

        rsvpLabel:
            "RSVP",

       rsvpTitle:
    "Tashrifingizni<br>tasdiqlang",

        rsvpText:
            "Sizni ushbu quvonchli kunimizda ko‘rishdan xursand bo‘lamiz.",

        namePlaceholder:
            "Ismingiz",

        wishPlaceholder:
            "Tilagingizni yozing...",

        sendWish:
            "TILAKNI YUBORISH",

        rsvpQuestion:
            "TO‘YIMIZGA TASHRIF BUYURASIZMI?",

        yes:
            "KELAMAN",

        no:
            "KELA OLMAYMAN",

        finalSmall:
            "SIZNI KUTIB QOLAMIZ",

        credit:
            "Onlayn Taklifnoma tomonidan tayyorlandi",

        enterName:
            "Avval ismingizni kiriting.",

        enterWish:
            "Avval tilagingizni yozing.",

        sendingWish:
            "Tilagingiz yuborilmoqda...",

        wishSuccess:
            "Rahmat, {name}! 🤍 Tilagingiz yuborildi.",

        wishError:
            "Tilak yuborilmadi. Qayta urinib ko‘ring.",

        sendingResponse:
            "Javobingiz yuborilmoqda...",

        responseSuccessComing:
            "Rahmat, {name}! 🤍 Sizni to‘yimizda kutamiz.",

        responseSuccessNotComing:
            "Rahmat, {name}! 🤍 Javobingiz qabul qilindi.",

        responseError:
            "Javob yuborilmadi. Qayta urinib ko‘ring.",

        networkError:
            "Xatolik yuz berdi. Internetni tekshirib qayta urinib ko‘ring."
    },


    /* =====================================================
       RUSSIAN
    ===================================================== */

    ru: {

        heroSmall:
            "НАША СВАДЬБА",

        invitationLabel:
            "ПРИГЛАШЕНИЕ",

      invitationTitle:
    "Приглашаем вас<br>на нашу свадьбу",

        invitationText:
            "Мы будем рады разделить с вами один из самых прекрасных дней нашей жизни. Будем счастливы видеть вас среди дорогих гостей в этот особенный день.",

        month:
            "ОКТЯБРЯ",

        countdownLabel:
            "НАШ ОСОБЕННЫЙ ДЕНЬ",

       countdownTitle:
    "До свадьбы осталось",

        days:
            "ДНЕЙ",

        hours:
            "ЧАСОВ",

        minutes:
            "МИНУТ",

        seconds:
            "СЕКУНД",

        locationLabel:
            "АДРЕС",

       locationTitle:
    "Ресторан<br>Shodiyona",

        locationAddress:
            "Наманганская область,<br>Учкурганский район,<br>село Кайки",

        mapButton:
            "ПОКАЗАТЬ НА КАРТЕ",

        rsvpLabel:
            "RSVP",

    rsvpTitle:
    "Подтвердите<br>ваше присутствие",

        rsvpText:
            "Будем очень рады видеть вас в этот особенный для нас день.",

        namePlaceholder:
            "Ваше имя",

        wishPlaceholder:
            "Напишите ваше пожелание...",

        sendWish:
            "ОТПРАВИТЬ ПОЖЕЛАНИЕ",

        rsvpQuestion:
            "ВЫ ПРИДЁТЕ НА НАШУ СВАДЬБУ?",

        yes:
            "БУДУ",

        no:
            "НЕ СМОГУ ПРИЙТИ",

        finalSmall:
            "БУДЕМ ЖДАТЬ ВАС",

        credit:
            "Приглашение подготовлено Onlayn Taklifnoma",

        enterName:
            "Пожалуйста, введите ваше имя.",

        enterWish:
            "Пожалуйста, напишите ваше пожелание.",

        sendingWish:
            "Пожелание отправляется...",

        wishSuccess:
            "Спасибо, {name}! 🤍 Ваше пожелание отправлено.",

        wishError:
            "Не удалось отправить пожелание. Попробуйте ещё раз.",

        sendingResponse:
            "Ваш ответ отправляется...",

        responseSuccessComing:
            "Спасибо, {name}! 🤍 Будем ждать вас на нашей свадьбе.",

        responseSuccessNotComing:
            "Спасибо, {name}! 🤍 Ваш ответ принят.",

        responseError:
            "Не удалось отправить ответ. Попробуйте ещё раз.",

        networkError:
            "Произошла ошибка. Проверьте интернет и попробуйте ещё раз."
    },


    /* =====================================================
       ENGLISH
    ===================================================== */

    en: {

        heroSmall:
            "OUR WEDDING",

        invitationLabel:
            "INVITATION",

       invitationTitle:
    "You are invited<br>to our wedding",

        invitationText:
            "We would be delighted to celebrate one of the most beautiful days of our lives with you. It would mean a lot to have you as our special guest on this joyful day.",

        month:
            "OCTOBER",

        countdownLabel:
            "OUR SPECIAL DAY",

        countdownTitle:
    "Until our wedding",

        days:
            "DAYS",

        hours:
            "HOURS",

        minutes:
            "MINUTES",

        seconds:
            "SECONDS",

        locationLabel:
            "LOCATION",

        locationTitle:
    "Shodiyona<br>Wedding Hall",

        locationAddress:
            "Namangan Region,<br>Uchqo‘rg‘on District,<br>Qayqi Village",

        mapButton:
            "VIEW ON MAP",

        rsvpLabel:
            "RSVP",

      rsvpTitle:
    "Please confirm<br>your attendance",

        rsvpText:
            "We would be delighted to celebrate this special day with you.",

        namePlaceholder:
            "Your name",

        wishPlaceholder:
            "Write your wishes...",

        sendWish:
            "SEND WISH",

        rsvpQuestion:
            "WILL YOU JOIN US AT OUR WEDDING?",

        yes:
            "I'M COMING",

        no:
            "I CAN'T COME",

        finalSmall:
            "WE'LL BE WAITING FOR YOU",

        credit:
            "Invitation prepared by Onlayn Taklifnoma",

        enterName:
            "Please enter your name.",

        enterWish:
            "Please write your wishes.",

        sendingWish:
            "Sending your wish...",

        wishSuccess:
            "Thank you, {name}! 🤍 Your wish has been sent.",

        wishError:
            "Could not send your wish. Please try again.",

        sendingResponse:
            "Sending your response...",

        responseSuccessComing:
            "Thank you, {name}! 🤍 We will be waiting for you at our wedding.",

        responseSuccessNotComing:
            "Thank you, {name}! 🤍 Your response has been received.",

        responseError:
            "Could not send your response. Please try again.",

        networkError:
            "An error occurred. Please check your internet connection and try again."
    }
};


/* =========================================================
   LANGUAGE BUTTONS
========================================================= */

const langButtons = document.querySelectorAll(".lang");


/* =========================================================
   APPLY LANGUAGE
========================================================= */

function changeLanguage(language) {

    const t = translations[language];

    if (!t) return;


    /* HERO */

    document.querySelector(".hero-small").innerHTML =
        t.heroSmall;


    /* INVITATION */

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


    /* COUNTDOWN */

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


    /* LOCATION */

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
    ).innerHTML =
        `${t.mapButton} <span>↗</span>`;


    /* RSVP */

    document.querySelector(
        ".rsvp .section-label"
    ).innerHTML = t.rsvpLabel;


    document.querySelector(
        ".rsvp h2"
    ).innerHTML = t.rsvpTitle;


    document.querySelector(
        ".rsvp-text"
    ).innerHTML = t.rsvpText;


    /* INPUT PLACEHOLDERS */

    document.querySelector(
        "#guestName"
    ).placeholder = t.namePlaceholder;


    document.querySelector(
        "#guestWish"
    ).placeholder = t.wishPlaceholder;


    /* WISH BUTTON */

    document.querySelector(
        "#wishButton"
    ).textContent = t.sendWish;


    /* RSVP QUESTION */

    document.querySelector(
        ".rsvp-question"
    ).textContent = t.rsvpQuestion;


    /* RSVP BUTTONS */

    document.querySelector(
        ".rsvp-buttons button:first-child"
    ).innerHTML =
        `<span class="rsvp-icon">✓</span>${t.yes}`;


    document.querySelector(
        ".rsvp-buttons button:last-child"
    ).innerHTML =
        `<span class="rsvp-icon">×</span>${t.no}`;


    /* FINAL */

    document.querySelector(
        ".final-small"
    ).innerHTML = t.finalSmall;


    document.querySelector(
        ".credit"
    ).innerHTML = t.credit;


    /* ACTIVE LANGUAGE */

    langButtons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.lang === language) {
            button.classList.add("active");
        }

    });


    document.documentElement.lang = language;


    /* CURRENT LANGUAGE */

    currentLanguage = language;
}


/* =========================================================
   LANGUAGE CLICK
========================================================= */

langButtons.forEach(button => {

    button.addEventListener("click", () => {

        const language = button.dataset.lang;

        changeLanguage(language);

    });

});


/* =========================================================
   DEFAULT LANGUAGE
========================================================= */

let currentLanguage = "uz";

changeLanguage("uz");


/* =========================================================
   RSVP + WISH
========================================================= */

const guestName =
    document.getElementById("guestName");

const guestWish =
    document.getElementById("guestWish");

const wishButton =
    document.getElementById("wishButton");

const rsvpButtons =
    document.querySelectorAll(".rsvp-button");

const rsvpMessage =
    document.getElementById("rsvpMessage");


const rsvpServer =
    "https://jamshidbek-rsvp.shahnozabonusherqoziyeva.workers.dev";


/* =========================================================
   TILAKNI ALOHIDA YUBORISH
========================================================= */

wishButton.addEventListener("click", async () => {

    const t = translations[currentLanguage];

    const name =
        guestName.value.trim();

    const wish =
        guestWish.value.trim();


    if (!name) {

        guestName.focus();

        rsvpMessage.textContent =
            t.enterName;

        return;
    }


    if (!wish) {

        guestWish.focus();

        rsvpMessage.textContent =
            t.enterWish;

        return;
    }


    wishButton.disabled = true;

    rsvpMessage.textContent =
        t.sendingWish;


    try {

        const result = await fetch(
            `${rsvpServer}/wish`,
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    name: name,
                    wish: wish
                })
            }
        );


        const data =
            await result.json();


        if (data.success) {

            rsvpMessage.textContent =
                t.wishSuccess.replace(
                    "{name}",
                    name
                );

            guestWish.value = "";

        } else {

            rsvpMessage.textContent =
                t.wishError;
        }


    } catch (error) {

        console.error(error);

        rsvpMessage.textContent =
            t.networkError;

    } finally {

        wishButton.disabled = false;
    }

});


/* =========================================================
   RSVP ALOHIDA YUBORISH
========================================================= */

rsvpButtons.forEach(button => {

    button.addEventListener(
        "click",
        async () => {

            const t =
                translations[currentLanguage];


            const name =
                guestName.value.trim();


            if (!name) {

                guestName.focus();

                rsvpMessage.textContent =
                    t.enterName;

                return;
            }


            const response =
                button.dataset.response;


            /* ACTIVE BUTTON */

            rsvpButtons.forEach(btn => {
                btn.classList.remove("active");
            });


            button.classList.add("active");


            rsvpMessage.textContent =
                t.sendingResponse;


            try {

                const result = await fetch(
                    `${rsvpServer}/rsvp`,
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


                const data =
                    await result.json();


                if (data.success) {

                    if (response === "KELAMAN") {

                        rsvpMessage.textContent =
                            t.responseSuccessComing.replace(
                                "{name}",
                                name
                            );

                    } else {

                        rsvpMessage.textContent =
                            t.responseSuccessNotComing.replace(
                                "{name}",
                                name
                            );
                    }

                } else {

                    rsvpMessage.textContent =
                        t.responseError;
                }


            } catch (error) {

                console.error(error);

                rsvpMessage.textContent =
                    t.networkError;
            }

        }
    );

});