import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $ShapeRecord, ShapeRecord } from "./shape-record.js";

export interface Glyph {
  records: ShapeRecord[];
}

export const $Glyph: RecordIoType<Glyph> = new RecordType<Glyph>({
  properties: {
    records: {type: new ArrayType({itemType: $ShapeRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
