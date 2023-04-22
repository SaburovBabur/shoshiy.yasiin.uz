import Image from 'next/image'
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
		lessons: [
			{
				slug: '',
				title: '',
			},
		],
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

function Course() {
	return (
		<>
			<div className="h-[100px]" />

			<div className="space-y-14">
				{courses.map((course, idx) => (
					<div
						key={course.slug}
						className="w-full rounded-lg border border-[#CFCFCF]/50 bg-white/10 py-3 px-3 cursor-pointer | flex gap-9 hover:scale-[102%] duration-def relative"
					>
						<div className="absolute left-2 top-3 " style={{ filter: 'blur(100px)' }}>
							<Image
								src={course.image.url}
								alt={course.image.alt}
								height={200}
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

						<div className="flex flex-col justify-between">
							<h3 className="h1">{course.title}</h3>
							<p className="p">{course.subTitle}</p>

							<div className="opacity-70 flex items-center gap-20">
								<div className="flex items-center gap-3">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										viewBox="0 0 24 24"
										className="w-6 h-6"
									>
										<path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
										<path d="M9.75 15.02L15.5 11.75 9.75 8.48 9.75 15.02z"></path>
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
								<p className="p/2 opacity-70">
									Kurs arab tilini 0 dan boshlayotkanlar uchun mo’ljallangan. Davomiyligi ~1 oy uchun
									mo`ljallangan.
								</p>

								<div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
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
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="h-[100px]" />
		</>
	)
}

export default Course
