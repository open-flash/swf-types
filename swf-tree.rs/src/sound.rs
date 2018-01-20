#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum AudioCodingFormat {
  UncompressedNativeEndian,
  Adpcm,
  Mp3,
  UncompressedLittleEndian,
  Nellymoser16,
  Nellymoser8,
  Nellymoser,
  Speex,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum SoundRate {
  SoundRate5500,
  SoundRate11000,
  SoundRate22000,
  SoundRate44000,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum SoundSize {
  SoundSize8,
  SoundSize16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum SoundType {
  Mono,
  Stereo,
}
