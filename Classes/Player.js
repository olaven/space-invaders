class Player extends Character
{
    /**
     * @param {number} x starting position x 
     * @param {number} y starting position y
     * @param {number} size size of player 
     * @param {number} speed speed of player 
     */
    constructor(x, y, size, speed)
    {
        super(x, y, size); 
        // data about the player-instance 
        this.speed = speed; 

        /**
         * methods for moving the player
         */
        this.move =
        {
            up: () => 
            {
                this.position.y -= 1 * this.speed;
            },
            down: () => 
            {
                this.position.y += 1 * this.speed;
            },
            right: () => 
            {
                this.position.x += 1 * this.speed;
            }, 
            left: () => 
            {
                this.position.x -= 1 * this.speed; 
            }
        }
    }

    shoot()
    {
        console.log("I am shooting"); 
    }
}