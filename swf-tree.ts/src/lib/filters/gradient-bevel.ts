import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint8} from "semantic-types";
import {FilterType} from "./_type";

// TODO: Does not seem complete
export interface GradientBevel {
  filter: FilterType.GradientBevel;
  compositeSource: true;
  onTop: true;
  passes: Uint8;
}

export namespace GradientBevel {
  export interface Json {
    filter: "gradient-bevel";
    composite_source: true;
    on_top: boolean;
    passes: number;
  }

  export const type: DocumentType<GradientBevel> = new DocumentType<GradientBevel>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.GradientBevel})},
      compositeSource: {type: new LiteralType({type: new BooleanType(), value: true})},
      onTop: {type: new BooleanType()},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
