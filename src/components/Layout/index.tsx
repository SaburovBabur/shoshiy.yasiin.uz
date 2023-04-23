import Container from '@/components/Container'
import Header from '@/components/Header'

import React from 'react'

export function HomeLayout({ children }: { children: React.ReactNode }) {
	return (
		<Container>
			<div className="py-7">
				<Header />
			</div>

			{children}
		</Container>
	)
}
