extern crate hex;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;
pub extern crate swf_fixed;

pub use swf_fixed as fixed;

mod float_is;

mod helpers;

pub mod fill_styles;
pub mod filters;
pub mod join_styles;
pub mod tags;
pub mod text;

mod basic_types;

pub use crate::basic_types::ColorTransform;
pub use crate::basic_types::ColorTransformWithAlpha;
pub use crate::basic_types::LanguageCode;
pub use crate::basic_types::Matrix;
pub use crate::basic_types::NamedId;
pub use crate::basic_types::Rect;
pub use crate::basic_types::SRgb8;
pub use crate::basic_types::StraightSRgba8;
pub use crate::basic_types::Vector2D;

mod button;

pub use crate::button::ButtonCond;
pub use crate::button::ButtonCondAction;
pub use crate::button::ButtonRecord;

mod gradient;

pub use crate::gradient::ColorStop;
pub use crate::gradient::ColorSpace;
pub use crate::gradient::GradientSpread;
pub use crate::gradient::Gradient;
pub use crate::gradient::MorphColorStop;
pub use crate::gradient::MorphGradient;

mod image;

pub use crate::image::ImageType;

mod movie;

pub use crate::movie::CompressionMethod;
pub use crate::movie::Header;
pub use crate::movie::Movie;
pub use crate::movie::SwfSignature;

mod shape;

pub use crate::shape::ClipAction;
pub use crate::shape::ClipEventFlags;
pub use crate::shape::CapStyle;
pub use crate::shape::FillStyle;
pub use crate::shape::MorphFillStyle;
pub use crate::shape::Glyph;
pub use crate::shape::JoinStyle;
pub use crate::shape::LineStyle;
pub use crate::shape::MorphLineStyle;
pub use crate::shape::Shape;
pub use crate::shape::ShapeRecord;
pub use crate::shape::ShapeStyles;
pub use crate::shape::MorphShape;
pub use crate::shape::MorphShapeRecord;
pub use crate::shape::MorphShapeStyles;
pub use crate::shape::shape_records;

mod sound;

pub use crate::sound::AudioCodingFormat;
pub use crate::sound::SoundRate;
pub use crate::sound::SoundSize;
pub use crate::sound::SoundType;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum BlendMode {
  Normal,
  Layer,
  Multiply,
  Screen,
  Lighten,
  Darken,
  Difference,
  Add,
  Subtract,
  Invert,
  Alpha,
  Erase,
  Overlay,
  Hardlight,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "filter", rename_all = "kebab-case")]
pub enum Filter {
  Blur(filters::Blur),
  Bevel(filters::Bevel),
  ColorMatrix(filters::ColorMatrix),
  Convolution(filters::Convolution),
  DropShadow(filters::DropShadow),
  Glow(filters::Glow),
  GradientBevel(filters::GradientBevel),
  GradientGlow(filters::GradientGlow),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum Tag {
  CsmTextSettings(tags::CsmTextSettings),
  DefineBinaryData(tags::DefineBinaryData),
  DefineBitmap(tags::DefineBitmap),
  DefineButton(tags::DefineButton),
  DefineCffFont(tags::DefineCffFont),
  DefineDynamicText(tags::DefineDynamicText),
  DefineFont(tags::DefineFont),
  DefineFontAlignZones(tags::DefineFontAlignZones),
  DefineFontInfo(tags::DefineFontInfo),
  DefineFontName(tags::DefineFontName),
  DefineJpegTables(tags::DefineJpegTables),
  DefineMorphShape(tags::DefineMorphShape),
  DefinePartialFont(tags::DefinePartialFont),
  DefineSceneAndFrameLabelData(tags::DefineSceneAndFrameLabelData),
  DefineShape(tags::DefineShape),
  DefineSound(tags::DefineSound),
  DefineSprite(tags::DefineSprite),
  DefineText(tags::DefineText),
  DoAction(tags::DoAction),
  DoInitAction(tags::DoInitAction),
  EnableDebugger(tags::EnableDebugger),
  ExportAssets(tags::ExportAssets),
  FileAttributes(tags::FileAttributes),
  FrameLabel(tags::FrameLabel),
  ImportAssets(tags::ImportAssets),
  Metadata(tags::Metadata),
  PlaceObject(tags::PlaceObject),
  RemoveObject(tags::RemoveObject),
  SetBackgroundColor(tags::SetBackgroundColor),
  ShowFrame,
  SoundStreamBlock(tags::SoundStreamBlock),
  SoundStreamHead(tags::SoundStreamHead),
  Telemetry(tags::Telemetry),
  Unknown(tags::Unknown),
}
