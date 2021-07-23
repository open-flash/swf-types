import { CaseStyle } from "kryo";
import { Float64Type } from "kryo/float64";
import { RecordIoType, RecordType } from "kryo/record";
import { Float16 } from "semantic-types";

export interface FontAlignmentZoneData {
  origin: Float16;
  size: Float16;
}

export const $FontAlignmentZoneData: RecordIoType<FontAlignmentZoneData> = new RecordType<FontAlignmentZoneData>({
  properties: {
    origin: {type: new Float64Type()},
    size: {type: new Float64Type()},
  },
  changeCase: CaseStyle.SnakeCase,
});
