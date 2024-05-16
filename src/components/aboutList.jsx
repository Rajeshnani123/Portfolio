export const AboutList = ({
  title,
  desc,
  timeLine,
  company,
  right = false,
}) => {
  return (
    <div className="flex justify-between h-50">
      {/* LEFT */}
      <div className="w-1/2">
        {!right && (
          <div>
            {/* Job title */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            {/* Job DESC */}
            <div className=" w-full p-3 text-sm italic">{desc}</div>
            {/* Job Date */}
            <div className="p-3 text-red-400 font-semibold">{timeLine}</div>
            {/* /Job Company */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {company}
            </div>
          </div>
        )}
      </div>
      {/* Center */}
      <div className="w-1/6 flex items-center justify-center">
        {/* LINE */}
        <div className="w-1 h-full bg-gray-600 rounded relative">
          {/* CIRCLE */}
          <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
        </div>
      </div>
      {/* Right */}
      <div className="w-1/2 ">
        {right && (
          <div>
            {/* Job title */}
            <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
              {title}
            </div>
            {/* Job DESC */}
            <div className="p-3 text-sm italic">{desc}</div>
            {/* Job Date */}
            <div className="p-3 text-red-400 font-semibold">{timeLine}</div>
            {/* /Job Company */}
            <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
              {company}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
