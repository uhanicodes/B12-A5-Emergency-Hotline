let clickEventHandler = (e) => {
    // e.preventDefault();
    let heart = document.getElementById("heart-count");
    let numHeart = parseInt(heart.innerText);
    
    numHeart++;

    heart.innerText = numHeart;
}

document.getElementById("heart1").addEventListener('click', clickEventHandler);
document.getElementById("heart2").addEventListener('click', clickEventHandler);
document.getElementById("heart3").addEventListener('click', clickEventHandler);
document.getElementById("heart4").addEventListener('click', clickEventHandler);
document.getElementById("heart5").addEventListener('click', clickEventHandler);
document.getElementById("heart6").addEventListener('click', clickEventHandler);


let copyEventHandler = (e) => {
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

}

document.getElementById("copy1").addEventListener('click', copyEventHandler)
document.getElementById("copy2").addEventListener('click', copyEventHandler)
document.getElementById("copy3").addEventListener('click', copyEventHandler)
document.getElementById("copy4").addEventListener('click', copyEventHandler)
document.getElementById("copy5").addEventListener('click', copyEventHandler)
document.getElementById("copy6").addEventListener('click', copyEventHandler)

document.getElementById("call1").addEventListener('click', (e) => {

    alert(e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText + " " + 
        e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText)

    let coins = document.getElementById("coin-count");
    let numCoin = parseInt(coins.innerText);

    if (coins.innerText == "0") {
        alert("Insufficient coins!");
        return;
    }

    coins.innerText = Math.max(numCoin - 20, 0);

    // call history;

    let newDiv = document.createElement("div");

    newDiv.setAttribute("class", "flex justify-between")

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    newDiv.innerHTML = `<div>\
                            <p>${e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText}</p>\
                            <p>${e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText}</p>\
                        </div>\
                    <time datetime="">${timeString}</time>`;
    let callHistory = document.getElementById("call-history");
    callHistory.appendChild(newDiv);
})

document.getElementById("clear").addEventListener('click', (e) => {
    document.getElementById('call-history').innerHTML = '';
})