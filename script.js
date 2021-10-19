class Drumkit {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play');
        this.kickAudio = document.querySelectorAll('.kick-sound');
        this.snareAudio = document.querySelectorAll('.snare-sound');
        this.hihatAudio = document.querySelectorAll('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
    }
    activePad() {
        this.classList.toggle('active');
    }
    repeat() {
        let step = this.index % 8;
        this.index++;
        const activeBars = document.querySelectorAll(`.b${step}`);
        // console.log(step);
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
})

drumkit.playBtn.addEventListener('click', () => {
    drumkit.start();
})