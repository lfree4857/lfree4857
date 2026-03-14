import { NextRequest, NextResponse } from 'next/server';
import { encryptString } from '../../../../../shared/crypto';

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
    const encryptedJson = {
        data: encryptString({
            "data": false,
            "error": false,
            "message": "Success",
            "status_code": 200,
            "timestamp": getTimestamp()
        })
    };
    return NextResponse.json(encryptedJson, {
        headers: getCorsHeaders(req)
    });
}