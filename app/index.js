class Block {
  constructor(x=0, y=0, c='grey', w=20, h=20) {
    this._x = x;
    this._y = y;
    this._c = c;
    this._w = w;
    this._h = h;
  }
  position() {return `position:fixed;left:${this._x}px;top:${this._y}px`;}
  color() {return `background-color:${this._c}`;}
  size() {return `width:${this._w}px;height:${this._h}px`;}
  style() {return [this.position(), this.color(), this.size()].join(';');}
  draw() {return `<div style="${this.style()}"><div>`;}
}
class Shape {
  constructor(blueprint=[[1,1],[1,1]], x=0, y=0, color='grey', blockWidth=20) {
    this._x = x;
    this._y = y;
    this._w = blockWidth;
    this._c = color;
    this._blueprint = blueprint
    this._blocks = [];
    for (let yIdx=0; yIdx < this._blueprint.length; yIdx++) {
      for (let xIdx=0; xIdx < this._blueprint[yIdx].length; xIdx++) {
        if (this._blueprint[yIdx][xIdx]) {
          this._blocks.push(new Block(
            this._x + xIdx * this._w,
            this._y + yIdx * this._w,
            this._c,
            this._w,
            this._w));
        }
      }
    }
  }
  draw() {
    return this._blocks.reduce((r,b) => (r += b.draw(), r), '')
  }
}
const s = [
  new Shape([[1,1],[1,1]], 0, 0),
  new Shape([[1,0,0],[1,1,1]], 100, 0, 'red'),
  new Shape([[0,0,1],[1,1,1]], 0, 100, 'blue'),
  new Shape([[1,1,0],[0,1,1]], 100, 100, 'green'),
  new Shape([[0,1,1],[1,1,0]], 0, 200, 'cyan'),
  new Shape([[1,1,1,1]], 100, 200, 'yellow')
];
document.getElementById('game').innerHTML = s.reduce((r,s) => (r+=s.draw(), r), '');
