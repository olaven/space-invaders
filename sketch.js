let width = 400; 
let height = 400; 

let player; 
let aliens = []; 

// the area in which the player may move 
let area;  

setup = () => 
{
    player = new Player(width / 2, height / 2, width / 10, 2); 
    populate(aliens, Alien.bind(this, 20, 20, 100), 20); 

    area =
    {
        bottomRight: createVector(width, height-5),
        topRight: createVector(width, (height * 0.8)),
        bottomLeft: createVector(0, height-5),
        topLeft: createVector(0, (height * 0.8))
    }

    createCanvas(width, height); 
}

draw = () => {
    background("#0c3a70"); 

    handleKeys(); 

    player.render(); 

    for(let alien of aliens)
    {
        alien.render(); 
    }

    drawMovableArea_removeMe(); 

}

/**
 * Runs when key is pressed 
 */
let handleKeys = () => 
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

/**
 * 
 * @param {Array} array the array to populate 
 * @param {class} Type  the class of which to contruct objects from 
 * @param {number} amount the amount of objects to put in array 
 */
let populate = (array, Type, amount) => 
{
    for(let i = 0; i < amount; i++)
    {
        array.push(new Type())
    }
}

let drawMovableArea_removeMe = () => 
{
    for (let i in area) {
        push();

        stroke("white");
        point(area[i].x, area[i].y);
        point(200, 200);

        pop();
    }

    // Kun for å visualisere området. Skal ikke være med senere. 
    push();
    stroke("white");
    line(area.topRight.x, area.topRight.y, area.topLeft.x, area.topLeft.y);
    line(area.bottomRight.x, area.bottomRight.y, area.bottomLeft.x, area.bottomLeft.y);
    pop(); 
}