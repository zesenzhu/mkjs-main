interface StarProps {
  ctx: CanvasRenderingContext2D;
  x?: number;
  y?: number;
}
export interface StarInterface {
  x?: number;
  y?: number;
  draw: () => void;
  ctx: CanvasRenderingContext2D;
  canDraw: boolean;
  drawStar: () => void;
}

const CANVAS_WIDTH = 300;
const CANVAS_HEIGHT = 150;
export default class star implements StarInterface {
  x = 0;
  y = 0;
  width = CANVAS_WIDTH;
  height = CANVAS_HEIGHT;
  canDraw = false;
  ctx: CanvasRenderingContext2D;
  targetX = 0;
  targetY = 0;
  step = 0.1;
  addSubX = 0;
  addSubY = 0;
  constructor(props: StarProps) {
    console.log(props.ctx.canvas);
    const { ctx, x, y } = props;

    // if (ctx instanceof CanvasRenderingContext2D) {
    this.canDraw = true;
    this.ctx = ctx;
    this.width = ctx.canvas.width;
    this.height = ctx.canvas.height;
    this.x = x || Math.round(ctx.canvas.width * Math.random());
    this.y = y || Math.round(ctx.canvas.height * Math.random());
    // }
    // this.draw();
  }

  draw = () => {
    this.moveStar();
    this.drawStar();
  };

  drawStar = () => {
    const { ctx, x, y, width, height } = this;
    // ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(x, y, 1.5, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.fill();
  };
  moveStar = () => {
    let { targetX, targetY, ctx, height, width, step } = this;

    while (!this.targetX) {
      this.addSubX = Math.random() > 0.5 ? step : -step;
      this.targetX = Math.round(width * Math.random());
      this.targetX = this.addSubX < 0 ? this.targetX : -this.targetX;
    }
    while (!this.targetY) {
      this.addSubY = Math.random() > 0.5 ? step : -step;
      this.targetY = Math.round(height * Math.random());
      this.targetY = this.addSubY < 0 ? this.targetY : -this.targetY;
    }
    this.x += this.addSubX;
    this.y += this.addSubY;

    this.targetX += this.addSubX;
    this.targetY += this.addSubY;
  };
}
