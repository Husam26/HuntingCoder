import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    // Define the path to the JSON file inside 'contactdata' folder
    const filePath = path.join(process.cwd(), "contactdata", "contacts.json");

    // Read existing data (or create empty array if file does not exist)
    let contacts = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf8");
      contacts = JSON.parse(fileContent);
    } catch (error) {
      contacts = []; // If file doesn't exist, start with an empty array
    }

    // Append new contact submission
    const newContact = { name, email, message, date: new Date().toISOString() };
    contacts.push(newContact);

    // Write updated data back to the file
    await fs.writeFile(filePath, JSON.stringify(contacts, null, 2), "utf8");

    return NextResponse.json({ success: true, message: "Message stored successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error saving contact data:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
