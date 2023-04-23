import Container from '@/components/Container'
import { HomeLayout } from '@/components/Layout'
import Logo from '@/components/Logo'
import { TypeCourseLesson, courses } from '@/data'
import Link from 'next/link'
import { useRouter } from 'next/router'

export async function getStaticPaths(params: any) {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export async function getStaticProps(context: any) {
	try {
		const { book: bookName, lesson: lessonName } = context.params
		const courseData = courses().find((course) => (course.slug === bookName ? course : false))
		const lesson = courseData?.lessons.find((lesson) => (lesson.slug === lessonName ? lesson : false))

		return {
			props: { lesson: lesson ? lesson : null },
		}
	} catch (error) {
		return {
			props: { lesson: null },
		}
	}
}

function Article({ lesson }: { lesson: TypeCourseLesson }) {
	const router = useRouter()
	const query = router.query

	if (!lesson) {
		return (
			<HomeLayout>
				<h3 className="h3 flex items-center justify-center pt-10">Bunday kurs mavjud emas 📚</h3>
			</HomeLayout>
		)
	}

	return (
		<Container>
			<header className="flex items-center justify-between py-10">
				<Link
					href={`/${query.course}/${query.book}`}
					className="bg-white/10 rounded-md flex items-center gap-2 justify-between py-1 px-3 active:scale-95 duration-def cursor-pointer select-none"
				>
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

					<p className="p text-sm">Orqaga</p>
				</Link>

				<Link href={'/'}>
					<Logo className="h-5" />
				</Link>
			</header>

			<div
				className="w-full rounded-lg overflow-hidden max-h-[350px]"
				dangerouslySetInnerHTML={{
					__html: lesson.html,
				}}
			/>
			<div className="h-[50px]" />

			<h3 className="h1">{lesson.title}</h3>

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
		</Container>
	)
}

export default Article
