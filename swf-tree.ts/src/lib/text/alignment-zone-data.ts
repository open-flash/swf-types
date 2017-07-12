import {CaseStyle, DocumentType, Float64Type} from "kryo";
import {Float16} from "semantic-types";

export interface AlignmentZoneData {
  alignmentCoordinate: Float16;
  range: Float16;
}

export namespace AlignmentZoneData {
  export interface Json {
    alignmment_coordinate: number;
    range: number;
  }

  export const type: DocumentType<AlignmentZoneData> = new DocumentType<AlignmentZoneData>({
    properties: {
      alignmentCoordinate: {type: new Float64Type()},
      range: {type: new Float64Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
