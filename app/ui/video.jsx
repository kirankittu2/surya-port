"use client";

import ReactPlayer from "react-player";

export default function Video({ src }) {
  return (
    <div>
      <ReactPlayer
        className="react-player"
        width="281px"
        height="500px"
        url={src}
        controls={true}
        muted={true}
        playing={true}
        loop={true}
      />
    </div>
  );
}
