import {NextResponse} from 'next/server';
import type {NextRequest} from 'next/server';

export type IpPostResponse = {
  ip: string;
};

export function POST({ip}: NextRequest): NextResponse<IpPostResponse> {
  return NextResponse.json({
    ip: ip ?? '127.0.0.1', // 127.0.0.1 is fallback used only in dev environment
  });
}

export const runtime = 'edge';
