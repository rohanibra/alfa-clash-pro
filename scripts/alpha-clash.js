// function play(){
// //    step 1: hide the home screen to hide the screen add the class to the home section.
// const homeSection=document.getElementById('home-screen');
// homeSection.classList.add('hidden')
// // play ground
// const playGroundSection=document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');
// }
function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // set random generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
}



function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}