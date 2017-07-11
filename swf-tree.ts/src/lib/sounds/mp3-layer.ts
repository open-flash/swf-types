import {CaseStyle, SimpleEnumType} from "kryo";

export enum Mp3Layer {
  Layer1,
  Layer2,
  Layer3,
}

export namespace Mp3Layer {
  export type Json =
    "layer1"
    | "layer2"
    | "layer3";

  export const type: SimpleEnumType<Mp3Layer> = new SimpleEnumType<Mp3Layer>({
    enum: Mp3Layer,
    rename: CaseStyle.KebabCase,
  });
}
