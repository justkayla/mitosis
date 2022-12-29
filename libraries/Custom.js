/**
 * Move independently? Combine on collide?
 * Burst outward when clicked? (vel changed in opp d)?
 */

class Cell {
  constructor(pos, r, c) {
    if (pos) {
      this.pos = pos.copy();
    } else {
      this.pos = createVector(random(width), random(height));
    }

    this.r = r || 100;
    this.c = c || color(random(255), 0, random(100, 255), 100);
  }

  // other ways to have this move around screen?
  move() {
    let vel = p5.Vector.random2D();
    this.pos.add(vel);
  }

  // different shapes?
  show() {
    fill(this.c);
    circle(this.pos.x, this.pos.y, this.r, this.r);
  }

  clicked(x, y) {
    let d = dist(this.pos.x, this.pos.y, x, y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  mitosis() {
    this.pos.x += random(-this.r, this.r);
    let cell = new Cell(this.pos, this.r * 0.8, this.c);
    return cell;
  }
}
