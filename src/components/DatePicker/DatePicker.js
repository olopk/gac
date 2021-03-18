import React from "react";
import {
  DatePickerWrapper,
  MyDatePicker,
  CalendarContainer,
  DatePickerIconsWrapper,
} from "./DatePickerCss";

import DateRangeIcon from "@material-ui/icons/DateRange";
import ClearIcon from "@material-ui/icons/Clear";

// import { format } from 'date-fns';

const DatePicker = ({ disabled, value, onChange, customInput }) => {
  const date = value ? new Date(value) : null;

  return (
    <DatePickerWrapper>
      <MyDatePicker
        selected={date}
        onChange={(e, d) => {
          // if (e) onChange(format(e, "yyyy-MM-dd"), d);
        }}
        disabled={disabled}
        calendarContainer={CalendarContainer}
        showYearPicker
        customInput={customInput}
      />
      <DatePickerIconsWrapper>
        {value && (
          <div onClick={(e) => onChange(null, e)}>
            <ClearIcon />
          </div>
        )}
        <div>
          <DateRangeIcon />
        </div>
      </DatePickerIconsWrapper>
    </DatePickerWrapper>
  );
};

export default DatePicker;
