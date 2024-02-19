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
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check match or not
    if (playerPressed === expectedAlphabet) {
        console.log('you get a point');
        // update score
        // 1. get the current score
        const currentScoreElement= document.getElementById('current-score');
        const currentScoreText =currentScoreElement.innerText;
        const currentScore=parseInt(currentScoreText);
        console.log(currentScore);

        // increase the score by 1
        const newScore= currentScore + 1;
        // show the update score
        currentScoreElement.innerText = newScore;
        // start a new round



        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('you missed. and you lost a life');
        // step-1: get the current life number
        const currentLifeElement =document.getElementById('current-life');
        const currentLifeText =currentLifeElement.innerText;
        const lifeCount = parseInt(currentLifeText);

        //step-2: reduce the life count
        const newLife = lifeCount-1;
        // step-3: update the life score
        currentLifeElement.innerText =newLife;
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
    // console.log('random alphabet:', alphabet);
}



function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}