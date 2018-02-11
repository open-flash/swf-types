import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $Label, Label } from "../control/label";
import { $Scene, Scene } from "../control/scene";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineSceneAndFrameLabelData extends _Tag {
  type: TagType.DefineSceneAndFrameLabelData;
  scenes: Scene[];
  labels: Label[];
}

// tslint:disable-next-line:max-line-length
export const $DefineSceneAndFrameLabelData: DocumentIoType<DefineSceneAndFrameLabelData> = new DocumentType<DefineSceneAndFrameLabelData>({
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
