import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface SetTabIndex extends SwfTagBase {
  type: SwfTagType.SetTabIndex;
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
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.SetTabIndex})},
      depth: {type: new Int32Type()},
      tabIndex: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
