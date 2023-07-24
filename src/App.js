import markWebber from "./images/avatar-mark-webber.webp";
import angelaGray from "./images/avatar-angela-gray.webp";
import jacobThompson from "./images/avatar-jacob-thompson.webp";
import rizkyHasanuddin from "./images/avatar-rizky-hasanuddin.webp";
import kimberlySmith from "./images/avatar-kimberly-smith.webp";
import nathanPeterson from "./images/avatar-nathan-peterson.webp";
import annaKim from "./images/avatar-anna-kim.webp";
import { useState } from "react";
import UnreadProfile from "./Components/UnreadProfile";
import ReadProfile from "./Components/ReadProfile";
import IntroContent from "./Components/IntroContent";

export default function App() {
  const unreadProfile = [
    {
      name: "Mark Webber",
      notification: "reacted to your recent post",
      activity: "My first tournament today!",
      image: `${markWebber}`,
      time: "1m ago",
      id: 1,
      isUnread: true,
    },
    {
      name: "Angela Gray",
      notification: "followed you",
      activity: " ",
      image: `${angelaGray}`,
      time: "5m ago",
      id: 2,
      isUnread: true,
    },
    {
      name: "Jacob Thompson",
      notification: "has joined your group",
      activity: "Chess Club",
      image: `${jacobThompson}`,
      time: "1 day ago",
      id: 3,
      isUnread: true,
    },
  ];
  const normalProfile = [
    {
      name: "Rizky Hasanuddin",
      notification: "sent you a private message",
      activity: "",
      image: `${rizkyHasanuddin}`,
      time: "5 days ago",
      id: 1,
    },
    {
      name: "Kimberly Smith",
      notification: "commented on your picture",
      activity: " ",
      image: `${kimberlySmith}`,
      time: "1 week ago",
      id: 2,
    },
    {
      name: "Nathan Peterson",
      notification: "reacted to your recent post",
      activity: "5 end-game strategies to increase your win rate",
      image: `${nathanPeterson}`,
      time: "2 week ago",
      id: 3,
    },
    {
      name: "Anna Kim",
      notification: "left the group",
      activity: "Chess Club",
      image: `${annaKim}`,
      time: "2 week ago",
      id: 4,
    },
  ];
  const [items, setItems] = useState(unreadProfile);
  const [marked, setMarked] = useState(3);
  function clickHandler() {
    setItems((clicked) =>
      clicked.map((click) => ({ ...click, isUnread: false }))
    );
    setMarked(0);
  }
  return (
    <main className="flex flex-col  md:min-h-screen md:justify-center md:items-center bg-lightGrayishBlueTwo">
      <section className="bg-white md:max-w-[40rem] md:p-4 md:rounded-lg">
        <IntroContent marked={marked} onClickHandler={clickHandler} />
        <section className="space-y-3">
          {items.map((profile) => (
            <UnreadProfile profile={profile} key={profile.id} />
          ))}
          {normalProfile.map((nomProfile) => (
            <ReadProfile nomProfile={nomProfile} key={nomProfile.id} />
          ))}
        </section>
      </section>
    </main>
  );
}
