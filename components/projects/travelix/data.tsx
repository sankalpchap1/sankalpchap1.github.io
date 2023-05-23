import { FeaturesProps } from "./types";

import {
  IconArrowsRightLeft,
  IconBrandTailwind,
  IconBulb,
  IconComponents,
  IconListCheck,
  IconRocket,
} from "@tabler/icons-react";

export const featuresData: FeaturesProps = {
  header: {
    title: (
      <>
        What you get with <span className="whitespace-nowrap">Travelix</span>
      </>
    ),
    subtitle: "",
    highlight: "Features",
  },
  items: [
    {
      title: "Personalised Recommendations",
      description:
        "Recommendations based on travel history and user preferences, which uses Matrix Factorization, combination of Auto Encoder and colloborative filtering techniques",
      icon: IconBrandTailwind,
    },
    {
      title: "Data-driven recommendations",
      description:
        "Uses Yelp Dataset to provide trustworthy recommendations that are accurate and reliable",
      icon: IconComponents,
    },
    {
      title: "Complete Itinerary",
      description:
        "Provides a complete travel itinerary, including hotels, travel, restaurants and events to save users time and effort in researching and planning their trip",
      icon: IconListCheck,
    },
    {
      title: "User-friendly interface",
      description:
        "Boasts an intuitive user interface inspired by Netflix, enabling a seamless user experience alon with live fetching of business logos from Google to enhance the visual appeal of our recommendations",
      icon: IconRocket,
    },
    {
      title: "Trending Recommendations",
      description:
        "Recommend trending places to visit right now, which will attract users who are looking for popular and trendy destinations",
      icon: IconArrowsRightLeft,
    },
    {
      title: "Collaborative filtering & Auto Encoder",
      description:
        "Tool uses advanced technqiues of Auto Encoder and Collaborative Filtering techniques to offer the most relevant recommendations to our users",
      icon: IconBulb,
    },
  ],
};
