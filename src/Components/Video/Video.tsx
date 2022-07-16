import VideoSlider from 'Components/Slider/Slider';
import React, { useEffect, useRef, useLayoutEffect, useState } from 'react';
import { Buttons, Container } from './VideoStyle';

interface Proptypes {
  video: File;
  onNext?: (start: number, stop: number) => void;
  onPrev?: () => void;
}
const RenderVideo: React.FC<Proptypes> = ({ video, onNext, onPrev }) => {
  const startAt = useRef(0);
  const stopAt = useRef(0);
  const [alredyLoaded, setAlredyLoaded] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);
  const [length, setLength] = useState(0);
  const isPlaying = useRef(true);
  const setStartAt = (value: number) => {
    startAt.current = value;
    console.log('start ' + startAt.current);
  };
  const setStopAt = (value: number) => {
    stopAt.current = value;
    console.log('stop ' + stopAt.current);
  };

  const play = async () => {
    if (!ref.current) return;
    if (ref.current.paused) await ref.current.play();
    isPlaying.current = true;
    console.log('playing');
  };
  const pause = () => {
    if (!ref.current) return;
    if (ref.current.paused) return;
    ref.current.pause();
    isPlaying.current = false;
  };
  const playPause = async () => {
    if (!ref.current) return;
    const isPaused = ref.current.paused;
    if (isPaused) {
      await ref.current.play();
      return;
    }
    ref.current.pause();
  };
  const setTimeLine = (time: number) => {
    if (!ref.current) return;
    ref.current.currentTime = time;
  };
  const getTimeLine = () => {
    if (!ref.current) return 0;
    return ref.current.currentTime;
  };

  const handleVideoLoad = () => {
    if (!ref.current) return;
    setAlredyLoaded(true);
    if (alredyLoaded) return;
    setLength(ref.current.duration);
    setStopAt((ref.current.duration * 20) / 100);
    setStartAt(0);
  };

  const setTime = async (start: number, stop: number) => {
    if (startAt.current !== start) setStartAt(start);
    if (stopAt.current !== stop) setStopAt(stop);
  };

  const handleChange = async (min: number, max: number) => {
    if (!ref.current) return;
    setTimeLine(min);
    play();
    setTime(min, max);
  };

  const checkTime = () => {
    if (!ref.current) return;
    if (stopAt.current < getTimeLine()) {
      pause();
      setTimeLine(startAt.current);
    }
  };

  const handlePlay = () => {
    if (!ref.current) return;
    const currentTime = getTimeLine();
    if (currentTime < startAt.current || currentTime > stopAt.current)
      setTimeLine(startAt.current);
  };

  const handleNext = () => {
    onNext?.(startAt.current, stopAt.current);
  };

  return (
    <Container>
      <video
        ref={ref}
        // controls
        src={URL.createObjectURL(video)}
        onLoadedMetadata={handleVideoLoad}
        onTimeUpdate={checkTime}
        preload={'none'}
        onPlay={handlePlay}
        autoPlay={true}
      />
      {length && <VideoSlider min={0} max={length} onChange={handleChange} />}
      {ref.current && (
        <Buttons>
          <button onClick={onPrev}>Previous</button>
          <button onClick={playPause}>Play/pause</button>
          <button onClick={handleNext}>Next</button>
        </Buttons>
      )}
    </Container>
  );
};

export default RenderVideo;
