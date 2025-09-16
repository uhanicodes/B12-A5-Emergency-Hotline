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
document.getElementById("heart7").addEventListener('click', clickEventHandler);
document.getElementById("heart8").addEventListener('click', clickEventHandler);
document.getElementById("heart9").addEventListener('click', clickEventHandler);


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
document.getElementById("copy7").addEventListener('click', copyEventHandler)
document.getElementById("copy8").addEventListener('click', copyEventHandler)
document.getElementById("copy9").addEventListener('click', copyEventHandler)

let processCall = (serviceName, phone) => {

    // let serviceName = e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    // let phone = e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    
    alert(serviceName + " " + phone);

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

    newDiv.innerHTML = `<div class="flex justify-between w-full rounded-lg px-[4px] py-[4px] bg-gray-200 mt-[2px] mb-[2px]">\    
                            <div>\
                                <p>${serviceName}</p>\
                                <p>${phone}</p>\
                            </div>\
                            <time datetime="">${timeString}</time>\
                        </div>    
                        `;
    let callHistory = document.getElementById("call-history");
    callHistory.appendChild(newDiv);
}

let callEventHandler = (e) => {

    processCall(e.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText, 
        e.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText);

}

document.getElementById("call1").addEventListener('click', callEventHandler);
document.getElementById("call2").addEventListener('click', callEventHandler);
document.getElementById("call3").addEventListener('click', callEventHandler);
document.getElementById("call4").addEventListener('click', callEventHandler);
document.getElementById("call5").addEventListener('click', callEventHandler);
document.getElementById("call6").addEventListener('click', callEventHandler);
document.getElementById("call7").addEventListener('click', callEventHandler);
document.getElementById("call8").addEventListener('click', callEventHandler);
document.getElementById("call9").addEventListener('click', callEventHandler);

let callFromIcon = (e) => {
    e.stopPropagation();
    console.log("Call From Icon!");
    processCall(e.target.parentNode.parentNode.parentNode.childNodes[3].childNodes[1].innerText, 
        e.target.parentNode.parentNode.parentNode.childNodes[5].childNodes[1].innerText);
}

let callIcons = document.querySelectorAll(".call-icon");

callIcons.forEach(element => {
    element.addEventListener('click', callFromIcon);
})

document.getElementById("clear").addEventListener('click', (e) => {
    document.getElementById('call-history').innerHTML = '';
})