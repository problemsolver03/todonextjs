import moment from "moment";

// returns a formated date easier for the user to comprehend
export const prettyDate = (date) => {
  let pretDate = new moment(date).format("MMM DD YYYY");
  return pretDate;
};
