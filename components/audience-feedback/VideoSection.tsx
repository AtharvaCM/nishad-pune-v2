import React from 'react';

import VideoEmbed from './VideoEmbed';

const videoData = [
  {
    isVideo: true,
    videoId: 'dQw4w9WgXcQ',
    title: 'Ready to Accelerate?',
    author: 'Shawn Hesketh',
  },
  {
    isVideo: false,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis eius esse modi similique voluptatibus repellat tenetur, repudiandae placeat officia? Voluptatibus, ipsum?',
  },
  {
    isVideo: true,
    videoId: '3GwjfUFyY6M',
    title: 'No Cookie-Cutter Advice',
    author: 'Joe Casabona',
  },
  {
    isVideo: false,
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis eius esse modi similique voluptatibus repellat tenetur, repudiandae placeat officia? Voluptatibus, ipsum?',
  },
];

const VideoSection: React.FC = () => (
  <div className="container mx-auto my-8 px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
      {videoData.map((video, index) =>
        video.isVideo ? (
          <VideoEmbed key={index} videoId={`${video.videoId}`} title={`${video.title}`} author={`${video.author}`} />
        ) : (
          <div key={index} className={'w-full p-8 flex items-center justify-center text-center'}>
            <span className="text-gray-600">
              <h2 className="font-semibold">Ready to Accelerate?</h2>
              {video.info}
            </span>
          </div>
        ),
      )}
    </div>
  </div>
);

export default VideoSection;
