#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "kebab-case")
)]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum VideoCodec {
  None,
  Jpeg,
  Sorenson,
  Screen,
  Vp6,
  Vp6Alpha,
  Screen2,
  Avc,
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "kebab-case")
)]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum VideoDeblocking {
  PacketValue,
  Off,
  Level1,
  Level2,
  Level3,
  Level4,
}
