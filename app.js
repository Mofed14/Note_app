const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes')


// customize yargs version
yargs.version('1.2.0')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// create remove command 
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Remove Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})


// Create Read Command 
yargs.command({
    command: 'read',
    describe: 'Read A Note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNote(argv.title)
    }
})


// Create List Command 
yargs.command({
    command: 'list',
    describe: 'List Your Note',
    handler() {
       notes.listNotes()
    }
})


// add, remove, read, list
// console.log(yargs.argv);
yargs.parse()

