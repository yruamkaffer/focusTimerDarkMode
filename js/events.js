import {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonLightMode,
  buttonDarkMode,
  buttonCardA,
  buttonCardB,
  buttonCardC,
  buttonCardD
} from './elements.js'

export default function ({ controls, timer, sound }) {
  buttonPlay.addEventListener('click', function () {
    timer.countdown()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    timer.hold()
    sound.pressButton()
  })

  buttonPlus.addEventListener('click', function () {
    timer.addMinutes()
    sound.pressButton()
  })

  buttonMinus.addEventListener('click', function () {
    timer.decreaseMinutes()
    sound.pressButton()
  })

  buttonLightMode.addEventListener('click', function () {
    controls.setLightMode()
    sound.pressButton()
  })

  buttonDarkMode.addEventListener('click', function () {
    controls.setDarkMode()
    sound.pressButton()
  })

  buttonCardA.addEventListener('click', function () {
    controls.selectCardA()
    sound.pressButton()
  })

  buttonCardB.addEventListener('click', function () {
    controls.selectCardB()
    sound.pressButton()
  })

  buttonCardC.addEventListener('click', function () {
    controls.selectCardC()
    sound.pressButton()
  })

  buttonCardD.addEventListener('click', function () {
    controls.selectCardD()
    sound.pressButton()
  })
}
