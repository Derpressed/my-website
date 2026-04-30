class Food {
    constructor(element) {
        this.element = element;
        // 2x2 collision
        const styles = window.getComputedStyle(this.element);

        this.xOrigin = parseInt(styles.left);
        this.yOrigin = parseInt(styles.top);

        this.height = this.element.offsetHeight;
        this.width = this.element.offsetWidth;
    }

    getCoords() {
        return [this.height, this.width, this.xOrigin, this.yOrigin];
    }
    
    output() {
        console.log(this.height + " " + this.width + " " +  this.xOrigin + " " + this.yOrigin);
    }
}