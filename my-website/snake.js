class Snake {
    
    prevPos = [0, 0];

    constructor(element) {
        this.element = element;

        const styles = window.getComputedStyle(this.element);


        this.initalX = parseInt(styles.left);
        this.initialY = parseInt(styles.top);

        this.x = this.initalX;
        this.y = this.initialY;

        this.dir = 1; // default going down;


        this.height = this.element.offsetHeight;
        this.width = this.element.offsetWidth;
    }
    
    moveChild(x, y) {
        this.element.style.left = x + "px";
        this.element.style.top = y + "px";

        if (this.child != null) {
            this.child.moveChild(this.prevPos[0], this.prevPos[1]);
        }

        const styles = window.getComputedStyle(this.element);

        this.prevPos[0] = parseInt(styles.left);
        this.prevPos[1] = parseInt(styles.top);

        this.element.style.display = "block";
    }

    addChild(snakePart) {
        if (this.child == null) {
            this.child = snakePart;
        } else {
            this.child.addChild(snakePart);
        }
    }

    move() {

        if (this.child != null) {
            this.child.moveChild(this.prevPos[0], this.prevPos[1]);
        }
        

        if (this.dir == 0) {
            this.y -= pixels;

            if ((this.y) <= 0) {
            this.y = (boundaryDiv.clientHeight - this.element.offsetHeight);
            }

            this.element.style.top = this.y + "px";

        } else if (this.dir == 1) {
            this.y += pixels;

            if ((this.y + this.element.offsetHeight) >= boundaryDiv.clientHeight) {
            this.y = 0;
            }

            this.element.style.top = this.y + "px";
            

            
        } else if (this.dir == 2) {
            this.x -= pixels;

            if (this.x <= 0) {
            this.x = (boundaryDiv.clientWidth - this.element.offsetWidth);
            }

            this.element.style.left = this.x + "px";
        } else if (this.dir == 3) {
            this.x += pixels;

            if ((this.x + this.element.offsetWidth) >= boundaryDiv.clientWidth) {
            this.x = 0;
            }

            this.element.style.left = this.x + "px";
        }

        const styles = window.getComputedStyle(this.element);

        this.prevPos[0] = parseInt(styles.left);
        this.prevPos[1] = parseInt(styles.top);
    }

    changeDir(direction) {
        if (direction.toLowerCase() == "left") {
            this.dir = 2;
        } else if (direction.toLowerCase() == "right") {
            this.dir = 3;
        } else if (direction.toLowerCase() == "up") {
            this.dir = 0;
        } else if (direction.toLowerCase() == "down") {
            this.dir = 1;
        }
    }

    reset() {
        this.y = this.initialY;
        this.x = this.initalX;

        this.element.style.top = this.y + "px";
        this.element.style.left = this.x + "px";

        this.dir = 1;
        
        if (this.child != null) {
            this.child.element.remove();
            this.child = null;
        }

        const bodyParts = document.querySelectorAll(".snake-body")
        bodyParts.forEach(part => {
            part.remove();
        });
    }

    ateFood() {
        let newDiv = document.createElement("div");
        newDiv.classList.add("snake-body");
        
        newDiv.style.display = "none";
        boundaryDiv.appendChild(newDiv);
        
        let snakeChild = new Snake(newDiv);
        this.addChild(snakeChild);
    }

    foodCollision(arrFood) {
        const styles = window.getComputedStyle(this.element);
        this.xPos = parseInt(styles.left);
        this.yPos = parseInt(styles.top);
        
        

        for (let i = 0; i < arrFood.length; i++) { 
            
            let foodCoord = arrFood[i].getCoords();
            let foodHeight = foodCoord[0];
            let foodWidth = foodCoord[1];
            let foodXOrigin = foodCoord[2];
            let foodYOrigin = foodCoord[3];
            
            if (
                (this.xPos + this.width) >= (foodXOrigin) && 
                (this.xPos) <= (foodXOrigin + foodWidth) &&
                (this.yPos + this.height) >= (foodYOrigin) &&
                (this.yPos) <= (foodYOrigin + foodHeight)
            ) {
                this.ateFood();
            }
        }   
    }
}