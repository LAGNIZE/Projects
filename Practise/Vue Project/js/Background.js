class Background {
    constructor(width, height, background) {
        this.dom = document.querySelector('body')
        this.dom.style.width = width + 'vw';
        this.dom.style.height = height + 'vh';
        this.dom.style.background = background;
        this.width = width;
        this.height = height;
    }
}