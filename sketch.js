function setup() {
  createCanvas(1000, 1000);
  background(0);
  stroke('white');
  noFill();
  
}

function calcHeart(){
  
}


function draw() {

  //translate origin to center
  translate(500,400)
  rotate(PI)
  let t = frameCount *.05 % 360;
  let x = 16*pow(sin(t), 3);
  let y = 13*cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t);
  circle(6*x,6*y, 10);
  
}
