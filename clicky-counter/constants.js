const {resolve} = require('path');
/** PATHS **/
const SRC_PATH = resolve(__dirname,'src');
const OUTPUT_PATH = resolve(__dirname,'dist');

/** CONSTANTS **/
const ROOT = '/';

module.exports = {
  ROOT,
  SRC_PATH,
  OUTPUT_PATH
};
