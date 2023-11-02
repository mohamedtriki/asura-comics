/* eslint-disable */

// @ts-ignore
import { NextResponse } from 'next/server';
// @ts-ignore
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const url = `${process.env.API_URL}series/random`;
  const data = await fetch(url) .then((res) => {
    return res.json();

  })
    .catch((err) => {
      console.error(err);
      return {
        notFound: true,
      };
    });
  let seriesId = data.result;
  return NextResponse.redirect(new URL(`comics/${seriesId}`, request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/surprise',
};
