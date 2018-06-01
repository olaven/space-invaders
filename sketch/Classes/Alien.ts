/// <reference path="Character.ts"/>

class Alien extends Character {
    
    speed : number; 

    constructor(p: p5, position : ElementPosition, size: Size, speed: number) {
        super(p, position, size, speed);
        this.speed = speed;
    }
}