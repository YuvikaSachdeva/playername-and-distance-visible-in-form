class Form{
    constructor(){
        this.input=createInput("NAME") 
        this.button=createButton("PLAY") 
        this. greeting=createElement('h3')
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        //DOM code
        var title=createElement('h2')
        title.html("Car Racing Game")
        title.position(600,0);
        //create input and button
        
        
        this.button.position(600,200);
        this.input.position(500,160)
       
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name=this.input.value();
            playerCount+=1
           
            //update the count
            player.updateCount(playerCount)
            player.index=playerCount
            player.update()

            //greetings
            this.greeting.html("Hello"+player.name)
            this.greeting.position(500,160)
        });



    }
}