document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "/img/bg.jpg",
        "/img/iceland1.jpg",
        "/img/iceland2.jpg",
        "/img/iceland3.jpg",
        "/img/iceland4.jpg",
        "/img/iceland5.jpg",
        "/img/iceland6.jpg",
        "/img/iceland7.jpg",
        "/img/iceland8.jpg",
        "/img/iceland9.jpg",
        "/img/iceland10.jpg",
        "/img/iceland11.jpg",
        "/img/iceland12.jpg",
    ];

    let currentIndex = 0;

    function changeBackground() {
        document.body.style.background = `url('${images[currentIndex]}') no-repeat center center fixed`;
        document.body.style.backgroundSize = "cover";

        currentIndex = (currentIndex + 1) % images.length;
    }

    changeBackground();
    setInterval(changeBackground, 5000);
});
// 自動輪播 - fail