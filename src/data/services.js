import production from "../assets/images/production-icon.webp";
import recording from "../assets/images/recording-icon.webp";
import mixing from "../assets/images/mixing-icon.webp";
import mastering from "../assets/images/mastering-icon.webp";

export const services = [
  {
    id: 1,
    title: "Production",
    description: "Full song production from concept to final mix",
    icon: production,
    rate: "Contact For Pricing",
  },
  {
    id: 2,
    title: "Recording",
    description: "Expert tracking for vocals, instruments and more.",
    icon: recording,
    rate: "$40 per hour",
  },
  {
    id: 3,
    title: "Mixing",
    description: "Clean balanced mixes that translate anywhere.",
    icon: mixing,
    rate: "Priced Per Project",
  },
  {
    id: 4,
    title: "Mastering",
    description: "Polished masters ready for release.",
    icon: mastering,
    rate: "$75 Per Song",
  },
];
