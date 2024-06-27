import React from 'react';

interface VideoEmbedProps {
  videoId: string;
  title: string;
  author: string;
  info: string;
  bgGray: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title, author, info, bgGray }) => (
  <div className={'w-full  container p-4'}>
    <div className={`grid ${bgGray} gap-6 grid-cols-1 md:grid-cols-2 md:items-center p-4 md:px-16 rounded-lg`}>
      <div className={'md:m-8 rounded-lg shadow-lg'}>
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
      </div>
      <div className=" items-center md:items-center md:text-center">
        <h2 className=" text-lg font-semibold">{title}</h2>
        <h3>{author}</h3>
        <h3 className="mt-4">{info}</h3>
      </div>
    </div>
  </div>
);

export default VideoEmbed;
