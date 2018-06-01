/**
 * Superclass for all characters on screen. 
 * @method render renders on canvas 
 */
abstract class Character {
    public position: p5.Vector; 
    public screenSize : {x : number, y : number}; // the screen size that the Character relates to. Used for adjustments
    protected size : number; 
    protected speed: number;
    /**
     *  Methods for moving the character 
     */
    public move =
        {
            up: () => {
                this.position.y -= 1 * this.speed;
            },
            down: () => {
                this.position.y += 1 * this.speed;
            },
            right: () => {
                this.position.x += 1 * this.speed;
            },
            left: () => {
                this.position.x -= 1 * this.speed;
            }
        }

    constructor(p : p5, x : number, y : number, size : number, speed : number) {
        this.size = size;
        this.speed = speed; 
        this.position = p.createVector(x, y); 
        this.screenSize = {
            x : p.windowWidth, 
            y : p.windowHeight
        }
    }

    /**
     * 
     * @param p the p5 context 
     * Renders the Character
     */
    render(p : p5) {
        p.push();

        p.fill("white")
        p.rect(this.position.x, this.position.y, this.size, this.size * 0.66);

        p.pop();
    }

    /**
     * 
     * @param x new x value 
     * change position
     */
    setX(x: number) {
        this.position.x = x;
    }

    /**
     * 
     * @param y new y value 
     * change position
     */
    setY(y: number) {
        this.position.y = y; 
    }
}

