// function play(){
// //    step 1: hide the home screen to hide the screen add the class to the home section.
// const homeSection=document.getElementById('home-screen');
// homeSection.classList.add('hidden')
// // play ground
// const playGroundSection=document.getElementById('play-ground');
// playGroundSection.classList.remove('hidden');
// }

function handleKeyBoardPress(e) {
    const playerPressed = e.key;
    console.log('player pressed:', playerPressed);

    // get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet=currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed ,expectedAlphabet);

    // check match or not
    if( playerPressed === expectedAlphabet){
        console.log('you get a point');
    }
    else{
        console.log('you missed. and you lost a life');
    }
}
// capture keyboard key press

document.addEventListener('keyup', handleKeyBoardPress)



function continueGame() {
    // step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // set random generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    setBackgroundColorById(alphabet);
    console.log('random alphabet:', alphabet);
}



function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}