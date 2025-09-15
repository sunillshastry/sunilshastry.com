import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const withMDX = createMDX({
	extension: /\.mdx?$/,
});

const nextConfig: NextConfig = {
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default withMDX(nextConfig);
