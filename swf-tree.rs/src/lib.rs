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
pub mod shape_records;
pub mod tags;
pub mod text;

mod basic_types;

pub use self::basic_types::ColorTransform;
pub use self::basic_types::ColorTransformWithAlpha;
pub use self::basic_types::LanguageCode;
pub use self::basic_types::Matrix;
pub use self::basic_types::NamedId;
pub use self::basic_types::Rect;
pub use self::basic_types::SRgb8;
pub use self::basic_types::StraightSRgba8;
pub use self::basic_types::Vector2D;

mod gradient;

pub use self::gradient::ColorStop;
pub use self::gradient::ColorSpace;
pub use self::gradient::GradientSpread;
pub use self::gradient::Gradient;

mod movie;

pub use self::movie::CompressionMethod;
pub use self::movie::Header;
pub use self::movie::Movie;
pub use self::movie::SwfSignature;
pub use self::movie::Tag;

mod shapes;

pub use self::shapes::ClipAction;
pub use self::shapes::ClipEventFlags;
pub use self::shapes::CapStyle;
pub use self::shapes::FillStyle;
pub use self::shapes::Glyph;
pub use self::shapes::JoinStyle;
pub use self::shapes::LineStyle;
pub use self::shapes::Shape;
pub use self::shapes::ShapeRecord;

mod sound;

pub use self::sound::AudioCodingFormat;
pub use self::sound::SoundRate;
pub use self::sound::SoundSize;
pub use self::sound::SoundType;

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
