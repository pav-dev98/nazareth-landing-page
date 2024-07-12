import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { jwtVerify } from 'jose';

const secretKey = new TextEncoder().encode('secreto'); // Aquí va tu secreto

export async function middleware(req) {
  console.log("middleware")
  const tokenObj = req.cookies.get('token');
  const token = tokenObj ? tokenObj.value : null;
 
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const {payload} = await jwtVerify(token, secretKey);
    const response =  NextResponse.next();
    response.headers.set('x-user-payload', JSON.stringify(payload));
    return response;
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
}

export const config = {
  matcher: ['/admin/:path*'], // Rutas que deseas proteger
};