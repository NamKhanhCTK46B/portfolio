import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Vui lòng điền đầy đủ thông tin" },
        { status: 400 }
      );
    }

    // Send via FormSubmit.co — no signup needed, 
    // the first submission will trigger a confirmation email to khanh51024@gmail.com
    const response = await fetch("https://formsubmit.co/ajax/khanh51024@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _subject: `Portfolio Contact: ${name}`,
        _template: "box",
      }),
    });

    if (!response.ok) {
      throw new Error("FormSubmit error");
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Không thể gửi email. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}
