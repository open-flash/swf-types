import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import * as avm1 from "../avm1/index";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface DoInitAction extends _Tag {
  type: TagType.DoInitAction;
  spriteId: Uint16;
  actions: avm1.Action[];
}

export namespace DoInitAction {
  export interface Json {
    type: "do-init-action";
    sprite_id: number;
    actions: avm1.Action.Json[];
  }

  export const type: DocumentType<DoInitAction> = new DocumentType<DoInitAction>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DoInitAction})},
      spriteid: {type: new Int32Type()},
      actions: {type: new ArrayType({itemType: avm1.Action.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
