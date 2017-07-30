extern crate hex;
#[macro_use]
extern crate lazy_static;
extern crate num_traits;
extern crate ordered_float;
extern crate regex;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;

mod helpers;

pub mod avm1;
pub mod filters;
pub mod fixed_point;
pub mod shapes;
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

mod movie;

pub use movie::CompressionMethod;
pub use movie::Header;
pub use movie::Movie;
pub use movie::SwfSignature;
pub use movie::Tag;

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
}
