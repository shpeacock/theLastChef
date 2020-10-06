# animals [![Build Status](https://travis-ci.org/boennemann/animals.svg?branch=master)](https://travis-ci.org/boennemann/animals)

> Get animals

Currently 236 animals.

The list itself is just a [JSON file](words.json) and can be used wherever.
The list is extracted from [wikipedia](https://en.wikipedia.org/wiki/List_of_animal_names).


## Install

```sh
$ npm install --save animals
```


## Usage

```js
var animals = require('animals');

animals();
//=> fox

animals();
//=> panda

animals.words;
// ['aardvark', 'albatross', ...]
```


## API

### animals()

Returns a random [animal](words.json).

### animals.words

Array with all the animals.


## CLI

```sh
$ npm install --global animals
```

```sh
$ animals --help

Example
  $ animals
  lion
```


## License
Entirely based on [superb](https://github.com/sindresorhus/superb) by [Sindre Sorhus](http://sindresorhus.com/).
MIT © [Stephan Bönnemann](http://boennemann.me)
