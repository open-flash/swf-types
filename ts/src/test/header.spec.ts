import chai from "chai";
import { JsonReader } from "kryo/readers/json";
import { JsonValueWriter } from "kryo/writers/json-value";
import { Ufixed8P8 } from "../lib/fixed-point/ufixed8p8";
import { $Header, Header } from "../lib/header";
import { readTestString } from "./test-resources";

describe("Header AST", function () {
  const reader: JsonReader = new JsonReader();
  const writer: JsonValueWriter = new JsonValueWriter();

  it("should read the example header", async function () {
    const inputJson: any = await readTestString("json/swf-header.json");
    const actualHeader: Header = $Header.read(reader, inputJson);
    const expectedHeader: Header = {
      frameCount: 1,
      frameRate: Ufixed8P8.fromValue(24),
      frameSize: {
        xMin: 0,
        xMax: 11000,
        yMin: 0,
        yMax: 8000,
      },
      swfVersion: 34,
    };
    chai.assert.isTrue($Header.test(actualHeader));
    chai.assert.isTrue($Header.equals(actualHeader, expectedHeader));
    const outputJson: string = JSON.stringify($Header.write(writer, actualHeader), null, 2);
    chai.assert.deepEqual(outputJson, inputJson);
  });
});
