import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Article({ params }: { params: { course: string; lesson: string } }) {
	return (
		<div>
			<div className="h-[50px]" />

			<div
				className="w-full rounded-lg overflow-hidden max-h-[350px]"
				dangerouslySetInnerHTML={{
					__html: `
                    <iframe width="100%" height="350" src="https://www.youtube-nocookie.com/embed/1C-14Y-tZ5c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
				}}
			/>
			<div className="h-[50px]" />

			<h3 className="h3">1-dars (a) | هَذَا - bu</h3>

			<div className="h-[30px]" />

			<div className="h-0.5 w-full bg-white/20" />

			<div className="h-[30px]" />

			<div className="flex items-center justify-between gap-10">
				<div className="bg-white/10 rounded-md flex items-center gap-3 justify-between py-2 px-3 active:scale-95 duration-def cursor-pointer select-none">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>

					<p className="p">1-dars (a) | هَذَا - bu</p>
				</div>

				<div className="bg-white/10 rounded-md flex items-center gap-3 justify-between py-2 px-3 active:scale-95 duration-def cursor-pointer select-none">
					<p className="p">2-dars (a) | هَذَا -bu</p>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-4 h-4 rotate-180"
					>
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
					</svg>
				</div>
			</div>

			<div className="h-[50px]" />
		</div>
	)
}

export default Article
