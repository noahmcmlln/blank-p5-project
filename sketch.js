function setup() {
  createCanvas(600, 600);
  background("blue"); // sky

  fill("green");
  rect(0, 400, 600, 200);

  fill("yellow");
  ellipse(500, 100, 100, 100);

  makeahouse();
}

function makeahouse() {
  var houseColor = 255;
  var chimColor = 0;
  var roofColor = 150;
  var houseX = 200;
  var houseY = 200;
  var houseSize = 200;
  var chimX = 320;
  var chimWidth = 40;
  var roofOverhang = 20;
  var houseMaxY = 100;
  var doorHalfWidth = 25;
  var doorHeight = 100;
  var middle = 300;


  fill(houseColor); // house body
  rect(houseX, houseY, houseSize, houseSize);

  fill(chimColor); // chimney
  rect(chimX, houseMaxY, chimWidth, houseMaxY);

  fill(roofColor); // roof
  triangle(houseX - roofOverhang, houseY, middle, houseMaxY, houseX * 2 + roofOverhang, houseY);

  fill("red"); // door
  rect(middle - doorHalfWidth, middle, doorHalfWidth * 2, doorHeight);
}
