import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $Label, Label } from "../control/label.mjs";
import { $Scene, Scene } from "../control/scene.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

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
