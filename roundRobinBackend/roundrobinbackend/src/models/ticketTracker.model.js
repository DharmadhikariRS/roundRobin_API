import { Schema, model } from 'mongoose';

const ticketTracker = new Schema(
  {
    teamName: {
      type: String
    },
    latestPriority:{
        type: Number
    }
  },
  {
    timestamps: true
  }
);

export default model('track',ticketTracker,'track');