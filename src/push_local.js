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
import { throws } from 'assert';
const chalk = require('chalk')
const{ execSync } = require('child_process');
const { readdirSync } = require('fs')
const fs = require('fs');
export async function pushlocal(args) {
  const config = new Conf().get(configKey);
  const localPath = config.local;

  let projects = [];

  if(args._[0] == 'pushlocal') {
      projects =  args._.slice(1,);
  }else {
      projects = args._;
  }

//   args._[1].split(':').length
console.log(args._[2])

let source = localPath;

const getDirectories = source =>
readdirSync(source, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)


if(args._[1] == 'all') {

    projects = getDirectories(source);
    console.log(projects)
    for(let i = 0; i < projects.length; i++) {
    let Pname = projects[i];
    let branch = '';
    let commitMessage = 'Updated'
    
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
          try {
              //Checkout to branch
              execSync(`git checkout ${branch}`,{
                  cwd: `${localPath}/${Pname}`
              })
              //Add files
              execSync(`git add .`,{
                  cwd: `${localPath}/${Pname}`
              })
  
               //Commit Files
               try {
                  execSync(`git commit -m "${commitMessage}"`,{
                      cwd: `${localPath}/${Pname}`
                    })
               } catch (error) {
                  console.log(chalk.greenBright(`Nothing to commit working tree clean`))
               }
               //Push commited changes
               execSync(`git push -u origin ${branch}`,{
                  cwd: `${localPath}/${Pname}`
              })
  
              console.log(chalk.blueBright(`Done All Pushed Successfully`))
  
          } catch (error) {
              console.log(chalk.redBright(`There was an error while trying to push`))
          }
    }
}else {
    for(let i = 0; i < projects.length; i++) {
        let Pname = projects[i].split(':')[0];
        let branch = projects[i].split(':')[1];
        let commitMessage = projects[i].split(':')[2];
          try {
              //Checkout to branch
              execSync(`git checkout ${branch}`,{
                  cwd: `${localPath}/${Pname}`
              })
              //Add files
              execSync(`git add .`,{
                  cwd: `${localPath}/${Pname}`
              })
  
               //Commit Files
               try {
                  execSync(`git commit -m "${commitMessage}"`,{
                      cwd: `${localPath}/${Pname}`
                    })
               } catch (error) {
                  console.log(chalk.greenBright(`Nothing to commit working tree clean`))
               }
               //Push commited changes
               execSync(`git push -u origin ${branch}`,{
                  cwd: `${localPath}/${Pname}`
              })
  
              console.log(chalk.blueBright(`Done All Pushed Successfully`))
  
          } catch (error) {
              console.log(chalk.redBright(`There was an error while trying to push`))
          }
    }
}
}
