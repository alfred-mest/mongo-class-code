const noteRouter = require('express').Router();
const userRouter = require('express').Router()

//lines 6,7 are the same as line 1
/*
const express = require('express');
const noteRouter = express.Router()
*/
const Note = require('../models/note');

//             /note   GET
noteRouter.get('/', (request, response) => {
  const token = request.headers.authorization
  const requestBody = request.body
  console.log('This a body object in a get request line 14', requestBody)
  Note.find({}).then(res => {
    const transformedList = res.map(r => r.toJSON())
    response.status(200).send(transformedList);
  })
})

//           /note     POST

noteRouter.post('/', async (request, response) => {
  const { title, content } = request.body;

  // lines 19 and 20 do the same thing as like 16
  //const title = request.body.title
  //const content = request.body.content


  //console.log(title, content);
  if (title && content && content.length >= 20 && content.length <= 80) {
    const newNote = new Note({
      title: title,
      content: content,
    })

    newNote.save()
      .then(res => {
        response.status(201).send(res.toJSON());
      })
      .catch(err => {
        console.error(err);
        response.sendStatus(501);
      })
  } else {
    response.status(400).send({ message: "Check your request body" })
  }
})

/*
noteRouter.get('/note/:id', (request, response) => {
  const noteId = request.params.id
  Note.findById(id).then(returnedNote => response.send(returnedNote.toJSON()))
})

noteRouter.delete('/note/:id', (request, response) => {
  const noteId = request.params.id
  Note.findByIdAndDelete(id)
})
*/

module.exports = noteRouter