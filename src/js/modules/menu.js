function menu(triggerSelector, menuModal, closeTrigger) {
  const trigger = document.querySelector(triggerSelector),
    menu = document.querySelector(menuModal),
    closeMenu = document.querySelectorAll(closeTrigger);

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.top = "0";
    document.body.style.cssText = `overflow: hidden;`;
  });

  closeMenu.forEach(item => item.addEventListener('click', (e) => {
    e.preventDefault();
    menu.style.top = "-100%";
    document.body.style.cssText = `overflow: auto;`;
  }));

}

export default menu;