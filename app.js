
// Enemies
class Enemy {
   constructor(x,y,speed) {
    this.sprite = 'images/enemy-bug.png'; 
    
    this.x=x;
    this.y=y;
    this.speed = speed;
}}

// Update the enemy's position , Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    //moves enemy forward
    this.x += this.speed*dt;
    //if enemy gets to 500+, move enemy back to -50 xpos
    if (this.x > 500) { 
      this.x = -100; 
    }
};

// Render enemy on screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Instantiate enemy objects. Enemy objects array = allEnemies.
let allEnemies = [new Enemy(10,50,100), new Enemy(50,140,50), new Enemy(350,140,50), new Enemy(100,230,150)];


// Player
class Player {
    constructor(x,y) {
    this.sprite = 'images/char-boy.png';
    
    this.x=x;
    this.y=y;
    
    Player.prototype.update = function(dt) {};
    Player.prototype.handleInput = function(dt) {
        if (event.keyCode == 37 && this.x >-50) {
            this.x -=50;
        } else if (event.keyCode == 39 && this.x <450) {
            this.x +=50;
        } else if (event.keyCode == 40 && this.y <425) {
            this.y +=50;
        } else if (event.keyCode ==38 && this.y >-50) {
            this.y -=50;
                if (this.y <=0) {
                alert('Winner!');
                }
        }
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

function reset () {

}