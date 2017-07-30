import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {Action as $Action} from "../../_circular-references";
import {Action} from "../action";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface With extends ActionBase {
  action: ActionType.With;
  with: Action[];
}

export namespace With {
  export interface Json {
    action: "with";
    with: Action.Json[];
  }

  export const type: DocumentType<With> = new DocumentType<With>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.With})},
      // TODO(demurgos): solve circular dependency
      with: {type: new ArrayType({itemType: $Action.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
