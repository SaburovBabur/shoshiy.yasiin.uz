'use client'

import Logo from '@/components/Logo'
import Tabs from '@/components/Tabs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface HeaderProps {
	children?: React.ReactNode
}

function Header({ children }: HeaderProps) {
	const pathname = usePathname()

	const activeTab = () => {
		if (pathname.includes('durusul-lugah')) {
			return 'durusul-lugah'
		}

		if (pathname.includes('/ajurrumiyya')) {
			return 'ajurrumiyya'
		}
	}

	return (
		<>
			<header className="flex items-center justify-between">
				<Link href={'/'}>
					<Logo className="h-5" />
				</Link>

				<Tabs
					onChange={(tab) => console.log(tab)}
					value={activeTab()}
					tabs={[
						{
							jsx: (
								<Link href={`/durusul-lugah`} className="px-4 py-1 block">
									durusul lug`ah
								</Link>
							),
							value: 'durusul-lugah',
						},
						{
							jsx: (
								<Link href={`/ajurrumiyya`} className="px-4 py-1 block">
									ajurrumiyya
								</Link>
							),
							value: 'ajurrumiyya',
						},
						{
							jsx: (
								<Link href={`/nahv-tatbiqiy`} className="px-4 py-1 block">
									nahv tatbiqiy
								</Link>
							),
							value: 'nahv-tatbiqiy',
						},
					]}
				/>
			</header>

			{children}
		</>
	)
}

export default Header
