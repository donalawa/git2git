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
const chalk = require('chalk')
const{ execSync } = require('child_process');


export async function push(args) {
  const config = new Conf().get(configKey);

  const localPath = config.local;
  const onlinePath = config.online;

  let projects = [];

  if(args._[0] == 'push') {
      projects =  args._.slice(1,);
  }else {
      projects = args._;
  }
  for(let i = 0; i < projects.length; i++) {
      let Pname = projects[i].split(':')[0];
      let branch = projects[i].split(':')[1];
      let commitMessage = projects[i].split(':')[2];
      let remote = getRemote(localPath,Pname);
      
        try {
            //Checkout to branch
            execSync(`git checkout ${branch}`,{
                cwd: `${localPath}/${Pname}`
            })
            //Pull updates
            execSync(`git pull`,{
                cwd: `${localPath}/${Pname}`
                })
        } catch (error) {
            throw new Error(error)
        }
      pushOnline(onlinePath,Pname,remote,branch,commitMessage);
  }
  console.log(chalk.blueBright(`Done All Pushed Successfully To Gitlab`))
}
