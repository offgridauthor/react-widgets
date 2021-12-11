import {Command} from 'commander'

export const serveCommand = new Command()
    .command('serve')
    .description('Open a file for editing')
    .action(() => {
        console.log('getting a serve up')
    })
