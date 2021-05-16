var canvas, backgroundImage;

var gameState = 0;
var playerCount = 0;
var allPlayers;
var answer ;
var database;

var form, player, game;


function setup(){
  canvas = createCanvas(800,800);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
