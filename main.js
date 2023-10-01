// TAKING CANVAS
const takeCanvas = document.querySelector(".main-canvas");
takeCanvas.width = window.innerWidth;
takeCanvas.height = window.innerHeight;

// SETTING CONTEXT
const context = takeCanvas.getContext("2d");
const frameCounter = 300;

// TAKING THE PHOTO
const actualFrame = (index) => `./Blender/photos/${(index + 1).toString()}.jpg`
// CREATING THE ARRAY FOR PHOTS
const images = [];
let ball = { frame: 0 }

// LOOPING OVER THE IMAGES AND CREATE THE ARRAY WITH ALL IMAGES
for (let i = 0; i < frameCounter; i++) {
    const img = new Image();
    img.src = actualFrame(i)
    images.push(img);
}

// CREATING THE ANIMATION ( INCREASING THE FRAME ON SCROLL)
gsap.to(ball, {
    frame: frameCounter - 1,
    // snap to each image ( 1,2,3,4)
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        // animation based on scroll
        scrub: true,
        pin: "canvas",
        end: "900%"
    },
    onUpdate: display,
})

// CONTACT ME APPEAR WHEN SCROLLING
gsap.fromTo("#position-contact",
    { opacity: 0 },
    {
        opacity: 1, scrollTrigger: {
            scrub: true,
            start: "85%",
            end: "95%"
        },
        // onComplete: () => {
        //     gsap.to("#position-contact", {opacity: 0})
        // }
    })

// FOOTER APPEAR WHEN SCROLLING
gsap.fromTo("#take-footer",
    { opacity: 0 },
    {
        opacity: 1, scrollTrigger: {
            scrub: true,
            start: "85%",
            end: "95%"
        },
        // onComplete: () => {
        //     gsap.to("#take-footer", {opacity: 0})
        // }
    })

// !!!NOT REAL TIME RESPONSIVE!!
images[0].onload = display;

// CREATE THE DISPLAY FUNCTION FOR EACH IMAGE
function display() {
    context.clearRect(0, 0, takeCanvas.width, takeCanvas.height);
    const newImg = images[ball.frame];

    // THIS SECTION WAS ADDED TO ADAPT THE IMAGE TO ALL SCREENS
    const aspectRatio = newImg.width / newImg.height;
    // result of aspect ratio  1.77
    let newImgWidth = takeCanvas.width;
    let newImgHeight = takeCanvas.width / aspectRatio;

    if (newImgHeight < takeCanvas.height) {
        newImgHeight = takeCanvas.height;
        newImgWidth = takeCanvas.height * aspectRatio;
    }

    const x = (takeCanvas.width - newImgWidth) / 2;
    const y = (takeCanvas.height - newImgHeight) / 2;
    // UP HERE 

    // DRAWING THE IMAGES ON X&Y COORDINATES
    context.drawImage(newImg, x, y, newImgWidth, newImgHeight);
}

// SCROLL ICON APPEAR AND DISAPPEAR
window.addEventListener('scroll', function () {
    const textElement = document.getElementById("scroll-text");
    const scrolIcon = document.querySelector(".field-scroll")
    const scrollPosition = window.pageYOffset;
    if (scrollPosition > 50) {
        textElement.style.display = 'none';
        scrolIcon.style.display = 'none';
    }
    else if (scrollPosition == 0) {
        textElement.style.display = 'inline-block';
        scrolIcon.style.display = 'flex';
    }
});