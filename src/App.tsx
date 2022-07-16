import React, { useEffect, useState } from 'react';
import { Container } from 'style';
import { Converter, Upload, Video } from '@components';

const App = () => {
  const [file, setFile] = useState<File | null>(null);
  const [start, setStart] = useState(0);
  const [stop, setStop] = useState(0);
  const [videoDone, setVideoDone] = useState(false);
  const handleUpload = (recived: File) => {
    setFile(recived);
  };
  const handleNext = (start: number, stop: number) => {
    setVideoDone(true);
    setStart(start);
    setStop(stop);
  };
  const handlePrev = () => {
    setFile(null);
  };
  const handleConvertNext = () => {
    setFile(null);
  };
  return (
    <Container>
      {!file && <Upload handleUpload={handleUpload} />}
      {file && !videoDone && (
        <Video video={file} onNext={handleNext} onPrev={handlePrev} />
      )}
      {file && videoDone && (
        <Converter
          file={file}
          start={start}
          duration={stop - start}
          convertNext={handleConvertNext}
        />
      )}
    </Container>
  );
};

export default App;
