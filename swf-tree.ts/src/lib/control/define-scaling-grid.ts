import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Rect} from "../basic-types/rect";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface DefineScalingGrid extends _Tag {
  type: TagType.DefineScalingGrid;
  characterId: Uint16;
  splitter: Rect;
}

export namespace DefineScalingGrid {
  export interface Json {
    type: "define-scaling-grid";
    character_id: number;
    splitter: Rect.Json;
  }

  export const type: DocumentType<DefineScalingGrid> = new DocumentType<DefineScalingGrid>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineScalingGrid})},
      characterId: {type: new Int32Type()},
      splitter: {type: Rect.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
