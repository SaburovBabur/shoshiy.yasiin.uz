import Image from 'next/image'
import React from 'react'

function Lesson() {
	return (
		<div>
			<div className="h-[100px]" />

			<h3 className="h3">1 kitob - durusul lug`ah</h3>

			<div className="h-[50px]" />

			<div className="grid grid-cols-2 gap-7">
				<div className="bg-white/10 rounded-md flex items-center justify-between py-2 px-2 active:scale-95 duration-def cursor-pointer select-none">
					<div className="flex items-center gap-3">
						<Image src={'/book-1.png'} alt={'/book-1.png'} height={25} width={25} className="select-none" />
						<p className="p">Yuklab olish (pdf)</p>
					</div>

					<div className="rounded-full w-7 h-7 p-1 flex-shrink-0 bg-white/10 flex items-center justify-center">
						<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" fill="none" viewBox="0 0 15 16">
							<path
								stroke="#fff"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.197"
								d="M12.924 9.865v2.394a1.197 1.197 0 01-1.197 1.197h-8.38A1.197 1.197 0 012.15 12.26V9.865M4.544 6.872l2.992 2.993 2.993-2.993M7.537 9.865V2.682"
							></path>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Lesson
