import chai from "chai";
import fs from "fs";
import { $Uint32 } from "kryo/builtins/uint32";
import { IoType } from "kryo/core";
import { JsonReader } from "kryo/readers/json";
import { JsonValueWriter } from "kryo/writers/json-value";
import sysPath from "path";
import { $Header } from "../lib/header";
import { $Matrix } from "../lib/matrix";
import { $Rect } from "../lib/rect";
import { $SwfSignature } from "../lib/swf-signature";
import meta from "./meta.js";
import { readTextFile } from "./utils";

const PROJECT_ROOT: string = sysPath.join(meta.dirname, "..", "..", "..");
const SAMPLES_ROOT: string = sysPath.join(PROJECT_ROOT, "..", "tests", "various");

const JSON_READER: JsonReader = new JsonReader();
const JSON_VALUE_WRITER: JsonValueWriter = new JsonValueWriter();

for (const group of getSampleGroups()) {
  describe(group.name, function () {
    for (const sample of getSamplesFromGroup(group.name)) {
      it(sample.name, async function () {
        const valueJson: string = await readTextFile(sample.valuePath);
        const value: any = group.type.read(JSON_READER, valueJson);

        chai.assert.isUndefined(group.type.testError!(value));

        const outputJson: string = `${JSON.stringify(group.type.write(JSON_VALUE_WRITER, value), null, 2)}\n`;
        chai.assert.strictEqual(outputJson, valueJson);
      });
    }
  });
}

interface SampleGroup<T> {
  name: string;
  type: IoType<T>;
}

function* getSampleGroups(): IterableIterator<SampleGroup<any>> {
  for (const dirEnt of fs.readdirSync(SAMPLES_ROOT, {withFileTypes: true})) {
    if (!dirEnt.isDirectory()) {
      continue;
    }
    const name: string = dirEnt.name;
    switch (name) {
      case "header": {
        yield {name, type: $Header};
        break;
      }
      case "matrix": {
        yield {name, type: $Matrix};
        break;
      }
      case "rect": {
        yield {name, type: $Rect};
        break;
      }
      case "swf-signature": {
        yield {name, type: $SwfSignature};
        break;
      }
      case "uint32-leb128": {
        yield {name, type: $Uint32};
        break;
      }
      default:
        throw new Error(`Unknown sample group: ${name}`);
    }
  }
}

interface Sample {
  name: string;
  valuePath: string;
}

function* getSamplesFromGroup(group: string): IterableIterator<Sample> {
  const groupPath: string = sysPath.join(SAMPLES_ROOT, group);
  for (const dirEnt of fs.readdirSync(groupPath, {withFileTypes: true})) {
    if (!dirEnt.isDirectory()) {
      continue;
    }
    const testName: string = dirEnt.name;
    const testPath: string = sysPath.join(groupPath, testName);

    const valuePath: string = sysPath.join(testPath, "value.json");

    yield {name: testName, valuePath};
  }
}
