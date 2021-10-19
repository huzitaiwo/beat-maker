class Drumkit {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play');
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
    }
    activePad() {
        this.classList.toggle('active');
    }
    repeat() {
        let step = this.index % 8;
        this.index++;
        const activePads = document.querySelectorAll(`.b${step}`);
        // loop throught the bars
        activePads.forEach(pad => {
            pad.style.animation = 'playTrack 0.3s alternate ease-in-out 2';
            // check if pads are active
            if (pad.classList.contains('active')) {
                // chech each sound 
                if (pad.classList.contains('kick-pad')) {
                    this.kickAudio.currentTime = 0;
                    this.kickAudio.play();
                }
                if (pad.classList.contains('snare-pad')) {
                    this.snareAudio.currentTime = 0;
                    this.snareAudio.play();
                }
                if (pad.classList.contains('hihat-pad')) {
                    this.hihatAudio.currentTime = 0;
                    this.hihatAudio.play();
                }
            }
        });
    }
    start() {
    // console.log(this);
        const interval = (60/this.bpm) * 1000;
        setInterval(() => this.repeat() , interval);
    }
}

const drumkit = new Drumkit();

drumkit.pads.forEach(pad => {
    pad.addEventListener('click', drumkit.activePad);
    pad.addEventListener('animationend', function () {
        this.style.animation = '';
    })
})

drumkit.playBtn.addEventListener('click', () => {
    drumkit.start();
})