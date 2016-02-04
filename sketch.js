function setup () {
  createCanvas(600, 600);

  var houseX = 100;
  var houseY = 300;
  var houseWidth = 200;
  var houseHeight = 200;
  var roofHeight = 100;

  var drawHouse = function () {
   rect(houseX, houseY, houseWidth, houseHeight); // Draw a structure
   triangle(houseX - 10, houseY, houseWidth / 2 + houseX, houseY - roofHeight, houseX + houseWidth + 10, houseY); // Draw a roof
  };

  drawHouse();

  houseX = houseX + 250; // Increase x by 250

  drawHouse();
}
