import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $JoinStyleType, JoinStyleType } from "./_type.js";

export interface Bevel {
  type: JoinStyleType.Bevel;
}

export const $Bevel: RecordIoType<Bevel> = new RecordType<Bevel>({
  properties: {
    type: {type: new LiteralType({type: $JoinStyleType, value: JoinStyleType.Bevel as JoinStyleType.Bevel})},
  },
  changeCase: CaseStyle.SnakeCase,
});
