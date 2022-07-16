import React, { useState, useEffect } from 'react';
import { Buttons, Container, GettingReady } from './ConverterStyle';
import { createFFmpeg, fetchFile } from '@ffmpeg/ffmpeg';
import { Loader } from '@components';
const ffmpeg = createFFmpeg({ log: true });

interface Proptypes {
  file: File;
  start: number;
  duration: number;
  convertNext?: () => void;
}
const Converter: React.FC<Proptypes> = ({
  file,
  start,
  duration,
  convertNext,
}) => {
  const [ready, setReady] = useState(false);
  const [gif, setGif] = useState('');
  const [converting, setConverting] = useState(false);
  const load = async () => {
    await ffmpeg
      .load()
      .then(() => {
        setReady(true);
      })
      .catch((err) => console.error(err));
  };

  const convertToGif = async () => {
    setConverting(true);
    ffmpeg.FS('writeFile', 'video.mp4', await fetchFile(file));
    const cmd = `-i video.mp4 -ss ${start} -t ${duration} -f gif out.gif`.split(
      ' ',
    );
    console.log(cmd);

    await ffmpeg.run(...cmd);
    const data = ffmpeg.FS('readFile', 'out.gif');

    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: 'image/gif' }),
    );
    setGif(url);
  };

  useEffect(() => {
    load();
  }, []);
  return (
    <Container>
      {!ready || !gif ? (
        <GettingReady>
          {!ready ? (
            <>
              <Loader width={30} border={3} />
              <p>Loading Engine</p>
            </>
          ) : (
            <>
              {!converting ? (
                <button onClick={convertToGif}>Covert</button>
              ) : (
                <>
                  <Loader width={30} border={3} />
                  <p>Converting to gif</p>
                </>
              )}
            </>
          )}
        </GettingReady>
      ) : (
        <>
          <img src={gif} />
          <Buttons>
            <a href={gif} download>
              Download
            </a>
            <button onClick={convertNext}>Convert next</button>
          </Buttons>
        </>
      )}
    </Container>
  );
};

export default Converter;
