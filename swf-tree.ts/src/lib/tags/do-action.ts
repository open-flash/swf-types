import { ArrayType, CaseStyle, DocumentType, LiteralType } from "kryo";
import * as avm1 from "../avm1/index";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface DoAction extends _Tag {
  type: TagType.DoAction;
  actions: avm1.Action[];
}

export namespace DoAction {
  export interface Json {
    type: "do-action";
    actions: avm1.Action.Json[];
  }

  export const type: DocumentType<DoAction> = new DocumentType<DoAction>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DoAction})},
      actions: {type: new ArrayType({itemType: avm1.Action.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
