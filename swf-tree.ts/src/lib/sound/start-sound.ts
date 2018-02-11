import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";
import { $SoundInfo, SoundInfo } from "./sound-info";

export interface StartSound extends _Tag {
  type: TagType.StartSound;
  soundId: Uint16;
  soundInfo: SoundInfo;
}

export const $StartSound: DocumentIoType<StartSound> = new DocumentType<StartSound>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.StartSound as TagType.StartSound})},
    soundId: {type: $Uint16},
    soundInfo: {type: $SoundInfo},
  },
  changeCase: CaseStyle.SnakeCase,
});
