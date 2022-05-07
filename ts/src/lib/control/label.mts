import { CaseStyle } from "kryo";
import { IntegerType } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

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
