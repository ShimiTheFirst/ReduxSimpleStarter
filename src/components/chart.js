import _ from 'lodash';
import React from "react";
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from "react-sparklines";

export default props => {
  const chartHeight = 180;
  const chartWidth = 250;

  return (
    <div>
      <Sparklines
        height={chartHeight}
        svgHeight={chartHeight}
        width={chartWidth}
        svgWidth={chartWidth}
        data={props.data}
      >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}

function average(data) {
  return _.round(_.sum(data) / data.length);
}
