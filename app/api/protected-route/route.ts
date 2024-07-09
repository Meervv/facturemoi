import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    // Ici, nous avons accès à (request as any).user si le middleware a validé le token JWT
    const user = (request as any).user;

    return NextResponse.json({ message: 'This is protected data', user });
}
