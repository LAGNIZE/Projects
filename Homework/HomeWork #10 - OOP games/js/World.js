class World {
    constructor(width, height, background) {
        document.querySelector('body').innerHTML = `
            <div class="world">

            </div>
        `;
        // нашли объект в вёрстке (через DOM) и записали в свойство dom НАШЕГО ОБЪЕКТА
        this.dom = document.querySelector('.world')
        this.dom.style.width = width + 'px';
        this.dom.style.height = height + 'px';
        this.dom.style.background = background;

        this.width = width;
        this.height = height;
    }
}