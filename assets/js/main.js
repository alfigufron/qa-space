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


const buttonLike = document.getElementById('like');

buttonLike.addEventListener('click', function (e) {
  e.preventDefault();
  
  const icon = buttonLike.children[0];

  if (buttonLike.classList.contains('liked')) {
    buttonLike.classList.remove('liked');
    icon.src = './assets/img/icon/heart.svg'
  } else {
    buttonLike.classList.add('liked');
    icon.src = './assets/img/icon/heart-red.svg'
  }

  console.log(icon.src);
})