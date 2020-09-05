import fs from "fs";
import sysPath from "path";
import { UintSize } from "semantic-types";
import meta from "./meta.js";

export const testResourcesRoot: string = meta.dirname;

export function readTestResource(path: string): Buffer {
  return fs.readFileSync(sysPath.resolve(testResourcesRoot, path));
}

export function readTestJson(path: string): any {
  return JSON.parse(readTestResource(path).toString("utf-8"));
}

export async function readTextFile(filePath: fs.PathLike): Promise<string> {
  return new Promise<string>((resolve, reject): void => {
    fs.readFile(filePath, {encoding: "utf-8"}, (err: NodeJS.ErrnoException | null, data: string): void => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export async function readFile(filePath: fs.PathLike): Promise<Buffer> {
  return new Promise<Buffer>((resolve, reject): void => {
    fs.readFile(filePath, {encoding: null}, (err: NodeJS.ErrnoException | null, data: Buffer): void => {
      if (err !== null) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

export async function writeTextFile(filePath: fs.PathLike, text: string): Promise<void> {
  return new Promise<void>((resolve, reject): void => {
    fs.writeFile(filePath, text, (err: NodeJS.ErrnoException | null): void => {
      if (err !== null) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

export function prettyPrintBytes(bytes: Uint8Array): string {
  const lines: string[] = [];
  for (let i: UintSize = 0; i < bytes.length; i += 16) {
    const slice: Uint8Array = bytes.slice(i, i + 16);
    const sliceHex: string[] = [];
    for (let j: UintSize = 0; j < slice.length; j += 4) {
      sliceHex.push(Buffer.from(slice.slice(j, j + 4)).toString("hex"));
    }
    lines.push(sliceHex.join(" "));
  }
  return `${lines.join("\n")}\n`;
}
