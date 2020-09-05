import { TaggedUnionType } from "kryo/lib/tagged-union.js";
import * as tags from "./tags/index.js";

export type Tag =
  tags.CsmTextSettings
  | tags.DefineBinaryData
  | tags.DefineBitmap
  | tags.DefineButton
  | tags.DefineButtonColorTransform
  | tags.DefineButtonSound
  | tags.DefineCffFont
  | tags.DefineDynamicText
  | tags.DefineFont
  | tags.DefineFontAlignZones
  | tags.DefineFontInfo
  | tags.DefineFontName
  | tags.DefineGlyphFont
  | tags.DefineJpegTables
  | tags.DefineMorphShape
  | tags.DefineScalingGrid
  | tags.DefineSceneAndFrameLabelData
  | tags.DefineShape
  | tags.DefineSound
  | tags.DefineSprite
  | tags.DefineText
  | tags.DefineVideoStream
  | tags.DoAbc
  | tags.DoAction
  | tags.DoInitAction
  | tags.EnableDebugger
  | tags.EnablePostscript
  | tags.ExportAssets
  | tags.FileAttributes
  | tags.FrameLabel
  | tags.ImportAssets
  | tags.Metadata
  | tags.PlaceObject
  | tags.Protect
  | tags.Raw
  | tags.RawBody
  | tags.RemoveObject
  | tags.ScriptLimits
  | tags.SetBackgroundColor
  | tags.SetTabIndex
  | tags.ShowFrame
  | tags.SoundStreamBlock
  | tags.SoundStreamHead
  | tags.StartSound
  | tags.StartSound2
  | tags.SymbolClass
  | tags.Telemetry
  | tags.VideoFrame;

export const $Tag: TaggedUnionType<Tag> = new TaggedUnionType<Tag>(() => ({
  variants: [
    tags.$CsmTextSettings,
    tags.$DefineBinaryData,
    tags.$DefineBitmap,
    tags.$DefineButton,
    tags.$DefineButtonColorTransform,
    tags.$DefineButtonSound,
    tags.$DefineCffFont,
    tags.$DefineDynamicText,
    tags.$DefineFont,
    tags.$DefineFontAlignZones,
    tags.$DefineFontInfo,
    tags.$DefineFontName,
    tags.$DefineGlyphFont,
    tags.$DefineJpegTables,
    tags.$DefineMorphShape,
    tags.$DefineScalingGrid,
    tags.$DefineSceneAndFrameLabelData,
    tags.$DefineShape,
    tags.$DefineSound,
    tags.$DefineSprite,
    tags.$DefineText,
    tags.$DefineVideoStream,
    tags.$DoAbc,
    tags.$DoAction,
    tags.$DoInitAction,
    tags.$EnableDebugger,
    tags.$EnablePostscript,
    tags.$ExportAssets,
    tags.$FileAttributes,
    tags.$FrameLabel,
    tags.$ImportAssets,
    tags.$Metadata,
    tags.$PlaceObject,
    tags.$Protect,
    tags.$RemoveObject,
    tags.$ScriptLimits,
    tags.$SetBackgroundColor,
    tags.$SetTabIndex,
    tags.$ShowFrame,
    tags.$SoundStreamBlock,
    tags.$SoundStreamHead,
    tags.$StartSound,
    tags.$StartSound2,
    tags.$SymbolClass,
    tags.$Telemetry,
    tags.$Raw,
    tags.$RawBody,
    tags.$VideoFrame,
  ],
  tag: "type",
}));
