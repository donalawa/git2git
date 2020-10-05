/**
* Description of the file. Add link pointers with {@link link
  name}
  * @author Donacien
  * @date 13/08/2020
  * Contributors : contributor name,
**/

import Conf from 'conf';
import chalk from 'chalk';

export const configKey = 'git2git';

export async function configure(args) {
  const config = new Conf();
  let currentConfigObject = config.get(configKey);
  currentConfigObject = currentConfigObject || {};

//   let apiKey = args.apiKey || args.apikey || args['api-key'] || args.key || args.k;
//   if (!apiKey) {
//     apiKey = currentConfigObject.apiKey;
//   }
//   if (!apiKey) {
//     return;
//   }

  let local = args.local || args.l;
  if (!local) {
    local = currentConfigObject.local;
  }
  if (!local) {
    return;
  }

  let online = args.online || args.o;
  if (!online) {
    online = currentConfigObject.online;
  }
  if (!online) {
    return;
  }

  config.set(configKey, { local: local, online: online });
  const msg = chalk.greenBright('You have configured your git2git project paths')
  console.log(msg);
}
