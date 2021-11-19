import React, { useEffect, useRef, useState } from "react";
import canvasUtils from "../../../utils/canvasUtils";
import drawLine from "./drawLine";
const { captureTouch, captureClick } = canvasUtils;
const Canvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const moveRef = useRef<any>({});
  const ctxRef = useRef<CanvasRenderingContext2D | null>();
  const [drawType, setDrawType] = useState("line");
  useEffect(() => {
    if (canvasRef.current) {
      const ctx = (ctxRef.current = canvasRef.current.getContext("2d"));
      captureTouch(canvasRef.current, moveEvent);
      captureClick(canvasRef.current, moveEvent);

      console.log(ctx);
      // draw();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let removeTouch = () => {};
    let removeClick = () => {};
    if (canvasRef.current) {
      removeTouch = captureTouch(canvasRef.current, moveEvent);
      removeClick = captureClick(canvasRef.current, moveEvent);
    }

    return () => {
      removeTouch && removeTouch();
      removeClick && removeClick();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawType]);
  const moveEvent = (type: string, event: any) => {
    moveRef.current = event;
    if (drawType === "line") {
      ctxRef.current && drawLine(event, ctxRef.current);
    }
  };

  // const draw: any = () => {
  //   drawPoint();
  //   // window.requestAnimationFrame(draw);
  // };
  // const drawLine = () => {
  //   if (ctxRef.current) {
  //     ctxRef.current.strokeStyle = "pink";
  //     ctxRef.current.moveTo(moveRef.current.x, moveRef.current.y);
  //     ctxRef.current.lineTo(100, 100);
  //     ctxRef.current.stroke();
  //   }
  // };
  // const drawPoint = (radius: number = 1, color: string = "rgba(0,0,0 )") => {
  //   if (ctxRef.current) {
  //     ctxRef.current?.beginPath();
  //     ctxRef.current?.arc(
  //       moveRef.current.x - radius,
  //       moveRef.current.y - radius,
  //       radius,
  //       0,
  //       Math.PI * 2
  //     );
  //     ctxRef.current?.closePath();
  //     ctxRef.current.fillStyle = color;
  //     ctxRef.current?.fill();
  //   }
  // };
  return (
    <canvas ref={canvasRef} style={{ height: "100%", width: "100%" }}></canvas>
  );
};
export default Canvas;
