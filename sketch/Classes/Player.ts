class Player extends Character {

    constructor(p: p5, x: number, y: number, size: number, speed: number) {
        super(p, x, y, size, speed);
        this.speed = speed; 
    }

    public shoot() : void {
        console.log("I am shooting");
    }
}