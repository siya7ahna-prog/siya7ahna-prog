/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* Close mobile menu when clicking a navigation link */

document.querySelectorAll("#navMenu a").forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   DARK / LIGHT MODE
===================================================== */

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {

    document.body.classList.add("light-theme");

    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

}


themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-theme");

    const isLight =
        document.body.classList.contains("light-theme");

    localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
    );

    themeToggle.innerHTML = isLight
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';

});


/* =====================================================
   BACK TO TOP BUTTON
===================================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();


/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements = document.querySelectorAll(
    ".section-heading, " +
    ".about-text, " +
    ".about-card, " +
    ".timeline-item, " +
    ".skill-card, " +
    ".project-card, " +
    ".education-card, " +
    ".certifications, " +
    ".organization-card, " +
    ".contact-content"
);


revealElements.forEach((element) => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach((element) => {
    revealObserver.observe(element);
});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navMenu a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 120;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.style.color = "";

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.style.color = "var(--green)";
        }

    });

});


/* =====================================================
   TYPING EFFECT
===================================================== */

const terminalCommand =
    document.querySelector(".command");

if (terminalCommand) {

    const text = " whoami";

    terminalCommand.textContent = "";

    let index = 0;

    function typeCommand() {

        if (index < text.length) {

            terminalCommand.textContent +=
                text.charAt(index);

            index++;

            setTimeout(typeCommand, 100);

        }

    }

    setTimeout(typeCommand, 800);

}


/* =====================================================
   PREVENT EMPTY PROJECT LINKS
===================================================== */

document.querySelectorAll('a[href="#"]').forEach((link) => {

    link.addEventListener("click", (event) => {
        event.preventDefault();
    });

});
