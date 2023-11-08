import React, { useState } from 'react';

function SubmitContent(props) {
  const { onContentSubmit } = props;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  };

  const handleVideoChange = (event) => {
    const selectedVideo = event.target.files[0];
    setVideo(selectedVideo);
  };

  const handleSubmit = () => {
    // Create a content object with the submitted data
    const submittedContent = {
      title,
      description,
      image,
      video,
      // Add more fields as needed
    };

    // Pass the content to the parent component
    onContentSubmit(submittedContent);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Submit Your Content</h2>
      <form>
        <div style={styles.formGroup}>
          <label style={styles.label}>Title:</label>
          <input
            type="text"
            style={styles.input}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Description:</label>
          <textarea
            style={styles.textarea}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Video:</label>
          <input
            type="file"
            accept="video/*"
            onChange={handleVideoChange}
          />
        </div>
        <button style={styles.button} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  // Your existing styles
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '16px',
  },
  textarea: {
    width: '100%',
    height: '100px',
    padding: '8px',
    fontSize: '16px',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default SubmitContent;
