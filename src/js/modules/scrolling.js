function scrolling(upSelector, header) {
  const upElem = document.querySelector(upSelector),
    nav = document.querySelector(header);

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
      nav.classList.add('opacity1');
      nav.classList.remove('opacity0');
    } else {
      nav.classList.add('opacity0');
      nav.classList.remove('opacity1');
    }

    if (document.documentElement.scrollTop > 350) {
      upElem.classList.add('fadeIn');
      upElem.classList.remove('fadeOut');
    } else {
      upElem.classList.add('fadeOut');
      upElem.classList.remove('fadeIn');
    }



  });

  let links = document.querySelectorAll('[href^="#"]'),
    speed = 0.2;

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      let widthTop = document.documentElement.scrollTop,
        hash = this.hash,
        toBlock = document.querySelector(hash).getBoundingClientRect().top,
        start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start,
          r = (toBlock < 0) ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock);

        document.documentElement.scrollTo(0, r);

        if (r != widthTop + toBlock) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash;
        }
      }
    });
  });
}

export default scrolling;