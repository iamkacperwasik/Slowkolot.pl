import {NextRequest, NextResponse} from 'next/server';

export const runtime = 'edge';

export function GET({ip = '127.0.0.1'}: NextRequest) {
  return NextResponse.json({ip});
}
