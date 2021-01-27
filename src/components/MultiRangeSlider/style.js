import styled from 'styled-components';
import { COLORS, INPUT_WIDTH } from '../../STYLE_CONSTS';

export const Container = styled.div`
  /* width: ${INPUT_WIDTH}; */
  margin-bottom: 1.5rem;
  .rc-slider {
    margin: 0 0.3rem;
  }
  .rc-slider-track {
    background-color: ${COLORS.kiewitYellow};
  }
  .rc-slider-handle,
  .rc-slider-handle-2 {
    border: solid 2px ${COLORS.kiewitYellow};
  }
`;
