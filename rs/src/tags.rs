#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

use crate::basic_types::{ColorTransformWithAlpha, LanguageCode, Matrix, NamedId, Rect, SRgb8, StraightSRgba8};
use crate::button::ButtonRecord;
use crate::button::{ButtonCondAction, ButtonSound};
use crate::float_is::Is;
#[cfg(feature = "serde")]
use crate::serde_buffer::{buffer_to_hex, hex_to_buffer, hex_to_optional_buffer, optional_buffer_to_hex};
use crate::shape::MorphShape;
use crate::shape::{ClipAction, Glyph, Shape};
use crate::sound::{AudioCodingFormat, SoundInfo, SoundRate, SoundSize, SoundType};
use crate::text::{
  CsmTableHint, EmSquareSize, FontAlignmentZone, FontLayout, GridFitting, TextAlignment, TextRecord, TextRenderer,
};
use crate::ImageType;
use crate::Tag;
use crate::{BlendMode, ColorTransform};
use crate::{Filter, VideoCodec, VideoDeblocking};

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug)]
pub struct CsmTextSettings {
  pub text_id: u16,
  pub renderer: TextRenderer,
  pub fitting: GridFitting,
  pub thickness: f32,
  pub sharpness: f32,
}

impl ::std::cmp::PartialEq for CsmTextSettings {
  fn eq(&self, other: &Self) -> bool {
    self.text_id == other.text_id
      && self.renderer == other.renderer
      && self.fitting == other.fitting
      && self.thickness.is(&other.thickness)
      && self.sharpness.is(&other.sharpness)
  }

  fn ne(&self, other: &Self) -> bool {
    !self.eq(other)
  }
}

impl ::std::cmp::Eq for CsmTextSettings {}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineBinaryData {
  pub id: u16,
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub data: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineBitmap {
  pub id: u16,
  pub width: u16,
  pub height: u16,
  pub media_type: ImageType,
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub data: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct DefineButton {
  pub id: u16,
  pub track_as_menu: bool,
  pub characters: Vec<ButtonRecord>,
  pub actions: Vec<ButtonCondAction>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineButtonColorTransform {
  pub button_id: u16,
  pub transform: ColorTransform,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineButtonSound {
  pub button_id: u16,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub over_up_to_idle: Option<ButtonSound>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub idle_to_over_up: Option<ButtonSound>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub over_up_to_over_down: Option<ButtonSound>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub over_down_to_over_up: Option<ButtonSound>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineCffFont {
  pub id: u16,
  pub font_name: String,
  pub is_bold: bool,
  pub is_italic: bool,
  #[cfg_attr(
    feature = "serde",
    serde(
      skip_serializing_if = "Option::is_none",
      serialize_with = "optional_buffer_to_hex",
      deserialize_with = "hex_to_optional_buffer"
    )
  )]
  pub data: Option<Vec<u8>>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineDynamicText {
  pub id: u16,
  pub bounds: Rect,
  pub word_wrap: bool,
  pub multiline: bool,
  pub password: bool,
  pub readonly: bool,
  pub auto_size: bool,
  pub no_select: bool,
  pub border: bool,
  pub was_static: bool,
  pub html: bool,
  pub use_glyph_font: bool,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub font_id: Option<u16>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub font_class: Option<String>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub font_size: Option<u16>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub color: Option<StraightSRgba8>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub max_length: Option<usize>,
  pub align: TextAlignment,
  pub margin_left: u16,
  pub margin_right: u16,
  pub indent: u16,
  pub leading: i16,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub variable_name: Option<String>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub text: Option<String>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineFont {
  pub id: u16,
  pub font_name: String,
  pub is_bold: bool,
  pub is_italic: bool,
  pub is_ansi: bool,
  pub is_small: bool,
  pub is_shift_jis: bool,
  pub em_square_size: EmSquareSize,
  pub language: LanguageCode,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub glyphs: Option<Vec<Glyph>>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub code_units: Option<Vec<u16>>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub layout: Option<FontLayout>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct DefineFontAlignZones {
  pub font_id: u16,
  pub csm_table_hint: CsmTableHint,
  pub zones: Vec<FontAlignmentZone>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineFontInfo {
  pub font_id: u16,
  pub font_name: String,
  pub is_bold: bool,
  pub is_italic: bool,
  pub is_ansi: bool,
  pub is_shift_jis: bool,
  pub is_small: bool,
  pub language: LanguageCode,
  pub code_units: Vec<u16>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineFontName {
  pub font_id: u16,
  pub name: String,
  pub copyright: String,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineGlyphFont {
  pub id: u16,
  pub glyphs: Vec<Glyph>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineJpegTables {
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub data: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineMorphShape {
  pub id: u16,
  pub bounds: Rect,
  pub morph_bounds: Rect,
  // TODO: Combine edgeBounds and morphEdgeBounds in something like MorphRect
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub edge_bounds: Option<Rect>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub morph_edge_bounds: Option<Rect>,
  pub has_scaling_strokes: bool,
  pub has_non_scaling_strokes: bool,
  pub shape: MorphShape,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineScalingGrid {
  pub character_id: u16,
  pub splitter: Rect,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineSceneAndFrameLabelData {
  pub scenes: Vec<Scene>,
  pub labels: Vec<Label>,
}

// TODO(demurgos): Move to a different file since it is not a tag
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Scene {
  pub offset: u32,
  pub name: String,
}

// TODO(demurgos): Move to a different file since it is not a tag
#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Label {
  pub frame: u32,
  pub name: String,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineShape {
  pub id: u16,
  pub bounds: Rect,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub edge_bounds: Option<Rect>,
  pub has_fill_winding: bool,
  pub has_non_scaling_strokes: bool,
  pub has_scaling_strokes: bool,
  pub shape: Shape,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineSound {
  pub id: u16,
  pub sound_type: SoundType,
  pub sound_size: SoundSize,
  pub sound_rate: SoundRate,
  pub format: AudioCodingFormat,
  pub sample_count: u32,
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub data: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct DefineSprite {
  pub id: u16,
  pub frame_count: usize,
  pub tags: Vec<Tag>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineText {
  pub id: u16,
  pub bounds: Rect,
  pub matrix: Matrix,
  pub records: Vec<TextRecord>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DefineVideoStream {
  pub id: u16,
  pub frame_count: usize,
  pub width: u16,
  pub height: u16,
  pub use_smoothing: bool,
  pub deblocking: VideoDeblocking,
  pub codec: VideoCodec,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DoAbc {
  pub flags: u32,
  pub name: String,
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub data: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DoAction {
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub actions: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct DoInitAction {
  pub sprite_id: u16,
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub actions: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct EnableDebugger {
  pub password: String,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ExportAssets {
  pub assets: Vec<NamedId>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct FileAttributes {
  pub use_network: bool,
  pub use_relative_urls: bool,
  pub no_cross_domain_caching: bool,
  pub use_as3: bool,
  pub has_metadata: bool,
  pub use_gpu: bool,
  pub use_direct_blit: bool,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct FrameLabel {
  pub name: String,
  pub is_anchor: bool,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ImportAssets {
  pub url: String,
  pub assets: Vec<NamedId>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Metadata {
  pub metadata: String,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct PlaceObject {
  /// Corresponds to `is_move` in the SWF spec.
  pub is_update: bool,
  pub depth: u16,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub character_id: Option<u16>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub class_name: Option<String>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub matrix: Option<Matrix>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub color_transform: Option<ColorTransformWithAlpha>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub ratio: Option<u16>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub name: Option<String>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub clip_depth: Option<u16>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub filters: Option<Vec<Filter>>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub blend_mode: Option<BlendMode>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub bitmap_cache: Option<bool>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub visible: Option<bool>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub background_color: Option<StraightSRgba8>,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub clip_actions: Option<Vec<ClipAction>>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Protect {
  pub password: String,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Raw {
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub data: Vec<u8>,
  // TODO: Add optional error field
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct RemoveObject {
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub character_id: Option<u16>,
  pub depth: u16,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ScriptLimits {
  pub max_recursion_depth: u16,
  pub script_timeout: u16,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct SetBackgroundColor {
  /// Color of the display background
  pub color: SRgb8,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct SetTabIndex {
  pub depth: u16,
  pub index: u16,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct SoundStreamBlock {
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub data: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct SoundStreamHead {
  pub playback_sound_type: SoundType,
  pub playback_sound_size: SoundSize,
  pub playback_sound_rate: SoundRate,
  pub stream_sound_type: SoundType,
  pub stream_sound_size: SoundSize,
  pub stream_sound_rate: SoundRate,
  pub stream_format: AudioCodingFormat,
  pub stream_sample_count: u16,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub latency_seek: Option<i16>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct StartSound {
  pub sound_id: u16,
  pub sound_info: SoundInfo,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct StartSound2 {
  pub sound_class_name: String,
  pub sound_info: SoundInfo,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct SymbolClass {
  pub symbols: Vec<NamedId>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Telemetry {
  #[cfg_attr(
    feature = "serde",
    serde(
      skip_serializing_if = "Option::is_none",
      serialize_with = "optional_buffer_to_hex",
      deserialize_with = "hex_to_optional_buffer"
    )
  )]
  pub password: Option<Vec<u8>>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct VideoFrame {
  pub video_id: u16,
  pub frame: u16,
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub packet: Vec<u8>,
}
