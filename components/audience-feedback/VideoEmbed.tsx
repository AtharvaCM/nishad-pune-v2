import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  author: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title, author }) => (
  <div className="w-full p-4">
    <div className={'bg-white p-8 rounded-lg shadow-lg'}>
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      <h3 className="mt-4 text-lg font-semibold">{author}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
  </div>
);

export default VideoEmbed;
