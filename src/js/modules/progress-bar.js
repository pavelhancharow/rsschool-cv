function progressBar() {
  const progressBar = document.querySelector('.progress-bar');

  document.addEventListener('scroll', () => {

    let screenHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      screenScroll = document.documentElement.scrollTop || document.body.scrollTop;
    progressBar.style.width = `${screenScroll / screenHeight * 100}%`;
  });

}

export default progressBar;