var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var icon = document.getElementById("icon");


menuIcon.onclick = function(){
    var sidebar = document.querySelector(".sidebar");
  var container = document.querySelector(".container");


    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container"); 
}
icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        menuIcon.style.filter = "invert(100%) brightness(10000%)"; 
        icon.src = "images/sun.png";
        
    } else{
        menuIcon.style.filter = "none"; 
        icon.src = "images/moon.png";
        

    }

}
/* ---------------------Draggable Slider Tabs ------------------------ */

const tab = document.querySelector('.tabs');
const badges = tab.querySelectorAll('.tab');
const icons = document.querySelectorAll('.icon span');
const { clientWidth, scrollWidth } = tab;

badges.forEach(badge => {
  badge.addEventListener('click', () => {
    tab.querySelector('.active').classList.remove('active');
    badge.classList.add('active');

    badge.scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    });
  });
});

icons.forEach(icon => {
  icon.addEventListener('click', () => {
    tab.style.scrollBehavior = 'smooth';
    tab.scrollLeft += icon.classList.contains('right-arrow') ? 300 : -300;
  });
});

tab.addEventListener('scroll', (e) => {
  updateIcons(e.target.scrollLeft);
});

tab.addEventListener('wheel', (e) => {
  tab.style.scrollBehavior = 'auto';
  tab.scrollLeft += e.deltaY;
});

function updateIcons(scrolledWidth) {
  icons[0].parentElement.classList.toggle('hide', scrolledWidth <= 1);
  icons[1].parentElement.classList.toggle('hide', scrolledWidth >= (scrollWidth - clientWidth - 1));
}
// Replacing video (now working the code)
function changeMainVideo(src, title) {
  let mainVideo = document.getElementById('.play-video .video');
  let videoSource = document.getElementById('.right-sidebar .img');
  let videoTitle = document.getElementById('.vid-info .title');
  
  videoSource.src = src;
  mainVideo.load();
  videoTitle.innerHTML = title;
}