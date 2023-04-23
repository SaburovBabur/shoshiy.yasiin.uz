import type { AppProps } from 'next/app'
import { DM_Sans as Nunito } from 'next/font/google'
import '@/styles/tailwind.css'
import { Analytics } from '@vercel/analytics/react'

const nunito = Nunito({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div className={nunito.className}>
			<Component {...pageProps} />

			<Analytics />
		</div>
	)
}
