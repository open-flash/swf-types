import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Matrix} from "../basic-types/matrix";
import {Rect} from "../basic-types/rect";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {TextRecord} from "./text-record";

export interface DefineText extends _Tag {
  type: TagType.DefineText;
  characterId: Uint16;
  textBounds: Rect;
  textMatrix: Matrix;
  textRecords: TextRecord[];
}

export namespace DefineText {
  export interface Json {
    type: "define-text";
    character_id: number;
    text_bounds: Rect.Json;
    text_matrix: Matrix.Json;
    text_records: TextRecord.Json[];
  }

  export const type: DocumentType<DefineText> = new DocumentType<DefineText>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineText})},
      characterId: {type: new Int32Type()},
      textBounds: {type: Rect.type},
      textMatrix: {type: Matrix.type},
      fontBoundsTable: {type: new ArrayType({itemType: TextRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
