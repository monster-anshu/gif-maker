import React, { useState } from 'react';
import { Container } from './UploadStyle';

interface Proptypes {
  handleUpload?: (file: File) => void;
}

const Upload: React.FC<Proptypes> = ({ handleUpload }) => {
  const [isDraging, setIsDraging] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleUploadFile = (recivedFile: File | null | undefined) => {
    if (!recivedFile) return;
    if (!recivedFile.type.includes('video'))
      return alert('only video file supported');
    setFile(recivedFile);
  };

  const handleDrop: React.DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    setIsDraging(false);
    const recivedFile = event.dataTransfer.files.item(0);
    handleUploadFile(recivedFile);
  };

  const handleDragOver: React.DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    setIsDraging(true);
  };

  const handleDragLeave: React.DragEventHandler<HTMLLabelElement> = (event) => {
    event.preventDefault();
    setIsDraging(false);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const recivedFile = event.target.files?.item(0);
    handleUploadFile(recivedFile);
  };

  const handleUploadClick = () => {
    if (!file) return;
    handleUpload?.(file);
  };

  return (
    <Container
      htmlFor={'input'}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <input
        type={'file'}
        style={{
          display: 'none',
        }}
        id={'input'}
        onChange={handleChange}
      />
      <p>
        Drag and drop a video
        <br />
        or Choose a video
      </p>
      <img src={'/assets/upload.png'} draggable={false} />
      {file && (
        <>
          <span> {file.name}</span>
          <button onClick={handleUploadClick}>Upload</button>
        </>
      )}
    </Container>
  );
};

export default Upload;
