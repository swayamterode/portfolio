import { NextResponse } from "next/server";
import connect from "@/lib/db";
import HeroSection from "@/lib/modals/hero_section";
export const GET = async () => {
  try {
    await connect();
    const heading = await HeroSection.find({});
    return new NextResponse(JSON.stringify(heading), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching.." + error, { status: 500 });
  }
};

export const POST = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    const newHero = new HeroSection(body);
    await newHero.save();
    return new NextResponse(
      JSON.stringify({ message: "Heading and Desc added" }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Error in adding.." + error, { status: 500 });
  }
};

export const PUT = async (request: Request) => {
  try {
    const body = await request.json();
    await connect();
    await HeroSection.updateOne({ _id: body._id }, body);
    return new NextResponse(
      JSON.stringify({ message: "Heading and Desc updated" }),
      { status: 201 }
    );
  } catch (error) {
    return new NextResponse("Error in updating.." + error, { status: 500 });
  }
};
