import canvasUtils from "../../../utils/canvasUtils";

type PreXYType = {
  x: number | null;
  y: number | null;
};
const preXY: PreXYType = { x: null, y: null };
const drawLine = (event: any, ctx: CanvasRenderingContext2D) => {
  const { x, y, isPressed } = event;
  // 结束时候回位
  if (!isPressed) {
    preXY.x = null;
    preXY.y = null;
  }
  // 开始时候记录
  if (preXY.x === null && preXY.y === null) {
    preXY.x = x;
    preXY.y = y;
    return;
  }
  ctx.beginPath();
  ctx.strokeStyle = "pink";
  ctx.quadraticCurveTo(preXY.x as number, preXY.y as number, x, y);
  ctx.stroke();
  ctx.closePath();

  // 记录上一次的位置
  preXY.x = x;
  preXY.y = y;
};

export default drawLine;
