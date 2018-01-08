import { CaseStyle, SimpleEnumType } from "kryo";

export enum TagType {
  CharacterSet,
  CsmTextSettings,
  DebugId,
  DefineBehaviour,
  DefineBinaryData,
  DefineBitmap,
  DefineButton,
  DefineButton2,
  DefineButtonColorTransform,
  DefineButtonSound,
  DefineCffFont,
  DefineCommandObject,
  DefineDynamicText,
  DefinePartialFont,
  DefineFont,
  DefineFontAlignZones,
  DefineFontInfo,
  DefineFontName,
  DefineFunction,
  DefineJpeg,
  DefineMorphShape,
  DefinePartialJpeg,
  DefineScalingGrid,
  DefineSceneAndFrameLabelData,
  DefineShape,
  DefineSound,
  DefineSprite,
  DefineText,
  DefineTextFormat,
  DefineVideo,
  DefineVideoStream,
  DoAbc,
  DoAbcDefine,
  DoAction,
  DoInitAction,
  EnableDebugger,
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
  JpegTables,
  Metadata,
  NameCharacter,
  PathsArePostscript,
  PlaceFunction,
  PlaceObject,
  ProductInfo,
  Protect,
  RemoveObject,
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

export namespace TagType {
  export type Json =
    "character-set"
    | "csm-text-settings"
    | "debug-id"
    | "define-behaviour"
    | "define-binary-data"
    | "define-bitmap"
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
    | "define-jpeg"
    | "define-morph-shape"
    | "define-morph-shape2"
    | "define-partial-jpeg"
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
    | "jpeg-tables"
    | "metadata"
    | "name-character"
    | "paths-are-postscript"
    | "place-function"
    | "place-object"
    | "product-info"
    | "protect"
    | "remove-object"
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

  export const type: SimpleEnumType<TagType> = new SimpleEnumType<TagType>({
    enum: TagType,
    rename: CaseStyle.KebabCase,
  });
}
