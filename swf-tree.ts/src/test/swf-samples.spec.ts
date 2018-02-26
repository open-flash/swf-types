import chai from "chai";
import { JsonValueReader } from "kryo/readers/json-value";
import { JsonValueWriter } from "kryo/writers/json-value";
import { $Movie, Movie } from "../lib/movie";
import { readTestJson } from "./test-resources";

describe("Compatibility with SWF samples", function () {
  const reader: JsonValueReader = new JsonValueReader();
  const writer: JsonValueWriter = new JsonValueWriter();
  const astFiles: string[] = [
    "swf-samples/simple/blank/blank.ast.json",
  ];

  for (const astFile of astFiles) {
    it(astFile, async function () {
      const inputJsonValue: any = await readTestJson(astFile);
      const movie: Movie = $Movie.read(reader, inputJsonValue);
      chai.assert.isTrue($Movie.test(movie)); // Should always be true because `.read` returned
      const outputJsonValue: any = $Movie.write(writer, movie);
      chai.assert.deepEqual(outputJsonValue, inputJsonValue);
    });
  }
});
