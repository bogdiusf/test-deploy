import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

//Initializare Player utilizand id-ul clipului

const playerContainer = document.getElementById('vimeo-player');
const player = new Player(playerContainer, { id: 236203659 });

// Salvarea datelor in localstorage, cat si utilizarea metodei on()

player.on(
  'timeupdate',
  throttle(data => {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

const storedTime = localStorage.getItem('videoplayer-current-time');

if (storedTime) {
  player.setCurrentTime(storedTime);
}