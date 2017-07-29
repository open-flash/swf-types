import {CaseStyle, DocumentType, Float64Type} from "kryo";
import {Float16} from "semantic-types";

export interface FontAlignmentZoneData {
  origin: Float16;
  size: Float16;
}

export namespace FontAlignmentZoneData {
  export interface Json {
    origin: number;
    size: number;
  }

  export const type: DocumentType<FontAlignmentZoneData> = new DocumentType<FontAlignmentZoneData>({
    properties: {
      origin: {type: new Float64Type()},
      size: {type: new Float64Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
