import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { IntegerType } from "kryo/lib/integer.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";

export interface Scene {
  offset: number;
  name: string;
}

export const $Scene: RecordIoType<Scene> = new RecordType<Scene>({
  properties: {
    offset: {type: new IntegerType()},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
