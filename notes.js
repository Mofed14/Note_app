const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return `Your Notes...`
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter(note => note.title === title) // it will loop of all elements of array
    // const duplicateNotes = notes.some(note => note.title === title) // when test return true loop will stop
    const duplicateNote = notes.find(note => note.title === title) // when test return true loop will stop

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })

        saveNotes(notes)
        console.log(chalk.bgGreen('Now Note Is Added'));
    } else {
        console.log(chalk.bgRed('Note Title Taken'));
    }

}


const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title);
    if (notes.length !== notesToKeep.length) {
        saveNotes(notesToKeep);
        console.log(chalk.bgGreen('Note Removed!'));
    } else {
        console.log(chalk.bgRed('No Note Found'));
    }
}


const listNotes = () => {
    const notes = loadNotes();
    notes.forEach(note => console.log(chalk.bgRed.inverse(note.title)));
}

const readNote = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => {
        return note.title === title
    })
    console.log(note);
    if (note) {
        console.log(chalk.inverse(note.title));
        console.log(note.body);
    } else {
        return console.log(chalk.bgRed('No Note Found'));
    }
}
const saveNotes = (notes) => {
    const dataJson = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJson)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJson = dataBuffer.toString();
        return JSON.parse(dataJson)
    } catch (error) {
        return [];
    }

}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}


