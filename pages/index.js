import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_PAGE = [
  {
    id: "m1",
    title: "A first Meetup",
    image: "https://picsum.photos/id/27/700/300",
    address: "Some street, some city",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image: "https://picsum.photos/id/237/700/300",
    address: "Some street, some city",
  },
];

const Homepage = () => {
  return <MeetupList meetups={DUMMY_PAGE} />;
};

export default Homepage;
