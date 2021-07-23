import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $JoinStyleType, JoinStyleType } from "./_type.js";

export interface Round {
  type: JoinStyleType.Round;
}

export const $Round: RecordIoType<Round> = new RecordType<Round>({
  properties: {
    type: {type: new LiteralType({type: $JoinStyleType, value: JoinStyleType.Round as JoinStyleType.Round})},
  },
  changeCase: CaseStyle.SnakeCase,
});
