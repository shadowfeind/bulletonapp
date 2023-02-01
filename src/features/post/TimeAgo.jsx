import { formatDistanceToNow, parseISO } from "date-fns";
import React from "react";

const TimeAgo = ({ time }) => {
  let timeAgo = "";
  if (time) {
    const date = parseISO(time);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }
  return <i>{timeAgo}</i>;
};

export default TimeAgo;
