import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth">
      <Head>
        {/* Preconnect to Google Fonts if used directly, but fonts are local as per plan */}
        {/* Example for Google Fonts if they were used:
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
        */}
        {/* Favicon link - assuming favicon.ico is in /public */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-creamy-white text-deep-slate font-poppins antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
