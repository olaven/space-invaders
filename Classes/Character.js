/**
 * Superclass for all characters on screen. 
 * @method render renders on canvas 
 */
class Character 
{
    /**
     * @param {number} x starting position x
     * @param {number} y starting position y
     * @param {number} size size of the character 
     */
    constructor(x, y, size)
    {
        this.size = size; 
        this.position = createVector(x, y); 
    }
    
    render()
    {
        push();

        fill("white")
        rect(this.position.x, this.position.y, this.size, this.size * 0.66);

        pop(); 
    }
}