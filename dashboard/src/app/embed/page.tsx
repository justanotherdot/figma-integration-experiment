export default function Embed() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width; height=device-height;" />
        <title>video.mp4</title>
      </head>
      <body>
        <video width="640" height="360" controls>
          <source src="https://figma-integration-experiment-hcjo.vercel.app/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </body>
    </html>
  );
}
