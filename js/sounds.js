import {
  forestVolume,
  rainVolume,
  coffeeShopVolume,
  fireVolume,
  buttonCardA,
  buttonCardB,
  buttonCardC,
  buttonCardD
} from './elements.js'

export default function () {
  const buttonPressAudio = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
  )
  const kitchenTimer = new Audio(
    'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true'
  )

  const forestSound = new Audio('./sounds/forestSound.wav')
  const rainSound = new Audio('./sounds/rainSound.wav')
  const coffeeShopSound = new Audio('./sounds/coffeeShopSound.wav')
  const fireSound = new Audio('./sounds/fireSound.wav')

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  buttonCardA.addEventListener('click', function () {
    cardASound()
    pressButton()
  })

  buttonCardB.addEventListener('click', function () {
    cardBSound()
    pressButton()
  })

  buttonCardC.addEventListener('click', function () {
    cardCSound()
    pressButton()
  })

  buttonCardD.addEventListener('click', function () {
    cardDSound()
    pressButton()
  })

  function cardASound() {
    forestSound.play()
    rainSound.pause()
    coffeeShopSound.pause()
    fireSound.pause()
  }

  function cardBSound() {
    forestSound.pause()
    rainSound.play()
    coffeeShopSound.pause()
    fireSound.pause()
  }

  function cardCSound() {
    forestSound.pause()
    rainSound.pause()
    coffeeShopSound.play()
    fireSound.pause()
  }

  function cardDSound() {
    forestSound.pause()
    rainSound.pause()
    coffeeShopSound.pause()
    fireSound.play()
  }

  forestVolume.addEventListener('input', function () {
    forestSound.volume = forestVolume.value
  })

  rainVolume.addEventListener('input', function () {
    rainSound.volume = rainVolume.value
  })

  coffeeShopVolume.addEventListener('input', function () {
    coffeeShopSound.volume = coffeeShopVolume.value
  })

  fireVolume.addEventListener('input', function () {
    fireSound.volume = fireVolume.value
  })

  return {
    pressButton,
    timeEnd,
    cardASound,
    cardBSound,
    cardCSound,
    cardDSound
  }
}
