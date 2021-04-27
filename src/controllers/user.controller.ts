import User, { IUser } from '../models/user.model';
import { CreateQuery, Types } from 'mongoose';
import { ObjectID } from 'mongodb';

async function CreateUser({
  user,
  password,
}: CreateQuery<IUser>): Promise<IUser> {
  return User.create({
    user,
    password,
  })
    .then((data: IUser) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function AllUser() {
  let allData = User.find({}, (err, users) => {
    return { users: users };
  });

  return allData;
  // console.log('allUser');
}

async function RemoveUser(id: string): Promise<any> {
  let dataDoc = await User.findOne({
    _id: new ObjectID(id),
  });

  console.log(dataDoc);
  return dataDoc;
}

async function DeleteAllUser(): Promise<String> {
  return 'Suucces Delete All';
}

export default {
  CreateUser,
  AllUser,
  RemoveUser,
};
