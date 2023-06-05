import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { orderTypes } from '@/shared/config/order.config';

export const config = {
  matcher: '/order/:path*',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const orderType = pathname.split('/');

  if (orderTypes[orderType[2]] === undefined) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
