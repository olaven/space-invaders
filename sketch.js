let width = 400; 
let height = 400; 

let player; 

setup = () => 
{
    player = new Player(width / 2, height / 2, width / 10, 2); 
    createCanvas(width, height); 
}

draw = () => {
    background("#0c3a70"); 

    handleKeys(); 

    player.render(); 
}

/**
 * Runs when key is pressed 
 */
function handleKeys()
{
    // movement
    if(keyIsDown(UP_ARROW))
    {
        player.move.up(); 
    }
    if (keyIsDown(DOWN_ARROW)) 
    {
        player.move.down();
    }
    if (keyIsDown(RIGHT_ARROW)) 
    {
        player.move.right();
    }
    if (keyIsDown(LEFT_ARROW)) 
    {
        player.move.left(); 
    }
    // actions 
    if(keyIsDown(32))
    {
        player.shoot(); 
    }
}