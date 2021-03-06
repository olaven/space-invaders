let player : Player; 
let aliens : Alien[] = []; 
let projectiles : Projectile[] = []; 

const sketch = (p: p5) => {

    // SETUP 
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);

        player = new Player(p, {x : 200, y : 200}, {x : 10, y : 10}, 5, "DeepPink"); 
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
        p.background("Navy");


        handleKeyDown(p);
        p.keyPressed = () => {
            handleKeyPress(p); 
        }

        player.render(p);

        for (let projectile of projectiles) {
            cleanFromArray(projectile, projectiles, p); 
            projectile.render(p);
            projectile.move(p);

        }

        for(let alien of aliens)
        {
            cleanFromArray(alien, aliens, p); 
            alien.render(p);

            // check if they are hit 
            projectiles.map(projectile => 
            {
                if(isRectColliding(
                    {
                        left: alien.position.x - alien.size.x,
                        right: alien.position.x, 
                        top  : alien.position.y - alien.size.y, 
                        bottom : alien.position.y
                    },
                    {
                        left : projectile.position.x - alien.size.y,
                        right: projectile.position.x, 
                        top  : projectile.position.y - projectile.size.y,
                        bottom : projectile.position.y
                    }
                ))
                {
                    // do womething
                    const indexOfProjectile = projectiles.indexOf(projectile); 
                    const indexOfAlien = aliens.indexOf(alien);  
                    projectiles.splice(indexOfProjectile, 1); 
                    aliens.splice(indexOfAlien, 1); 
                }
            }
            // move them 
            if(p.frameCount % 120 === 0)
            {
                const num = p.floor(p.random(1, 5));
                switch (num) {
                    case 1:
                        alien.move.up();
                        break;
                    case 2:
                        alien.move.down();
                        break;
                    case 3:
                        alien.move.right();
                        break;
                    case 4:
                        alien.move.left();
                        break;
                }
            }
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
                
                aliens.push(new Alien(p, {x : actualX, y: actualY}, {x : 30, y:45}, 100));
            }
        }
        return aliens; 
    }

}


var sketchP = new p5(sketch);

