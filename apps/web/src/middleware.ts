import { NextRequest, NextResponse } from 'next/server'
import { i18n } from '../i18n.config'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for static files (including videos)
  if (
    pathname.endsWith('.mp4') ||
    pathname.includes('/_next/') ||
    pathname.includes('/api/') ||
    pathname.includes('/static/') ||
    pathname.includes('/videos/') ||
    pathname.includes('/assets/')
  ) {
    return NextResponse.next()
  }

  // Check if pathname has a locale prefix
  const pathnameHasLocale = i18n.locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return NextResponse.next()

  // If no locale in pathname, redirect to default locale
  const defaultLocale = i18n.defaultLocale
  return NextResponse.redirect(
    new URL(
      `/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
      request.url
    )
  )
}

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|videos|.*\\.mp4$).*)']
}