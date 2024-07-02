import moment from "moment";

export const prettyDate = (date) => {
  let pretDate = new moment(date).format("MMM DD YYYY");
  return pretDate;
};
