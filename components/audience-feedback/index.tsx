import Head from 'next/head';

import VideoSection from './VideoSection';

export default function AudienceFeedback() {
  return (
    <div>
      <Head>
        <title>Video Embed Example</title>
        <meta name="description" content="Responsive YouTube video embed example with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <VideoSection />
      </main>
    </div>
  );
}
