import { CaseStyle } from "kryo";
import { IntegerType } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

export interface Label {
  frame: number;
  name: string;
}

export const $Label: RecordIoType<Label> = new RecordType<Label>({
  properties: {
    frame: {type: new IntegerType()},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
