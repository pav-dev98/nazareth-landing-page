import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';

const secretKey = 'secreto'; 

export async function middleware(req) {
  console.log('entro al middleware');
  const tokenObj = req.cookies.get('token');
  const token = tokenObj ? tokenObj.value : null;
  console.log( token);

  if (!token) {
    console.log('redirigiendo cuando no hay token')
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const payload = jwtVerify(token, secretKey);
    console.log('token verificado',payload);
    return NextResponse.next();
  } catch (err) {
    console.log('token no verificado');
    return NextResponse.redirect(new URL('/login', req.url));

  }
}

export const config = {
  matcher: ['/admin/:path*'], // Rutas que deseas proteger
};