class Game{
constructor(){
}
getState(){
    var gameStateRef=database.ref('gameState')
    gameStateRef.on('value',function(data){
     gameState=data.val()
    })
}
update(state){
    database.ref('/').update({
        gameState:state
    });
}

play(){
    form.hide()
    text("GAME START",120,100)

    player.getPlayerInfo();
    //text(allPlayers,100,200);
    
   var displayPosition=130
    if(allPlayers!== undefined){
    for(var plr in allPlayers) {
        if(plr==='player'+player.index){
            fill("red")
        }
        else{
            fill("black")
        }
        displayPosition+= 20
        text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
    }
    }

//update distance in database
    if(keyIsDown(UP_ARROW)){
        player.distance+=50
        player.update()
    }
}
async start(){
    if(gameState===0){
    player=new Player()
    var playerCountRef=await database.ref('playerCount').once("value")
    if(playerCountRef.exists()){
        playerCount=playerCountRef.val()
        player.getCount()
    }

    form=new Form()
    form.display();
    }
}
}