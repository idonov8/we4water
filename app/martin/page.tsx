export default function MartinVideoPage() {
  return (
    <div className="container martin-page">
      <div className="content-wrapper">
        <h1 className="title">Martin the Boat</h1>
        <p className="subtitle">Martin's video journal</p>

        <div className="chapter">
          <h2>Chapter 1: The Floor</h2>
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/9OO9-MpF1zE?si=aJUJDcf99t54vqvN"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

