import StarIcon from "@/assets/icons/star.svg";
import { Fragment } from "react";

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "Responsive",
  "User Friendly",
  "Usable",
  "Search Optimized",
  "Maintainable",
  "Reliable"
]


export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="-rotate-3 -mx-1 bg-gradient-to-r from-emerald-300 to-sky-400 overflow-x-clip">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {
                  words.map(word => (
                    <div key={word} className="inline-flex items-center gap-4">
                      <span className="text-gray-900 uppercase font-extrabold text-sm ">{word}</span>
                      <StarIcon className="-rotate-12 size-6 text-gray-900" />
                    </div>
                  ))
                }
              </Fragment>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
};
