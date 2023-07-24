export default function UnreadProfile({ profile }) {
  return (
    <section className="space-y-3 ">
      <section
        className={`${
          profile.isUnread
            ? "bg-lightGrayishBlueOne clicked-profile "
            : "clicked-profile"
        }`}
      >
        <img
          className={` h-[40px] w-[40px]`}
          src={profile.image}
          alt={profile.name}
        />
        <div>
          <p className="font-jakarta text-sm px-1.5">
            <span className="hover:text-blue-800 cursor-pointer text-veryDarkBlue font-extrabold">
              {profile.name}
            </span>
            <span className="text-grayishBlue font-normal px-1">
              {profile.notification}
            </span>
            <span
              className={`font-semibold cursor-pointer hover:text-blue-800 ${
                profile.id === 3 ? " text-blue-800" : "text-darkGrayishBlue"
              }`}
            >
              {profile.activity}
            </span>
            <span className="mx-1 w-[9px] h-[9px] rounded-full bg-red-500 inline-block"></span>
          </p>
          <p className="text-sm text-grayishBlue px-1.5">{profile.time}</p>
        </div>
      </section>
    </section>
  );
}
