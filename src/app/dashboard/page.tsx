import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  // const session = await getServerSession(authOptions);
  // console.log({ session });
  // return <pre>{JSON.stringify(session)}</pre>;
  return <div>test</div>;
};

export default page;
