const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.querySelector('.side-menu');

menuBtn.addEventListener('click', () => {
  sideMenu.classList.toggle('active');
});
