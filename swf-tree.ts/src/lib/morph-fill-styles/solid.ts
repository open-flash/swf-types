import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8";
import { $MorphFillStyleType, MorphFillStyleType } from "./_type";

export interface Solid {
  type: MorphFillStyleType.Solid;
  startColor: StraightSRgba8;
  endColor: StraightSRgba8;
}

export const $Solid: DocumentIoType<Solid> = new DocumentType<Solid>({
  properties: {
    type: {
      type: new LiteralType({
        type: $MorphFillStyleType,
        value: MorphFillStyleType.Solid as MorphFillStyleType.Solid,
      }),
    },
    startColor: {type: $StraightSRgba8},
    endColor: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
