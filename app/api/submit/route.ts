import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body;

    // Validate the data
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Simulate some processing
    // In a real app, you might save to a database, send an email, etc.
    
    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name}! We received your submission.`,
        data: { name, email },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
