import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";

export interface SetTabIndex extends _Tag {
  type: TagType.SetTabIndex;
  depth: Uint16;
  tabIndex: Uint16;
}

export const $SetTabIndex: DocumentIoType<SetTabIndex> = new DocumentType<SetTabIndex>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SetTabIndex as TagType.SetTabIndex})},
    depth: {type: $Uint16},
    tabIndex: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
