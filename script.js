const image = document.getElementById("myImage");
const button = document.getElementById("changeImageBtn");

// Définir les sources des images
const images = ["image1.jpg", "image2.webp", "image3.jpg", "image4.jpg", "image5.jpeg"];
let currentImageIndex = 0;

// Ajouter un écouteur d'événements au bouton
button.addEventListener("click", () => {
    // Passer à l'image suivante
    currentImageIndex = (currentImageIndex + 1) % images.length;
    // Changer la source de l'image
    image.src = images[currentImageIndex];
});