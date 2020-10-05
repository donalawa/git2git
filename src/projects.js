/**
* Description of the file. Add link pointers with {@link link
    name}
    * @author Donacien
    * @date 13/08/2020
    * Contributors : contributor name,
**/

import { execSync } from 'child_process'
import chalk from 'chalk';
import { configKey } from './config';
import Conf from 'conf/dist/source';

export async function projects(args) {
    const loc = chalk.blueBright('All Projects In Bitbucket Directory')
    const onl = chalk.blueBright('All Projects In Gitlab Directory')
    const config = new Conf().get(configKey);
 
    console.log(loc);
    try {
        execSync(`cd ${config.local}`)
        execSync('ls', {
            cwd: config.local,
            stdio: [1,2,3]
        })
    } catch (error) {
       console.log( chalk.redBright(`${config.local} is not a path on this machine`))
    }
    

    console.log(onl)

   try {
    execSync(`cd ${config.online}`)
    execSync('ls', {
        cwd: config.online,
        stdio: [1,2,3]
    })
   } catch (error) {
    console.log( chalk.redBright(`${config.online} is not a path on this machine`))
   }
  }
  