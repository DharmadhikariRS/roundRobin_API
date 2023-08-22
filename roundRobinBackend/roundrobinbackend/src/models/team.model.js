import { Schema, model } from 'mongoose';

const teamSchema = new Schema(
  {
    name: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

export default model('team', teamSchema);