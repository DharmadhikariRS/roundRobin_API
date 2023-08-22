import { Schema, model } from 'mongoose';

const memberSchema = new Schema(
  {
    name: {
      type: String
    },
    teamName: {
        type: String
      },
    priority:{
        type:Number
      },
    task:[]
      
  },
  {
    timestamps: true
  }
);

export default model('members', memberSchema);