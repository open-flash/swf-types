import {CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface ScriptLimits extends _Tag {
  type: TagType.ScriptLimits;
  maxRecursionDepth: Uint16;
  scriptTimeoutSeconds: Uint16;
}

export namespace ScriptLimits {
  export interface Json {
    type: "script-limits";
    max_recursion_depth: number;
    script_timeout_seconds: number;
  }

  export const type: DocumentType<ScriptLimits> = new DocumentType<ScriptLimits>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.ScriptLimits})},
      maxRecursionDepth: {type: new IntegerType()},
      scriptTimeoutSeconds: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
