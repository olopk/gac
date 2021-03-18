import styled from "styled-components";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { white, blue, blueLight, black, grey } from "../appColors";

export const MyDatePicker = styled(DatePicker)`
  width: 100%;
`;
// padding: 0;
// border: 0;
// margin: 0;

export const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;

  & .react-datepicker-wrapper {
    width: 100%;
  }
`;
export const CalendarContainer = styled.div`
  background-color: ${white};

  & .react-datepicker__navigation--previous {
    border-right-color: ${white};
  }
  & .react-datepicker__navigation--next {
    border-left-color: ${white};
  }
  && .react-datepicker__header {
    background-color: ${blueLight};
    padding: 1vh;
  }
  &&&& .react-datepicker__year-text--keyboard-selected {
    background-color: ${blueLight};
    color: white;
  }
  &&&& .react-datepicker__year-text--today {
    background-color: ${blueLight};
    color: white;
  }
  &&&& .react-datepicker__year-text:hover {
    background-color: ${blueLight};
    color: white;
  }
`;
export const DatePickerIconsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  height: 25px;
  width: 55px;
  left: calc((100% - 65px));
  top: calc((100% - 25px) / 2);
  & div {
    color: ${grey};
  }
`;
