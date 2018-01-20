import { CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint16 } from "semantic-types";
import { SoundInfo } from "../sound/sound-info";

export interface ButtonSound {
  soundId: Uint16;
  soundInfo: SoundInfo;
}

export namespace ButtonSound {
  export interface Json {
    sound_id: number;
    sound_info: SoundInfo.Json;
  }

  export const type: DocumentType<ButtonSound> = new DocumentType<ButtonSound>({
    properties: {
      soundId: {type: new IntegerType()},
      soundInfo: {type: SoundInfo.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
