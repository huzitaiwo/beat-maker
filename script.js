class Drumkit {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.playBtn = document.querySelector('.play');
        this.playIcon = document.querySelector('.play i');
        this.currentKick = '.sounds/kick-classic.wav';
        this.currentSnare = '.sounds/snare-acoustic01.wav';
        this.currentHihat = '.sounds/hihat-acoustic01.wav';
        this.kickAudio = document.querySelector('.kick-sound');
        this.snareAudio = document.querySelector('.snare-sound');
        this.hihatAudio = document.querySelector('.hihat-sound');
        this.index = 0;
        this.bpm = 150;
        this.isPlaying = null;
        this.selects = document.querySelectorAll('select');
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
        // check if its playing 
        if(!this.isPlaying) {
            this.isPlaying = setInterval(() =>{
                this.repeat()
            }, interval);
        } else {
            // clearInterval
            clearInterval(this.isPlaying);
            this.isPlaying = null;
        }
    }
    updateButton() {
        if(!this.isPlaying) {
            this.playIcon.classList.add('fa-pause');
            this.playIcon.classList.remove('fa-play');
            this.playBtn.classList.add('active');
        } else {
            this.playIcon.classList.add('fa-play');
            this.playIcon.classList.remove('fa-pause');
            this.playBtn.classList.remove('active');
        }
    }
    changeSound(e) {
        const selectionName = e.target.name;
        const selectionValue = e.target.value;
        switch(selectionName) {
            case 'kick-select':
                this.kickAudio.src = selectionValue;
                break;
            case 'snare-select':
                this.snareAudio.src = selectionValue;
                break;
            case 'hihat-select':
                this.hihatAudio.src = selectionValue;
                break;
        }
    }
}

const drumkit = new Drumkit();

// Eventlisteners

drumkit.pads.forEach(pad => {
    pad.addEventListener('click', drumkit.activePad);
    pad.addEventListener('animationend', function () {
        this.style.animation = '';
    });
});

drumkit.playBtn.addEventListener('click', () => {
    drumkit.updateButton();
    drumkit.start();
});

drumkit.selects.forEach(select => {
    select.addEventListener('change', function(e) {
        drumkit.changeSound(e);
    })
});