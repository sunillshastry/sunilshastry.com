import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const title = searchParams.get('title') ?? 'New blog';
	const subtitle =
		searchParams.get('subtitle') ??
		'View new post on https://sunilshastry.com/blogs';
	const link = searchParams.get('link') ?? 'https://sunilshastry.com/blogs';

	return new ImageResponse(
		(
			<div
				style={{
					backgroundImage: 'linear-gradient(to right bottom, #C9D6FF, #E2E2E2)',
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					paddingTop: '100px',
					paddingLeft: '40px',
					boxShadow: 'inset 10px 10px 10px rgba(0,0,0)',
				}}
			>
				<h1 style={{ color: 'black', fontWeight: 'bold', fontSize: '85px' }}>
					{title}
				</h1>
				<h3 style={{ fontSize: '35px', color: '#333333' }}>{subtitle}</h3>
				<h4 style={{ fontSize: '28px', color: '#666666' }}>
					Available at &nbsp;<strong>{link}</strong>
				</h4>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
