import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $Matrix, Matrix } from "../matrix.js";
import { $Rect, Rect } from "../rect.js";
import { $TextRecord, TextRecord } from "../text/text-record.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineText extends _Tag {
  readonly type: TagType.DefineText;
  readonly id: Uint16;
  readonly bounds: Rect;
  readonly matrix: Matrix;
  readonly records: ReadonlyArray<TextRecord>;
}

export const $DefineText: RecordIoType<DefineText> = new RecordType<DefineText>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineText as TagType.DefineText})},
    id: {type: $Uint16},
    bounds: {type: $Rect},
    matrix: {type: $Matrix},
    records: {type: new ArrayType({itemType: $TextRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
