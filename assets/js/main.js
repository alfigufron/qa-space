const btnToggle = document.getElementById('btn-toggle');
const navContent = document.getElementById('nav-content');

// Resize Screen
window.addEventListener('resize', function () {
  sidebarSizeScreen();
});

btnToggle.addEventListener('click', function () {
  navContent.classList.toggle('mobile-toggled');
})

function sidebarSizeScreen() {
  const width = window.innerWidth;

  if (width > 1200) {
    navContent.classList.remove('mobile-toggled');
  }
}