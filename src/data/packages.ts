export type BanquetPackage = {
  name: string;
  price: string;
  tier: "silver" | "gold" | "platinum";
  items: string[];
};

export const banquetNote = "Package valid only for groups over 50 pax. Banquet hall only.";

export const banquetPackages: BanquetPackage[] = [
  {
    name: "Silver Package",
    price: "Rs 499/-",
    tier: "silver",
    items: [
      "Welcome Drink",
      "1 Sabji",
      "Dal Rice",
      "Sweet",
      "Farsan",
      "Phulka or Puri",
      "Pickle",
      "Papad",
      "Kachumbar",
    ],
  },
  {
    name: "Gold Package",
    price: "Rs 599/-",
    tier: "gold",
    items: [
      "Welcome Drink",
      "2 Sabji",
      "Dal Fry",
      "Jeera Rice",
      "Sweet",
      "1 Starter",
      "Papad",
      "Farsan",
      "Kachumbar",
      "Phulka + Puri",
    ],
  },
  {
    name: "Platinum Package",
    price: "Rs 699/-",
    tier: "platinum",
    items: [
      "Welcome Drink",
      "2 Sabji",
      "Farsan",
      "2 Sweet",
      "2 Starters",
      "Phulka or Rashmi Paratha",
      "Papad",
      "Pickle",
      "Dal Fry",
      "Jeera Rice",
    ],
  },
];

export const destinationWeddingPackage = {
  heading: "Destination Wedding Package",
  resortName: "Anthurium Resort",
  location: "Wagholi, Keshnand, Pune",
  price: "₹3,51,000",
  phone: "90490 90500",
  inclusions: [
    "100 to 300 Guest Package",
    "Swimming Pool",
    "Day 1 Check-in 4 PM",
    "Rain Dance",
    "Day 2 Check-Out 3 PM",
    "Mountain View",
    "All Functions Decor Covered",
    "Lawns & AC Hall (Complimentary)",
    "100 Guest Stay in 20 Rooms",
    "Ample Parking Space",
  ],
};
