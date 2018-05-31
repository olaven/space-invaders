/**
 * Superclass for all characters on screen. 
 * @method render renders on canvas 
 */
abstract class Character {
    protected size : number; 
    protected position : p5.Vector; 
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
        this.position = p.createVector(x, y)
    }

    render(p : p5) {
        p.push();

        p.fill("white")
        p.rect(this.position.x, this.position.y, this.size, this.size * 0.66);

        p.pop();
    }
}

