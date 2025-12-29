let x;
let y;
let t;
let penPicker;
let framePicker;
function setup() {
  createCanvas(2000, 2000);
  translate(1000,1000)
  rotate(PI)
  background(0);
  penPicker = createColorPicker('deeppink');
  penPicker.position(50, 100);
  penPicker.size(100, 100)
  stroke(penPicker.color());
  
  noFill();
  
  framePicker = createColorPicker('blue')
  framePicker.position(250, 100)
  framePicker.size(100, 100)
  drawFrame();

}

function drawFrame(){
  //draw frame
  stroke(framePicker.color())
  for(let fx = -450; fx < 450; fx++){
    circle(fx, -450, 30)
  }
  for(let fx = -450; fx < 450; fx++){
    circle(450, fx, 30)
  }
  for(let fx = 450; fx > -450; fx--){
    circle(fx, 450, 30)
  }
  for(let fx = 450; fx > -450; fx--){
    circle(-450, fx, 30)
  }
  
}
function draw() {
  //translate origin to center
  translate(1000,1000)
  rotate(PI)
  drawFrame()
  stroke(penPicker.color());
  
  circle(0,0,10)
  //draw heart
  t = frameCount *.05 % 360;
  x = 16*pow(sin(t), 3);
  y = 13*cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t);
  circle(6*x,6*y, 10);   


  //draw frame
  // circle(fx, fy, 10);
  

  // if(fx == -500 && fy < 500){
  //   fy += 1;
  // }
  // else if(fx < 500 && fy == 500){
  //   fx += 1;
  // }
  // else if(fx == 500 && fy > -500){
  //   fy -= 1;
  // }
  // else if(fx > -500 && fy == -500){
  //   fx -= 1;
  // }


}