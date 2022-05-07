import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/record";

import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.mjs";
import { $Solid, Solid } from "./solid.mjs";

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
