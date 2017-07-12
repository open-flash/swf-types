# Primitives

This section describes the primitive values used by the AST.

## `Boolean`

A `true` or `false` value.

- JSON: Boolean
- Typescript: `boolean`
- Rust: `bool`

## `Buffer`

An array of bytes (`uint(8)`) of arbitrary length.

- JSON: Lowercase hexadecimal string of even length.
- Typescript: `Uint8Array`
- Rust: **TODO**

## `Option(Type)`

Represents an optional value of type `Type`.

- JSON: This type can only be used for values of object properties. If a value is present
  then the property is defined and its value has the type `Type`, otherwise the property is not defined
  on the object.
- Typescript: `Type | undefined`
- Rust: `std::option::Option<Type>`

## `Sint(n)`

Signed integer in the inclusive range [-2ⁿ⁻¹, 2ⁿ⁻¹ - 1].

n can be in the inclusive range [1, 32].

- JSON: number
- Typescript: `number`
- Rust:

  | Range of n | Rust type |
  |------------|-----------|
  | [1, 8]     | `i8`      |
  | [9, 16]    | `i16`     |
  | [17, 32]   | `i32`     |

## `Uint(n)`

Unsigned integer in the inclusive range [0, 2ⁿ - 1].

n can be in the inclusive range [1, 32].

- JSON: number
- Typescript: `number`
- Rust:

  | Range of n | Rust type |
  |------------|-----------|
  | [1, 8]     | `u8`      |
  | [9, 16]    | `u16`     |
  | [17, 32]   | `u32`     |

## Ufixed(i, f)

Unsigned fixed point number with i-bit integral part and f-bit fractional part.

## Sfixed(i, f)

Signed fixed point number with i-bit signed integral part and f-bit fractional part.
