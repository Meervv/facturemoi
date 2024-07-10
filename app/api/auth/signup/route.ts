import { NextRequest, NextResponse } from 'next/server';
import pool from '@/utils/db';
import { hash } from 'bcryptjs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { email, firstname, lastname, password } = body;
        const created_at = new Date()

        // Check if the required fields are provided
        if (!email || !firstname || !lastname || !password) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const hashedPassword = await hash(password, 10);

        // Log the input data for debugging
        console.log(email, firstname, lastname, hashedPassword);

        const query = "INSERT INTO users (email, firstname, lastname, password, created_at) VALUES (?, ?, ?, ?, ?)";
        const values = [email, firstname, lastname, hashedPassword, created_at];

        // Execute the query and log the result
        const result = await pool.query(query, values);
        console.log(result);

        return NextResponse.json({ email, firstname, lastname }, { status: 201 });
    } catch (error) {
        // Log the error for debugging
        console.error('Signup Error:', error);

        // Convert the error to a known type (any) and perform type check
        const err = error as any;

        // Customize error response based on error type
        if (err.code === 'ER_DUP_ENTRY') {
            return NextResponse.json({ message: "Email already exists" }, { status: 409 });
        }

        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
