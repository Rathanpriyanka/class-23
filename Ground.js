class Ground {

  constructor() {
   
    var ground_options = {

      isStatic : true

    }

  this.ground = Bodies.rectangle(0,790,800,20,ground_options);
   

  }

display() {

rect(this.ground.position.x,this.ground.position.y,400,20);


}



}