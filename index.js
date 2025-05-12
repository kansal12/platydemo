const dubVideoList = [
  {
    title: "My Dubbed Video",
    description: "This is a video that has been dubbed in Hindi.",
    originalLanguage: "English",
    dubbedLanguage: "Hindi",
    originalVideoUrl: "original-video.mp4",
    dubbedVideoUrl: "dubbed-video.mp4",
    originalThumbnailUrl: "original-thumbnail.jpg",
    dubbedThumbnailUrl: "dubbed-thumbnail.jpg",
  },
  {
    title: "My Dubbed Video",
    description: "This is a video that has been dubbed in Hindi.",
    originalLanguage: "English",
    dubbedLanguage: "Spanish",
    originalVideoUrl: "original-video.mp4",
    dubbedVideoUrl: "dubbed-video.mp4",
    originalThumbnailUrl: "original-thumbnail.jpg",
    dubbedThumbnailUrl: "dubbed-thumbnail.jpg",
  },
];

// Get the container where you want to append the video elements
const container = document.getElementById("container");

// Loop through each item in the list and create the HTML
dubVideoList.forEach((dubVideoDetails) => {
  const htmlTemplate = `
    <div class="video-grid">
      <div class="video-box">
        <h2>Original Video (${dubVideoDetails.originalLanguage})</h2>
        <video controls poster="original-thumbnail.jpg">
          <source src="${dubVideoDetails.originalVideoUrl}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    
      <div class="video-box">
        <h2>Dubbed Video (${dubVideoDetails.dubbedLanguage})</h2>
        <video controls poster="dubbed-thumbnail.jpg">
          <source src="${dubVideoDetails.dubbedVideoUrl}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>`;

  // Append the generated HTML to the container
  container.insertAdjacentHTML("beforeend", htmlTemplate);
});
