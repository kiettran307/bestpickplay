import Script from "next/script";

export default function Head() {
  return (
    <>
      <title>bestpick</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Best Pick F&B - we are always here to serve you" />
      <link rel="icon" href="/images/favicon.ico" />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-JLE346ZEVZ"></Script>
      <Script>
      {` window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-JLE346ZEVZ');`}
      </Script>
    </>
  );
}
