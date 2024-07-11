import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode('secreto'); // Aquí va tu secreto

export async function middleware(req) {
  
  const tokenObj = req.cookies.get('token');
  const token = tokenObj ? tokenObj.value : null;
 

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const payload = await jwtVerify(token, secretKey);
    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));

  }
}

export const config = {
  matcher: ['/admin/:path*'], // Rutas que deseas proteger
};