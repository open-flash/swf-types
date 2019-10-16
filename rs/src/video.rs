use ::serde::{Deserialize, Serialize};

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "kebab-case")]
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

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum VideoDeblocking {
  PacketValue,
  Off,
  Level1,
  Level2,
  Level3,
  Level4,
}
