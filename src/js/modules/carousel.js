function carousel() {
  const slider = document.querySelector('.skills-list'),
    slides = slider.querySelectorAll('.skills-list__item'),
    sliderMain = document.querySelector('.skills-wrapper'),
    arrowLeft = sliderMain.querySelector('#arrow-left'),
    arrowRight = sliderMain.querySelector('#arrow-right');

  sliderMain.style.cssText = `position: relative; overflow: hidden; padding: 0 8px;`;

  let position = 0,
    slidesToShow = 0,
    widthSlide = 0,
    infinite;

  const resizeScreen = () => {
    slidesToShow = 10;
    widthSlide = Math.floor(100 / slidesToShow);

    if (screen.width <= 1200 && screen.width > 991) {
      slidesToShow = 9;
      widthSlide = Math.floor(100 / slidesToShow);
    } else if (screen.width <= 991 && screen.width > 676) {
      slidesToShow = 7;
      widthSlide = Math.floor(100 / slidesToShow);
    } else if (screen.width <= 676 && screen.width > 540) {
      slidesToShow = 5;
      widthSlide = Math.floor(100 / slidesToShow);
    } else if (screen.width <= 540 && screen.width > 420) {
      slidesToShow = 4;
      widthSlide = Math.floor(100 / slidesToShow);
    } else if (screen.width <= 420) {
      slidesToShow = 3;
      widthSlide = Math.floor(100 / slidesToShow);
    }

    slides.forEach(slide => slide.style.cssText = `flex: 0 0 ${widthSlide}%;`);

    arrowLeft.addEventListener('click', () => {
      if (infinite || position > 0) {
        --position;

        if (position < 0) {
          position = slides.length - slidesToShow;
        }

        slider.style.transform = `translateX(-${position * widthSlide}%)`;
      }
    });

    arrowRight.addEventListener('click', () => {
      if (infinite || position < slides.length - slidesToShow) {
        ++position;

        if (position >= slides.length - slidesToShow) {
          position = 0;
        }

        slider.style.transform = `translateX(-${position * widthSlide}%)`;
      }
    });
  };
  resizeScreen();
  window.addEventListener('resize', () => resizeScreen());
}

export default carousel;