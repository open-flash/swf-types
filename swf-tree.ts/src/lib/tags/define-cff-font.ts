import { $Boolean } from "kryo/builtins/boolean";
import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineCffFont extends _Tag {
  type: TagType.DefineCffFont;
  id: Uint16;
  fontName: string;
  isItalic: boolean;
  isBold: boolean;
  data?: Uint8Array;
}

export const $DefineCffFont: DocumentIoType<DefineCffFont> = new DocumentType<DefineCffFont>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineCffFont as TagType.DefineCffFont})},
    id: {type: $Uint16},
    fontName: {type: new Ucs2StringType({maxLength: Infinity})},
    isItalic: {type: $Boolean},
    isBold: {type: $Boolean},
    data: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
