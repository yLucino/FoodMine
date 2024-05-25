import { connect, ConnectOptions } from "mongoose";

export const dbConnect = () => {
  connect(process.env.MONGO_URI!)
    .then(
    () => console.log("connect sucessfully"),
    (error) => console.log(error)
    )
}