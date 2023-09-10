import React from 'react';


interface VideoPlayerProps {
videoSrc: string;
label: string;
}


function VideoPlayer({ videoSrc, label }: VideoPlayerProps) {
return (
<div className="video-player">
<h2 className="video-header">{label}</h2>
<div className="video-container">
<video controls width="320" height="180">
<source src={videoSrc} type="video/mp4" />
Browser does not support the video tag.
</video>
</div>
</div>
);
}


function Videos() {
return (
<div className="lessons-container">
<h1 className="lessons-header">Lessons</h1>
<div className="video-players">
<VideoPlayer videoSrc="/videos/blockchaincrypto.mp4" label="Blockchain/Crytpo" />
<VideoPlayer videoSrc="/videos/corporatefinance.mp4" label="Corporate Finance" />
<VideoPlayer videoSrc="/videos/financialmarkets.mp4" label="Financial Markets" />
<VideoPlayer videoSrc="/videos/personalfinance.mp4" label="Personal Finance" />
<VideoPlayer videoSrc="/videos/quantfinance.mp4" label="Quantatative Finance" />
</div>
</div>
);
}


const styles = `
.lessons-container {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
padding-top: 20px;
}


.video-players {
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
text-align: center;
}


.lessons-header {
font-size: 36px;
font-weight: bold;
margin-bottom: 20px;
}


.video-header {
font-style: italic;
}


@media (max-width: 1024px) {
.video-players {
grid-template-columns: repeat(2, 1fr);
gap: 40px;
}
}
`;


function LessonsWithStyles() {
return (
<div>
<style>{styles}</style>
<Videos />
</div>
);
}


export default LessonsWithStyles;