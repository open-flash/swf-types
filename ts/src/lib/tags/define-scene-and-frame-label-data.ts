import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { $Label, Label } from "../control/label.js";
import { $Scene, Scene } from "../control/scene.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineSceneAndFrameLabelData extends _Tag {
  readonly type: TagType.DefineSceneAndFrameLabelData;
  readonly scenes: ReadonlyArray<Scene>;
  readonly labels: ReadonlyArray<Label>;
}

// tslint:disable-next-line:max-line-length
export const $DefineSceneAndFrameLabelData: RecordIoType<DefineSceneAndFrameLabelData> = new RecordType<DefineSceneAndFrameLabelData>({
  properties: {
    type: {
      type: new LiteralType({
        type: $TagType,
        value: TagType.DefineSceneAndFrameLabelData as TagType.DefineSceneAndFrameLabelData,
      }),
    },
    scenes: {type: new ArrayType({itemType: $Scene, maxLength: Infinity})},
    labels: {type: new ArrayType({itemType: $Label, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
