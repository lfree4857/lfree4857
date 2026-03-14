import { NextRequest, NextResponse } from 'next/server';

function getCorsHeaders(req: NextRequest) {
    const origin = req.headers.get('origin');
    return {
        "Access-Control-Allow-Origin": origin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Credentials": "true",
    };
}

export async function OPTIONS(req: NextRequest) {
    return NextResponse.json({}, { headers: getCorsHeaders(req) });
}

function getTimestamp() {
    const now = new Date();
    const iso = now.toISOString(); // 2026-03-14T11:40:15.147Z

    const [date, time] = iso.split("T");
    const [seconds, ms] = time.split(".");

    const microseconds = ms.replace("Z", "").padEnd(6, "0");

    return `${date}T${seconds}.${microseconds}Z`;
}

export async function GET(req: NextRequest) {
    return NextResponse.json({
        "data": true,
        "error": false,
        "message": "Success",
        "status_code": 200,
        "timestamp": getTimestamp()
    }, {
        headers: getCorsHeaders(req)
    });
}