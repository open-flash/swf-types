import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $Rect, Rect } from "../rect.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineScalingGrid extends _Tag {
  type: TagType.DefineScalingGrid;
  characterId: Uint16;
  splitter: Rect;
}

export const $DefineScalingGrid: RecordIoType<DefineScalingGrid> = new RecordType<DefineScalingGrid>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineScalingGrid as TagType.DefineScalingGrid})},
    characterId: {type: new IntegerType()},
    splitter: {type: $Rect},
  },
  changeCase: CaseStyle.SnakeCase,
});
