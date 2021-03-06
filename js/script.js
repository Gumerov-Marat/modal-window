window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  
  let tab = document.querySelectorAll('.info-header-tab'),
      info = document.querySelector('.info-header'),
      tabContent = document.querySelectorAll('.info-tabcontent');

  
  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  }

  hideTabContent(1);

  
  function showTabCOntent(b) {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }


  info.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('info-header-tab'))

     for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabCOntent(i);
          break;
        }
     }
   });

  //Timer
  let deadline = '2020-07-17';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t / 1000) % 60),
    minutes = Math.floor((t / 1000 / 60) % 60),
    hourse = Math.floor((t / (1000 * 60 * 60)));
  
    return {
      'total': t,
      'hourse': hourse,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function SetClock(id, endtime) {
    let timer = document.getElementById(id);
    let hourse = timer.querySelector('.hours');
    let  minutes = timer.querySelector('.minutes');
    let  seconds = timer.querySelector('.seconds');

    let timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
      let t = getTimeRemaining(endtime);
      hourse.textContent = t.hourse;
      minutes.textContent = t.minutes;
      seconds.textContent = t.seconds;

      if(t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  SetClock('timer', deadline);

  //Modal
  let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.addEventListener('click', function () {
      overlay.style.display = 'block';
      this.classList.add('more-splash');
      document.body.style.overflow = 'hidden';
    });

    close.addEventListener('click', function () {
      overlay.style.display = 'none';
      more.classList.remove('more-splash');
      document.body.style.overflow = '';
    });
});


