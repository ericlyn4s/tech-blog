module.exports = {
  format_time: (date) => {
    return `${new Date(date).getMonth()}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${
      new Date(date).getFullYear() + 5
    }`;
  },
};
