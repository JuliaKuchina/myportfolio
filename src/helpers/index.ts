import { BaseType, Selection } from "d3-selection";
import {
  forceSimulation,
  forceManyBody,
  forceX,
  forceY,
  forceCollide,
} from "d3-force";

export const makeGradient = ({
  svg,
  startColor,
  endColor,
  ind,
}: {
  svg: any;
  startColor: string;
  endColor: string;
  ind: string;
}) => {
  //make defs and add the linear gradient
  let lg = svg
    .append("defs")
    .append("linearGradient")
    .attr("id", ind) //id of the gradient
    .attr("x1", "0%")
    .attr("x2", "0%")
    .attr("y1", "0%")
    .attr("y2", "100%"); //since its a vertical linear gradient

  lg.append("stop")
    .attr("offset", "0%")
    .style("stop-color", startColor)
    .style("stop-opacity", 1);

  lg.append("stop")
    .attr("offset", "100%")
    .style("stop-color", endColor)
    .style("stop-opacity", 1);
};

export const makeGradients = (
  svg: Selection<BaseType, unknown, HTMLElement, any>
) => {
  makeGradient({
    svg,
    startColor: "#16a085",
    endColor: "#f4d03f",
    ind: "greenGradient",
  });
  makeGradient({
    svg,
    startColor: "#fa709a",
    endColor: "#fee140",
    ind: "pinkGradient",
  });
  makeGradient({
    svg,
    startColor: "#e481c6",
    endColor: "#9e78fb",
    ind: "purpleGradient",
  });
  makeGradient({
    svg,
    startColor: "#9e78fb",
    endColor: "#61dafb",
    ind: "black",
  });
  makeGradient({
    svg,
    startColor: "#e481c6",
    endColor: "#9e78fb",
    ind: "purpleGradient",
  });
};

export const printGradient = (group: number, maxGroupNumber: number) => {
  switch (group) {
    case 5:
    case 1:
      return "url(#greenGradient)";
    case 2:
    case 3:
      return "url(#pinkGradient)";
    case 6:
    case 7:
      return "url(#purpleGradient)";
    case 4:
      return "url(#black)";
  }
  return;
};

// charge is dependent on size of the bubble, so bigger towards the middle
export function charge(d: any) {
  return Math.pow(d.radius, 2.0) * 0.001;
}

// create a force simulation and add forces to it
export const makeSimulation = (
  centre: { x: number; y: number },
  forceStrength: number
) => {
  return forceSimulation()
    .force("charge", forceManyBody().strength(charge))
    .force("x", forceX().strength(forceStrength).x(centre.x))
    .force("y", forceY().strength(forceStrength).y(centre.y))
    .force(
      "collision",
      forceCollide().radius((d: any) => d.radius + 1)
    );
};
