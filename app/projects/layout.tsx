import { Metadata } from 'next';

interface FunctionProps {
	children: Readonly<React.ReactNode>;
}

export const metadata: Metadata = {
	title: 'Projects | Sunil Shastry | Software Engineer',
};

export default function Layout({ children }: FunctionProps) {
	return <>{children}</>;
}
