import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16, Uint32} from "semantic-types";

export interface AdpcmMonoPacket {
  initialSample: Sint16;
  initialIndex: Uint32;
  adpcmCodeData: Buffer;
}

export namespace AdpcmMonoPacket {
  export interface Json {
    "sample-count": number;
    "mp3-sound-data": any;
  }

  export const type: DocumentType<AdpcmMonoPacket> = new DocumentType<AdpcmMonoPacket>({
    properties: {
      sampleCount: {type: new Int32Type()},
      mp3SoundData: {type: null as any},
    },
    rename: CaseStyle.KebabCase,
  });
}
