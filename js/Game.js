class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('contestantCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      
      
      
      form = new Form()
      form.display();
    }
  }

  play(){
    form.hide();
    background("#1a59bf")
    textSize(30);
    text("Result of the Quiz", 340, 100)
    text("----------------------------",320, 65);
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = 230;
      fill("Black");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);
      for(var plr in allPlayers){
        console.log(plr);
        
        var correct = "2";
        if (correct === allPlayers[plr].answer)
          fill("green")
        else
          fill("red");
          
        display_position+=30;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].answer, 120,display_position)
      }
    }

    
  }
}
