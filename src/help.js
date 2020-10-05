/**
* Description of the file. Add link pointers with {@link link
  name}
  * @author Donacien
  * @date 13/08/2020
  * Contributors : contributor name,
**/

import chalk from 'chalk';

const menus = {
  main: `
                              ${chalk.yellowBright('git2git Basic [command] <options>')}
${chalk.greenBright('')}
${chalk.greenBright('Usage: [git2git || g2g]')}
${chalk.greenBright('')}
      [${chalk.cyanBright('Configure Your Default Projects Paths')}
      ${chalk.greenBright('')}
      ${chalk.yellowBright('config [local || -l] <Local Path>')} ................ Local Projects directory path
      ${chalk.yellowBright('config [online || -o] <Online Path>')} ........... Online Projects directory path
      ${chalk.yellowBright('config [-l || local] <Local Path> [-o || online] <Online Path>')}..............  default Local Project Paths, default Online Project Paths
      ${chalk.greenBright('')}
      ${chalk.cyanBright('Synchronize and Push project Updates')}
      ${chalk.yellowBright('<projectname>:<branch>:<commitmessage>')}..............  default Local Project Paths, default Online Project Paths
      ${chalk.greenBright('')}
      ${chalk.cyanBright('To see all projects in both paths')}
      ${chalk.greenBright('')}
      ${chalk.yellowBright('[git2git | g2g]')}
      ${chalk.greenBright('')}
      ${chalk.cyanBright('Check Current Version Version')}
      ${chalk.greenBright('')}
      ${chalk.yellowBright('version')} ............ show package version
      ${chalk.greenBright('')}
      ${chalk.cyanBright('Get Help')}
      ${chalk.greenBright('')}
      ${chalk.yellowBright('help')} ............... show help menu for all commands]
`,
}

export async function help(args) {
  const subCmd = args._[0] === 'help'
    ? args._[1]
    : args._[0]
  console.log(menus[subCmd] || menus.main)
}