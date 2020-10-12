# GIT2GIT
![Git2Git Logo](https://www.google.com/url?sa=i&url=https%3A%2F%2Fjoomla.digital-peak.com%2Fblog%2F131-from-subversion-to-git&psig=AOvVaw05ZKy6Cx6z4RCQB0u2IXQB&ust=1602605737197000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJCcpeO5r-wCFQAAAAAdAAAAABAD)

## Installation
This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.


Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
npm install git2git
```
## Features
* Push single or multiple projects on any git version control system like [github](https://github.com), [gitlab](https://gitlab.com) and your local bitbucket server.
* Transfer changes made in a project on a different version control system to a different version control system like from bitbucket server to gitlab.
## Quick Start
```bash
$ npm install -g git2git
```
* To use git2git you need to keep your projects into two separate folders and make sure all both folders have same projects but pointing to different git version control systems.
* You will be making changes in a project in one of the two folders and using git2git you can transfer those changes to the same project in the other directory that is pointing to another git version control system and push them online.

After Installing git2git go to your terminal and set the paths for the two directories that will be having your projects with the command bellow

```bash
 git2git config -l <localpath> -o <online path>
```
* The local path is where you keep the version of the project that you will be making changes to and the online path is the path where you keep the version of the project where you will like to send those changes to you can also push projects found in the local path to their origin.

After doing that you should be able to use git2git 
## Example
* Lets say i have a project none as Testing and i have this project in my online path with the same name Testing 
* And i happened to make some changes in the Testing on my local path because remember that is where we make our changes.
* So how do i send this changes to the same project found in the Online Directory that is pointing to a different version control system.
*  Push local Changes to local remote first using the bellow command
```bash
git2git pushlocal Testing:branch:'commit message'
```
You can specify more than one project you just need to give space and keep adding the next and the next to push all local projects updates online with one command you need to use the bellow command.
```bash
git2git pushlocal all 'Commit message for all the projects'
```
```bash
git2git push Testing:branch:'Commit Message'
```
The first thing is the projects name and the second is the branch that you made the changes too and the third is the commit message and you can also add another project just be giving space and entering the details of the next project.

## For more commands on how to use git2git
* After installing git2git you can type the bellow command in your terminal to know more on how to use git2git.

```bash
git2git help 
```