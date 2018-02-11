import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Float64Type } from "kryo/types/float64";
import { Float16 } from "semantic-types";

export interface FontAlignmentZoneData {
  origin: Float16;
  size: Float16;
}

export const $FontAlignmentZoneData: DocumentIoType<FontAlignmentZoneData> = new DocumentType<FontAlignmentZoneData>({
  properties: {
    origin: {type: new Float64Type()},
    size: {type: new Float64Type()},
  },
  changeCase: CaseStyle.SnakeCase,
});
