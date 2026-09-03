export type DayPackage = {
  name: string;
  weekdayOriginal?: string;
  weekdayPrice: string;
  weekendOriginal?: string;
  weekendPrice: string;
  note?: string;
  inclusions: string[];
  checkIn: string;
  checkOut: string;
};

export const dayPackages: DayPackage[] = [
  {
    name: "Day Package",
    weekdayOriginal: "999",
    weekdayPrice: "899",
    weekendOriginal: "1,099",
    weekendPrice: "999",
    note: "+ Rs 100/- for non-veg",
    inclusions: ["Buffet Lunch", "Hi-Tea", "Amenities"],
    checkIn: "10:00 AM",
    checkOut: "6:00 PM",
  },
  {
    name: "Evening Package",
    weekdayOriginal: "849",
    weekdayPrice: "699",
    weekendOriginal: "849",
    weekendPrice: "799",
    inclusions: ["Welcome Drink", "Buffet Dinner", "Limited Starters (veg/non-veg)", "Amenities"],
    checkIn: "5:00 PM",
    checkOut: "11:00 PM",
  },
];
