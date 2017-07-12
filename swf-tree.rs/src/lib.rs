#[macro_use]
extern crate lazy_static;
extern crate num_traits;
extern crate ordered_float;
extern crate regex;
extern crate serde;
#[macro_use]
extern crate serde_derive;
extern crate serde_json;

pub mod avm1;
pub mod fixed_point;
pub mod shapes;
pub mod tags;

mod basic_types;

pub use basic_types::ColorTransform;
pub use basic_types::ColorTransformWithAlpha;
pub use basic_types::Matrix;
pub use basic_types::Rect;
pub use basic_types::SRgb;
pub use basic_types::StraightSRgba;

mod header;

pub use header::CompressionMethod;
pub use header::Header;
pub use header::HeaderSignature;

mod structure;

pub use structure::SwfFile;
pub use structure::Tag;
