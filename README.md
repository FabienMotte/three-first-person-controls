# Three.js / First person controls

[![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url]

**First person controls** written in **ES6** for [**Three.js**](http://threejs.org/) as UMD.

## Installation

```bash
npm install --save three @fabienmotte/three-first-person-controls
```

## Usage

#### ES6
```javascript
import THREE form 'three';
import FirstPersonControls from '@fabienmotte/three-first-person-controls';

const controls = new FirstPersonControls( camera );
controls.lookSpeed = 0.1;
controls.movementSpeed = 100;

const clock = new THREE.Clock( true );

const render = () => {
  requestAnimationFrame( render );

  controls.update( clock.getDelta() );
};

render();
```

#### ES5
```javascript
var THREE = require( 'three' );
var FirstPersonControls = require( '@fabienmotte/three-first-person-controls' );

var controls = new FirstPersonControls( camera );
controls.lookSpeed = 0.1;
controls.movementSpeed = 100;

var clock = new THREE.Clock( true );

var render = function() {
  requestAnimationFrame( render );

  controls.update( clock.getDelta() );
};

render();
```

## Versioning

The major version of this repository follows Three.js major releases (ex. 73.0.0 for r73).

Minor and patch will be reserved for bug fixes and documentation updates.

## License

MIT © [Mr.doob](http://mrdoob.com/), [AlteredQualia](http://alteredqualia.com/) and [Paul Irish](http://paulirish.com/).

[npm-image]: https://badge.fury.io/js/%40fabienmotte%2Fthree-first-person-controls.svg
[npm-url]: https://npmjs.org/package/@fabienmotte/three-first-person-controls
[daviddm-image]: https://david-dm.org/FabienMotte/three-first-person-controls.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/FabienMotte/three-first-person-controls