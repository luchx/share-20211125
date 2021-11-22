registerPaint(
  'background-canvas',
  class {
    static get inputProperties() {
      return ['--background-canvas', '--arcColor'];
    }
    paint(ctx, geom, properties) {
      //   eval(properties.get('--background-canvas').toString())(
      //     ctx,
      //     geom,
      //     properties
      //   );
      //
      // console.log(properties.get('--arcColor'))
      ctx.strokeStyle = `var(--arcColor)`;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(200, 200, 50, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    }
  }
);
