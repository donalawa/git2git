/**
* Description of the file. Add link pointers with {@link link
    name}
    * @author Donacien
    * @date 13/08/2020
    * Contributors : contributor name,
**/
import chalk from 'chalk';

export async function version() {
    const packagejson = require('../package.json');
    console.log(chalk.blueBright(`You are using git2git version ${packagejson.version}`))
}