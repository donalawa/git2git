/**
* Description of the file. Add link pointers with {@link link
    name}
    * @author Donacien
    * @date 13/08/2020
    * Contributors : contributor name,
**/

import Conf from 'conf';
// import Table from 'cli-table3';
import { configKey } from './config';
import { getRemote } from './utils';
import { pushOnline } from './utils';
import { throws } from 'assert';
const fs = require('fs')
const chalk = require('chalk')
const { readdirSync } = require('fs')
const{ execSync } = require('child_process');

export async function pushAll(args) {
  const config = new Conf().get(configKey);

  const localPath = config.local;
  const onlinePath = config.online;

  let projects = [];

  let source = localPath;

  const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  projects = getDirectories(source);
  for(let i = 0; i < projects.length; i++) {
      let Pname = projects[i];
      let commitMessage = 'Updated';
      let branch = ''
      if(args._[1] !== undefined) {
        commitMessage = args._[1];
      }
      let remote = getRemote(localPath,Pname);

      let getB = execSync('git branch', {
        cwd: `${localPath}/${Pname}`, 
      })

      let allbranches = getB.toString().split('');
      let start = allbranches.indexOf('*');
      let temp = [];
      for(let i = start + 2; i < allbranches.length; i++) {
        if(allbranches[i] === "\n") {
          break
        }

        temp.push(allbranches[i]);
      }
      branch = temp.join('');
     
      pushOnline(onlinePath,Pname,remote,branch,commitMessage);
  }
  console.log(chalk.blueBright(`Done All Pushed Successfully`))
}
