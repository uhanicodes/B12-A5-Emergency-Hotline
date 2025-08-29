document.getElementById("heart1").addEventListener('click', (e) => {
    // e.preventDefault();
    let heart = document.getElementById("heart-count");
    let numHeart = parseInt(heart.innerText);
    
    numHeart++;

    heart.innerText = numHeart;
})

document.getElementById("copy1").addEventListener('click', (e) => {
    // e.preventDefault();
    
    // copy to clipboard;

    navigator.clipboard.writeText(document.getElementById("hotline1").innerText)
        .then(result => {
            alert("Copy successful!");
            
            let copy = document.getElementById("count-copy");
            let numCopy = parseInt(copy.innerText);
    
            numCopy++;

            copy.innerText = numCopy;
        }) 
        .catch(reason => {
            alert("Copy is not successful!");
        })

})