import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";

export interface ScriptLimits extends _Tag {
  type: TagType.ScriptLimits;
  maxRecursionDepth: Uint16;
  scriptTimeoutSeconds: Uint16;
}

export const $ScriptLimits: DocumentIoType<ScriptLimits> = new DocumentType<ScriptLimits>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ScriptLimits as TagType.ScriptLimits})},
    maxRecursionDepth: {type: $Uint16},
    scriptTimeoutSeconds: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
