export type Accommodation = {
  slug: string;
  name: string;
  description: string;
  image: string;
  originalPrice?: string;
  price: string;
  priceNote: string;
  inclusions: string[];
  checkIn: string;
  checkOut: string;
  extraGuestNote?: string;
  soldOut?: boolean;
};

export const accommodationIntro =
  "Anthurium is a peaceful and serene destination where visitors can escape the stresses of everyday life and reconnect with nature. The property offers various accommodation options, including tented stays, standard rooms, premium suites, and luxurious villas with great food, housekeeping, and room service to ensure a comfortable staycation.";

export const accommodations: Accommodation[] = [
  {
    slug: "tent-stays",
    name: "Glamping Pods (Tent Stays)",
    description:
      "Comfortable, nature-facing tented stays for guests who want to feel close to the outdoors without giving up comfort.",
    image: "/images/accommodation/glamping-pods.jpg",
    originalPrice: "1,399/-",
    price: "1,199/-",
    priceNote: "special offer + taxes, per person basis",
    inclusions: [
      "Welcome Drink",
      "Buffet Dinner",
      "Amenities",
      "Morning Breakfast",
      "Bonfire",
    ],
    checkIn: "5:00 PM",
    checkOut: "11:00 AM",
    soldOut: true,
  },
  {
    slug: "standard-rooms",
    name: "Standard Rooms",
    description:
      "Well-appointed standard rooms with full housekeeping and room service for a relaxed stay.",
    image: "/images/accommodation/suites-room.jpg",
    originalPrice: "2,248/-",
    price: "2,000/-",
    priceNote: "special offer + taxes, per person basis",
    inclusions: [
      "Hi-Tea",
      "Dinner (candle night for couples)",
      "Amenities",
      "Morning Breakfast",
      "Bonfire",
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
  },
  {
    slug: "premium-suites",
    name: "Premium Suites",
    description:
      "Spacious suites for small groups, with the same comfort and service as our standard rooms, scaled up.",
    image: "/images/accommodation/suites-room.jpg",
    originalPrice: "8,800/-",
    price: "7,900/-",
    priceNote: "special offer + taxes, up to 5 pax",
    inclusions: [
      "Hi-Tea",
      "Dinner (candle night for couples)",
      "Amenities",
      "Morning Breakfast",
      "Bonfire",
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    extraGuestNote: "Extra guests charged at Rs 800 + taxes per person.",
  },
  {
    slug: "luxurious-villa",
    name: "Luxurious Villa",
    description:
      "Spacious private hill-top villas for families and groups looking for a home-like stay on the property.",
    image: "/images/accommodation/villas-house.jpg",
    originalPrice: "18,999/-",
    price: "17,099/-",
    priceNote: "special offer + taxes, up to 6 pax",
    inclusions: [
      "Hi-Tea",
      "Dinner (candle night for couples)",
      "Amenities",
      "Morning Breakfast",
      "Bonfire",
    ],
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    extraGuestNote: "Extra guests charged at Rs 800 + taxes per person.",
  },
];
