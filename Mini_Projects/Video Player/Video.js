function Video({ src }) {
    return (
      <div>
        <iframe
          width="560"
          height="315"
          src={src}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Video Player"
        />
      </div>
    );
  }
  
  export default Video;
  