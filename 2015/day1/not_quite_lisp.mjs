/**
 * ( = go up
 * ) = go down
 * there is no top or bottom
 * start on floor 0
 */

import fs from "fs";

try {
  const data = fs.readFileSync("./input.txt", "utf8");
  let floor = 0;

  for (const x of data) {
    if (x === "(") floor++;
    else floor--;
  }
  console.log(`Answer: ${floor}`);
} catch (err) {
  console.error(err);
}
