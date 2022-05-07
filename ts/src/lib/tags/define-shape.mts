import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $Rect, Rect } from "../rect.mjs";
import { $Shape, Shape } from "../shape.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface DefineShape extends _Tag {
  readonly type: TagType.DefineShape;
  readonly id: Uint16;
  readonly bounds: Rect;
  readonly edgeBounds?: Rect;
  readonly hasFillWinding: boolean;
  readonly hasNonScalingStrokes: boolean;
  readonly hasScalingStrokes: boolean;
  readonly shape: Shape;
}

export const $DefineShape: RecordIoType<DefineShape> = new RecordType<DefineShape>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineShape as TagType.DefineShape})},
    id: {type: $Uint16},
    bounds: {type: $Rect},
    edgeBounds: {type: $Rect, optional: true},
    hasFillWinding: {type: $Boolean},
    hasNonScalingStrokes: {type: $Boolean},
    hasScalingStrokes: {type: $Boolean},
    shape: {type: $Shape},
  },
  changeCase: CaseStyle.SnakeCase,
});
