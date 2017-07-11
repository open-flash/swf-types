import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {Rect} from "../basic-types/rect";
import {Rgba} from "../basic-types/rgba";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {TextAlignment} from "./text-alignment";

export interface DefineEditText extends SwfTagBase {
  type: SwfTagType.DefineEditText;
  characterId: Uint16;
  bounds: Rect;
  wordWrap: boolean;
  multiline: boolean;
  password: boolean;
  readonly: boolean;
  autoSize: boolean;
  noSelect: boolean;
  border: boolean;
  wasStatic: boolean;
  html: boolean;
  useGlyphFont: boolean;
  fontId?: Uint16;
  fontHeight?: Uint16;
  fontClass?: string;
  textColor?: Rgba;
  maxLength?: Uint16;
  align?: TextAlignment;
  leftMargin?: Uint16;
  rightMargin?: Uint16;
  indent?: Uint16;
  leading?: Sint16;
  variableName: string;
  initialText?: string;
}

export namespace DefineText {
  export interface Json {
    type: "define-edit-text";
    "character-id": number;
    "bounds": Rect.Json;
    "word-wrap": boolean;
    multiline: boolean;
    password: boolean;
    readonly: boolean;
    "auto-size": boolean;
    "no-select": boolean;
    border: boolean;
    "was-static": boolean;
    html: boolean;
    "use-glyph-font": boolean;
    "font-id"?: Uint16;
    "font-height"?: Uint16;
    "font-class"?: string;
    "text-color"?: Rgba;
    "max-length"?: Uint16;
    align?: TextAlignment;
    "left-margin"?: Uint16;
    "right-margin"?: Uint16;
    indent?: Uint16;
    leading?: Sint16;
    "variable-name": string;
    "initial-text"?: string;
  }

  export const type: DocumentType<DefineEditText> = new DocumentType<DefineEditText>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineEditText})},
      characterId: {type: new Int32Type()},
      bounds: {type: Rect.type},
      wordWrap: {type: new BooleanType()},
      multiline: {type: new BooleanType()},
      password: {type: new BooleanType()},
      readonly: {type: new BooleanType()},
      autoSize: {type: new BooleanType()},
      noSelect: {type: new BooleanType()},
      border: {type: new BooleanType()},
      wasStatic: {type: new BooleanType()},
      html: {type: new BooleanType()},
      useGlyphFont: {type: new BooleanType()},
      fontId: {type: new Int32Type(), optional: true},
      fontHeight: {type: new Int32Type(), optional: true},
      fontClass: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
      textColor: {type: Rgba.type, optional: true},
      maxLength: {type: new Int32Type(), optional: true},
      align: {type: TextAlignment.type, optional: true},
      leftMargin: {type: new Int32Type(), optional: true},
      rightMargin: {type: new Int32Type(), optional: true},
      indent: {type: new Int32Type(), optional: true},
      leading: {type: new Int32Type(), optional: true},
      variableName: {type: new Ucs2StringType({maxLength: Infinity})},
      initialText: {type: new Ucs2StringType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
