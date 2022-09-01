export default function Controls({
  buttonLightMode,
  buttonDarkMode,
  timerTheme,
  buttonCardA,
  buttonCardB,
  buttonCardC,
  buttonCardD
}) {
  function setLightMode() {
    buttonLightMode.classList.add('hide')
    buttonDarkMode.classList.remove('hide')
    timerTheme.classList.add('dark')
    buttonCardA.classList.add('dark')
    buttonCardB.classList.add('dark')
    buttonCardC.classList.add('dark')
    buttonCardD.classList.add('dark')
  }

  function setDarkMode() {
    buttonLightMode.classList.remove('hide')
    buttonDarkMode.classList.add('hide')
    timerTheme.classList.remove('dark')
    buttonCardA.classList.remove('dark')
    buttonCardB.classList.remove('dark')
    buttonCardC.classList.remove('dark')
    buttonCardD.classList.remove('dark')
  }

  function selectCardA() {
    buttonCardA.classList.add('selected')
    buttonCardB.classList.remove('selected')
    buttonCardC.classList.remove('selected')
    buttonCardD.classList.remove('selected')
  }

  function selectCardB() {
    buttonCardA.classList.remove('selected')
    buttonCardB.classList.add('selected')
    buttonCardC.classList.remove('selected')
    buttonCardD.classList.remove('selected')
  }

  function selectCardC() {
    buttonCardA.classList.remove('selected')
    buttonCardB.classList.remove('selected')
    buttonCardC.classList.add('selected')
    buttonCardD.classList.remove('selected')
  }

  function selectCardD() {
    buttonCardA.classList.remove('selected')
    buttonCardB.classList.remove('selected')
    buttonCardC.classList.remove('selected')
    buttonCardD.classList.add('selected')
  }

  return {
    setLightMode,
    setDarkMode,
    selectCardA,
    selectCardB,
    selectCardC,
    selectCardD
  }
}
