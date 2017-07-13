import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType, Ucs2StringType} from "kryo";
import {Sint16, Uint16} from "semantic-types";
import {Rect} from "../basic-types/rect";
import {Rgba} from "../basic-types/rgba";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {TextAlignment} from "./text-alignment";

export interface DefineEditText extends _Tag {
  type: TagType.DefineEditText;
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
    character_id: number;
    bounds: Rect.Json;
    word_wrap: boolean;
    multiline: boolean;
    password: boolean;
    readonly: boolean;
    auto_size: boolean;
    no_select: boolean;
    border: boolean;
    was_static: boolean;
    html: boolean;
    use_glyph_font: boolean;
    font_id?: Uint16;
    font_height?: Uint16;
    font_class?: string;
    text_color?: Rgba;
    max_length?: Uint16;
    align?: TextAlignment;
    left_margin?: Uint16;
    right_margin?: Uint16;
    indent?: Uint16;
    leading?: Sint16;
    variable_name: string;
    initial_text?: string;
  }

  export const type: DocumentType<DefineEditText> = new DocumentType<DefineEditText>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineEditText})},
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
    rename: CaseStyle.SnakeCase,
  });
}
