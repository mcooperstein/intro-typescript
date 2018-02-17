class Point {
  private x: number;
  private y: number;
  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
  constructor(x?:number,y?:number){
    this.x = x;
    this.y = y;
  }
}

let point = new Point(1,2);
point.draw();

// access modifiers
// - public (default)
// - private
// - protected
