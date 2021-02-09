var y=0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();
  ellipse(width/2,y,80,80);
  y++;
}
