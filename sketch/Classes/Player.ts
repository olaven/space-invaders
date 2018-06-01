class Player extends Character{

    constructor(p: p5, x: number, y: number, size: Size, speed: number) {
        super(p, x, y, size, speed);
        this.speed = speed; 
    }

    /** LOGIC MOVED FOR NOW 
     * public shoot(p : p5, direction : Direction) : void {
        let projectile = new Projectile(
            this.position.x,
            this.position.y,
            (this.speed * 2),
            Direction.UP,
            {x : 10, y : 20}
        )
        projectile.render(p);
    }
     */
}