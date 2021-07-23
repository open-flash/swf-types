import chai from "chai";
import fs from "fs";
import { JSON_READER } from "kryo-json/json-reader";
import { JSON_VALUE_WRITER } from "kryo-json/json-value-writer";
import sysPath from "path";

import { $Movie, Movie } from "../lib/movie.js";
import meta from "./meta.js";

const PROJECT_ROOT: string = sysPath.join(meta.dirname, "..");
const TEST_SAMPLES_ROOT: string = sysPath.join(PROJECT_ROOT, "..", "tests", "movies");

describe("Movie", function () {
  for (const sample of getSamples()) {
    it(sample.name, async function () {
      const inputJson: string = await readTextFile(sysPath.join(TEST_SAMPLES_ROOT, sample.name, "ast.json"));
      const movie: Movie = $Movie.read(JSON_READER, inputJson);
      // Read the AST JSON into a valid Movie
      chai.assert.isTrue($Movie.test(movie));

      const outputJson: string = `${JSON.stringify($Movie.write(JSON_VALUE_WRITER, movie), null, 2)}\n`;
      chai.assert.strictEqual(outputJson, inputJson);
    });
  }
});

async function readTextFile(filePath: fs.PathLike): Promise<string> {
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

interface Sample {
  name: string;
}

function* getSamples(): IterableIterator<Sample> {
  yield {name: "blank"};
  yield {name: "hello-world"};
  yield {name: "morph-rotating-square"};
  yield {name: "squares"};
}
