import React from "react";
import {
  DatePickerWrapper,
  MyDatePicker,
  CalendarContainer,
  DatePickerIconsWrapper,
} from "./DatePickerCss";

import FormInput from "../Forms/FormFields/FormInput";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import ClearIcon from "@material-ui/icons/Clear";

const DatePicker = ({ disabled, value, onChange, title, id }) => {
  const dateFormat = id === "rokProdukcji" ? "yyyy" : "dd-MM-yyyy:H:mm";

  return (
    <DatePickerWrapper>
      <MyDatePicker
        timeInputLabel="Godzina:"
        dateFormat={dateFormat}
        showTimeInput={id === "rokProdukcji" ? false : true}
        showYearPicker={id === "rokProdukcji" ? true : false}
        customInput={<FormInput label={title} />}
        maxDate={id === "rokProdukcji" ? new Date() : null}
        onChange={(e) => {
          onChange(e, id);
        }}
        disabled={disabled}
        calendarContainer={CalendarContainer}
        selected={value ? new Date(value) : null}
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
