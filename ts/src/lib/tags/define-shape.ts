import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { $Rect, Rect } from "../rect.js";
import { $Shape, Shape } from "../shape.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

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
