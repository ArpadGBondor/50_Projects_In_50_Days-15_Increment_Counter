const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';
  const tickTime = 10; //ms
  const countingTime = 1850; //ms

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const c = +counter.innerText;
    const increment = target / (countingTime / tickTime);

    if (Math.ceil(c + increment) < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, tickTime);
    } else {
      counter.innerText = `${target}`;
    }
  };

  updateCounter();
});
