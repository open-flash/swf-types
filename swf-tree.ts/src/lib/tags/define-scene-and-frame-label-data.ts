import { ArrayType, CaseStyle, DocumentType, LiteralType } from "kryo";
import { Label } from "../control/label";
import { Scene } from "../control/scene";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineSceneAndFrameLabelData extends _Tag {
  type: TagType.DefineSceneAndFrameLabelData;
  scenes: Scene[];
  labels: Label[];
}

export namespace DefineSceneAndFrameLabelData {
  export interface Json {
    type: "define-scene-and-frame-label-data";
    scenes: Scene.Json[];
    labels: Label.Json[];
  }

  export const type: DocumentType<DefineSceneAndFrameLabelData> = new DocumentType<DefineSceneAndFrameLabelData>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineSceneAndFrameLabelData})},
      scenes: {type: new ArrayType({itemType: Scene.type, maxLength: Infinity})},
      labels: {type: new ArrayType({itemType: Label.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
