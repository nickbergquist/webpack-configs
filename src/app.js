'use strict';

import './scss/main.scss';

import './js/test-file-01.js';
import './js/test-file-02.js';


console.log('process.env.NODE_ENV : ' + process.env.NODE_ENV);

if (process.env.NODE_ENV !== 'production') {
   console.log('In development mode.');
}
