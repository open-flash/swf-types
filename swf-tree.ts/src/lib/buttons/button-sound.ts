import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16 } from "semantic-types";
import { $SoundInfo, SoundInfo } from "../sound/sound-info";

export interface ButtonSound {
  soundId: Uint16;
  soundInfo: SoundInfo;
}

export const $ButtonSound: DocumentIoType<ButtonSound> = new DocumentType<ButtonSound>({
  properties: {
    soundId: {type: $Uint16},
    soundInfo: {type: $SoundInfo},
  },
  changeCase: CaseStyle.SnakeCase,
});
