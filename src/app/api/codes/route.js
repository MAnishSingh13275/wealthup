import { connectToDatabase } from "../../../lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

function generateCode() {
    const length = 6;
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        code += charset[randomIndex];
    }

    return code;
}

export async function GET(request) {

    try {
        const currentTimeUTC = new Date().getTime();
        const { client, db } = await connectToDatabase();

        console.log(currentTimeUTC);

        const code = generateCode();

        await db.collection('codes').insertOne({
            code: code,
            generatedAt: currentTimeUTC,
        });

        return NextResponse.json({
            code: code,
            starttime: currentTimeUTC,
        });
    } catch (error) {
        NextResponse.error(error);
    }
}