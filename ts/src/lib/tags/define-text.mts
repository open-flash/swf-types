import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $Matrix, Matrix } from "../matrix.mjs";
import { $Rect, Rect } from "../rect.mjs";
import { $TextRecord, TextRecord } from "../text/text-record.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

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
