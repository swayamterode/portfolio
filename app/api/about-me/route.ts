import { NextResponse } from "next/server";
import connect from "@/lib/db";
import AboutMe from "@/lib/modals/About_me";

export const GET = async () => {
  try {
    await connect();
    const aboutMe = await AboutMe.find({});
    return new NextResponse(JSON.stringify(aboutMe), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching.." + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newAboutMe = new AboutMe(body);
    await newAboutMe.save();
    return new NextResponse(JSON.stringify({ message: "About me added" }), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error in adding.." + error, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    await AboutMe.updateOne({ _id: body._id }, body);
    return new NextResponse(JSON.stringify({ message: "About me updated" }), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error in updating.." + error, { status: 500 });
  }
};
