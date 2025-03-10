<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# zdrot

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a plane rotation.

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-base-wasm-zdrot
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var zdrot = require( '@stdlib/blas-base-wasm-zdrot' );
```

#### zdrot.main( N, zx, strideX, zy, strideY, c, s )

Applies a plane rotation.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.main( zx.length, zx, 1, zy, 1, 0.8, 0.6 );
// zx => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8, ~5.6, ~6.4 ]
// zy => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6, ~-4.2, ~-4.8 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zx**: first input [`Complex128Array`][@stdlib/array/complex128].
-   **strideX**: index increment for `zx`.
-   **zy**: second input [`Complex128Array`][@stdlib/array/complex128].
-   **strideY**: index increment for `zy`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

The `N` and stride parameters determine how values in the strided arrays are accessed at runtime. For example, to apply a plane rotation to every other element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.main( 2, zx, 2, zy, 2, 0.8, 0.6 );
// zx => <Complex128Array>[ ~0.8, ~1.6, 3.0, 4.0, 4.0, ~4.8, 7.0, 8.0 ]
// zy => <Complex128Array>[ ~-0.6, ~-1.2,  0.0, 0.0, -3.0, ~-3.6,  0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

// Initial arrays...
var zx0 = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy0 = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var zx1 = new Complex128Array( zx0.buffer, zx0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var zy1 = new Complex128Array( zy0.buffer, zy0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

zdrot.main( 2, zx1, -2, zy1, 1, 0.8, 0.6 );
// zx0 => <Complex128Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// zy0 => <Complex128Array>[ 0.0, 0.0,  0.0, 0.0, ~-4.2, ~-4.8, ~-1.8, ~-2.4 ]
```

#### zdrot.ndarray( N, zx, strideX, offsetX, zy, strideY, offsetY, c, s )

Applies a plane rotation using alternative indexing semantics.

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.ndarray( zx.length, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );
// zx => <Complex128Array>[ ~0.8, ~1.6, ~2.4, ~3.2, 4.0, ~4.8 ]
// zy => <Complex128Array>[ ~-0.6, ~-1.2, ~-1.8, ~-2.4, -3.0, ~-3.6 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `zx`.
-   **offsetY**: starting index for `zy`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to apply a plane rotation to every other element starting from the second element,

```javascript
var Complex128Array = require( '@stdlib/array-complex128' );

var zx = new Complex128Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
var zy = new Complex128Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

zdrot.ndarray( 2, zx, 2, 1, zy, 2, 1, 0.8, 0.6 );
// zx => <Complex128Array>[ 1.0, 2.0, ~2.4, ~3.2, 5.0, 6.0, ~5.6, ~6.4 ]
// zy => <Complex128Array>[ 0.0, 0.0, ~-1.8, ~-2.4, 0.0, 0.0, ~-4.2, ~-4.8 ]
```

* * *

### Module

#### zdrot.Module( memory )

Returns a new WebAssembly [module wrapper][@stdlib/wasm/module-wrapper] instance which uses the provided WebAssembly [memory][@stdlib/wasm/memory] instance as its underlying memory.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );

// Create a new memory instance with an initial size of 10 pages (640KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zdrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();
```

#### zdrot.Module.prototype.main( N, zxp, sx, zyp, sy, c, s )

Applies a plane rotation.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );
var oneTo = require( '@stdlib/array-one-to' );
var ones = require( '@stdlib/array-ones' );
var zeros = require( '@stdlib/array-zeros' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
var Complex128Array = require( '@stdlib/array-complex128' );
var reinterpretComplex128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var zdrot = require( '@stdlib/blas-base-wasm-zdrot' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zdrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex128';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing the input vectors:
var zxptr = 0;
var zyptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float64' );
var zx = new Complex128Array( xbuf.buffer );
mod.write( zxptr, zx );

var ybuf = ones( N*2, 'float64' );
var zy = new Complex128Array( ybuf.buffer );
mod.write( zyptr, zy );

// Perform computation:
mod.main( N, zxptr, 1, zyptr, 1, 0.8, 0.6 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( zxptr, viewX );
mod.read( zyptr, viewY );

console.log( reinterpretComplex128( viewX, 0 ) );
// => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex128( viewY, 0 ) );
// => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **zxp**: first input [`Complex128Array`][@stdlib/array/complex128] pointer (i.e., byte offset).
-   **sx**: index increment for `zx`.
-   **zyp**: second input [`Complex128Array`][@stdlib/array/complex128] pointer (i.e., byte offset).
-   **sy**: index increment for `zy`.
-   **c**: cosine of the angle of rotation.
-   **s**: sine of the angle of rotation.

#### zdrot.Module.prototype.ndarray( N, zxp, sx, ox, zyp, sy, oy, c, s )

Applies a plane rotation using alternative indexing semantics.

<!-- eslint-disable node/no-sync -->

```javascript
var Memory = require( '@stdlib/wasm-memory' );
var oneTo = require( '@stdlib/array-one-to' );
var ones = require( '@stdlib/array-ones' );
var zeros = require( '@stdlib/array-zeros' );
var bytesPerElement = require( '@stdlib/ndarray-base-bytes-per-element' );
var Complex128Array = require( '@stdlib/array-complex128' );
var reinterpretComplex128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var zdrot = require( '@stdlib/blas-base-wasm-zdrot' );

// Create a new memory instance with an initial size of 10 pages (320KiB) and a maximum size of 100 pages (6.4MiB):
var mem = new Memory({
    'initial': 10,
    'maximum': 100
});

// Create a BLAS routine:
var mod = new zdrot.Module( mem );
// returns <Module>

// Initialize the routine:
mod.initializeSync();

// Define a vector data type:
var dtype = 'complex128';

// Specify a vector length:
var N = 5;

// Define pointers (i.e., byte offsets) for storing input vectors:
var zxptr = 0;
var zyptr = N * bytesPerElement( dtype );

// Write vector values to module memory:
var xbuf = oneTo( N*2, 'float64' );
var zx = new Complex128Array( xbuf.buffer );
mod.write( zxptr, zx );

var ybuf = ones( N*2, 'float64' );
var zy = new Complex128Array( ybuf.buffer );
mod.write( zyptr, zy );

// Perform computation:
mod.ndarray( N, zxptr, 1, 0, zyptr, 1, 0, 0.8, 0.6 );

// Read out the results:
var viewX = zeros( N, dtype );
var viewY = zeros( N, dtype );
mod.read( zxptr, viewX );
mod.read( zyptr, viewY );

console.log( reinterpretComplex128( viewX, 0 ) );
// => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex128( viewY, 0 ) );
// => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `zx`.
-   **oy**: starting index for `zy`.

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   If `N <= 0`, `zx` and `zy` are left unchanged.
-   This package implements routines using WebAssembly. When provided arrays which are not allocated on a `zdrot` module memory instance, data must be explicitly copied to module memory prior to computation. Data movement may entail a performance cost, and, thus, if you are using arrays external to module memory, you should prefer using [`@stdlib/blas-base/zdrot`][@stdlib/blas/base/zdrot]. However, if working with arrays which are allocated and explicitly managed on module memory, you can achieve better performance when compared to the pure JavaScript implementations found in [`@stdlib/blas/base/zdrot`][@stdlib/blas/base/zdrot]. Beware that such performance gains may come at the cost of additional complexity when having to perform manual memory management. Choosing between implementations depends heavily on the particular needs and constraints of your application, with no one choice universally better than the other.
-   `zdrot()` corresponds to the [BLAS][blas] level 1 function [`zdrot`][zdrot].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var hasWebAssemblySupport = require( '@stdlib/assert-has-wasm-support' );
var oneTo = require( '@stdlib/array-one-to' );
var ones = require( '@stdlib/array-ones' );
var zeros = require( '@stdlib/array-zeros' );
var Complex128Array = require( '@stdlib/array-complex128' );
var reinterpretComplex128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var zdrot = require( '@stdlib/blas-base-wasm-zdrot' );

// Specify a vector length:
var N = 5;

var xbuf = oneTo( N*2, 'float64' );
var zx = new Complex128Array( xbuf.buffer );

var ybuf = ones( N*2, 'float64' );
var zy = new Complex128Array( ybuf.buffer );

// Perform computation:
zdrot.ndarray( N, zx, 1, 0, zy, 1, 0, 0.8, 0.6 );

// Print the results:
console.log( reinterpretComplex128( zx, 0 ) );
// => <Float64Array>[ ~1.4, ~2.2, 3.0, ~3.8, ~4.6, ~5.4, ~6.2, 7.0, ~7.8, ~8.6 ]

console.log( reinterpretComplex128( zy, 0 ) );
// => <Float64Array>[ ~0.2, ~-0.4, -1.0, ~-1.6, ~-2.2, ~-2.8, ~-3.4, -4.0, ~-4.6, ~-5.2 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-wasm-zdrot.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-wasm-zdrot

[test-image]: https://github.com/stdlib-js/blas-base-wasm-zdrot/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-wasm-zdrot/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-wasm-zdrot/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-wasm-zdrot?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-wasm-zdrot.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-wasm-zdrot/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-wasm-zdrot/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-wasm-zdrot/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-wasm-zdrot/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-wasm-zdrot/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-wasm-zdrot/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-wasm-zdrot/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-wasm-zdrot/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-wasm-zdrot/main/LICENSE

[blas]: http://www.netlib.org/blas

[zdrot]: http://www.netlib.org/lapack/explore-html/da/df6/group__complex__blas__level1.html

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128

[@stdlib/wasm/memory]: https://github.com/stdlib-js/wasm-memory

[@stdlib/wasm/module-wrapper]: https://github.com/stdlib-js/wasm-module-wrapper

[@stdlib/blas/base/zdrot]: https://github.com/stdlib-js/blas-base-zdrot

</section>

<!-- /.links -->
