// ===============================
// TYPING ANIMATION
// ===============================

const typingElement = document.getElementById("typing");

const words = [
    "PPLG Student 💻",
    "Web Developer 🌐",
    "Creative Learner 🎨",
    "Future Programmer 🚀"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typingAnimation() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typingAnimation, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 50 : 100;

    setTimeout(typingAnimation, speed);
}


typingAnimation();



// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(".reveal");


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach((element) => {

    observer.observe(element);

});



// ===============================
// CLICK HEART EFFECT
// ===============================

document.addEventListener("click", function(event) {

    const heart = document.createElement("div");

    heart.innerHTML = "💗";

    heart.style.position = "fixed";

    heart.style.left =
        event.clientX + "px";

    heart.style.top =
        event.clientY + "px";

    heart.style.fontSize = "22px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    heart.style.transform =
        "translate(-50%, -50%)";

    heart.style.transition =
        "all 1s ease";

    document.body.appendChild(heart);


    setTimeout(() => {

        heart.style.transform =
            "translate(-50%, -100px) scale(1.5)";

        heart.style.opacity = "0";

    }, 50);


    setTimeout(() => {

        heart.remove();

    }, 1000);

});



// ===============================
// NAVBAR ACTIVE LINK
// ===============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});