import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const MultiRangeSlider = ({ ageRange, setAgeMin, setAgeMax }) => {
  const { min, max } = ageRange;
  const wrapperStyle = { width: 400, margin: 50 };
  const handleChange = (e) => {
    setAgeMin(e[0]);
    setAgeMax(e[1]);
  };
  return (
    <div style={wrapperStyle}>
      <p>Range with custom tooltip</p>
      <Range
        min={min}
        max={max}
        defaultValue={[min, max]}
        tipFormatter={(value) => `${value}`}
        onChange={handleChange}
      />
    </div>
  );
};

export default MultiRangeSlider;
