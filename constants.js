// Utility function to generate calendar items dynamically
export const generateCalendarItems = (days = 5) => {
  const today = new Date();
  const calendar = [];

  for (let i = 0; i < days; i++) {
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + i);

    const dayName = futureDate.toLocaleDateString("en-US", { weekday: "short" });
    const monthName = futureDate.toLocaleDateString("en-US", { month: "long" });
    const dateNumber = futureDate.getDate();

    calendar.push({ day: dayName, date: monthName, number: dateNumber });
  }

  return calendar;
};
