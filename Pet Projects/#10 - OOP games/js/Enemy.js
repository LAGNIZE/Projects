class Enemy {
    constructor(race, name, left, top) {
        let divElem = document.createElement('div');
        divElem.className = "enemy";
        document.body.append(divElem);
        this.dom = divElem;
        this.race = race;
        this.name = name;
        this.dom.style.left = left;
        this.dom.style.top = top;   
    }
}

/*class Enemy {
    constructor(race, name, left, top) {
        document.querySelector('.world').innerHTML += `
        <div class="enemy">

        </div>
        `;
        this.dom = document.querySelector('.enemy:last-child');
        this.race = race;
        this.name = name;
        this.dom.style.left = left;
        this.dom.style.top = top;   
    }
}*/

