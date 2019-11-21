<a href="https://github.com/open-flash/open-flash">
    <img src="https://raw.githubusercontent.com/open-flash/open-flash/master/logo.png"
    alt="Open Flash logo" title="Open Flash" align="right" width="64" height="64" />
</a>

# SWF Types (Typescript)

[![npm](https://img.shields.io/npm/v/swf-types.svg)](https://www.npmjs.com/package/swf-types)
[![GitHub repository](https://img.shields.io/badge/Github-open--flash%2Fswf--types-blue.svg)](https://github.com/open-flash/swf-types)
[![Build status](https://img.shields.io/travis/com/open-flash/swf-types/master.svg)](https://travis-ci.com/open-flash/swf-types)

Typescript implementation of the SWF Abstract Syntax Tree (AST).

## Usage

```shell
# Run as a simple user
npm install -S swf-types
```

```typescript
import {readFileString} from "fs";
import {Movie} from "swf-types";

// Deserialize
const jsonString: string = readFileString("ast.json").toString("utf8");
const parsedJson: Movie.Json = JSON.parse(jsonString);
const movie: Movie = Movie.Type.read("json", parsedJson);

// Serialize
const emittedJson: Movie.Json = Movie.Type.write("json", movie);
console.log(JSON.stringify(jsonMovie, null, 2));
```
