import { NextResponse } from 'next/server';

const corsHeaders = {
    "Access-Control-Allow-Origin": "https://puratanayurveda.com",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
    return NextResponse.json({}, { headers: corsHeaders });
}

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
        "data": false,
        "error": false,
        "message": "Success",
        "status_code": 200,
        "timestamp": getTimestamp()
    }, {
        headers: corsHeaders
    });
}