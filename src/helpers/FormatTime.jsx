import moment from "moment";

const formatDayTime = (date) => {
  return moment(date, "YYYY-MM-DD HH:mm").format("DD-MM-YYYY");
};

export default formatDayTime;
