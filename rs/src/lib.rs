#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};
use static_assertions::const_assert;
pub use ::swf_fixed as fixed;

pub use crate::basic_types::ColorTransform;
pub use crate::basic_types::ColorTransformWithAlpha;
pub use crate::basic_types::LanguageCode;
pub use crate::basic_types::Matrix;
pub use crate::basic_types::NamedId;
pub use crate::basic_types::Rect;
pub use crate::basic_types::SRgb8;
pub use crate::basic_types::StraightSRgba8;
pub use crate::basic_types::Vector2D;
pub use crate::button::ButtonCond;
pub use crate::button::ButtonCondAction;
pub use crate::button::ButtonRecord;
pub use crate::button::ButtonSound;
pub use crate::control::AbcHeader;
pub use crate::control::Label;
pub use crate::control::Scene;
pub use crate::gradient::ColorSpace;
pub use crate::gradient::ColorStop;
pub use crate::gradient::Gradient;
pub use crate::gradient::GradientSpread;
pub use crate::gradient::MorphColorStop;
pub use crate::gradient::MorphGradient;
pub use crate::image::ImageType;
pub use crate::movie::CompressionMethod;
pub use crate::movie::Header;
pub use crate::movie::Movie;
pub use crate::movie::SwfSignature;
pub use crate::shape::shape_records;
pub use crate::shape::CapStyle;
pub use crate::shape::ClipAction;
pub use crate::shape::ClipEventFlags;
pub use crate::shape::FillStyle;
pub use crate::shape::Glyph;
pub use crate::shape::JoinStyle;
pub use crate::shape::LineStyle;
pub use crate::shape::MorphFillStyle;
pub use crate::shape::MorphLineStyle;
pub use crate::shape::MorphShape;
pub use crate::shape::MorphShapeRecord;
pub use crate::shape::MorphShapeStyles;
pub use crate::shape::Shape;
pub use crate::shape::ShapeRecord;
pub use crate::shape::ShapeStyles;
pub use crate::sound::AudioCodingFormat;
pub use crate::sound::SoundEnvelope;
pub use crate::sound::SoundInfo;
pub use crate::sound::SoundRate;
pub use crate::sound::SoundSize;
pub use crate::sound::SoundType;
pub use crate::video::VideoCodec;
pub use crate::video::VideoDeblocking;

#[macro_use]
mod bitflags;

pub mod float_is;

#[cfg(feature = "serde")]
mod serde_buffer;

pub mod control;
pub mod fill_styles;
pub mod filters;
pub mod join_styles;
pub mod tags;
pub mod text;

mod basic_types;

mod button;

mod gradient;

mod image;

mod movie;

mod shape;

mod sound;

mod video;

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
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

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "filter", rename_all = "PascalCase")
)]
#[derive(Clone, Debug, PartialEq, Eq)]
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

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct TagHeader {
  pub code: u16,
  pub length: u32,
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "PascalCase")
)]
#[derive(Clone, Debug, PartialEq, Eq)]
#[allow(clippy::large_enum_variant)]
pub enum Tag {
  CsmTextSettings(tags::CsmTextSettings),
  DefineBinaryData(tags::DefineBinaryData),
  DefineBitmap(tags::DefineBitmap),
  DefineButton(tags::DefineButton),
  DefineButtonColorTransform(tags::DefineButtonColorTransform),
  DefineButtonSound(Box<tags::DefineButtonSound>),
  DefineCffFont(tags::DefineCffFont),
  DefineDynamicText(Box<tags::DefineDynamicText>),
  DefineFont(Box<tags::DefineFont>),
  DefineFontAlignZones(tags::DefineFontAlignZones),
  DefineFontInfo(tags::DefineFontInfo),
  DefineFontName(tags::DefineFontName),
  DefineGlyphFont(tags::DefineGlyphFont),
  DefineJpegTables(tags::DefineJpegTables),
  DefineMorphShape(Box<tags::DefineMorphShape>),
  DefineScalingGrid(tags::DefineScalingGrid),
  DefineSceneAndFrameLabelData(tags::DefineSceneAndFrameLabelData),
  DefineShape(Box<tags::DefineShape>),
  DefineSound(tags::DefineSound),
  DefineSprite(tags::DefineSprite),
  DefineText(Box<tags::DefineText>),
  DefineVideoStream(tags::DefineVideoStream),
  EnablePostscript,
  DoAbc(tags::DoAbc),
  DoAction(tags::DoAction),
  DoInitAction(tags::DoInitAction),
  EnableDebugger(tags::EnableDebugger),
  ExportAssets(tags::ExportAssets),
  FileAttributes(tags::FileAttributes),
  FrameLabel(tags::FrameLabel),
  ImportAssets(tags::ImportAssets),
  Metadata(tags::Metadata),
  PlaceObject(Box<tags::PlaceObject>),
  Protect(tags::Protect),
  Raw(tags::Raw),
  RawBody(tags::RawBody),
  RemoveObject(tags::RemoveObject),
  ScriptLimits(tags::ScriptLimits),
  SetBackgroundColor(tags::SetBackgroundColor),
  SetTabIndex(tags::SetTabIndex),
  ShowFrame,
  SoundStreamBlock(tags::SoundStreamBlock),
  SoundStreamHead(tags::SoundStreamHead),
  StartSound(tags::StartSound),
  StartSound2(Box<tags::StartSound2>),
  SymbolClass(tags::SymbolClass),
  Telemetry(tags::Telemetry),
  VideoFrame(tags::VideoFrame),
}

const_assert!(std::mem::size_of::<Tag>() <= 64);

#[cfg(all(test, feature = "serde"))]
mod tests {
  use std::path::Path;
  use test_generator::test_resources;

  use crate::Movie;

  #[test_resources("../tests/movies/*/")]
  fn test_movie(path: &str) {
    let path: &Path = Path::new(path);
    let _name = path
      .components()
      .last()
      .unwrap()
      .as_os_str()
      .to_str()
      .expect("Failed to retrieve sample name");
    let ast_path = path.join("ast.json");

    let value_json = ::std::fs::read_to_string(ast_path).expect("Failed to read AST file");

    let value: Movie = serde_json_v8::from_str(&value_json).expect("Failed to read AST");

    let output_json = serde_json_v8::to_string_pretty(&value).expect("Failed to write AST");
    let output_json = format!("{}\n", output_json);

    assert_eq!(output_json, value_json)
  }

  macro_rules! test_various_impl {
    ($name:ident, $glob:expr, $type:ty) => {
      #[test_resources($glob)]
      fn $name(path: &str) {
        let path: &Path = Path::new(path);
        let _name = path
          .components()
          .last()
          .unwrap()
          .as_os_str()
          .to_str()
          .expect("Failed to retrieve sample name");
        let value_path = path.join("value.json");

        let value_json = ::std::fs::read_to_string(value_path).expect("Failed to read value file");

        let value: $type = serde_json_v8::from_str(&value_json).expect("Failed to read value");

        let output_json = serde_json_v8::to_string_pretty(&value).expect("Failed to write value");
        let output_json = format!("{}\n", output_json);

        assert_eq!(output_json, value_json)
      }
    };
  }

  use crate::Tag;
  test_various_impl!(test_tag, "../tests/tags/*/*/", Tag);

  use crate::ColorTransformWithAlpha;
  test_various_impl!(
    test_color_transform_with_alpha,
    "../tests/various/color-transform-with-alpha/*/",
    ColorTransformWithAlpha
  );

  // TODO: f16
  test_various_impl!(test_float16_le, "../tests/various/float16-le/*/", f32);

  use crate::Header;
  test_various_impl!(test_header, "../tests/various/header/*/", Header);

  use crate::Matrix;
  test_various_impl!(test_matrix, "../tests/various/matrix/*/", Matrix);

  use crate::Rect;
  test_various_impl!(test_rect, "../tests/various/rect/*/", Rect);

  use crate::SwfSignature;
  test_various_impl!(test_swf_signature, "../tests/various/swf-signature/*/", SwfSignature);

  test_various_impl!(test_leb128_u32, "../tests/various/uint32-leb128/*/", u32);
}
