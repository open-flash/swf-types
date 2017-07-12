import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface GotoLabel extends ActionBase {
  action: ActionType.GotoLabel;
  label: string;
}

export namespace GotoLabel {
  export interface Json {
    action: "goto-label";
    label: string;
  }

  export const type: DocumentType<GotoLabel> = new DocumentType<GotoLabel>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.GotoLabel})},
      label: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
