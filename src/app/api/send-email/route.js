import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { firstName, lastName, phone, email, message, policy, nda, url } = body;
    // 🔹 Get IP Address
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      req.headers.get("x-real-ip") ||
      "IP not found";

    // 🔹 Get Country & City from IP
    let country = "Unknown";
    let city = "Unknown";

    if (ip && ip !== "IP not found") {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
        const geoData = await geoRes.json();
        country = geoData.country || "Unknown";
        city = geoData.city || "Unknown";
      } catch (err) {
        console.error("GeoIP lookup failed:", err);
      }
    }

    // ✅ Zoho SMTP transporter
   const transporter = nodemailer.createTransport({
      host: "maltaserver.stagingtestserver.com",
      port: 587,
      secure: false,
      auth: {
        user: "no-reply@manhattanbookmarketing.com",
        pass: "y6ndra5#cD}rs)-R",
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"Website Form" <no-reply@manhattanbookmarketing.com>`,
      to: ["ali.haider@canvasdigital.org","ppc@iceanimations.com"],
      subject: " New Contact Form Submission",
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName || ""}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Privacy Policy Accepted:</strong> ${policy ? "Yes" : "No"}</p>
        <p><strong>Send NDA:</strong> ${nda ? "Yes" : "No"}</p>
        <p><b>IP Address:</b> ${ip}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>City:</b> ${city}</p>
        <p><b>Visited URL:</b> ${url}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(" Email Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}