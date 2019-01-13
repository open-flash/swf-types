import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $Rect, Rect } from "../rect";
import { $Shape, Shape } from "../shape";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

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

export const $DefineShape: DocumentIoType<DefineShape> = new DocumentType<DefineShape>({
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
