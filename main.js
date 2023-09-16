const takeCanvas = document.querySelector(".main-canvas");
takeCanvas.width = window.innerWidth;
takeCanvas.height = window.innerHeight;


const condition = takeCanvas.getContext("2d");
const frameCount = 300;

const currentFrame = (index) => `./Blender/photos/${(index + 1).toString()}.jpg`
const images = [];
let ball = {frame: 0}

for(let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i)
    images.push(img);
}
console.log(images);

gsap.to(ball, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        scrub: true,
        pin: "canvas",
        end: "900%"
    },
    onUpdate: display,
})

gsap.fromTo("#position-contact",
    {opacity: 0},
    {opacity: 1, scrollTrigger: {
    scrub: true,
    start: "85%",
    end: "95%"
    },
    onComplete: () => {
        gsap.to("#position-contact", {opacity: 0})
    }
}) 


images[0].onload = display;

function display() {
    condition.clearRect(0, 0, takeCanvas.width, takeCanvas.height);
    const img = images[ball.frame];
    const aspectRatio = img.width / img.height;
  
    let imgWidth = takeCanvas.width;
    let imgHeight = takeCanvas.width / aspectRatio;
  
    if (imgHeight < takeCanvas.height) {
      imgHeight = takeCanvas.height;
      imgWidth = takeCanvas.height * aspectRatio;
    }
  
    const x = (takeCanvas.width - imgWidth) / 2;
    const y = (takeCanvas.height - imgHeight) / 2;

    condition.drawImage(img, x, y, imgWidth, imgHeight);
}

window.addEventListener('scroll', function () {
    const textElement = document.getElementById("scroll-text");
    const scrolIcon = document.querySelector(".field-scroll")
    const scrollPosition = window.pageYOffset;
    if(scrollPosition > 50) {
        textElement.style.display = 'none';
        scrolIcon.style.display = 'none';
    }
    else if(scrollPosition == 0) {
        textElement.style.display = 'inline-block';
        scrolIcon.style.display = 'flex';
    }
});