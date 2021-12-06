let randomNumber1 = Math.ceil(Math.random() * 6)
// console.log(randomNumber1)

let randomDiceImage = 'dice' + randomNumber1 + '.jpg'

let randomImageSource = 'images/' + randomDiceImage

let image1 = document.querySelectorAll('img')[0]
image1.setAttribute('src', randomImageSource)

// for player 2

let randomNumber2 = Math.ceil(Math.random() * 6)

let randomDiceImage2 = 'dice' + randomNumber2 + '.jpg'

let randomImageSource2 = 'images/' + randomDiceImage2

let image2 = document.querySelectorAll('img')[1]
image2.setAttribute('src', randomImageSource2)

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = 'Player1 wins🎈'
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = 'Player2 wins🎈'
} else {
  document.querySelector('h1').innerHTML = 'Draw👬'
}
