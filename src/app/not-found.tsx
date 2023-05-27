import Link from "next/link"
export default (): JSX.Element => (
	<>
		<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="text-center">
				<p className="text-4xl font-semibold text-theme-primary">😭</p>
				<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
				<p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn't find the page you're looking for. Check if the URL is correct and try again.</p>
				<p className="mt-6 text-base leading-7 text-gray-600">
					If you're looking for a specific card, please{' '}</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Link
						href="/"
						className="rounded-md bg-theme-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
					>
						Go back home
					</Link>
					<Link href="/view" className="text-sm font-semibold text-gray-900">
						Try a new ID <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</div>
		</main>
	</>
)