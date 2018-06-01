var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var player;
var aliens = [];
var sketch = function (p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        player = new Player(p, 200, 200, 40, 5);
        aliens = createAliens(2, 10);
    };
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        adjustPosition(p, player);
        aliens.forEach(function (alien) { adjustPosition(p, alien); });
    };
    p.draw = function () {
        p.background(150, 100, 200);
        handleKeyDown(p);
        p.keyPressed = function () {
            handleKeyPress(p);
        };
        player.render(p);
        for (var _i = 0, aliens_1 = aliens; _i < aliens_1.length; _i++) {
            var alien = aliens_1[_i];
            alien.render(p);
        }
    };
    var createAliens = function (rows, columns) {
        for (var i = 0; i < rows; i++) {
            for (var x = 0; x < columns; x++) {
                var actualX = -1;
                var actualY = -1;
                aliens.push(new Alien(p, i, x, 10, 100));
            }
        }
        return aliens;
    };
};
var sketchP = new p5(sketch);
var Character = (function () {
    function Character(p, x, y, size, speed) {
        var _this = this;
        this.move = {
            up: function () {
                _this.position.y -= 1 * _this.speed;
            },
            down: function () {
                _this.position.y += 1 * _this.speed;
            },
            right: function () {
                _this.position.x += 1 * _this.speed;
            },
            left: function () {
                _this.position.x -= 1 * _this.speed;
            }
        };
        this.size = size;
        this.speed = speed;
        this.position = p.createVector(x, y);
        this.screenSize = {
            x: p.windowWidth,
            y: p.windowHeight
        };
    }
    Character.prototype.render = function (p) {
        p.push();
        p.fill("white");
        p.rect(this.position.x, this.position.y, this.size, this.size * 0.66);
        p.pop();
    };
    Character.prototype.setX = function (x) {
        this.position.x = x;
    };
    Character.prototype.setY = function (y) {
        this.position.y = y;
    };
    return Character;
}());
var Alien = (function (_super) {
    __extends(Alien, _super);
    function Alien(p, x, y, size, speed) {
        var _this = _super.call(this, p, x, y, size, speed) || this;
        _this.speed = speed;
        return _this;
    }
    return Alien;
}(Character));
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(p, x, y, size, speed) {
        var _this = _super.call(this, p, x, y, size, speed) || this;
        _this.speed = speed;
        return _this;
    }
    Player.prototype.shoot = function () {
        console.log("I am shooting");
    };
    return Player;
}(Character));
var adjustPosition = function (p, character) {
    var changeInScreenSize = {
        x: p.windowWidth / character.screenSize.x,
        y: p.windowHeight / character.screenSize.y,
    };
    character.setX(character.position.x * changeInScreenSize.x);
    character.setY(character.position.y * changeInScreenSize.y);
    character.screenSize =
        {
            x: p.windowWidth,
            y: p.windowHeight
        };
};
var keys = {
    UP_ARROW: 38,
    DOWN_ARROW: 40,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    SPACE: 32
};
var handleKeyDown = function (p) {
    if (p.keyIsDown(keys.UP_ARROW)) {
        player.move.up();
    }
    if (p.keyIsDown(keys.DOWN_ARROW)) {
        player.move.down();
    }
    if (p.keyIsDown(keys.RIGHT_ARROW)) {
        player.move.right();
    }
    if (p.keyIsDown(keys.LEFT_ARROW)) {
        player.move.left();
    }
};
var handleKeyPress = function (p) {
    if (p.keyIsDown(keys.SPACE)) {
        player.shoot();
    }
};
//# sourceMappingURL=build.js.map