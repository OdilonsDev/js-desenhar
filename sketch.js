function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
  
    stroke("#044178");
    fill("blue");
  
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }