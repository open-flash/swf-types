import { CaseStyle } from "kryo";
import { $Sint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Sint32 } from "semantic-types";

export interface Vector2D {
  x: Sint32;
  y: Sint32;
}

export const $Vector2D: RecordIoType<Vector2D> = new RecordType<Vector2D>({
  properties: {
    x: {type: $Sint32},
    y: {type: $Sint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
