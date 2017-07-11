import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Rect} from "../basic-types/rect";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineScalingGrid extends SwfTagBase {
  type: SwfTagType.DefineScalingGrid;
  characterId: Uint16;
  splitter: Rect;
}

export namespace DefineScalingGrid {
  export interface Json {
    type: "define-scaling-grid";
    "character-id": number;
    "splitter": Rect.Json;
  }

  export const type: DocumentType<DefineScalingGrid> = new DocumentType<DefineScalingGrid>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineScalingGrid})},
      characterId: {type: new Int32Type()},
      splitter: {type: Rect.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
