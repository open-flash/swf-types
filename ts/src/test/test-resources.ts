import fs from "fs";
import path from "path";

import meta from "./meta.js";

const TEST_ROOT: string = path.join(meta.dirname, "../../../../test");

function resolvePath(relativePath: string): string {
  return path.join(TEST_ROOT, relativePath);
}

export async function readTestString(relativePath: string): Promise<string> {
  return new Promise<any>((resolve, reject) => {
    fs.readFile(
      resolvePath(relativePath),
      {encoding: "utf-8"},
      (err: Error | null, data: string): void => {
        if (err !== null) {
          reject(err);
        } else {
          resolve(data);
        }
      },
    );
  });
}
