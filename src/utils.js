
/**
* Description of the file. Add link pointers with {@link link
  name}
  * @author Donacien
  * @date 13/08/2020
  * Contributors : contributor name,
**/
const{ execSync } = require('child_process');
import chalk from 'chalk';
const shell = require('shelljs');

export function getRemote(path,projectName) {

  try {
      let getR = execSync('git remote -v', {
          cwd: `${path}/${projectName}`, 
      })
      
      let remote = getR.toString().match(/https:.*git/)[0];
      
      return remote;
      
  } catch (error) {
      console.log('Remote is not a git repository')
      return error;
  }
}

export function pushGitlab(path,Pname,remote,branch,message) {
  
  try {
    //Checkout to branch
    execSync(`git checkout ${branch}`,{
        cwd: `${path}/${Pname}`
    })
    //Pull updates
    execSync(`git pull ${remote}`,{
        cwd: `${path}/${Pname}`
    })

    execSync(`git add .`,{
      cwd: `${path}/${Pname}`
    })
    
    shell.cd(`${path}/${Pname}`)
    shell.exec(`git commit -m "${message}"`)

    execSync(`git push -u origin ${branch}`,{
      cwd: `${path}/${Pname}`
    })
  } catch (error) {
    throw new Error(error)
  }
  console.log(chalk.blueBright(`Project: ${Pname} Pushed Successfully To Gitlab`))
}


