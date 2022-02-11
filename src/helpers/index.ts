import { Selection } from "d3-selection";

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
    .style("stop-color", startColor) //end in red
    .style("stop-opacity", 1);

  lg.append("stop")
    .attr("offset", "100%")
    .style("stop-color", endColor) //start in blue
    .style("stop-opacity", 1);
};

export const makeGradients = (
  svg: Selection<any, unknown, null, undefined>
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
