import React from "react";
import {
  DatePickerWrapper,
  MyDatePicker,
  CalendarContainer,
  DatePickerIconsWrapper,
} from "./DatePickerCss";

import DateRangeIcon from "@material-ui/icons/DateRange";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ClearIcon from "@material-ui/icons/Clear";

import { format } from "date-fns";

const DatePicker = ({ disabled, value, onChange, customInput, title, id }) => {
  // const date = value ? new Date(value) : new Date();

  const dateFormat = id === "rokProdukcji" ? "yyyy" : "dd-MM-yyyy:H:mm";

  return (
    <DatePickerWrapper>
      <MyDatePicker
        timeInputLabel="Godzina:"
        dateFormat={dateFormat}
        showTimeInput={id === "rokProdukcji" ? false : true}
        showYearPicker={id === "rokProdukcji" ? true : false}
        customInput={customInput}
        onChange={(e) => {
          console.log(e);
          console.log(format(e, "dd-MM-yyyy"));
          onChange(e, id);
        }}
        disabled={disabled}
        calendarContainer={CalendarContainer}
        selected={value}
      />
      <DatePickerIconsWrapper>
        {value && (
          <div onClick={(e) => onChange(null, id)}>
            <ClearIcon />
          </div>
        )}
        <div>
          {id === "rokProdukcji" ? <DateRangeIcon /> : <AccessTimeIcon />}
        </div>
      </DatePickerIconsWrapper>
    </DatePickerWrapper>
  );
};

export default DatePicker;
