import {CaseStyle, DocumentType, Float64Type} from "kryo";
import {Sint16} from "semantic-types";

export interface ColorTransform {
  redMultTerm?: Sint16;
  greenMultTerm?: Sint16;
  blueMultTerm?: Sint16;
  redAddTerm?: Sint16;
  greenAddTerm?: Sint16;
  blueAddTerm?: Sint16;
}

export namespace ColorTransform {
  export interface Json {
    red_mult_term?: number;
    green_mult_term?: number;
    blue_mult_term?: number;
    red_add_term?: number;
    green_add_term?: number;
    blue_add_term?: number;
  }

  export const type: DocumentType<ColorTransform> = new DocumentType<ColorTransform>({
    properties: {
      redMultTerm: {
        type: new Float64Type(),
        optional: true,
      },
      greenMultTerm: {
        type: new Float64Type(),
        optional: true,
      },
      blueMultTerm: {
        type: new Float64Type(),
        optional: true,
      },
      redAddTerm: {
        type: new Float64Type(),
        optional: true,
      },
      greenAddTerm: {
        type: new Float64Type(),
        optional: true,
      },
      blueAddTerm: {
        type: new Float64Type(),
        optional: true,
      },
    },
    rename: CaseStyle.SnakeCase,
  });
}
