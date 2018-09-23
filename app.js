
// Enemies
class Enemy {
   constructor(x,y) {
    // The enemy image/sprite
    this.sprite = 'images/enemy-bug.png'; 
    this.x=x;
    this.y=y;
}}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Instantiate enemy objects. Enemy objects array = allEnemies.
let allEnemies = [new Enemy(10,50), new Enemy(50,140), new Enemy(100,230)];


// Player
class Player {
    constructor(x,y) {
    this.sprite = 'images/char-boy.png';
    
    this.x=x;
    this.y=y;
    // this.x = 200;
    // this.y = 375;
    
    Player.prototype.update = function(dt) {};
    Player.prototype.handleInput = function(dt) {
        if ("up") {
            this.y -=50;
                if (this.y <=0) {
                alert('Winner!');
            // this.x -=50;

        // } else if () {
        //     this.x +=50;
        // } else if () {
        //     this.x -=50;
        // } else if () {
        //     ;
        }
    };
};
    Player.prototype.render = function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
   };
};}

// Instantiate player object. Player object in a variable called player.
const player = new Player(200,375);

// This listens for key presses and sends the keys to your Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

function winner (){
    let playerPosition = Player.y;
    if (playerPosition <=0) {
        console.log('Winner!');
    }
}
