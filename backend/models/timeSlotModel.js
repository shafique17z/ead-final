import mongoose from 'mongoose'

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

export const TimeSlot = mongoose.model('TimeSlot', TimeSlotSchema)
