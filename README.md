<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Merge

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Merge and extend objects.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-merge
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
var merge = require( '@stdlib/utils-merge' );
```

#### merge( target, source1\[, source2\[,...,sourceN]] )

Merges and extends a target `object`.

```javascript
var target = {
    'a': 'beep'
};
var source = {
    'a': 'boop',
    'b': 'bap'
};

var out = merge( target, source );
/* returns
    {
        'a': 'boop',
        'b': 'bap'
    }
*/
```

The function supports merging multiple source `objects`.

```javascript
var target = {
    'a': 'beep'
};
var source1 = {
    'b': 'boop'
};
var source2 = {
    'c': 'cat'
};

var out = merge( target, source1, source2 );
/* returns
    {
        'a': 'beep',
        'b': 'boop',
        'c': 'cat'
    }
*/
```

#### merge.factory( options )

Returns a custom merge `function` for merging and extending `objects`.

```javascript
var opts = {
    'level': 100,
    'copy': true,
    'override': true,
    'extend': true
};

var m = merge.factory( opts );
```

The function accepts the following `options`:

-   **level**: limits the merge depth. The default merge strategy is a deep (recursive) merge. Default: `+infinity`.
-   **copy**: `boolean` indicating whether to [deep copy][@stdlib/utils/copy] merged values. Deep copying prevents shared references and source `object` mutation. Default: `true`.
-   **override**: defines the merge strategy. If `true`, source `object` values will **always** override target `object` values. If `false`, source values **never** override target values (useful for adding, but not overwriting, properties). To define a custom merge strategy, provide a `function`. Default: `true`.
-   **extend**: `boolean` indicating whether new properties can be added to the target `object`. If `false`, only **shared** properties are merged. Default: `true`.

The default merge is a deep (recursive) merge.

```javascript
var m = merge.factory( {} );

var target = {
    'a': {
        'b': {
            'c': 5
        },
        'd': 'beep'
    }
};
var source = {
    'a': {
        'b': {
            'c': 10
        }
    }
};

var out = m( target, source );
/* returns
    {
        'a': {
            'b': {
                'c': 10
            },
            'd': 'beep'
        }
    }
*/
```

To limit the merge depth, set the `level` option.

```javascript
var m = merge.factory({
    'level': 2
});

var target = {
    '1': {
        'a': 'beep',
        '2': {
            '3': null,
            'b': [ 5, 6, 7 ]
        }
    }
};

var source = {
    '1': {
        'b': 'boop',
        '2': {
            '3': [ 1, 2, 3 ]
        }
    }
};

var out = m( target, source );
/* returns
    {
        '1': {
            'a': 'beep',
            'b': 'boop',
            '2': {
                '3': [ 1, 2, 3 ]
            }
        }
    }
*/
```

By default, merged values are [deep copied][@stdlib/utils/copy].

```javascript
var m = merge.factory( {} );

var target = {
    'a': null
};
var source = {
    'a': {
        'b': [ 1, 2, 3 ]
    }
};

var out = m( target, source );

console.log( out.a.b === source.a.b );
// => false
```

To allow shared references, set the `copy` option to `false`.

```javascript
var m = merge.factory({
    'copy': false
});

var target = {};

var source = {
    'a': [ 1, 2, 3 ]
};

var out = m( target, source );

var bool = ( out.a === source.a );
// returns true
```

To prevent existing properties from being overridden, set the `override` option to `false`.

```javascript
var m = merge.factory({
    'override': false
});

var target = {
    'a': 'beep',
    'b': 'boop'
};

var source = {
    'a': null,
    'c': 'bop'
};

var out = m( target, source );
/* returns
    {
        'a': 'beep',
        'b': 'boop',
        'c': 'bop'
    }
*/
```

Alternatively, to define a custom merge strategy, set the `override` option to a `function`.

```javascript
function strategy( a, b, key ) {
    /* Parameters:
        a => target value
        b => source value
        key => object key
    */
    if ( key === 'a' ) {
        return b;
    }
    if ( key === 'b' ) {
        return a;
    }
    return 'bebop';
}

var m = merge.factory({
    'override': strategy
});

var target = {
    'a': 'beep',
    'b': 'boop',
    'c': 1234
};

var source = {
    'a': null,
    'b': {},
    'c': 'bop'
};

var out = m( target, source );
/* returns
    {
        'a': null,
        'b': 'boop',
        'c': 'bebop'
    }
*/
```

To prevent non-existent properties from being added to the target `object`, set the `extend` option to `false`.

```javascript
var m = merge.factory({
    'extend': false
});

var target = {
    'a': 'beep',
    'b': 'boop'
};

var source = {
    'b': 'hello',
    'c': 'world'
};

var out = m( target, source );
/* returns
    {
        'a': 'beep',
        'b': 'hello'
    }
*/
```

</section>

<!-- /.usage -->

<section class="notes">

* * *

## Notes

-   The target `object` is **mutated**.

    ```javascript
    var target = {
        'a': 'beep'
    };
    var source = {
        'b': 'boop'
    };

    var out = merge( target, source );

    console.log( out === target );
    // => true

    console.log( target.b );
    // => 'boop'
    ```

    To return a new `object`, provide an empty `object` as the first argument.

    ```javascript
    var target = {
        'a': 'beep'
    };
    var source = {
        'b': 'boop'
    };

    var out = merge( {}, target, source );

    console.log( out === target );
    // => false
    ```

-   **Only** plain JavaScript `objects` are merged and extended. The following values/types are either [deep copied][@stdlib/utils/copy] or assigned:

    -   `Boolean`
    -   `String`
    -   `Number`
    -   `Date`
    -   `RegExp`
    -   `Array`
    -   `Int8Array`
    -   `Uint8Array`
    -   `Uint8ClampedArray`
    -   `Init16Array`
    -   `Uint16Array`
    -   `Int32Array`
    -   `Uint32Array`
    -   `Float32Array`
    -   `Float64Array`
    -   `Buffer` ([Node.js][node-buffer])
    -   `Set`
    -   `Map`
    -   `Error`
    -   `URIError`
    -   `ReferenceError`
    -   `SyntaxError`
    -   `RangeError`

-   Support for deep merging class instances is inherently [**fragile**][@stdlib/utils/copy].

-   `Number`, `String`, or `Boolean` objects are merged as [primitives][@stdlib/utils/copy].

-   Functions are **not** [deep copied][@stdlib/utils/copy].

</section>

<!-- /.notes -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var merge = require( '@stdlib/utils-merge' );

var target = {
    'a': 'beep',
    'b': 'boop',
    'c': {
        'c1': 'woot',
        'c2': false,
        'c3': {
            'c3a': [ 1, 2 ],
            'c3b': null
        }
    },
    'd': [ 1, 2, 3 ]
};

var source = {
    'b': 3.141592653589793,
    'c': {
        'c1': 'bap',
        'c3': {
            'c3b': 5,
            'c3c': 'bop'
        },
        'c4': 1337,
        'c5': new Date()
    },
    'd': [ 4, 5, 6 ],
    'e': true
};

var out = merge( {}, target, source );
/* returns
    {
        'a': 'beep',
        'b': 3.141592653589793,
        'c': {
            'c1': 'bap',
            'c2': false,
            'c3': {
                'c3a': [ 1, 2 ],
                'c3b': 5,
                'c3c': 'bop'
            },
            'c4': 1337,
            'c5': <Date>
        },
        'd': [ 4, 5, 6 ],
        'e': true
    }
*/
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-copy`][@stdlib/utils/copy]</span><span class="delimiter">: </span><span class="description">copy or deep clone a value to an arbitrary depth.</span>

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-merge.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-merge

[test-image]: https://github.com/stdlib-js/utils-merge/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-merge/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-merge/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-merge?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-merge.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-merge/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-merge/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-merge/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-merge/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-merge/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-merge/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-merge/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-merge/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-merge/main/LICENSE

[node-buffer]: http://nodejs.org/api/buffer.html

<!-- <related-links> -->

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils-copy

<!-- </related-links> -->

</section>

<!-- /.links -->
