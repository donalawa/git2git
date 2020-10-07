/**
* Description of the file. Add link pointers with {@link link
    name}
    * @author Donacien
    * @date 13/08/2020
    * Contributors : contributor name,
**/


import minimist from 'minimist';
import { version } from './version';
import { help } from './help';
import { configure } from './config';
import { projects } from './projects';
import { push } from './push';
import { pushAll } from './push_all';
import { pushlocal } from './push_local';

/**
* Function description
* @param note - argsArray: The arguments passed from the command line
* @return The function bellow will take your command and check if it is a valid git2git command then it will call the appropriate function
for the task
*/
export async function cli(argsArray) {
    
    const args = minimist(argsArray.slice(2));
    let cmd = args._[0] || 'g2g';
    // console.log(args)
    if(args._[0] === 'push' || args.p) {
        cmd = 'push'
    }

    if(args._[0] == '.'){
        cmd = 'all'
    }
    if(args.v) {
        cmd = 'version'
    }

    if (args.h) {
        cmd = 'help';
      }

    switch(cmd) {
        case 'version':
            version(args);
            break;
        case 'help':
            help(args);
            break;
        case 'config':
            configure(args);
            break;
        case 'g2g': 
            projects(args);
            break;
        case 'push':
            push(args);
            break;
        case 'all':
            pushAll(args)
            break;
        case 'pushlocal':
            pushlocal(args);
            break;
        default:
            console.error(`"${cmd}" is not a valid command!`);
            break;
    }
}