import * as Isomer from "isomer";

var Shape = Isomer.Shape;
var Point = Isomer.Point;
var Color = Isomer.Color;
var red = new Color(160, 60, 50);
var blue = new Color(50, 60, 160);

const iso = new Isomer(document.getElementById("art"));

iso.add(Shape.Prism(Point.ORIGIN, 3, 3, 1));
iso.add(Shape.Pyramid(Point(0, 2, 1)), red);
iso.add(Shape.Prism(Point(2, 0, 1)), blue);

const IsomerComponent = () => {
  return <canvas width="800" height="600" id="art"></canvas>;
};

export default IsomerComponent;
