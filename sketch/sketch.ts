let player : Player; 
let aliens : Alien[] = []; 
let projectiles : Projectile[] = []; 

const sketch = (p: p5) => {

    // SETUP 
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);

        player = new Player(p, 200, 200, {x : 40, y : 30}, 5); 
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

        player.render(p);

        for (let projectile of projectiles) {
            if(isRectColliding(
                {
                    top    : projectile.position.y + projectile.size.y, 
                    bottom : projectile.position.y, 
                    left   : projectile.position.x, 
                    right  : projectile.position.x + projectile.size.x
                }, 
                {
                    top    : 0, 
                    bottom : p.windowHeight, 
                    left   : 0, 
                    right  : p.windowWidth
                }
            ))
            {
                projectiles = projectiles.filter(p => p !== projectile); 
            }

            projectile.render(p);
            projectile.move(p);
        }

        for(let alien of aliens)
        {
            alien.render(p); 
        }

    }

    /**
     * Returns two-dimensional array of aliens 
     */
    let createAliens = (columns : number, rows : number) => 
    {
        /**
         * I imagine splicing the space into "parts".
         * Each alien is placed in a part  
         */
        let parts = {
            x : p.windowWidth / columns, 
            y : p.windowHeight / rows
        }; 
        
        for(let i = 0; i < columns; i++)
        {
            for(let j = 0; j < rows; j++)
            {
                // adjusted for screensize; 
                let actualX = parts.x * i;  
                let actualY = parts.y * j; 
                
                aliens.push(new Alien(p, actualX, actualY, {x : 10, y: 20}, 100));
            }
        }
        return aliens; 
    }

}


var sketchP = new p5(sketch);

