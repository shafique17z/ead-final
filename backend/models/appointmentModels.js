import mongoose from 'mongoose'

const AppointmentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Appointment = mongoose.model('Appointment', AppointmentSchema)
