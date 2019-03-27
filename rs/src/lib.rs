extern crate hex;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;
pub extern crate swf_fixed;

pub use swf_fixed as fixed;

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
pub use crate::shape::shape_records;
pub use crate::shape::ShapeRecord;
pub use crate::shape::ShapeStyles;
pub use crate::sound::AudioCodingFormat;
pub use crate::sound::SoundRate;
pub use crate::sound::SoundSize;
pub use crate::sound::SoundType;

mod float_is;

mod helpers;

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

#[cfg(test)]
mod parser_tests {
  use std::path::Path;

  use ::test_generator::test_expand_paths;

  use crate::Movie;

  test_expand_paths! { test_movie_json; "../tests/open-flash-db/standalone-movies/*/" }
  fn test_movie_json(path: &str) {
    let path: &Path = Path::new(path);
    let name = path.components().last().unwrap().as_os_str().to_str().unwrap();
    match name {
      "blank" | "homestuck-beta-1" | "homestuck-beta-2" => return,
      _ => (),
    }
    let ast_path = path.join("ast.json");
    let json_file = ::std::fs::File::open(ast_path).unwrap();
    let reader = ::std::io::BufReader::new(json_file);
    serde_json::from_reader::<_, Movie>(reader).unwrap();

//    let input_json = include_str!("../../test/swf-samples/simple/blank/blank.ast.json");
//    let movie: Movie = serde_json::from_str(input_json).unwrap();
//    let output_json = serde_json::to_string_pretty(&movie).unwrap();
//    assert_eq!(output_json, input_json)
  }
}
