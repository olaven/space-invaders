/**
 * handy stuff relating to collsions 
 */


/**
 * returns true if first rect is colliding with second rect
 */
const isRectColliding = (first : RectangleBorders, second : RectangleBorders) => //THIS METHOD IS FLAWED: Checks if inside, not if colliding 
{
    // inside horizontally                                      inside vertically 
    if(first.left > second.left && first.right < second.right && first.top < second.top && first.bottom > second.bottom)
    {
        return true; 
    }
    return false; 
}



/**
 * Borders of a rectangle 
 * left, right, top, bottom
 */
interface RectangleBorders 
{
    left : number; 
    right : number; 
    top : number; 
    bottom : number; 
}