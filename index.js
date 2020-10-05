#!/usr/bin/env node

/**
* Description of the file. Add link pointers with {@link link
    name}
    * @author Donacien
    * @date 13/08/2020
    * Contributors : contributor name,
**/

require = require('esm')(module);
require('./src/cli').cli(process.argv);