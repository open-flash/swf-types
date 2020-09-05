import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Sfixed8P8 } from "../fixed-point/sfixed8p8.js";
import { $JoinStyleType, JoinStyleType } from "./_type.js";

export interface Miter {
  type: JoinStyleType.Miter;
  limit: Sfixed8P8;
}

export const $Miter: RecordIoType<Miter> = new RecordType<Miter>({
  properties: {
    type: {type: new LiteralType({type: $JoinStyleType, value: JoinStyleType.Miter as JoinStyleType.Miter})},
    limit: {type: Sfixed8P8},
  },
  changeCase: CaseStyle.SnakeCase,
});
