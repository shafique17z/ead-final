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

const TimeSlotSchema = mongoose.Schema(
  {
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export const Appointment = mongoose.model('Appointment', AppointmentSchema)
export const TimeSlot = mongoose.model('TimeSlot', TimeSlotSchema)
