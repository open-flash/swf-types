import chai from "chai";
import fs from "fs";
import { JsonReader } from "kryo/readers/json";
import { JsonValueWriter } from "kryo/writers/json-value";
import sysPath from "path";
import { $Tag, Tag } from "../lib/tag";
import meta from "./meta.js";
import { readTextFile } from "./utils";

const PROJECT_ROOT: string = sysPath.join(meta.dirname, "..", "..", "..");
const TAG_SAMPLES_ROOT: string = sysPath.join(PROJECT_ROOT, "..", "tests", "tags");

const JSON_READER: JsonReader = new JsonReader();
const JSON_VALUE_WRITER: JsonValueWriter = new JsonValueWriter();
// `BLACKLIST` can be used to forcefully skip some tests.
const BLACKLIST: ReadonlySet<string> = new Set([
  // "define-shape/shape1-squares",
]);
// `WHITELIST` can be used to only enable a few tests.
const WHITELIST: ReadonlySet<string> = new Set([
  // "place-object2/place-id-1",
  // "place-object3/update-depth-1",
]);

describe("tags", function () {
  for (const group of getSampleGroups()) {
    describe(group.name, function () {
      for (const sample of getSamplesFromGroup(group.name)) {
        it(sample.name, async function () {
          const valueJson: string = await readTextFile(sample.valuePath);
          const value: Tag = $Tag.read(JSON_READER, valueJson);

          chai.assert.isUndefined($Tag.testError(value));

          const outputJson: string = `${JSON.stringify($Tag.write(JSON_VALUE_WRITER, value), null, 2)}\n`;
          chai.assert.strictEqual(outputJson, valueJson);
        });
      }
    });
  }
});

interface SampleGroup {
  name: string;
}

function* getSampleGroups(): IterableIterator<SampleGroup> {
  for (const dirEnt of fs.readdirSync(TAG_SAMPLES_ROOT, {withFileTypes: true})) {
    if (!dirEnt.isDirectory()) {
      continue;
    }
    yield {name: dirEnt.name};
  }
}

interface Sample {
  name: string;
  valuePath: string;
}

function* getSamplesFromGroup(group: string): IterableIterator<Sample> {
  const groupPath: string = sysPath.join(TAG_SAMPLES_ROOT, group);
  for (const dirEnt of fs.readdirSync(groupPath, {withFileTypes: true})) {
    if (!dirEnt.isDirectory()) {
      continue;
    }
    const testName: string = dirEnt.name;
    const testPath: string = sysPath.join(groupPath, testName);

    if (BLACKLIST.has(`${group}/${testName}`)) {
      continue;
    } else if (WHITELIST.size > 0 && !WHITELIST.has(`${group}/${testName}`)) {
      continue;
    }

    const valuePath: string = sysPath.join(testPath, "value.json");

    yield {name: testName, valuePath};
  }
}
