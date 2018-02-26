import chai from "chai";
import { JsonValueReader } from "kryo/readers/json-value";
import { JsonValueWriter } from "kryo/writers/json-value";
import { Ufixed8P8 } from "../lib/fixed-point/ufixed8p8";
import { $Header, Header } from "../lib/header";
import { readTestJson } from "./test-resources";

describe("Header AST", function () {
  const reader: JsonValueReader = new JsonValueReader();
  const writer: JsonValueWriter = new JsonValueWriter();

  it("should read the example header", async function () {
    const astJson: any = await readTestJson("json/swf-header.json");
    const header: Header = $Header.read(reader, astJson);
    const expected: Header = {
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
    chai.assert.isTrue($Header.test(header));
    chai.assert.isTrue($Header.equals(header, expected));
    const serialized: any = $Header.write(writer, header);
    chai.assert.deepEqual(serialized, astJson);
  });
});
