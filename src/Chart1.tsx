import { scaleOrdinal } from "d3-scale";
import { forceSimulation } from "d3-force";
import { quadtree as quadtreeD3 } from "d3-quadtree";
import { TECHNOLOGIES } from "./constants/projects";
import { NodeType, Technology } from "./types";

export const TechChart = () => {
  const width = 960,
    height = 500,
    padding = 1.5, // separation between same-color nodes
    clusterPadding = 6, // separation between different-color nodes
    maxRadius = 12;

  const color = scaleOrdinal().range(["#7A99AC", "#E4002B"]);

  const draw = (data: Technology[]) => {
    data.forEach(function (d) {
      d.size = +d.size;
    });

    //unique cluster/group id's
    const groupIds: number[] = [];
    data.forEach(function (d) {
      if (!groupIds.includes(d.group)) {
        groupIds.push(d.group);
      }
    });

    const numberOfNodes = data.length, // total number of nodes
      numberOfClusters = groupIds.length; // number of distinct clusters

    //create clusters and nodes
    const clusters = new Array(numberOfClusters);
    const nodes: NodeType[] = [];
    for (let i = 0; i < numberOfNodes; i++) {
      // nodes.push(create_nodes(data, i));
    }

    // const force = forceSimulation
    //   .nodes(nodes)
    //   .force()
    //   .size([width, height])
    //   .gravity(0.02)
    //   .charge(0)
    //   .on("tick", tick)
    //   .start();

    // const svg = d3
    //   .select("body")
    //   .append("svg")
    //   .attr("width", width)
    //   .attr("height", height);

    // const node = svg
    //   .selectAll("circle")
    //   .data(nodes)
    //   .enter()
    //   .append("g")
    //   .call(force.drag);

    // node
    //   .append("circle")
    //   .style("fill", function (d) {
    //     return color(d.cluster);
    //   })
    //   .attr("r", function (d) {
    //     return d.radius;
    //   });

    // node
    //   .append("text")
    //   .attr("dy", ".3em")
    //   .style("text-anchor", "middle")
    //   .text(function (d) {
    //     return d.text.substring(0, d.radius / 3);
    //   });

    // function create_nodes(data, node_counter): NodeType {
    //   const i = groupIds.indexOf(data[node_counter].group),
    //     r =
    //       Math.sqrt(((i + 1) / numberOfClusters) * -Math.log(Math.random())) *
    //       maxRadius,
    //     d = {
    //       cluster: i,
    //       radius: data[node_counter].size * 1.5,
    //       text: data[node_counter].text,
    //       x:
    //         Math.cos((i / numberOfClusters) * 2 * Math.PI) * 200 +
    //         width / 2 +
    //         Math.random(),
    //       y:
    //         Math.sin((i / numberOfClusters) * 2 * Math.PI) * 200 +
    //         height / 2 +
    //         Math.random(),
    //     };
    //   if (!clusters[i] || r > clusters[i].radius) clusters[i] = d;
    //   return d;
    // }

    // function tick(e) {
    //   node
    //     .each(cluster(10 * e.alpha * e.alpha))
    //     .each(collide(0.5))
    //     .attr("transform", function (d) {
    //       const k = "translate(" + d.x + "," + d.y + ")";
    //       return k;
    //     });
    // }

    // // Move d to be adjacent to the cluster node.
    // function cluster(alpha) {
    //   return function (d) {
    //     const cluster = clusters[d.cluster];
    //     if (cluster === d) return;
    //     const x = d.x - cluster.x,
    //       y = d.y - cluster.y,
    //       l = Math.sqrt(x * x + y * y),
    //       r = d.radius + cluster.radius;
    //     if (l != r) {
    //       l = ((l - r) / l) * alpha;
    //       d.x -= x *= l;
    //       d.y -= y *= l;
    //       cluster.x += x;
    //       cluster.y += y;
    //     }
    //   };
  };

  //   // Resolves collisions between d and all other circles.
  //   function collide(alpha) {
  //     const quadtree = quadtreeD3(nodes);
  //     return function (d) {
  //       const r = d.radius + maxRadius + Math.max(padding, clusterPadding),
  //         nx1 = d.x - r,
  //         nx2 = d.x + r,
  //         ny1 = d.y - r,
  //         ny2 = d.y + r;
  //       quadtree.visit(function (quad, x1, y1, x2, y2) {
  //         if (quad.point && quad.point !== d) {
  //           const x = d.x - quad.point.x,
  //             y = d.y - quad.point.y,
  //             l = Math.sqrt(x * x + y * y),
  //             r =
  //               d.radius +
  //               quad.point.radius +
  //               (d.cluster === quad.point.cluster ? padding : clusterPadding);
  //           if (l < r) {
  //             l = ((l - r) / l) * alpha;
  //             d.x -= x *= l;
  //             d.y -= y *= l;
  //             quad.point.x += x;
  //             quad.point.y += y;
  //           }
  //         }
  //         return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
  //       });
  //     };
  //   }
  // };
  // draw(TECHNOLOGIES);

  return <div></div>;
};
