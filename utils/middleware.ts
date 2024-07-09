import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in environment variables');
}

export async function middleware(request: NextRequest) {
    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
        return NextResponse.json({ error: 'Authorization header missing' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return NextResponse.json({ error: 'Token missing' }, { status: 401 });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET as string) as jwt.JwtPayload;
        (request as any).user = decoded; // Attacher les informations de l'utilisateur à la requête
        return NextResponse.next();
    } catch (error) {
        return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }
}

export const config = {
    matcher: ['/api/protected-route/:path*'], // Appliquer ce middleware sur toutes les routes protégées
};
