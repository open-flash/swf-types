<a href="https://github.com/open-flash/open-flash">
    <img src="https://raw.githubusercontent.com/open-flash/open-flash/master/logo.png"
    alt="Open Flash logo" title="Open Flash" align="right" width="64" height="64" />
</a>

# SWF Types

[![npm](https://img.shields.io/npm/v/swf-types.svg)](https://www.npmjs.com/package/swf-types)
[![crates.io](https://img.shields.io/crates/v/swf-types.svg)](https://crates.io/crates/swf-types)
[![GitHub repository](https://img.shields.io/badge/Github-open--flash%2Fswf--types-blue.svg)](https://github.com/open-flash/swf-types)
[![Build status](https://img.shields.io/travis/com/open-flash/swf-types/master.svg)](https://travis-ci.com/open-flash/swf-types)

This project specifies an Abstract Syntax Tree (AST) representation of SWF files (SWF movies). It
also includes Rust and Typescript implementations providing type declarations and serialization to
JSON.

Current status: Still a prototype. As a first draft, all the nodes defined in the Flash 10 spec
were implemented in Typescript. We're now revisiting the nodes and progressively adding them
to the documentation while updating the Rust code. The goal of this phase is to align the AST
more with the usage made by Shumway and Flex instead of the grammar. For example the multiple
versions of the "DefineShapeX" grammar rule can be unified in a single `DefineShape` AST node.
What's done in this phase? The general structure (movie, tags), shapes (records, styles), AMV1
actions, partially text support. The main remaining parts are media (audio/video) and AVM2.

The purpose of the AST is to provide a model for the content of SWF file that is a suitable
middle point between the disk representation and the needs of higher-level processing functions.
Beyond processing, the AST is also serializable in unambiguous way to JSON. This allows the
various component manipulating the AST to have a common language.

References:
- [Official SWF 19 spec (mirror)](https://github.com/open-flash/open-flash/blob/master/specs/swf-spec-19.pdf)
- [Shumway SWF file](https://github.com/mozilla/shumway/blob/16451d8836fa85f4b16eeda8b4bda2fa9e2b22b0/src/swf/SWFFile.ts)
- [Flex Movie](https://github.com/apache/flex-sdk/blob/bb7447f5ebe32ce58f85a9e9b2d2ffc48994cf42/modules/swfutils/src/java/flash/swf/Movie.java)
- [SwfMill reference](http://www.swfmill.org/doc/reference.html)

## Documentation

Check the `docs` directory, the root node is called `Movie`.

The structure of the `docs` directory corresponds to the public API of the implementations:
each file represents a type, each directory a namespace.

Example:
```
docs/
├── movie.md
└─┬ tags/
  └── define-shape.md
```
- Typescript:
  ```typescript
  import * as swfTypes from "swf-types";
  const movie: swfTypes.Movie = ...;
  const defineShapeTag: swfTypes.tags.DefineShape = ...;
  ```
- Rust:
  ```rust
  use swf_types;
  fn main() {
    let movie: swf_types::Movie = ...;
    let defineShapeTag: swf_types::tags::DefineShape = ...;
  }
  ```

## Types

A type is a set of values. For example, the type `Boolean` is the set `{true, false}`.
The goal of this library is to describe the type `Movie` which defines the set of valid ASTs.

The documentation uses 4 kinds of types (or "types of types" :P) to build the description of the
AST.

- Primitives are the basic types used to build the other ones (integers, strings, booleans, ...)
- Interfaces are compound types mapping a few keys with their type.
- Enums wrap a few possible sub-types to represent alternatives.
- Collections define containers for same-type values

## Primitive values

The documentation assumes some primitive values such strings, booleans and integers.
The primitives are mostly implementation-dependents. The documentation tries to provide some
parameters to chose the most suitable type available in the language.

## Interface

Most of the AST is defined in term of interfaces. An interface defines a compound type made of
a fixed number of _properties_. Each property has a name (key) and a type.

Example:

> Point in the the sRGB color space with 8-bit color depth.
>
> ```
> interface SRgb8 {
>   r: Uint(8);
>   g: Uint(8);
>   b: Uint(8);
> }
> ```

The type of optional properties is wrapped in `Option()`, for example `Optional(Uint(8))`.

- Typescript: This corresponds to standard TS interfaces. Optional properties use `?`.
- Rust: This corresponds to structs with public fields. Optional properties use `Option<T>`.
- JSON: It corresponds to objects. The keys use `snake_case`. Missing optional properties are not
  emitted.

## Enum

The enums are represented as a tagged union of interfaces.

They are introduced by the keyword `union` followed by the name of the field used as the tag.
This field is added to each variant, its value is the name of the variant in `snake-case`.

Example:

```
union(type) ShapeRecord {
  Edge;
  StyleChange;
}
```

`ShapeRecord` is an enum with two variants: `Edge` and `StyleChange`. They both have an extra
field `type`, with the value `edge` or `style-change` depending on the variant.

## Containers

The main container type is `Vec<T>`: an order list of values of type `T` (can contain any number of
values).

## License

[MIT License](./LICENSE.md)
