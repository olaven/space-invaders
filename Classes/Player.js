class Player
{
    constructor(x, y, size, speed)
    {
        // data about the player-instance 
        this.x = x; 
        this.y = y; 
        this.size = size; 
        this.speed = speed; 

        /**
         * methods for moving the player
         */
        this.move =
        {
            up: () => 
            {
                this.y -= 1 * this.speed;
            },
            down: () => 
            {
                this.y += 1 * this.speed;
            },
            right: () => 
            {
                this.x += 1 * this.speed;
            }, 
            left: () => 
            {
                this.x -= 1 * this.speed; 
            }
        }
    }

    shoot()
    {
        console.log("I am shooting"); 
    }

    /**
     * Render the player on the canvas
     */
    render()
    {
        push(); 

        fill("white"); 
        rect(this.x, this.y, this.size, this.size * 0.66);
    
        pop(); 
    }
}