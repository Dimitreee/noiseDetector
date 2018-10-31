export class Grid {
  constructor(_num_items_horiz, _num_items_vert, _grid_w, _grid_h, _startx, _starty) {
    if (_num_items_horiz === undefined) {
      _num_items_horiz = 1;
    }

    if (_num_items_vert === undefined) {
      _num_items_vert = 1;
    }

    const _horiz = _num_items_horiz || 1;
    const _vert = _num_items_vert || 1;

    this.spacing_x;
    this.spacing_y;
    this.num_items_horiz = 0;
    this.num_items_vert = 0;
    this.start = {x: _startx || 0 , y: _starty || 0};
    this.grid_w = _grid_w || 800;
    this.grid_h = _grid_h || 400;
    this.x = [];
    this.y = [];
    this.add(_horiz, _vert);
  }

  add(_horiz, _vert) {
    this.num_items_horiz += _horiz || 1;
    this.num_items_vert += _vert || 1;
    this.spacing_x = this.grid_w / this.num_items_horiz;
    this.spacing_y = this.grid_h / this.num_items_vert;
    this.createGrid();
    return this;
  }

  setStart(_x, _y) {
    this.start = {x: _x || 0 , y: _y || 0};
    this.createGrid();
    return this;
  }

  createGrid() {
    for (let _y = 0; _y < this.grid_h; _y+=this.spacing_y) {
      for (let _x = 0; _x < this.grid_w; _x+=this.spacing_x) {
        this.x.push(this.start.x + this.spacing_x/2 + _x);
        this.y.push(this.start.y + this.spacing_y/2 + _y);
      }
    }
  }
}