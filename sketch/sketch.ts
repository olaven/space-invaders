let player : Player; 
let aliens : Alien[] = []; 

const sketch = (p: p5) => {

    // SETUP 
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);

        player = new Player(p, 200, 200, 40, 5); 
        aliens = createAliens(2, 10); 
    }
    
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
    }
    
    // DRAWING 
    p.draw = () => {
        p.background(150, 100, 200);

        handleKeyDown(p);
        p.keyPressed = () => {
            handleKeyPress(p); 
        }

        player.render(p);

        for(let alien of aliens)
        {
            alien.render(p); 
        }
    }

    /**
     * Returns two-dimensional array of aliens 
     */
    let createAliens = (rows : number, columns : number) => 
    {
        for(let i = 0; i < rows; i++)
        {
            for(let x = 0; x < columns; x++)
            {
                aliens.push(new Alien(p, i, x, 10, 100));
            }
        }
        return aliens; 
    }

}


var sketchP = new p5(sketch);



