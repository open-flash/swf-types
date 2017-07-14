import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {Action as _Action} from "../../circular-references";
import {Action} from "../action";
import {ActionType} from "../action-type";
import {CatchTarget} from "../catch-target";
import {ActionBase} from "./_base";

export interface Try extends ActionBase {
  action: ActionType.Try;
  try: Action[];
  catch?: Action[];
  catchTarget?: CatchTarget;
  finally?: Action[];
}

export namespace Try {
  export interface Json {
    action: "try";
    try: Action.Json[];
    catch?: Action.Json[];
    catch_target?: CatchTarget.Json;
    finally?: Action.Json[];
  }

  export const type: DocumentType<Try> = new DocumentType<Try>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.Try})},
      // TODO(demurgos): solve circular dependency
      try: {type: new ArrayType({itemType: _Action.type, maxLength: Infinity})},
      // TODO(demurgos): solve circular dependency
      catch: {type: new ArrayType({itemType: _Action.type, maxLength: Infinity}), optional: true},
      catchTarget: {type: CatchTarget.type, optional: true},
      // TODO(demurgos): solve circular dependency
      finally: {type: new ArrayType({itemType: _Action.type, maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
