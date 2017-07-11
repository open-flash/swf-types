import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {Rect} from "../basic-types/rect";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {TextRecord} from "./text-record";

export interface DefineText2 extends SwfTagBase {
  type: SwfTagType.DefineText2;
  characterId: Uint16;
  textBounds: Rect;
  textMatrix: Matrix;
  textRecords: TextRecord[];
}

export namespace DefineText2 {
  export interface Json {
    type: "define-text2";
    "character-id": number;
    "text-bounds": Rect.Json;
    "text-matrix": Matrix.Json;
    "text-records": TextRecord.Json[];
  }

  export const type: DocumentType<DefineText2> = new DocumentType<DefineText2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineText2})},
      characterId: {type: new Int32Type()},
      textBounds: {type: Rect.type},
      textMatrix: {type: Matrix.type},
      fontBoundsTable: {type: new ArrayType({itemType: TextRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
