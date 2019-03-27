import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";
import { $SoundInfo, SoundInfo } from "./sound-info";

export interface StartSound2 extends _Tag {
  type: TagType.StartSound2;
  soundClassName: string;
  soundInfo: SoundInfo;
}

export const $StartSound2: DocumentIoType<StartSound2> = new DocumentType<StartSound2>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.StartSound2 as TagType.StartSound2})},
    soundClassName: {type: new Ucs2StringType({maxLength: Infinity})},
    soundInfo: {type: $SoundInfo},
  },
  changeCase: CaseStyle.SnakeCase,
});
