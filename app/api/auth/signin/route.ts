import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { compare } from 'bcryptjs';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const password = searchParams.get('password');

    if (!email || !password) {
        return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
    }

    try {
        const db = await pool.getConnection();
        
        const query = 'SELECT * FROM users WHERE email = ?';
        const [rows]: { [key: string]: any }[] = await db.execute(query, [email]);
        db.release();
        
        if (rows === null) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        
        const user = rows[0];
        const isPasswordValid = await compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }
        
        return NextResponse.json(user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
