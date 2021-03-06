/**
 * Superclass for all characters on screen. 
 * @method render renders on canvas 
 */
abstract class Character implements CanMove, HasSize{
    public position: ElementPosition; 
    public screenSize : {x : number, y : number}; // the screen size that the Character relates to. Used for adjustments
    public size : Size; 
    public speed : number;
    public color : string; 
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

    constructor(p : p5, position : ElementPosition, size : Size, speed : number, color? : string) {
        this.size = size;
        this.speed = speed; 
        this.color = color; 
        this.position = position; 
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
        
        p.fill((this.color ? this.color : "white")); 
        p.rect(this.position.x, this.position.y, this.size.x, this.size.y * 0.66);

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

