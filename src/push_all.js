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
import { pushGitlab } from './utils';
import { throws } from 'assert';
const fs = require('fs')
const chalk = require('chalk')

const { readdirSync } = require('fs')

const{ execSync } = require('child_process');
//TODO: Complete the add all commands to get all project names and loop through and get updates


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
  console.log(args)
  console.log(projects)
  for(let i = 0; i < projects.length; i++) {
      let Pname = projects[i];
      let commitMessage = args[1];
      let branch = 'master'
      
      let remote = getRemote(localPath,Pname);
      
        try {
       
            //Pull updates for all projects
            execSync(`git pull ${remote}`,{
                cwd: `${localPath}/${Pname}`
                })
        } catch (error) {
            throw new Error(error)
        }
      pushGitlab(onlinePath,Pname,remote,branch,commitMessage);
  }
  console.log(chalk.blueBright(`Done All Pushed Successfully To Gitlab`))
}
