import React, { useState, useEffect } from 'react';
import './styles.css';
function EditorDashboard() {
 
  
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    // Simulated data for content to review
    const sampleContent = [
      {
        _id: 1,
        title: 'Breaking News 1',
        description: 'Description for breaking news 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        author: 'Citizen Journalist 1',
        imageUrl: 'image1.jpg',
        videoUrl: null,
      },
      {
        _id: 2,
        title: 'Feature Story 1',
        description: 'Description for feature story 1. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        author: 'Citizen Journalist 2',
        imageUrl: 'image2.jpg',
        videoUrl: 'video1.mp4',
      },
    ];

    setContentList(sampleContent);
  }, []);

  const reviewContent = (contentId) => {
    // Implement logic to review content, update its status, etc.
    console.log(`Reviewing content with ID ${contentId}`);
  };

  const publishContent = (contentId) => {
    // Implement logic to publish content, update its status, etc.
    console.log(`Publishing content with ID ${contentId}`);
  };

  return (
    <div className="editor-dashboard">
      <h2>Editor Dashboard</h2>
      {contentList.map((content) => (
        <div key={content._id} className="content-card">
          <div className="content-title">{content.title}</div>
          <div className="content-description">{content.description}</div>
          <div className="content-author">Author: {content.author}</div>
          <div className="content-actions">
            <button onClick={() => reviewContent(content._id)}>Review</button>
            <button onClick={() => publishContent(content._id)}>Publish</button>
          </div>
        </div>
      ))}
    </div>
  );
  
}


export default EditorDashboard;
