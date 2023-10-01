// import { getApi } from "@/libs/getApi";
import mongoose from "mongoose";

export default async function Home() {
  // const dataTest = getApi();
  // const test = await dataTest;
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {process.env.MONGOURI}-{mongoose.connections[0].readyState}
      <h1>world</h1>
      {/* {test && <div>{test.message}</div>} */}
    </main>
  );
}
