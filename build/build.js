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
var projectiles = [];
var sketch = function (p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        player = new Player(p, { x: 200, y: 200 }, { x: 10, y: 10 }, 5, "DeepPink");
        aliens = createAliens(20, 5);
    };
    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
        adjustPosition(p, player);
        aliens.forEach(function (alien) { adjustPosition(p, alien); });
    };
    p.draw = function () {
        p.background("Navy");
        handleKeyDown(p);
        p.keyPressed = function () {
            handleKeyPress(p);
        };
        player.render(p);
        for (var _i = 0, projectiles_1 = projectiles; _i < projectiles_1.length; _i++) {
            var projectile = projectiles_1[_i];
            cleanFromArray(projectile, projectiles, p);
            projectile.render(p);
            projectile.move(p);
        }
        var _loop_1 = function (alien) {
            cleanFromArray(alien, aliens, p);
            alien.render(p);
            projectiles.map(function (projectile) {
                if (isRectColliding({
                    left: alien.position.x - alien.size.x,
                    right: alien.position.x,
                    top: alien.position.y - alien.size.y,
                    bottom: alien.position.y
                }, {
                    left: projectile.position.x - alien.size.y,
                    right: projectile.position.x,
                    top: projectile.position.y - projectile.size.y,
                    bottom: projectile.position.y
                })) {
                    var indexOfProjectile = projectiles.indexOf(projectile);
                    var indexOfAlien = aliens.indexOf(alien);
                    projectiles.splice(indexOfProjectile, 1);
                    aliens.splice(indexOfAlien, 1);
                }
            });
            if (p.frameCount % 120 === 0) {
                var num = p.floor(p.random(1, 5));
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
        };
        for (var _a = 0, aliens_1 = aliens; _a < aliens_1.length; _a++) {
            var alien = aliens_1[_a];
            _loop_1(alien);
        }
    };
    var createAliens = function (columns, rows) {
        var parts = {
            x: p.windowWidth / columns,
            y: p.windowHeight / rows
        };
        for (var i = 0; i < columns; i++) {
            for (var j = 0; j < rows; j++) {
                var actualX = parts.x * i;
                var actualY = parts.y * j;
                aliens.push(new Alien(p, { x: actualX, y: actualY }, { x: 30, y: 45 }, 100));
            }
        }
        return aliens;
    };
};
var sketchP = new p5(sketch);
var Character = (function () {
    function Character(p, position, size, speed, color) {
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
        this.color = color;
        this.position = position;
        this.screenSize = {
            x: p.windowWidth,
            y: p.windowHeight
        };
    }
    Character.prototype.render = function (p) {
        p.push();
        p.fill((this.color ? this.color : "white"));
        p.rect(this.position.x, this.position.y, this.size.x, this.size.y * 0.66);
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
    function Alien(p, position, size, speed) {
        var _this = _super.call(this, p, position, size, speed) || this;
        _this.speed = speed;
        return _this;
    }
    return Alien;
}(Character));
var Player = (function (_super) {
    __extends(Player, _super);
    function Player(p, position, size, speed, color) {
        var _this = _super.call(this, p, position, size, speed, color) || this;
        _this.speed = speed;
        return _this;
    }
    return Player;
}(Character));
var Projectile = (function () {
    function Projectile(position, speed, direction, size) {
        this.position = position;
        this.speed = speed;
        this.direction = direction;
        this.size = size;
    }
    Projectile.prototype.render = function (p) {
        p.push();
        p.fill("orange");
        p.rect(this.position.x, this.position.y, this.size.x, this.size.y);
        p.pop();
    };
    Projectile.prototype.move = function (p) {
        switch (this.direction) {
            case Direction.UP:
                this.position.y -= 1 * this.speed;
                break;
            case Direction.DOWN:
                this.position.y += 1 * this.speed;
                break;
            case Direction.RIGHT:
                this.position.x += 1 * this.speed;
                break;
            case Direction.LEFT:
                this.position.x -= 1 * this.speed;
                break;
            default:
        }
    };
    return Projectile;
}());
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
var cleanFromArray = function (element, array, p) {
    if (element.position.x < 0 || element.position.x > p.windowWidth || element.position.y < 0 || element.position.y > p.windowHeight) {
        array.splice(array.indexOf(element), 1);
    }
};
var isRectColliding = function (first, second) {
    if (first.left > second.left && first.right < second.right && first.top < second.top && first.bottom > second.bottom) {
        return true;
    }
    return false;
};
var keys = {
    UP_ARROW: 38,
    DOWN_ARROW: 40,
    LEFT_ARROW: 37,
    RIGHT_ARROW: 39,
    SPACE: 32,
    W: 87,
    A: 65,
    S: 83,
    D: 68,
    I: 73,
    J: 74,
    K: 75,
    L: 76
};
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction || (Direction = {}));
var handleKeyDown = function (p) {
    if (p.keyIsDown(keys.W)) {
        player.move.up();
    }
    if (p.keyIsDown(keys.S)) {
        player.move.down();
    }
    if (p.keyIsDown(keys.D)) {
        player.move.right();
    }
    if (p.keyIsDown(keys.A)) {
        player.move.left();
    }
};
var handleKeyPress = function (p) {
    if (p.keyIsDown(keys.I)) {
        addPlayerProjectile(Direction.UP);
    }
    if (p.keyIsDown(keys.K)) {
        addPlayerProjectile(Direction.DOWN);
    }
    if (p.keyIsDown(keys.L)) {
        addPlayerProjectile(Direction.RIGHT);
    }
    if (p.keyIsDown(keys.J)) {
        addPlayerProjectile(Direction.LEFT);
    }
};
var addPlayerProjectile = function (direction) {
    var projectile = new Projectile({
        x: player.position.x,
        y: player.position.y
    }, (player.speed * 2), direction, {
        x: 10,
        y: 10
    });
    projectiles.push(projectile);
};
//# sourceMappingURL=build.js.map