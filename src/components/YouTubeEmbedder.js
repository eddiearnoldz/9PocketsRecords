import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbedder = ({ embedId }) => (

  <div className="video-responsive">
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbedder.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbedder;