import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface ScriptLimits extends SwfTagBase {
  type: SwfTagType.ScriptLimits;
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
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.ScriptLimits})},
      maxRecursionDepth: {type: new Int32Type()},
      scriptTimeoutSeconds: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
