let player : Player; 
let aliens : Alien[] = []; 

const sketch = (p: p5) => {

    // SETUP 
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);

        player = new Player(p, 200, 200, 40, 5); 
        aliens = createAliens(20, 5); 
    }
    
    p.windowResized = () => {
        p.resizeCanvas(p.windowWidth, p.windowHeight);

        //adjusting positions to keep same relationship
        adjustPosition(p, player); 
        aliens.forEach(alien => {adjustPosition(p, alien)})
    }
    
    // DRAWING 
    p.draw = () => {
        p.background(150, 100, 200);

        

        handleKeyDown(p);
        p.keyPressed = () => {
            handleKeyPress(p); 
        }

        p.push();
        p.fill(100, 200, 100);
        p.rect(400, 400, 400, 400);
        p.pop(); 
        
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
        /**
         * I imagine splicing the space into "parts".
         * Each alien is placed in a part  
         */
        let parts = {
            x : p.windowWidth / rows, 
            y : p.windowHeight / columns
        }; 

        console.log(p.windowWidth / 2); 
        
        for(let i = 0; i < rows; i++)
        {
            for(let j = 0; j < columns; j++)
            {
                // adjusted for screensize; 
                let actualX = parts.x * i;  
                let actualY = parts.y * j; 
                
                aliens.push(new Alien(p, actualX, actualY, 10, 100));
            }
        }
        return aliens; 
    }

}


var sketchP = new p5(sketch);



