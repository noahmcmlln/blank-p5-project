var setup = function setup() {
  createCanvas(600, 600);
  background(200);
  noStroke();

  fill(150); // pavement
  rect(0, 375, 600, 300);

  fill(184, 9, 32); // hood? body around windshield? roof? whatever the word is
  ellipse(300, 250, 325, 200);

  fill(193, 202, 232); // windshield
  ellipse(300, 250, 300, 150);

  fill(184, 9, 32); // car's body
  ellipse(125, 300, 100, 100);
  ellipse(475, 300, 100, 100);
  rect(125, 250, 350, 100);

  fill(0); // two tires
  ellipse(175, 350, 75, 75);
  ellipse(425, 350, 75, 75);

  fill(150); // two hubcaps
  ellipse(175, 350, 50, 50);
  ellipse(425, 350, 50, 50);

  fill(245, 241, 42); // headlights
  ellipse(110, 300, 30, 30);
}
