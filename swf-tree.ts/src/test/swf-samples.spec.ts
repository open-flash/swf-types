import chai from "chai";
import { JsonReader } from "kryo/readers/json";
import { JsonValueWriter } from "kryo/writers/json-value";
import { $Movie, Movie } from "../lib/movie";
import { readTestString } from "./test-resources";

describe("Compatibility with SWF samples", function () {
  const reader: JsonReader = new JsonReader();
  const writer: JsonValueWriter = new JsonValueWriter();
  const astFiles: string[] = [
    "swf-samples/simple/blank/blank.ast.json",
    "swf-samples/simple/avm1/hello-world/hello-world.ast.json",
  ];

  for (const astFile of astFiles) {
    it(astFile, async function () {
      const inputJson: string = await readTestString(astFile);
      const movie: Movie = $Movie.read(reader, inputJson);
      chai.assert.isTrue($Movie.test(movie)); // Should always be true because `.read` returned
      const outputJson: string = JSON.stringify($Movie.write(writer, movie), null, 2);
      chai.assert.strictEqual(outputJson, inputJson);
    });
  }
});
