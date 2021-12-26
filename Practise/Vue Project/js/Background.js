class Background {
    constructor(width, height, background) {
        this.dom = document.querySelector('body')
        this.dom.style.width = width + '%';
        this.dom.style.height = height + '%';
        this.dom.style.background = background;
        this.dom.style.backgroundSize = "cover";
        this.width = width;
        this.height = height;
    }
}