import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $Matrix, Matrix } from "../matrix";
import { $Rect, Rect } from "../rect";
import { $TextRecord, TextRecord } from "../text/text-record";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineText extends _Tag {
  type: TagType.DefineText;
  id: Uint16;
  bounds: Rect;
  matrix: Matrix;
  records: TextRecord[];
}

export const $DefineText: DocumentIoType<DefineText> = new DocumentType<DefineText>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineText as TagType.DefineText})},
    id: {type: $Uint16},
    bounds: {type: $Rect},
    matrix: {type: $Matrix},
    records: {type: new ArrayType({itemType: $TextRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
