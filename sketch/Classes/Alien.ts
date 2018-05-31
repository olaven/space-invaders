/// <reference path="Character.ts"/>

class Alien extends Character {
    
    speed : number; 

    constructor(p: p5, x: number, y: number, size: number, speed: number) {
        super(p, x, y, size, speed);
        this.speed = speed;
    }
}