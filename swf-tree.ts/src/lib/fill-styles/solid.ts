import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8";
import { $FillStyleType, FillStyleType } from "./_type";

export interface Solid {
  type: FillStyleType.Solid;
  color: StraightSRgba8;
}

export const $Solid: DocumentIoType<Solid> = new DocumentType<Solid>({
  properties: {
    type: {type: new LiteralType({type: $FillStyleType, value: FillStyleType.Solid as FillStyleType.Solid})},
    color: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
