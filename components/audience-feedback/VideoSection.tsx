import React from 'react';

import VideoEmbed from './VideoEmbed';

const videoData = [
  {
    videoId: 'dQw4w9WgXcQ',
    title: 'Ready to Accelerate?',
    author: 'Shawn Hesketh',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis eius esse modi similique voluptatibus repellat tenetur, repudiandae placeat officia? Voluptatibus, ipsum?',
  },
  {
    videoId: '3GwjfUFyY6M',
    title: 'No Cookie-Cutter Advice',
    author: 'Joe Casabona',
    info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam blanditiis eius esse modi similique voluptatibus repellat tenetur, repudiandae placeat officia? Voluptatibus, ipsum?',
  },
];

const VideoSection: React.FC = () => (
  <div className="container mx-auto my-8 px-8">
    <div>
      {videoData.map((video, index) => (
        <VideoEmbed
          key={index}
          videoId={`${video.videoId}`}
          title={`${video.title}`}
          author={`${video.author}`}
          info={`${video.info}`}
          bgGray={index % 2 === 0 ? 'bg-gray-200' : 'bg-gray-200'}
        />
      ))}
    </div>
  </div>
);

export default VideoSection;
