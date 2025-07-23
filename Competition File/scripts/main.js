//run functions

// imports closed

function clearFront() {
    document.querySelector('.side-left').style.animation = 'right 4s ease';
    document.querySelector('.side-right').style.animation = 'right 4s ease';
    setTimeout(() => {
        document.querySelector('.explore').style.width = '310px';
    }, 400);

    setTimeout(() => {
        document.querySelector('.text').style.visibility = 'hidden';
        document.querySelector('.text-fly').style.visibility = 'hidden';
        document.querySelector('.img-section').style.visibility = 'hidden';
        document.querySelector('.page-marquee').style.visibility = 'hidden';
        document.querySelector('.pg-mar').style.visibility = 'hidden';
    }, 1200);
    setTimeout(() => {
        document.body.style = "overflow-y: scroll";
        document.querySelector('.sliding-opening-function').style.visibility = 'hidden';
    }, 3000);
}


function pop() {
    document.querySelector('.text-fly').style.visibility = 'visible'
    }


    // This is for the main page scripting.



function homeSetting() {
    document.querySelector('.content-main').style.visibility = 'visible';
}

function abouts() {
    document.body.style.backgroundColor = 'white';
    
    document.querySelector('.content-main').style.visibility = 'hidden';
     document.querySelector('.content-about').style.visibility = 'visible';

}

function homes() {
    document.body.style.backgroundColor = 'rgb(45, 45, 117)';

     document.querySelector('.content-about').style.visibility = 'hidden';
     document.querySelector('.content-main').style.visibility = 'visible';
}

document.querySelector('.img-5')
    .addEventListener('click', () => {
    pop();
});
document.querySelector('.explore')
    	.addEventListener('click', () => {
    clearFront();
});


document.querySelector('.about-function').addEventListener('click', () => { abouts(); });
document.querySelector('.home-function').addEventListener('click', () => { homes(); });


// click function


const st_button = document.querySelector('.tImage');
const hid_button = document.querySelector('.fun');
let bo_lean = false;

st_button.addEventListener('click', () => {

    if(!bo_lean) {
        hid_button.style.display = 'inherit';
        bo_lean = true;
        st_button.src = 'icons/arrow.png';
    } else {
        hid_button.style.display = 'none';
        bo_lean = false;
        st_button.src = './icons/icons8-code-24.png';
    }

});