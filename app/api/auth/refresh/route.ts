import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET;

if (!JWT_SECRET || !JWT_REFRESH_SECRET) {
    throw new Error('JWT_SECRET and JWT_REFRESH_SECRET must be defined in environment variables');
}

export async function POST(request: NextRequest) {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
        return NextResponse.json({ error: 'Refresh token is required' }, { status: 400 });
    }

    try {
        const decoded = jwt.verify(refreshToken, JWT_REFRESH_SECRET as string) as jwt.JwtPayload;

        const newToken = jwt.sign(
            { id: decoded.id, email: decoded.email }, 
            JWT_SECRET || '', 
            { expiresIn: '1h' }
        );

        return NextResponse.json({ token: newToken });
    } catch (error) {
        return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 });
    }
}
