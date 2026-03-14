import { NextResponse } from 'next/server';

function getTimestamp() {
    const now = new Date();
    const iso = now.toISOString(); // 2026-03-14T11:40:15.147Z

    const [date, time] = iso.split("T");
    const [seconds, ms] = time.split(".");

    const microseconds = ms.replace("Z", "").padEnd(6, "0");

    return `${date}T${seconds}.${microseconds}Z`;
}

export async function GET() {
    return NextResponse.json({
        "data": true,
        "error": false,
        "message": "Success",
        "status_code": 200,
        "timestamp": getTimestamp()
    });
}