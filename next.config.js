/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/durusul-lugah',
				permanent: true,
			},
		]
	},

	experimental: {
		appDir: false,
	},
}

module.exports = nextConfig
