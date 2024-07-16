import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextRequest, NextResponse } from 'next/server';

const supportedLocales = ['en', 'mr'];
const defaultLocale = 'en';

const headersToPlainObject = (headers: Headers) => {
  const plainHeaders: Record<string, string> = {};
  headers.forEach((value, key) => {
    plainHeaders[key] = value;
  });
  return plainHeaders;
};

// Get the preferred locale
export function getLocale(request: NextRequest) {
  const negotiator = new Negotiator({
    headers: headersToPlainObject(request.headers),
  });
  const preferredLocales = negotiator.languages(supportedLocales);

  return match(preferredLocales, supportedLocales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;

  // Exclude /studio routes from locale handling
  if (pathname.startsWith('/studio') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = supportedLocales.some((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`);

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|studio|api|logo).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};
