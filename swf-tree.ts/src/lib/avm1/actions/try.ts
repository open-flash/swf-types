import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
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
      try: {type: new ArrayType({itemType: Action.type, maxLength: Infinity})},
      catch: {type: new ArrayType({itemType: Action.type, maxLength: Infinity}), optional: true},
      catchTarget: {type: CatchTarget.type, optional: true},
      finally: {type: new ArrayType({itemType: Action.type, maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
