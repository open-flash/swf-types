extern crate hex;
extern crate num_traits;
extern crate ordered_float;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;

mod helpers;

pub mod avm1;
pub mod fill_styles;
pub mod filters;
pub mod fixed_point;
pub mod join_styles;
pub mod shape_records;
pub mod tags;
pub mod text;

mod basic_types;

pub use basic_types::ColorTransform;
pub use basic_types::ColorTransformWithAlpha;
pub use basic_types::LanguageCode;
pub use basic_types::Matrix;
pub use basic_types::NamedId;
pub use basic_types::Rect;
pub use basic_types::SRgb8;
pub use basic_types::StraightSRgba8;
pub use basic_types::Vector2D;

mod gradient;

pub use gradient::ColorStop;
pub use gradient::ColorSpace;
pub use gradient::GradientSpread;
pub use gradient::Gradient;

mod movie;

pub use movie::CompressionMethod;
pub use movie::Header;
pub use movie::Movie;
pub use movie::SwfSignature;
pub use movie::Tag;

mod shapes;

pub use shapes::ClipAction;
pub use shapes::ClipEventFlags;
pub use shapes::CapStyle;
pub use shapes::FillStyle;
pub use shapes::Glyph;
pub use shapes::JoinStyle;
pub use shapes::LineStyle;
pub use shapes::Shape;
pub use shapes::ShapeRecord;

mod sound;

pub use sound::AudioCodingFormat;
pub use sound::SoundRate;
pub use sound::SoundSize;
pub use sound::SoundType;

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
#[serde(tag = "type", rename_all = "kebab-case")]
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
