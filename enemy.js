
class Dog{
    constructor(){
        this.width=300/5.5;
        this.height=450/5.5;
        this.x=width+10;
        this.y=height-10;
        this.speed=-8;
        this.index=0;
    }
    
    show(){
        
        let ind=floor(this.index)%dogSprits.length;
        //console.log(ind);
        image(dogSprits[ind],this.x,this.y-this.height,this.width,this.height);
        noFill();
        //rect(this.x,this .y-this.height,this.width,this.height);
    } 
   
     move(){ 
        this.x+=this.speed;
        this.index+=abs(this.speed)/17.0;
    } 
}  