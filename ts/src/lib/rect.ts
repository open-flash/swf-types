import { CaseStyle } from "kryo";
import { $Sint32 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Sint32 } from "semantic-types";

export interface Rect {
  xMin: Sint32;
  xMax: Sint32;
  yMin: Sint32;
  yMax: Sint32;
}

export const $Rect: RecordIoType<Rect> = new RecordType<Rect>({
  properties: {
    xMin: {type: $Sint32},
    xMax: {type: $Sint32},
    yMin: {type: $Sint32},
    yMax: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
