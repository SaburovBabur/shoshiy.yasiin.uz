import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface TypeCourse {
	slug: string
	title: string
	image: {
		url: string
		alt: string
	}
	subTitle: string
	description: string
	level: TypeCourseLevel
	lessons: TypeCourseLesson[]
}

export interface TypeCourseLevel {
	title: string
	num: number
}

export interface TypeCourseLesson {
	slug: string
	title: string
}

const lessons: { [key: string]: TypeCourseLesson[] } = {
	'durusul-lugah-1-kitob': [
		{
			title: '',
			slug: '',
		},
		{
			title: '',
			slug: '',
		},
		{
			title: '',
			slug: '',
		},
		{
			title: '',
			slug: '',
		},
		{
			title: '',
			slug: '',
		},
	],
}
const courses: TypeCourse[] = [
	{
		slug: 'durusul-lugah-1-kitob',
		image: {
			url: '/book-1.png',
			alt: 'Durusul lughatil 1-kitob rasmi',
		},
		title: '1 - kitob',
		subTitle: 'Durusul lug`ah',
		description: 'Kurs arab tilini 0 dan boshlayotkanlar uchun mo’ljallangan. Davomiyligi ~1 oy uchun mo`ljallangan.',
		level: {
			title: 'Boshlang`ich',
			num: 1,
		},
		lessons: lessons['durusul-lugah-1-kitob'],
	},

	{
		slug: 'durusul-lugah-2-kitob',
		image: {
			url: '/book-2.png',
			alt: 'Durusul lughatil 2-kitob rasmi',
		},
		title: '2 - kitob',
		subTitle: 'Durusul lug`ah',
		description: 'Kurs 1 kitobning davomi. Davomiyligi ~2-3 oy uchun mo`ljallangan.',
		level: {
			title: 'O’rtacha',
			num: 2,
		},
		lessons: [
			{
				slug: '',
				title: '',
			},
		],
	},

	{
		slug: 'durusul-lugah-3-kitob',
		image: {
			url: '/book-3.png',
			alt: 'Durusul lughatil 3-kitob rasmi',
		},
		title: '3 - kitob',
		subTitle: 'Durusul lug`ah',
		description:
			'Kurs 2 kitobning davomi,  va yana bo’limlar qo’shilishi mumkun. Davomiyligi 3-4 oy uchun mo`ljallangan.',
		level: {
			title: 'Yuqori',
			num: 3,
		},
		lessons: [
			{
				slug: '',
				title: '',
			},
		],
	},
]

function Course({ params }: { params: { course: string } }) {
	const { course: courseName } = params

	return (
		<>
			<div className="h-[100px]" />

			<div className="space-y-14">
				{courses.map((course, idx) => (
					<Link
						href={`/${courseName}/${course.slug}`}
						replace={false}
						key={course.slug}
						className="w-full rounded-lg bg-white/10 py-3 px-3 cursor-pointer | flex gap-7 hover:scale-[102%] duration-def relative"
					>
						<div className="absolute left-2 top-3 " style={{ filter: 'blur(100px)' }}>
							<Image
								src={course.image.url}
								alt={course.image.alt}
								height={150}
								width={150}
								className="select-none"
							/>
						</div>
						<Image
							src={course.image.url}
							alt={course.image.alt}
							height={200}
							width={150}
							className="select-none relative"
						/>

						<div className="flex flex-col justify-between py-2">
							<h3 className="h1">{course.title}</h3>
							<p className="p">{course.subTitle}</p>

							<div className="flex items-center gap-20">
								<div className="flex items-center gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5"
									>
										<path
											strokeLinecap="round"
											d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
										/>
									</svg>

									<p className="p/2">{course.lessons.length}</p>
								</div>

								<div className="flex items-center gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										viewBox="0 0 24 24"
									>
										<path d="M12 20L12 10" stroke={course.level.num > 1 ? '#00DA83' : ''}></path>
										<path d="M18 20L18 4" stroke={course.level.num > 2 ? '#00DA83' : ''}></path>
										<path d="M6 20L6 16" stroke={course.level.num > 0 ? '#00DA83' : ''}></path>
									</svg>

									<p className="p/2">{course.level.title}</p>
								</div>
							</div>

							<div className="flex items-center gap-2">
								<p className="p/2 text-white/70">
									Kurs arab tilini 0 dan boshlayotkanlar uchun mo’ljallangan. Davomiyligi ~1 oy uchun
									mo`ljallangan.
								</p>

								{/* <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										fill="none"
										viewBox="0 0 24 24"
										className="ml-1"
									>
										<path
											stroke="#fff"
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 4.832a1 1 0 011.54-.842l11.152 7.169a1 1 0 010 1.682L6.54 20.01A1 1 0 015 19.17V4.831z"
										></path>
									</svg>
								</div> */}
							</div>
						</div>
					</Link>
				))}
			</div>

			<div className="h-[100px]" />
		</>
	)
}

export default Course
