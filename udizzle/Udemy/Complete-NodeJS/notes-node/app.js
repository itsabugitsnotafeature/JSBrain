'use strict'

console.log("Starting App.JS");
const fs = require('fs');
const _ = require('lodash');
const notes = require('./playArea/notes.js');

const commandOptions = {
    titleOptions: {
        describe: 'Title of a note',
        demand: true,
        alias: 't'
    },
    bodyOptions: {
        describe: 'Body of a note',
        demand: true,
        alias: 'b'
    }
}

const argv = require('yargs')
    .command(
    'add', 'Add a new note', {
        title: commandOptions.titleOptions,
        body: commandOptions.bodyOptions,
    })
    .command(
    'read', 'Add a new note', {
        title: commandOptions.titleOptions,
    })
    .command(
    'remove', 'Remove a particular note', {
        title: commandOptions.titleOptions,
    })
    .command(
    'list', 'List all notes')
    .argv;


/* 
console.log(" ARGS is => " + JSON.stringify(process.argv) );
console.log(" Y-ARGS is => " + JSON.stringify(argv) );
console.log(" Y-ARGS-TITLE is => " + JSON.stringify(argv.title) );
*/

// let command = process.argv[2];
let command = argv._[0];
console.log(" command is => " + command);

switch (command.toLowerCase()) {
    case 'add':
        console.log("Addig new note");
        notes.addNote(argv.title, argv.body);
        break;

    case 'remove':
        console.log("Removing a note");
        notes.removeNote(argv.title);
        break;

    case 'list':
        console.log("Listing All notes");
        console.log(notes.getAllNotes());
        break

    case 'read':
        console.log("Read particular notes");
        console.log(notes.getNote(argv.title));
        break

    default:
        console.log("Invalid command");
        break

}