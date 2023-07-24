export default function IntroContent({ marked, onClickHandler }) {
  return (
    <section className="flex justify-between p-3 my-2 md:mt-0 ">
      <h1 className="text-veryDarkBlue font-extrabold ">
        Notifications
        <span className="ml-2 px-3 py-1 rounded-lg font-jakarta text-white bg-blue-800">
          {marked}
        </span>
      </h1>
      <p
        className="font-jakarta text-grayishBlue cursor-pointer hover:text-blue-800 "
        onClick={onClickHandler}
      >
        Mark all as read
      </p>
    </section>
  );
}
