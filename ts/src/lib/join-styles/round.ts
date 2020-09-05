import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
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
