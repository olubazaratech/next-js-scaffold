import { NextRequest, NextResponse } from "next/server";

// Example API route
export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      message: "This is an example API endpoint",
      timestamp: new Date().toISOString(),
      data: {
        technologies: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Shadcn UI",
          "React Hook Form",
          "Zod",
          "Zustand",
          "Lucide React",
          "React Toastify",
          "Axios",
        ],
      },
    },
    { status: 200 }
  );
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    return NextResponse.json(
      {
        message: "Data received successfully",
        receivedData: body,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }
}
