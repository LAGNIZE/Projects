class Weapon {
    constructor(left, top) {
        let divElem = document.createElement('div');
        divElem.className = "weapon";
        document.body.append(divElem);
        this.dom = divElem;
        this.dom.style.left = left;
        this.dom.style.top = top;   
    }
}


