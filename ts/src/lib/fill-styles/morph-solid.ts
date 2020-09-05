import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { $Solid, Solid } from "./solid.js";

export interface MorphSolid extends Solid {
  morphColor: StraightSRgba8;
}

export const $MorphSolid: RecordIoType<MorphSolid> = new RecordType<MorphSolid>({
  properties: {
    type: $Solid.properties.type,
    color: $Solid.properties.color,
    morphColor: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
