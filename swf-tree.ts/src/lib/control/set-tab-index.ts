import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface SetTabIndex extends _Tag {
  type: TagType.SetTabIndex;
  depth: Uint16;
  tabIndex: Uint16;
}

export namespace SetTabIndex {
  export interface Json {
    type: "set-tab-index";
    depth: number;
    tab_index: number;
  }

  export const type: DocumentType<SetTabIndex> = new DocumentType<SetTabIndex>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SetTabIndex})},
      depth: {type: new Int32Type()},
      tabIndex: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
