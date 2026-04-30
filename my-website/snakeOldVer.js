class Snake {
    
    moveQueue = [];
    children = [];

    prevPos = [0, 0];

    prevDir = 0; // default for now
    changeDirBool = false;

    constructor(element) {
        this.element = element;

        const styles = window.getComputedStyle(this.element);


        this.initalX = parseInt(styles.left);
        this.initialY = parseInt(styles.top);

        this.x = this.initalX;
        this.y = this.initialY;

        this.dir = 1; // default going down;
        this.prevDir = this.dir;
    }
    
    addChild(snakePart) {
        this.child = snakePart;
    }

    childMoveHandler() {
        if (this.changeDirBool == false) {
            this.child.move();
        }
        
        if (this.changeDirBool) {
            
            if (this.dir == 0) {
                this.child.changeDir("up");
            } else if (this.dir == 1) {
                this.child.changeDir("down");
            } else if (this.dir == 2) {
                this.child.changeDir("left");
            } else if (this.dir == 3) {
                this.child.changeDir("right");
            }
            
            
            this.child.move();
            this.changeDirBool = false;
        }
    }
    
    changedDir() {
        if (this.prevDir != this.dir) {
            this.prevDir = this.dir;
            this.changeDirBool = true;
        }
    }

    move() {
        if (this.child != null) {
            this.childMoveHandler();
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


        this.changedDir();
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
            this.child.reset();
        }
    }

    start() {

    }

    childMoveNext() {

    }
}