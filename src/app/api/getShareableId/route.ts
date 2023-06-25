import { NextResponse, NextRequest } from 'next/server';
import encodeData from '@typescript/encode';
import { Data } from '@typescript/types';

export function PUT(req: NextRequest) {
	const name = req.nextUrl.searchParams.get('name') as string;
	const description = req.nextUrl.searchParams.get('description') as string;
	const purl = req.nextUrl.searchParams.get('purl');
	const fb = req.nextUrl.searchParams.get('fb');
	const ig = req.nextUrl.searchParams.get('ig');
	const tw = req.nextUrl.searchParams.get('tw');
	const yt = req.nextUrl.searchParams.get('yt');
	const tt = req.nextUrl.searchParams.get('tt');
	const dc = req.nextUrl.searchParams.get('dc');
	const pin = req.nextUrl.searchParams.get('pin');
	const sp = req.nextUrl.searchParams.get('sp');
	const sc = req.nextUrl.searchParams.get('sc');
	const reddit = req.nextUrl.searchParams.get('reddit');
	const twitch = req.nextUrl.searchParams.get('twitch');
	const messenger = req.nextUrl.searchParams.get('messenger');
	const p = req.nextUrl.searchParams.get('p');
	const em = req.nextUrl.searchParams.get('em');
	const ml = req.nextUrl.searchParams.get('ml');
	req.headers.set('Content-Type', 'application/json');
	const data: Data = {
		name,
		description,
		facebook: fb,
		photoURL: purl,
		instagram: ig,
		twitter: tw,
		youtube: yt,
		tiktok: tt,
		discord: dc,
		pinterest: pin,
		spotify: sp,
		snapchat: sc,
		reddit,
		twitch,
		messenger,
		phone: p,
		email: em,
		magicLink: ml,
	};
	return NextResponse.json({
		server: 'next',
		referrer: req.referrer,
		data: {
			id: encodeData(data),
		},
	});
}
