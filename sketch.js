var car,weight,wall,speed;
var deform,deformation;

 function setup() 
 {
    createCanvas(1200,800);
    wall =createSprite(1100,350,50,650);
    wall.shapeColor="cyan";
    car=createSprite(100,200,80,30);
    car.shapeColor="white";
    car.velocityX=random(10,60);
    speed=random(90,100);
    car.weight=random(300,2000);
    weight=round(car.weight);
   }
    
    function draw()
    {
    background(0,0,0);
    car.velocityX=speed;
    deformat();
    collision();
    drawSprites();
    fill(255);
    text('weight='+ weight,600,50);
    text('deformation='+ deform,600,100);
    }
    
    function deformat()
    {
      deformation=(0.5*weight*speed*speed)/22500;
      deform=round(deformation);

      if(deform>180)
      {
        car.shapeColor="red";
      }  
      else if(deform<180&&deform>80)
      {
        car.shapeColor="yellow";
      }
      else
      {
        car.shapeColor="green";
      }
    }


    function collision()
    {     
      if(car.x-wall.x<wall.width/2+car.width/2 && wall.x-car.x<wall.width/2+car.width/2)
      {
      car.velocityX=0;
      }
  }