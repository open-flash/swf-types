import chai from "chai";
import fs from "fs";
import { IoType } from "kryo";
import { Float64Type } from "kryo/float64";
import { $Uint32 } from "kryo/integer";
import { JSON_READER } from "kryo-json/json-reader";
import { JSON_VALUE_WRITER } from "kryo-json/json-value-writer";
import sysPath from "path";

import { $ColorTransformWithAlpha } from "../lib/color-transform-with-alpha.js";
import { $Header } from "../lib/header.js";
import { $Matrix } from "../lib/matrix.js";
import { $Rect } from "../lib/rect.js";
import { $SwfSignature } from "../lib/swf-signature.js";
import meta from "./meta.js";
import { readTextFile } from "./utils.js";

const PROJECT_ROOT: string = sysPath.join(meta.dirname, "..");
const SAMPLES_ROOT: string = sysPath.join(PROJECT_ROOT, "..", "tests", "various");

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
      case "color-transform-with-alpha": {
        yield {name, type: $ColorTransformWithAlpha};
        break;
      }
      case "float16-le": {
        // TODO: new Float16Type()
        yield {name, type: new Float64Type()};
        break;
      }
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
