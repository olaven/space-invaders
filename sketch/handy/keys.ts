const keys = 
{
    UP_ARROW : 38, 
    DOWN_ARROW : 40, 
    LEFT_ARROW : 37, 
    RIGHT_ARROW: 39, 
    ENTER : 13
}

/**
 * Runs if keys are pressed (and held down) 
 */
const handleKeyDown = (p: p5) => {
    // movement
    if (p.keyIsDown(keys.UP_ARROW)) {
        player.move.up();
    }
    if (p.keyIsDown(keys.DOWN_ARROW)) {
        player.move.down();
    }
    if (p.keyIsDown(keys.RIGHT_ARROW)) {
        player.move.right();
    }
    if (p.keyIsDown(keys.LEFT_ARROW)) {
        player.move.left();
    }
}

/**
 * Runs _once_ if a key is pressed 
 */
const handleKeyPress = (p : p5) => 
{
    // player actions 
    if(p.keyIsDown(keys.ENTER))
    {
        player.shoot(); 
    }
}

