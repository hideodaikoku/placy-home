import React from "react"

const Video = ({videoSrcUrl, videoTitle, videoClass, ...props}) => (
    <div className={videoClass}>
        <iframe 
          src={videoSrcUrl}
          title={videoTitle}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
          allowFullScreen
        />
    </div>
)

export default Video