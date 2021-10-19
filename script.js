class Drumkit {
    constructor() {
        this.pads = document.querySelectorAll('.pad');
        this.kickAudio = document.querySelectorAll('.kick-sound');
        this.snareAudio = document.querySelectorAll('.snare-sound');
        this.hihatAudio = document.querySelectorAll('.hihat-sound');
        this.index = 0;
    }
    repeat() {
        let step = this.index % 8;
    }
}