import { NextResponse } from "next/server";
import connect from "@/lib/db";
import TechStack from "@/lib/modals/text_stack";
import { request } from "http";

export const GET = async () => {
  try {
    await connect();
    const techStack = await TechStack.find({});
    return new NextResponse(JSON.stringify(techStack), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching.." + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    if (
      body.src === "" ||
      body.alt === "" ||
      body.width === "" ||
      body.height === "" ||
      body.className === "" ||
      body.title === "" ||
      body.category === ""
    ) {
      return new NextResponse(
        JSON.stringify({ message: "Please fill all the fields" }),
        {
          status: 400,
        }
      );
    }

    const newTechStack = new TechStack(body);
    await newTechStack.save();
    return new NextResponse(JSON.stringify({ message: "Tech Stack added" }), {
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
    await TechStack.findById(body._id);
    await TechStack.findByIdAndUpdate(body._id, body);
    return new NextResponse(JSON.stringify({ message: "Tech Stack updated" }), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error in updating.." + error, { status: 500 });
  }
};
export const Delete = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    await TechStack.findByIdAndDelete(body._id);
    return new NextResponse(JSON.stringify({ message: "Tech Stack deleted" }), {
      status: 201,
    });
  } catch (error) {
    return new NextResponse("Error in deleting.." + error, { status: 500 });
  }
};
