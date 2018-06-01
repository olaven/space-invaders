/**
 * Code for various adjustments. 
 * To speed, to position according to screen size etc. 
 */

/**
 * Adjust position of Character if scren size changes 
 */
let adjustPosition = (p : p5, character : Character) => 
{
    /* 
    * Bruk skjermstørrelsen character er justert til. 
    * Finn nåværende forhold. 
    * Bruk det forhodlet til å sette, med nåværende størrelse 
    * Forny størrelsen character er justert til. 
    */
    let changeInScreenSize =   
    {
        x : p.windowWidth / character.screenSize.x, 
        y: p.windowHeight / character.screenSize.y,         
    }

    character.setX(character.position.x * changeInScreenSize.x); 
    character.setY(character.position.y * changeInScreenSize.y); 

    character.screenSize = 
    {
        x : p.windowWidth, 
        y : p.windowHeight
    }
}


/**
 * Clean the array of any element with position outside of screen
 */
let cleanFromArray = (element : HasSize & HasPosition, array : HasSize[], p : p5) => 
{
    if (element.position.x < 0 || element.position.x > p.windowWidth || element.position.y < 0 || element.position.y > p.windowHeight)
    {
        array.splice(array.indexOf(element), 1); 
    }
}