/**
 * F+V-E=2.
 * the numbers of faces F, of vertices V, and of edges E of any convex polyhedron
 *
 * 6 rectangles
 * (length l, width w, and height h)
 * 2x3x4
 */

import fs from "fs";

try {
  const data = fs.readFileSync("./input.txt", "utf8");
  let totalSquareFeetOfWrappingPaper = 0;

  for (const x of data.split("\n")) {
    console.log(x);
    const [l, w, h] = x.split("x");
    const sides = [l * w, l * w, w * h, w * h, h * l, h * l];
    const smallestSideArea = Math.min(...sides);

    totalSquareFeetOfWrappingPaper +=
      sides.reduce((acc, x) => acc + x, 0) + smallestSideArea;
  }

  console.log(`Answer: ${totalSquareFeetOfWrappingPaper}`);
} catch (err) {
  console.error(err);
}
