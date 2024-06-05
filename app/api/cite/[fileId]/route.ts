import { NextRequest } from "next/server";
import path from 'path';
import fs from 'fs';

export async function GET(request, res) {
  const fileId = request.nextUrl.searchParams.get("fileId");
  const filePath = path.resolve(`./public/pdfs/${fileId}.pdf`);

  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'application/pdf');
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.status(404).json({ message: 'File not found' });
  }
}
