// Enemies our player must avoid
function Enemy(x, y, speed) {
    this.x = x;
    this.y = y + 55;
    this.sprite = 'images/enemy-bug.png';
    this.enemySpeed = speed;
  };

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  Enemy.prototype.update = function(dt) {
      // You should multiply any movement by the dt parameter
      // which will ensure the game runs at the same speed for
      // all computers.
      if(this.x < 505) {
        this.x += this.enemySpeed * dt;
      }
      else {
        this.x = -1;
      }
  };

  // Draw the enemy on the screen, required method for game
  Enemy.prototype.render = function() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  };

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Hero {
  constructor() {
    this.x = 202;
    this.y = 387;
    this.sprite = 'images/char-boy.png';
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(input) {
    if (input === 'left' && this.x > 0) {
      this.x -= 101;
    }
    else if (input === 'up' && this.y > 83) {
      this.y -= 83;
    }
    else if (input === 'right' && this.x < 404) {
      this.x += 101;
    }
    else if (input === 'down' && this.y < 387) {
      this.y += 83;
    }
  }

  reset() {
    this.x = 202;
    this.y = 387;
  }

  update() {
    for(let currentEnemy of allEnemies) {
      if (this.y === currentEnemy.y && (currentEnemy.x + 50.5 > this.x &&
        currentEnemy.x < this.x + 50.5)) {
          this.reset();
        }
    }
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Hero();
let allEnemies = [];
const enemy1= new Enemy(-101, 83, 300);
allEnemies.push(enemy1);
const enemy2= new Enemy(-202, 0, 225);
allEnemies.push(enemy2);
const enemy3= new Enemy(-202, 166, 350);
allEnemies.push(enemy3);
const enemy4= new Enemy(303, 0, 200);
allEnemies.push(enemy4);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
