import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DoInitAction extends _Tag {
  type: TagType.DoInitAction;
  spriteId: Uint16;
  actions: Uint8Array;
}

export const $DoInitAction: DocumentIoType<DoInitAction> = new DocumentType<DoInitAction>(() => ({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DoInitAction as TagType.DoInitAction})},
    spriteId: {type: $Uint16},
    actions: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
}));
