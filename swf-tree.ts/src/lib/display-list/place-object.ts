import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {ColorTransform} from "../basic-types/color-transform";
import {Matrix} from "../basic-types/matrix";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface PlaceObject extends SwfTagBase {
  type: SwfTagType.PlaceObject;
  characterId: Uint16;
  depth: Uint16;
  matrix: Matrix;
  colorTransform?: ColorTransform;
}

export namespace PlaceObject {
  export interface Json {
    type: "place-object";
    "character-id": number;
    depth: number;
    matrix: Matrix.Json;
    "color-transform"?: ColorTransform.Json;
  }

  export const type: DocumentType<PlaceObject> = new DocumentType<PlaceObject>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.PlaceObject})},
      characterId: {type: new Int32Type()},
      depth: {type: new Int32Type()},
      matrix: {type: Matrix.type},
      colorTransform: {type: ColorTransform.type, optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
