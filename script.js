document.getElementById("heart1").addEventListener('click', (e) => {
    // e.preventDefault();
    let heart = document.getElementById("heart-count");
    let numHeart = parseInt(heart.innerText);
    
    numHeart++;

    heart.innerText = numHeart;
})