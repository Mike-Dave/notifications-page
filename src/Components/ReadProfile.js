import Chess from "../images/image-chess.webp";

export default function ReadProfile({ nomProfile }) {
  return (
    <section className="space-y-3 ">
      <section className="   p-3 mx-3 flex gap-x-3 ">
        <img
          className="h-[40px] w-[40px]"
          src={nomProfile.image}
          alt={nomProfile.name}
        />
        <div className=" flex gap-x-5 md:gap-x-[9.2rem]">
          <div>
            <p className="font-jakarta  text-sm  px-1.5 ">
              <span className="hover:text-blue-800 cursor-pointer text-veryDarkBlue font-extrabold">
                {nomProfile.name}
              </span>
              <span className="text-grayishBlue font-normal px-1">
                {nomProfile.notification}
              </span>
              <span
                className={`font-semibold cursor-pointer hover:text-blue-800 ${
                  nomProfile.id === 4
                    ? " text-blue-800"
                    : "text-darkGrayishBlue "
                }`}
              >
                {nomProfile.activity}
              </span>
            </p>
            <p className="text-sm text-grayishBlue px-1.5">{nomProfile.time}</p>
          </div>
          {nomProfile.id === 2 && (
            <img className="h-[50px] cursor-pointer" src={Chess} alt="chess" />
          )}
        </div>
      </section>
      {nomProfile.id === 1 && (
        <div className="w-[270px] mx-20 p-3.5 outline outline-2 outline-slate-200 cursor-pointer hover:bg-lightGrayishBlueOne md:w-10/12 md:text-[15px] ">
          <p className="text-darkGrayishBlue">
            Hello, thanks for setting up the Chess Club. I've been a member for
            a few weeks now and I'm already having lots of fun and improving my
            game.
          </p>
        </div>
      )}
    </section>
  );
}
