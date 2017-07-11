import {CaseStyle, SimpleEnumType} from "kryo";

export enum SwfTagType {
  CharacterSet,
  CsmTextSettings,
  DebugId,
  DefineBehaviour,
  DefineBinaryData,
  DefineBits,
  DefineBitsJpeg2,
  DefineBitsJpeg3,
  DefineBitsJpeg4,
  DefineBitsLossless,
  DefineBitsLossless2,
  DefineButton,
  DefineButton2,
  DefineButtonColorTransform,
  DefineButtonSound,
  DefineCommandObject,
  DefineEditText,
  DefineFont,
  DefineFont2,
  DefineFont3,
  DefineFont4,
  DefineFontAlignZones,
  DefineFontInfo,
  DefineFontInfo2,
  DefineFontName,
  DefineFunction,
  DefineMorphShape,
  DefineMorphShape2,
  DefineScalingGrid,
  DefineSceneAndFrameLabelData,
  DefineShape,
  DefineShape2,
  DefineShape3,
  DefineShape4,
  DefineSound,
  DefineSprite,
  DefineText,
  DefineText2,
  DefineTextFormat,
  DefineVideo,
  DefineVideoStream,
  DoAbc,
  DoAbcDefine,
  DoAction,
  DoInitAction,
  EnableDebugger,
  EnableDebugger2,
  End,
  ExportAssets,
  ExternalFont,
  FileAttributes,
  FrameLabel,
  FreeAll,
  FreeCharacter,
  GenCommand,
  GenerateFrame,
  GenTagObjects,
  ImportAssets,
  ImportAssets2,
  JpegTables,
  Metadata,
  NameCharacter,
  PathsArePostscript,
  PlaceFunction,
  PlaceObject,
  PlaceObject2,
  PlaceObject3,
  ProductInfo,
  Protect,
  RemoveObject,
  RemoveObject2,
  ScriptLimits,
  SetBackgroundColor,
  SetTabIndex,
  ShowFrame,
  SoundStreamHead,
  SoundStreamHead2,
  SoundStreamBlock,
  StartSound,
  StartSound2,
  StopSound,
  SymbolClass,
  SyncFrame,
  Telemetry,
  VideoFrame,
  Unknown,
}

export namespace SwfTagType {
  export type Json =
    "character-set"
    | "csm-text-settings"
    | "debug-id"
    | "define-behaviour"
    | "define-binary-data"
    | "define-bits"
    | "define-bits-jpeg2"
    | "define-bits-jpeg3"
    | "define-bits-jpeg4"
    | "define-bits-lossless"
    | "define-bits-lossless2"
    | "define-button"
    | "define-button2"
    | "define-button-color-transform"
    | "define-button-sound"
    | "define-command-object"
    | "define-edit-text"
    | "define-font"
    | "define-font2"
    | "define-font3"
    | "define-font4"
    | "define-font-align-zones"
    | "define-font-info"
    | "define-font-info2"
    | "define-font-name"
    | "define-function"
    | "define-morph-shape"
    | "define-morph-shape2"
    | "define-scaling-grid"
    | "define-scene-and-frame-label-data"
    | "define-shape"
    | "define-shape2"
    | "define-shape3"
    | "define-shape4"
    | "define-sound"
    | "define-sprite"
    | "define-text"
    | "define-text2"
    | "define-text-format"
    | "define-video"
    | "define-video-stream"
    | "do-abc"
    | "do-abc-define"
    | "do-action"
    | "do-init-action"
    | "enable-debugger"
    | "enable-debugger2"
    | "end"
    | "export-assets"
    | "external-font"
    | "file-attributes"
    | "frame-label"
    | "free-all"
    | "free-character"
    | "gen-command"
    | "generate-frame"
    | "genTag-objects"
    | "import-assets"
    | "import-assets2"
    | "jpeg-tables"
    | "metadata"
    | "name-character"
    | "paths-are-postscript"
    | "place-function"
    | "place-object"
    | "place-object2"
    | "place-object3"
    | "product-info"
    | "protect"
    | "remove-object"
    | "remove-object2"
    | "script-limits"
    | "set-background-color"
    | "set-tab-index"
    | "show-frame"
    | "sound-stream-head"
    | "sound-stream-head2"
    | "sound-stream-block"
    | "start-sound"
    | "start-sound2"
    | "stop-sound"
    | "symbol-class"
    | "sync-frame"
    | "telemetry"
    | "video-frame"
    | "unknown";

  export const type: SimpleEnumType<SwfTagType> = new SimpleEnumType<SwfTagType>({
    enum: SwfTagType,
    rename: CaseStyle.KebabCase,
  });
}
