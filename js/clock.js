window.addEventListener('pageshow', () => {
  // target hands
  const secHand = document.querySelector('.sec'),
    minHand = document.querySelector('.min'),
    hrHand = document.querySelector('.hour');

  // define functions
  const setClock = () => {
    const currDate = new Date();
    const secs = currDate.getSeconds() / 60;
    const mins = (secs + currDate.getMinutes()) / 60;
    const hrs = (mins + currDate.getHours()) / 12;

    setRotationValue(secHand, secs);
    setRotationValue(minHand, mins);
    setRotationValue(hrHand, hrs);
  };

  const setRotationValue = (element, rotationValue) => {
    element.style.setProperty('--rotation', rotationValue * 360);
  };

  setClock();
  // run function every second
  setInterval(() => {
    setClock();
  }, 1000);
});
