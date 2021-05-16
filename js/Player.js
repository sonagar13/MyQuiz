class Player {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('contestantCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
     contestantCount : count
      
    });
  }

  update(){
    var playerIndex = "allContestant/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('allContestant');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
}
