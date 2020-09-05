import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { _Tag } from "../tags/_tag.js";
import { $TagType, TagType } from "../tags/_type.js";

export interface ScriptLimits extends _Tag {
  type: TagType.ScriptLimits;
  maxRecursionDepth: Uint16;
  scriptTimeoutSeconds: Uint16;
}

export const $ScriptLimits: RecordIoType<ScriptLimits> = new RecordType<ScriptLimits>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ScriptLimits as TagType.ScriptLimits})},
    maxRecursionDepth: {type: $Uint16},
    scriptTimeoutSeconds: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
