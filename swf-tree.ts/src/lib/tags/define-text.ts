import { ArrayType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { Matrix } from "../matrix";
import { Rect } from "../rect";
import { TextRecord } from "../text/text-record";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DefineText extends _Tag {
  type: TagType.DefineText;
  id: Uint16;
  bounds: Rect;
  matrix: Matrix;
  records: TextRecord[];
}

export namespace DefineText {
  export interface Json {
    type: "define-text";
    id: number;
    bounds: Rect.Json;
    matrix: Matrix.Json;
    records: TextRecord.Json[];
  }

  export const type: DocumentType<DefineText> = new DocumentType<DefineText>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineText})},
      id: {type: new IntegerType()},
      bounds: {type: Rect.type},
      matrix: {type: Matrix.type},
      records: {type: new ArrayType({itemType: TextRecord.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
