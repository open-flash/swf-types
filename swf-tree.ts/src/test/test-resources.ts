import fs from "fs";
import path from "path";
import meta from "./meta";

const TEST_ROOT: string = path.join(meta.dirname, "../../../../test");

function resolvePath(relativePath: string): string {
  return path.join(TEST_ROOT, relativePath);
}

export async function readTestJson(relativePath: string): Promise<any> {
  return new Promise<any>((resolve, reject) => {
    fs.readFile(
      resolvePath(relativePath),
      {encoding: "UTF-8"},
      (err: Error | null, data: string): void => {
        if (err !== null) {
          reject(err);
        } else {
          try {
            resolve(JSON.parse(data));
          } catch (err) {
            reject(err);
          }
        }
      },
    );
  });
}
