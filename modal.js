const arrImg = new Array();

for (i = 0; i < 9; i++) {
    arrImg[i] = "#img" + i;
}

// for(i = 0; i <arrImg.length; i++) {
//     console.log(arrImg[i]);
// }


const openButton = document.querySelectorAll(arrImg);
console.log(openButton);
const modal = document.querySelector(".modal");
const closeButton = document.querySelector("button");
const modalOverlay = document.querySelector(".modal_overlay");
const modalText = document.querySelector(".modal_text");

const openModal = (event) => {
    switch (event.target.id) {
        case 'img0':
            modalText.innerHTML = "아워네이션";
            break;
        case 'img1':
            modalText.innerHTML = "1집";
            break;
        case 'img2':
            modalText.innerHTML = "2집";
            break;
        case 'img3':
            modalText.innerHTML = "3집";
            break;
        case 'img4':
            modalText.innerHTML = "4집";
            break;
        case 'img5':
            modalText.innerHTML = "5집";
            break;
        case 'img6':
            modalText.innerHTML="6집";
            break; 
        case 'img7':
            modalText.innerHTML="7집";
            break;  
        case 'img8':
            modalText.innerHTML="8집";
            break; 
    }
    modal.classList.remove("hidden");
}

const closeModal = () => {
    modal.classList.add("hidden");
}

for (i = 0; i < openButton.length; i++) {
    openButton[i].addEventListener("click", openModal);
    console.log();
}
modalOverlay.addEventListener("click", closeModal);
closeButton.addEventListener("click", closeModal);