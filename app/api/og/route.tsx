import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);

	const title = searchParams.get('title') ?? 'New blog';
	const subtitle =
		searchParams.get('subtitle') ??
		'View new post on https://sunilshastry.com/blogs';

	return new ImageResponse(
		(
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					letterSpacing: '-.02em',
					fontWeight: 700,
					background: 'white',
					fontFamily: 'Inter, sans-serif',
				}}
			>
				<div
					style={{
						left: 42,
						top: 42,
						position: 'absolute',
						display: 'flex',
						alignItems: 'center',
					}}
				>
					<span
						style={{
							width: 24,
							height: 24,
							background: 'black',
						}}
					/>
					<span
						style={{
							marginLeft: 8,
							fontSize: 20,
						}}
					>
						sunilshastry.com
					</span>
				</div>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						padding: '20px 50px',
						margin: '0 42px',
						fontSize: 40,
						width: 'auto',
						maxWidth: 550,
						textAlign: 'center',
						backgroundColor: 'black',
						color: 'white',
						lineHeight: 1.4,
					}}
				>
					{title}
				</div>
				<p>{subtitle}</p>
			</div>
		),
		{
			width: 1200,
			height: 630,
		}
	);
}
