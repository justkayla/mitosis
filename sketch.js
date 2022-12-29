function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

let cells = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  // handle this better
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
  cells.push(new Cell());
}

function draw() {
  background(20);
  for (let i = 0; i < cells.length; i++) {
    cells[i].move();
    cells[i].show();
  }
}

function mousePressed() {
  for (let i = cells.length - 1; i >= 0; i--) {
    if (cells[i].clicked(mouseX, mouseY)) {
      console.log("clicked!");
      cells.push(cells[i].mitosis());
      cells.push(cells[i].mitosis());
      cells.splice(i, 1);
    }
  }
}
