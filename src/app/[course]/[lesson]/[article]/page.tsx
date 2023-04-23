import { courses } from '@/data'
import React from 'react'

function Article({ params }: { params: { course: string; lesson: string; article: string } }) {
	const courseData = courses().find((course) => (course.slug === params.lesson ? course : false))

	if (!courseData) {
		return <>Bunday kurs mavjud emas!</>
	}

	const articleData = courseData.lessons.find((lesson) => (lesson.slug === params.article ? lesson : false))

	if (!articleData) {
		return <>Bunday kurs mavjud emas!</>
	}

	return (
		<div>
			<div className="h-[50px]" />

			<div
				className="w-full rounded-lg overflow-hidden max-h-[350px]"
				dangerouslySetInnerHTML={{
					__html: articleData.html,
				}}
			/>
			<div className="h-[50px]" />

			<h3 className="h1">{articleData.title}</h3>

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
