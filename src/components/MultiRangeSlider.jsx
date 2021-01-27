import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

const MultiRangeSlider = () => {
  const wrapperStyle = { width: 400, margin: 50 };
  return (
    <div style={wrapperStyle}>
      <p>Range with custom tooltip</p>
      <Range
        min={0}
        max={20}
        defaultValue={[3, 10]}
        tipFormatter={(value) => `${value}%`}
      />
    </div>
  );
};

export default MultiRangeSlider;
