/**
 * At this moment, projectiles may be shot from the player. 
 * They also move in a straight line upwards (for now) 
 */
class Projectile implements HasSize
{
    position: ElementPosition; 
    speed : number; 
    direction : Direction; 
    size : 
    {
        x : number; 
        y : number; 
    }

    constructor(position: ElementPosition, speed : number, direction : Direction, size : {x : number, y : number})
    {
        this.position = position; 
        this.speed = speed; 
        this.direction = direction; 
        this.size = size; 
    }
    render(p : p5) 
    {
        p.push(); 
        p.fill("blue"); 
        p.rect(this.position.x, this.position.y, this.size.x, this.size.y);
        p.pop(); 
    }
    move(p : p5)
    {
        // REFACTOR THIS TOGETHER WITH CHARACTER MOVEMENT
        switch(this.direction)
        {
            case Direction.UP: 
                this.position.y -= 1 * this.speed;
                break; 
            case Direction.DOWN: 
                this.position.y += 1 * this.speed;
                break; 
            case Direction.RIGHT: 
                this.position.x += 1 * this.speed; 
                break; 
            case Direction.LEFT: 
                this.position.x -= 1 * this.speed; 
                break; 
            default: 
                // throw "invalid direction"; 
        }
    }
}   