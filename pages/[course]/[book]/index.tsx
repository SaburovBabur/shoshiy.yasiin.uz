import { HomeLayout } from '@/components/Layout'
import { TypeCourse, courses } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'sonner'
import { Toaster } from 'sonner'

export async function getStaticPaths(params: any) {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export async function getStaticProps(context: any) {
	const { book: bookName } = context.params

	const book = courses().find((course) => (course.slug === bookName ? course : false))

	return {
		props: { book },
	}
}

function Lesson({ book }: { book: TypeCourse }) {
	const router = useRouter()

	if (!book) {
		return <>Bunday kurs mavjud emas!</>
	}

	return (
		<HomeLayout>
			<Toaster />
			<div className="h-[50px]" />

			<h3 className="h3">
				{book.title} {book.subTitle}
			</h3>

			<div className="h-[30px]" />

			<p className="p/2 text-white/70">
				*Kitob muqovasi va ichi videodagidan va rasmlarda bir biridan farq qilishi mumkun
			</p>

			<div className="h-[50px]" />

			<div className="grid grid-cols-2 gap-7">
				<a
					href={book.file}
					target="_blank"
					className="bg-white/10 rounded-md flex items-center justify-between py-2 px-2 active:scale-95 duration-def cursor-pointer select-none"
				>
					<div className="flex items-center gap-3">
						<Image src={book.image.url} alt={book.image.alt} height={25} width={25} className="select-none" />
						<p className="p">{book.title} (pdf)</p>
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
				</a>
			</div>

			<div className="h-[50px]" />

			<div className="flex flex-col gap-8 relative">
				<div className="h-[100%] w-[1px] rounded-full absolute top-0 left-[10px] bg-primary-def" />
				{book.lessons.map((lesson, idx) => (
					<div key={idx} className="flex items-center">
						<div
							onClick={() => toast.success('Dars bitkazildi!')}
							className="h-5 w-5 rounded-md border border-primary-def bg-black z-10 hover:bg-primary-def duration-def cursor-pointer"
						/>

						<Link
							href={`${router.asPath}/${lesson.slug}`}
							className="p inline-block hover:text-primary-def duration-def cursor-pointer hover:bg-[#00DA83]/10 px-5 py-2 ml-1 rounded-md"
						>
							{lesson.title}
						</Link>
					</div>
				))}
			</div>

			<div className="h-[50px]" />
		</HomeLayout>
	)
}

export default Lesson
