class Block {
  constructor(x=0, y=0, c='grey', w=20, h=20) {
    [this._x, this._y, this._c, this._w, this._h] =  [x,y,c,w,h];
  }
  position() {return `position:fixed;left:${this._x}px;top:${this._y}px`;}
  color() {return `background-color:${this._c}`;}
  size() {return `width:${this._w}px;height:${this._h}px`;}
  style() {return [this.position(), this.color(), this.size()].join(';');}
  draw() {return `<div style="${this.style()}"><div>`;}
}
class Shape {
  constructor(x=0, y=0, blueprint=[[1,1],[1,1]], color='grey', blockWidth=20) {
    this._blocks = blueprint.reduce((arr, row, yidx) => {
      return arr.concat(row.reduce((arr, val, xidx) => {
        if (val) arr.push(new Block(x + xidx * blockWidth, y + yidx * blockWidth, color, blockWidth, blockWidth));
        return arr;
      }, arr));
    }, []);
  }
  draw() {return this._blocks.reduce((r,b) => (r += b.draw(), r), '');}
}
const s = [
  new Shape(0, 0),
  new Shape(100, 0, [[1,0,0],[1,1,1]], 'red'),
  new Shape(0, 100, [[0,0,1],[1,1,1]], 'blue'),
  new Shape(100, 100, [[1,1,0],[0,1,1]], 'green'),
  new Shape(0, 200, [[0,1,1],[1,1,0]], 'cyan'),
  new Shape(100, 200, [[1,1,1,1]], 'yellow')
];
document.getElementById('game').innerHTML = s.reduce((r,s) => (r+=s.draw(), r), '');
