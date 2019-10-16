import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $Rect, Rect } from "../rect";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineScalingGrid extends _Tag {
  type: TagType.DefineScalingGrid;
  characterId: Uint16;
  splitter: Rect;
}

export const $DefineScalingGrid: DocumentIoType<DefineScalingGrid> = new DocumentType<DefineScalingGrid>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineScalingGrid as TagType.DefineScalingGrid})},
    characterId: {type: new IntegerType()},
    splitter: {type: $Rect},
  },
  changeCase: CaseStyle.SnakeCase,
});
