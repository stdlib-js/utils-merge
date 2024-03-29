/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var copy = require( '@stdlib/utils-copy' );
var string2buffer = require( '@stdlib/buffer-from-string' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Number = require( '@stdlib/number-ctor' );
var Boolean = require( '@stdlib/boolean-ctor' );
var merge = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof merge, 'function', 'export is a function' );
	t.end();
});

tape( 'the function throws an error if provided insufficient arguments', function test( t ) {
	t.throws( foo, Error, 'throws error' );
	t.throws( bar, Error, 'throws error' );
	t.end();
	function foo() {
		merge();
	}
	function bar() {
		merge( {} );
	}
});

tape( 'if provided a `target` argument which is not an object, the function throws a type error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			merge( value, {} );
		};
	}
});

tape( 'if provided a `source` argument which is not an object, the function throws a type error', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		null,
		NaN,
		void 0,
		true,
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided ' + values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			merge( {}, value );
		};
	}
});

tape( 'the function can merge two objects', function test( t ) {
	var expected;
	var actual;
	var target;
	var src;

	target = {};
	src = {
		'a': 'beep',
		'b': 'boop'
	};

	actual = merge( target, src );
	expected = copy( src );

	t.notEqual( actual, src, 'does not return source object' );
	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function returns the target object', function test( t ) {
	var actual;
	var target;
	var src;

	target = {};
	src = {
		'a': 'beep',
		'b': 'boop'
	};

	actual = merge( target, src );

	t.equal( actual, target, 'returns target object' );
	t.end();
});

tape( 'the function can merge multiple objects', function test( t ) {
	var expected;
	var actual;
	var target;
	var src1;
	var src2;

	target = {};
	src1 = {
		'a': 'beep',
		'b': 'boop'
	};
	src2 = {
		'c': [ 1, 2, 3 ]
	};

	actual = merge( target, src1, src2 );
	expected = {
		'a': 'beep',
		'b': 'boop',
		'c': [ 1, 2, 3 ]
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});

tape( 'the function can deep merge', function test( t ) {
	var expected;
	var actual;
	var target;
	var src;

	target = {
		'c': {
			'a': 'beep',
			'b': 'boop'
		}
	};
	src = {
		'c': {
			'b': 'woot',
			'c': [ 1, 2, 3 ]
		}
	};

	actual = merge( target, src );
	expected = {
		'c': {
			'a': 'beep',
			'b': 'woot',
			'c': [ 1, 2, 3 ]
		}
	};

	t.deepEqual( actual, expected, 'deep equal' );
	t.notEqual( actual.c.c, src.c.c, 'deep copied' );
	t.end();
});

tape( 'the function supports merging built-in objects and class instances', function test( t ) {
	var expected;
	var actual;
	var target;
	var src;

	function Foo( bar ) {
		this._bar = bar;
		return this;
	}

	target = {
		'time': new Date(),
		'regex': /beep/,
		'buffer': string2buffer( 'beep' ),
		'Boolean': new Boolean( true ), // eslint-disable-line no-new-wrappers
		'String': new String( 'woot' ), // eslint-disable-line no-new-wrappers
		'Number': new Number( 5 ), // eslint-disable-line no-new-wrappers
		'Uint8Array': new Uint8Array( 10 ),
		'Foo': new Foo( 'beep' )
	};

	src = {
		'time': new Date( target.time - 60000 ),
		'regex': /boop/,
		'buffer': string2buffer( 'boop' ),
		'Boolean': new Boolean( false ), // eslint-disable-line no-new-wrappers
		'String': new String( 'bop' ), // eslint-disable-line no-new-wrappers
		'Number': new Number( 10 ), // eslint-disable-line no-new-wrappers
		'Uint8Array': new Uint8Array( 5 ),
		'Foo': new Foo( 'boop' )
	};

	actual = merge( target, src );
	expected = copy( src );

	t.deepEqual( actual, expected, 'deep equal' );
	t.end();
});
