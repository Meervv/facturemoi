import { NextRequest, NextResponse } from 'next/server';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '@/utils/db';

const JWT_SECRET = 'votre_secret_jwt'; // Assurez-vous de sécuriser ce secret

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ error: 'Email et mot de passe requis' }, { status: 400 });
  }

  try {
    const db = await pool.getConnection();
    const [rows]: any[] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    db.release();

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Utilisateur non trouvé' }, { status: 404 });
    }

    const user = rows[0];
    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: 'Mot de passe invalide' }, { status: 401 });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

    return NextResponse.json({ token });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}
