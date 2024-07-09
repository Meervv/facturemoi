import { NextRequest, NextResponse } from 'next/server';
import pool from '@/lib/db';
import { hash } from 'bcryptjs';

export async function POST(req: NextRequest) {
    try {
        const { email, firstname, lastname, password } = await req.json();
        const hashedPassword = await hash(password, 10);
        console.log(email, firstname, lastname, hashedPassword);

        const result = await pool.query(
            "INSERT INTO users (email, firstname, lastname, password) VALUES (?, ?, ?, ?)", 
            [email, firstname, lastname, hashedPassword]
        );

        return NextResponse.json({ email, firstname, lastname, hashedPassword: result[0] }, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "ERREUR" }, { status: 500 });
    }
}
