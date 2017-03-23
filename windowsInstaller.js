/**
 * Created by mugambi on 23/03/17.
 */
var electronInstaller = require('electron-winstaller')
resultPromise = electronInstaller.createWindowsInstaller({
  appDirectory: '/tmp/build/sba-64',
  outputDirectory: '/tmp/build/sba-installer64',
  authors: 'Indevs Digital.',
  exe: 'sba.exe'
})

resultPromise.then(() => console.log("It worked!"), (e) => console.log(`No dice: ${e.message}`))
