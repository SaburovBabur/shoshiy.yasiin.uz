import type { AppProps } from 'next/app'
import { DM_Sans as Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import '@/styles/tailwind.css'

const nunito = Nunito({ weight: ['400', '500', '700'], subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="theme-color" content="#000000" />
				{/* <!-- Primary Meta Tags --> */}
				<title>Hakim Shoshiy - Yaseen.uz ⚡</title>
				<meta property="og:image" content="/bg.png" />
				<meta name="title" content="Hakim Shoshiy - Yaseen.uz ⚡" />
				<meta name="description" content="Hakim Shoshiy - Yaseen.uz" />

				{/* <!-- Twitter --> */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://www.Hakim Shoshiy - Yaseen.uz/" />
				<meta property="twitter:title" content="Hakim Shoshiy - Yaseen.uz ⚡" />
				<meta property="twitter:description" content="Hakim Shoshiy - Yaseen.uz" />
				<meta property="twitter:image" content="/bg.png" />
				<script
					dangerouslySetInnerHTML={{
						__html: `
						
						   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
						   m[i].l=1*new Date();
						   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
						   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
						   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
						
						   ym(93345331, "init", {
								clickmap:true,
								trackLinks:true,
								accurateTrackBounce:true,
								webvisor:true
						   });
						   
							`,
					}}
				/>
			</Head>
			<div className={nunito.className}>
				<Component {...pageProps} />

				<Analytics />
			</div>
		</>
	)
}

/// Yandex Metrika for Next.JS

function convertParam(boolValue: any, defaultValue: any) {
	return (boolValue === undefined ? defaultValue : boolValue) ? 'true' : 'false'
}

function YandexMetrikaTag({ yid, clickmap = true, trackLinks = true, accurateTrackBounce = true, webvisor = true }: any) {
	/// Tag version of the Yandex Metrika.
	/// Used when there is support for the JavaScript to fully track user.
	/// Will cause loading and injecting tag script, and activate Yandex Metrika by constructor.

	// Tag options, see your Yandex Metrika recommendations for setup.
	clickmap = convertParam(clickmap, true)
	trackLinks = convertParam(trackLinks, true)
	accurateTrackBounce = convertParam(accurateTrackBounce, true)
	webvisor = convertParam(webvisor, true)

	// Script that injects Yandex Metrika tag script.
	const scriptInjectorHTML = `
	  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
	  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
	  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
	`

	return (
		<script
			dangerouslySetInnerHTML={{
				__html: `
			  ${scriptInjectorHTML}
			  ym(${yid}, "init", {
				  clickmap:${clickmap},
				  trackLinks:${trackLinks},
				  accurateTrackBounce:${accurateTrackBounce},
				  webvisor:${webvisor}
			  });
		`,
			}}
		/>
	)
}

function YandexMetrikaPixel({ yid }: any) {
	/// Pixel version of the Yandex Metrika.
	/// Used when there is no JavaScript on the target browser.
	/// This will cause the Yandex Metrika to track user by calling loading of the pixel image (with target params).

	// Target source to load pixel from.
	const pixelSource = `https://mc.yandex.ru/watch/${yid}`

	/* eslint-disable @next/next/no-img-element */
	return (
		<noscript>
			<div>
				<img src={pixelSource} style={{ position: 'absolute', left: '-9999px' }} alt="" />
			</div>
		</noscript>
	)
}

function YandexMetrika({ yid, clickmap = true, trackLinks = true, accurateTrackBounce = true, webvisor = true }: any) {
	/// Yandex Metrika service.
	return (
		<>
			<YandexMetrikaTag
				yid={yid}
				clickmap={clickmap}
				trackLinks={trackLinks}
				accuracyTrackBounce={accurateTrackBounce}
				webvisor={webvisor}
			/>
			<YandexMetrikaPixel yid={yid} />
		</>
	)
}
