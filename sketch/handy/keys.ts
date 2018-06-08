const keys = 
{
    UP_ARROW : 38, 
    DOWN_ARROW : 40, 
    LEFT_ARROW : 37, 
    RIGHT_ARROW: 39, 
    SPACE:  32, 
    W : 87,
    A : 65, 
    S : 83, 
    D : 68, 
    I : 73, 
    J : 74, 
    K : 75, 
    L : 76 
}

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}

/**
 * Runs if keys are pressed (and held down) 
 */
const handleKeyDown = (p: p5) => {
    // movement
    if (p.keyIsDown(keys.W)) {
        player.move.up();
    }
    if (p.keyIsDown(keys.S)) {
        player.move.down();
    }
    if (p.keyIsDown(keys.D)) {
        player.move.right();
    }
    if (p.keyIsDown(keys.A)) {
        player.move.left();
    }
}

/**
 * Runs _once_ if a key is pressed 
 */
const handleKeyPress = (p : p5) => 
{
    // player actions 
    if(p.keyIsDown(keys.I))
    {
        addPlayerProjectile(Direction.UP); 
    }
    if (p.keyIsDown(keys.K)) 
    {
        addPlayerProjectile(Direction.DOWN); 
    }
    if (p.keyIsDown(keys.L)) 
    {
        addPlayerProjectile(Direction.RIGHT); 
    }
    if (p.keyIsDown(keys.J)) 
    {
        addPlayerProjectile(Direction.LEFT); 
    }
}


/**
 * Adds a player-shot projectile with given direction 
 */
let addPlayerProjectile = (direction : Direction) => 
{
    let projectile = new Projectile(
        {
            x : player.position.x, 
            y : player.position.y 
        }, 
        (player.speed * 2), 
        direction, 
        {
            x : 10, 
            y : 10
        }
    )
    projectiles.push(projectile); 
}

