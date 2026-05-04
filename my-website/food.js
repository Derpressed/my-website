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

    static addFood() {
        let newElement = document.createElement("div");
        newElement.classList.add("food");
        boundaryDiv.appendChild(newElement);
        
        let temp = new Food(newElement);
        temp.setCoords();
        return temp;
    }

    setCoords() {

        this.boundHeight = boundaryDiv.clientHeight;
        this.boundWidth = boundaryDiv.clientWidth;

        let newPosX = Math.random() * (this.boundWidth - this.element.offsetWidth); 
        let newPosY = Math.random() * (this.boundHeight - this.element.offsetHeight);

        this.element.style.top = newPosY + "px";
        this.element.style.left = newPosX + "px";

        this.xOrigin = newPosX;
        this.yOrigin = newPosY;
    }

    getCoords() {
        return [this.height, this.width, this.xOrigin, this.yOrigin];
    }
    
    output() {
        console.log(this.height + " " + this.width + " " +  this.xOrigin + " " + this.yOrigin);
    }

}