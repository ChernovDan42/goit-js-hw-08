
import Player from '@vimeo/player';
var _ = require('lodash')


const player = new Player('vimeo-player', {
    id: 19231868,
    width: 640
});


const onPlay = function (data) {
    console.log(data);
    
    localStorage.setItem("videoplayer-current-time",JSON.stringify(data.seconds))
};


player.on('timeupdate',_.throttle(onPlay,1000));


const currentTimeVideo = Number(localStorage.getItem("videoplayer-current-time"));
console.log(currentTimeVideo);


player.setCurrentTime(currentTimeVideo).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});