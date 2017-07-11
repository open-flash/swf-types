import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {SoundInfo} from "../sounds/sound-info";

export interface ButtonSound {
  soundId: Uint16;
  soundInfo: SoundInfo;
}

export namespace ButtonSound {
  export interface Json {
    "sound-id": number;
    "sound-info": SoundInfo.Json;
  }

  export const type: DocumentType<ButtonSound> = new DocumentType<ButtonSound>({
    properties: {
      soundId: {type: new Int32Type()},
      soundInfo: {type: SoundInfo.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
