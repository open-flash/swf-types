import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8";
import { $Solid, Solid } from "./solid";

export interface MorphSolid extends Solid {
  morphColor: StraightSRgba8;
}

export const $MorphSolid: DocumentIoType<MorphSolid> = new DocumentType<MorphSolid>({
  properties: {
    type: $Solid.properties.type,
    color: $Solid.properties.color,
    morphColor: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
