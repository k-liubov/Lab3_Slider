
let imgs = [{
  url: 'images/slide1.png',
  title: `Rostov-on-Don, Admiral`,
  city: `Rostov-on-Don
  LCD admiral`,
  area: '81',
  time: '3.5'
},
{
  url: 'images/slide2.png',
  title: `Sochi Thieves`,
  city: `Sochi
  Thieves`,
  area: '105',
  time: '4'
}, {
  url: 'images/slide3.png',
  title: `Rostov-on-Don Patriotic`,
  city: `Rostov-on-Don
  Patriotic`,
  area: '93',
  time: '3'
}];

function initSlider() {
  
  if (!imgs || !imgs.length) return;
  
  let sliderImages = document.querySelector(".images");
  let sliderArrow = document.querySelector(".arrowsSlider");
  let sliderDots = document.querySelector(".dots");
  let sliderNav = document.querySelector('.list2');
  let sliderInfo = document.querySelector('.slider-information');


  initImages();
  initArrows();
  initDots();
  initNav();
  initSliderInfo();

  function initImages() {
    imgs.forEach((image, index) => {
      let imageDiv = `<div class = "image n${index} ${index === 0? "active":""}" style = "background-image: url(${imgs[index].url});" data-index = "${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    })
  };

  function initArrows() {
    sliderArrow.querySelectorAll('.arr').forEach(arrow => {
      arrow.addEventListener('click', function(){
        let curNum = +sliderImages.querySelector('.active').dataset.index;
        let nextNum;
        if (arrow.classList.contains('leftSliderArr')) {
          nextNum = curNum === 0? imgs.length - 1 : curNum - 1;
        } else {
          nextNum = curNum === imgs.length - 1? 0 : curNum + 1; 
        }
        moveSlider(nextNum);
      });
    });
  }
  function initDots() {
    imgs.forEach((image, index) => {
      let dotsDiv = `<div class = "dots-item n${index} ${index === 0? "active":""}" data-index = "${index}"></div>`;
      sliderDots.innerHTML += dotsDiv;
    })
    sliderDots.querySelectorAll('.dots-item').forEach(dot => {
      dot.addEventListener('click', function() {
        moveSlider(this.dataset.index);
      })
    })
  };

function initSliderInfo() {
  imgs.forEach((image, index) => {
    sliderInfo.querySelector('.citySl').innerText = `${imgs[0].city}`;
    sliderInfo.querySelector('.area').innerText = `${imgs[0].area} m2`;
    sliderInfo.querySelector('.rep-time').innerText = `${imgs[0].time} months`;

  })
}
function changeInfo(num) {
  let slideInfo = sliderInfo.querySelector('.citySl').innerText = `${imgs[num].city}`;
  let slideArea = sliderInfo.querySelector('.area').innerText = `${imgs[num].area} m2`;
  let slideTime = sliderInfo.querySelector('.rep-time').innerText = `${imgs[num].time} months`;
}

function initNav() {
  imgs.forEach((image, index) => {
    let navLi = `<li class = "nav-1 a sliderNav n${index} ${index === 0? "active":""}" data-index = "${index}">${imgs[index].title}</li>`;
    sliderNav.innerHTML += navLi;
  })
  sliderNav.querySelectorAll('.sliderNav').forEach(nav => {
    nav.addEventListener('click', function() {
      moveSlider(this.dataset.index);
    })
  })
};

  function moveSlider(num) {
    sliderImages.querySelector('.active').classList.remove('active');
    sliderImages.querySelector('.n' +num).classList.add('active');
    sliderDots.querySelector('.active').classList.remove('active');
    sliderDots.querySelector('.n' + num).classList.add('active');
    sliderNav.querySelector('.active').classList.remove('active');
    sliderNav.querySelector('.n' + num).classList.add('active');
    changeInfo(num);
  };
}
  document.addEventListener("DOMContentLoaded", () =>{
    initSlider();
  });