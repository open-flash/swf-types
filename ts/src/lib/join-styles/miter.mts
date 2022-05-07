import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { Sfixed8P8 } from "../fixed-point/sfixed8p8.mjs";
import { $JoinStyleType, JoinStyleType } from "./_type.mjs";

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
