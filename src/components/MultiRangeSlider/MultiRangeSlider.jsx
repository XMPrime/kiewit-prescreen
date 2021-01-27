import { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Container } from './style';

const RangeWithToolTip = createSliderWithTooltip(Range);

const MultiRangeSlider = ({ ageRange, setAgeMin, setAgeMax, setSort }) => {
  const { min, max } = ageRange;
  const handleChange = (e) => {
    setAgeMin(e[0]);
    setAgeMax(e[1]);
    setSort('age');
  };
  return (
    <Container>
      <h3>Age Range</h3>
      <RangeWithToolTip
        min={min}
        max={max}
        defaultValue={[min, max]}
        tipProps={{
          placement: 'bottom',
          prefixCls: 'rc-slider-tooltip',
          visible: true,
        }}
        tipFormatter={(value) => `${value}`}
        onChange={handleChange}
      />
    </Container>
  );
};

export default MultiRangeSlider;
