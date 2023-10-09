// Array cu imagini 
const audiImages = ["images/audidesign1.avif", "images/audidesign2.avif", "images/audidesign3.avif"];
let currentImageIndex = 0;

// Am facut o functie pentru schimbarea imaginii
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % audiImages.length;
    const audiImage = document.getElementById("audi-image");
    audiImage.src = audiImages[currentImageIndex];
}

// Functie pentru a afisa descrierea corespunzatoare imaginii
function updateDescription() {
    const descriptions = [
        "The design philosophy of Audi cars embodies a harmonious blend of innovation, elegance, and performance. At the core of Audi's design ethos is a commitment to progressive, modern aesthetics that evolve with the times while maintaining a timeless appeal.",
        "Audi's design signature often pays tribute to its Quattro heritage, emphasizing the brand's pioneering all-wheel-drive technology. This legacy is integrated into the overall design, creating a balance between dynamic performance and refined luxury.",
        "Advanced LED lighting technology is another hallmark of Audi's design, with intricate daytime running lights and innovative taillight designs that contribute to both style and functionality."
    ];
    const description = document.getElementById("description");
    description.textContent = descriptions[currentImageIndex];
}

// 
updateDescription();


const calcButton = document.getElementById('calcButton'); //selector care obtine elementul HTML cu  atributul 'calcButton' si il stocheaza in variabila calcButton.
const kmInput = document.getElementById('km');
const litriInput = document.getElementById('litri');
const resultDiv = document.getElementById('result');

calcButton.addEventListener('click', () => {  // cand butonul este apasat, codul din interiorul functiei anonime va fi executat.
    const km = parseFloat(kmInput.value); //se extrage valoarea introdusa in campul de introducere pentru kilometri (kmInput) si se converteste intr-un numar folosind parseFloat(). Valoarea rezultata este stocata in variabila km.
    const litri = parseFloat(litriInput.value);

    if (!isNaN(km) && !isNaN(litri) && litri > 0) { // verific valorile introduse, daca atat nr.de km cat si nr. de litrii sunt nr. valide (prin intermediul functiei isNaN() care intoarce nr. false in numere valide), si se asigura ca litri este mai mare decat zero.
        const consum = km / litri;
        resultDiv.textContent = `Fuel consumption efficiency: ${consum.toFixed(2)} km/liter`; //toFixed(2) pentru a afisa numarul cu doua zecimale
    } else {
        resultDiv.textContent = 'Please fill in all fields with correct values.';
    }
});



