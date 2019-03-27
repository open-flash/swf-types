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

#[derive(Debug, PartialEq, Eq)]
pub enum SoundRate {
  SoundRate5500,
  SoundRate11000,
  SoundRate22000,
  SoundRate44000,
}

impl ::serde::Serialize for SoundRate {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
      S: ::serde::Serializer,
  {
    let sound_rate: u64 = match self {
      SoundRate::SoundRate5500 => 5500,
      SoundRate::SoundRate11000 => 11000,
      SoundRate::SoundRate22000 => 22000,
      SoundRate::SoundRate44000 => 44000,
    };
    return serializer.serialize_u64(sound_rate);
  }
}

impl<'de> ::serde::Deserialize<'de> for SoundRate {
  fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
      D: ::serde::Deserializer<'de>,
  {
    struct Visitor;

    impl<'de> ::serde::de::Visitor<'de> for Visitor {
      type Value = SoundRate;

      fn expecting(&self, formatter: &mut ::std::fmt::Formatter) -> ::std::fmt::Result {
        formatter.write_str("5500, 11000, 22000 or 44000")
      }

      fn visit_u64<E>(self, value: u64) -> Result<SoundRate, E>
        where
          E: ::serde::de::Error,
      {
        match value {
          5500 => Ok(SoundRate::SoundRate5500),
          11000 => Ok(SoundRate::SoundRate11000),
          22000 => Ok(SoundRate::SoundRate22000),
          44000 => Ok(SoundRate::SoundRate44000),
          _ => Err(E::custom(format!("unknown SoundRate value: {}", value))),
        }
      }
    }

    // Deserialize the enum from a u64.
    deserializer.deserialize_u64(Visitor)
  }
}

#[derive(Debug, PartialEq, Eq)]
pub enum SoundSize {
  SoundSize8,
  SoundSize16,
}


impl ::serde::Serialize for SoundSize {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
      S: ::serde::Serializer,
  {
    let sound_size: u64 = match self {
      SoundSize::SoundSize8 => 8,
      SoundSize::SoundSize16 => 16,
    };
    return serializer.serialize_u64(sound_size);
  }
}

impl<'de> ::serde::Deserialize<'de> for SoundSize {
  fn deserialize<D>(deserializer: D) -> Result<Self, D::Error>
    where
      D: ::serde::Deserializer<'de>,
  {
    struct Visitor;

    impl<'de> ::serde::de::Visitor<'de> for Visitor {
      type Value = SoundSize;

      fn expecting(&self, formatter: &mut ::std::fmt::Formatter) -> ::std::fmt::Result {
        formatter.write_str("8 or 16")
      }

      fn visit_u64<E>(self, value: u64) -> Result<SoundSize, E>
        where
          E: ::serde::de::Error,
      {
        match value {
          8 => Ok(SoundSize::SoundSize8),
          16 => Ok(SoundSize::SoundSize16),
          _ => Err(E::custom(format!("unknown SoundSize value: {}", value))),
        }
      }
    }

    // Deserialize the enum from a u64.
    deserializer.deserialize_u64(Visitor)
  }
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum SoundType {
  Mono,
  Stereo,
}
