class Player {
    constructor(race, name) {
        document.querySelector('.world').innerHTML += `
        <div class="player">

        </div>
        `;
        this.dom = document.querySelector('.player');
        this.race = race;
        this.name = name;
        this.left = 0;      
        this.top = 0;
    }
    goLeft() {
        if (this.left - 50 >= 0) {
            this.left = this.left - 50;
            this.dom.style.left = this.left + "px";
            this.dom.style.transform = "rotateY(180deg)"
        }
    }
    goRight() {
        if (this.left + 50 < parseInt(document.querySelector('.world').style.width)) {
            this.left = this.left + 50;
            this.dom.style.left = this.left + "px";
            this.dom.style.transform = "rotateY(0deg)"
        }
    }
    goUp() {
        if (this.top - 50 >= 0) {
            this.top = this.top - 50;
            this.dom.style.top = this.top + "px";
        }
    }
    goDown() {
        if (this.top + 50 < parseInt(document.querySelector('.world').style.height)) {
            this.top = this.top + 50;
            this.dom.style.top = this.top + "px";
        }
    }
}