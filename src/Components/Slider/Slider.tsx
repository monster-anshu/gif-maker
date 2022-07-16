import React, { useState, HTMLProps } from 'react';
import ReactSlider from 'react-slider';
import styled, { css } from 'styled-components';
const StyledSlider = styled(ReactSlider)`
  width: 100%;
  margin: 10px 0;
  height: 20px;
  background-color: #ffffff;
  border-radius: 5px;
`;
const StyledThumb = styled.div<{ index: number }>`
  height: 100%;
  width: 10px;
  cursor: grab;
  div {
    position: absolute;
    top: 100%;
    min-width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    margin-top: 10px;
    font-size: 12px;
    min-height: 100%;
    border-radius: 4px;
    display: block;
    padding: 5px;
    z-index: 1;

    &::after {
      content: '';
      background: #fff;
      height: 10px;
      width: 10px;
      transform: rotate(45deg);
      display: block;
      position: absolute;
      top: -3px;
      left: 7px;
      z-index: -1;
    }
    ${({ index }) =>
      index === 0 &&
      css`
        right: 0;
        &::after {
          right: 7px;
          left: unset;
        }
      `}
  }
`;
const StyledTrack = styled.div<{ index: number }>`
  top: 0;
  bottom: 0;
  ${(props) => {
    if (props.index === 0) return css``;
    if (props.index === 1)
      return css`
        background-color: red;
        border-radius: 3px;
      `;
    if (props.index === 2) return css``;
  }};
`;

interface Proptypes {
  max: number;
  min: number;
  onChange?: (min: number, max: number) => void;
}

const getPrecent = (value: number, percent: number) => (value * percent) / 100;

const Slider: React.FC<Proptypes> = ({ max, min, onChange }) => {
  return (
    <StyledSlider
      min={0}
      max={max}
      renderThumb={(props, state) => (
        <StyledThumb {...(props as any)} index={state.index}>
          <div>{state.valueNow + ' sec'}</div>
        </StyledThumb>
      )}
      renderTrack={(props, state) => (
        <StyledTrack index={state.index} {...(props as any)}></StyledTrack>
      )}
      defaultValue={[min, getPrecent(max, 20)]}
      onChange={(value) => {
        const values = value as number[];
        onChange?.(values[0], values[1]);
      }}
      step={0.01}
    />
  );
};

export default Slider;
