import express, { response } from 'express'
import mongoose from 'mongoose'
import { PORT, mongoDBURL } from './config.js'
import { Appointment } from './models/appointmentModels.js'
import { TimeSlot } from './models/timeSlotModel.js'

const app = express()

app.get('/', (req, res) => {
  console.log(req)
  return res.status(234).send('Welcome to Appointment Scheduler App')
})

//3. Route method for booking an appointment using POST method
app.post('/slots', async (req, res) => {
  try {
    if (!req.body.startTime || !req.body.endTime || !req.body.isBooked) {
      return res.status(400).send({
        message: 'Send all required fields: start time, end time and is booked',
      })
    }
    const newTimeSlot = {
      title: req.body.name,
      author: req.body.email,
    }
    const timeslot = await TimeSlot.create(newTimeSlot)
    return res.status(201).send(timeslot)
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

//1. Route method for creating a new time slot using POST method
app.post('/appointment', async (req, res) => {
  try {
    if (!req.body.startTime || !req.body.endTime || !req.body.isBooked) {
      return res.status(400).send({
        message: 'Send all required fields: start time, end time and is booked',
      })
    }
    const newAppointment = {
      title: req.body.name,
      author: req.body.email,
    }
    const appointment = await Appointment.create(newAppointment)
    return res.status(201).send(appointment)
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

//2. Route method for fetching all slots using GET method
app.get('/slots', async (req, res) => {
  try {
    const slots = await TimeSlot.find({})

    return res.status(200).json({
      count: slots.length,
      data: slots,
    })
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

//4. Route method for fetching all appointments using GET method
app.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find({})

    return res.status(200).json({
      count: appointments.length,
      data: appointments,
    })
  } catch (error) {
    console.log(error.message)
    response.status(500).send({ message: error.message })
  }
})

//connecting to database via moongoose
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('MongoDB is connected')
    //only listen to port when database is connected
    app.listen(PORT, () => {
      console.log(`App is listening to port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
