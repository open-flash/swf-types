import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $ButtonCond, ButtonCond } from "./button-cond";

export interface ButtonCondAction {
  readonly conditions?: ButtonCond;
  readonly actions: Uint8Array;
}

export const $ButtonCondAction: DocumentIoType<ButtonCondAction> = new DocumentType<ButtonCondAction>({
  properties: {
    conditions: {type: $ButtonCond, optional: true},
    actions: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
