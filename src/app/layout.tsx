import { DM_Sans as Nunito } from 'next/font/google'
import Container from '@/components/Container'
import Header from '@/components/Header'
import '@/styles/tailwind.css'

const nunito = Nunito({ weight: ['400', '500', '700'], subsets: ['latin'] })

export const metadata = {
	title: 'Hakim Shoshiy',
	description: 'Arab tili 0dan Quron va Hadisgacha!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={nunito.className}>
				<Container>
					<div className="py-7">
						<Header />

						{children}
					</div>
				</Container>
			</body>
		</html>
	)
}
