let x;
  let y;
  let t;
  let penSettings;
  let frameSettings;
  let penColor;
  let frameColor
  let frameSize
  let capture
  let paintLayer

  class Settings {
 
    constructor(x, y, name) {
      this.frame = createDiv(name)
      this.x = x
      this.y = y
      this.frame.position(x,y)
      this.frame.size(400,400)
      this.frame.style('font-size', '16px');
      this.frame.style('font-family', 'Comic Sans MS');
      this.frame.style('background', 'blue');
      this.frame.style('padding', '5px');
      this.frame.draggable();
    }

    addElement(elem, lx, ly){
      this.frame.child(elem)
      elem.position(this.x + lx, this.y + ly)
    }
  }
  function setup() {
    createCanvas(2000, 2000)
    translate(1000,1000)
    rotate(PI)
    background(0);
    
    //pen settings
    penSettings = new Settings(800, 300, 'Pen Settings')
    penColor = createColorPicker('deeppink')
    penColor.size(100,100)
    penSettings.addElement(penColor, 20, 20)
    
    //frame settings
    frameSettings = new Settings(300,300, 'Frame Settings')
    frameColor = createColorPicker('green')
    frameColor.size(100,100)
    frameSettings.addElement(frameColor, 20, 200)

    frameSize = createInput()
    frameSettings.addElement(frameSize, 10, 200)

    //create webcam
    capture = createCapture(VIDEO, {flipped:true})
    capture.hide()

    noFill();
    
    //create paint buffer
    paintLayer = createGraphics(2000, 2000)
    paintLayer.translate(1000,1000)
    paintLayer.rotate(PI)
    paintLayer.clear()
    paintLayer.noFill()

    drawFrame();
    

  }

  function drawFrame(){
    //draw frame
    paintLayer.stroke(frameColor.color())

    for(let fx = -450; fx < 450; fx++){
      paintLayer.circle(fx, -450, 30)
    }
    for(let fx = -450; fx < 450; fx++){
      paintLayer.circle(450, fx, 30)
    }
    for(let fx = 450; fx > -450; fx--){
      paintLayer.circle(fx, 450, 30)
    }
    for(let fx = 450; fx > -450; fx--){
      paintLayer.circle(-450, fx, 30)
    }
    
  }
  function draw() {
    //translate origin to center
    image(capture, 0,0, 2000, 2000)
    image(paintLayer, 0, 0)
    translate(1000,1000)
    
    rotate(PI)
    
    
    frameColor.changed(drawFrame)
    paintLayer.stroke(penColor.color());
    
    //draw heart
    t = frameCount *.05 % 360;
    x = 16*pow(sin(t), 3);
    y = 13*cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t);
    paintLayer.circle(6*x,6*y, 10);   


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