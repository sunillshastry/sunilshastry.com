import Image from 'next/image';
import UfoLogoSvg from '@/public/ufo.svg';

export default function NotFoundPage() {
	return (
		<main className="flex min-h-screen w-full items-center justify-center text-center">
			<section className="font-mono">
				<Image
					src={UfoLogoSvg}
					alt="UFO"
					width={150}
					height={150}
					className="-rotate-z-[38deg]"
				/>
				<h1 className="text-9xl tracking-wide">404</h1>
				<h2 className="mt-3">The resource you are looking for is not found</h2>
			</section>
		</main>
	);
}
