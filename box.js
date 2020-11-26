class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0,
          'friction':0,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      rectMode(CENTER);
      fill(255,0,0);
      rect(pos.x,pos.y, this.width, this.height);
    }
  };