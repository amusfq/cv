export const formatDate = (dateString: string): string => {
  if (dateString === "Present") return "Present";

  try {
    const [year, month] = dateString.split("-");
    const date = new Date(parseInt(year), parseInt(month) - 1);

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
    }).format(date);
  } catch (error) {
    console.log(error);
    // Return the original string if it can't be parsed
    return dateString;
  }
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
};

export const formatPhone = (phone: string): string => {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
};
