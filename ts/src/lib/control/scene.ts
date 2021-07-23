import { CaseStyle } from "kryo";
import { IntegerType } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

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
