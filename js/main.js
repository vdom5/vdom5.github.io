console.log("test")


$(".main-slider").vegas({
    delay: 10000,
    transition: 'zoomOut',
    transitionDuration: 3000,
    slides: [
        { src: "img/DSC01555.JPG" },
        { src: "img/DSC01562.JPG" },
        { src: "img/DSC01569.JPG" },
        { src: "img/IMG-20200105-WA0004.jpg" },
        { src: "img/IMG-20200105-WA0006.jpg" }        
           
    ]
});