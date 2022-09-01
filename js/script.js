import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'

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
  buttonCardD,
  timerTheme,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

const controls = Controls({
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  buttonLightMode,
  buttonDarkMode,
  buttonCardA,
  buttonCardB,
  buttonCardC,
  buttonCardD,
  timerTheme
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

const sound = Sound()

Events({ controls, timer, sound })
