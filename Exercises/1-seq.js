'use strict';

const seq = (...args) => g => ((typeof g === 'number') ?
  args.reverse().reduce(((f, n) => n(f)), g) :
  seq(...args.concat(g)));

module.exports = { seq };
