import members from '../models/members.model';
import track from '../models/ticketTracker.model';

export const addTask = async (body) => {
  const data = await members.find({ teamName: body.teamName });
  console.log("data all members",data);

  const lastassign = await track.find({ teamName: body.teamName });
   console.log("lastassign last assign",lastassign);
  const sorted = data.sort((a, b) => a.priority - b.priority);

  const member = sorted[lastassign[0].latestPriority - 1];
  console.log("member ",member);
  member.task.push(body.task);
  const data1 = await members.findByIdAndUpdate(
    {
      _id: member._id
    },
    member,
    {
      new: true
    }
  );

  lastassign[0].latestPriority += 1;
  if (lastassign[0].latestPriority > sorted.length) {
    lastassign[0].latestPriority = 1;
  }
  const data2 = await track.findByIdAndUpdate(
    {
      _id: lastassign[0]._id
    },
    lastassign[0],
    {
      new: true
    }
  );
  return data;
};
