/**
 * File: main.js
 *
 * This file represents theme's JavaScript entry point. All scripts
 * imported into this root tree will be compiled to for ES5 compatibility. The
 * final output will be saved in the /dist channel.
 *
 * Additionally, sass files are also included through this entry point via
 * `main.scss`, they are then extracted to a separate file with WebPack.
 */

/**
 * Required Imports:
 */
import 'babel-polyfill'
import '../sass/main.scss'
import App from './modules/app'

let application = new App();
