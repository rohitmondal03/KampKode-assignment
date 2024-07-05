import { DiJavascript } from "react-icons/di";
import { FaNodeJs, FaAws, FaReact, FaHtml5 } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa6";

import { OrbitingCircles } from "@/components/magic-ui/orbiting-circles";
import { MoveRight } from "lucide-react";


export function IntroSection() {
  return (
    <div className="relative flex items-center justify-center py-40 overflow-hidden border md:min-h-screen w-full">
      <div className="space-y-10 text-center px-2">
        <h1 className="text-[2rem] sm:text-4xl md:text-5xl font-bold">
          We&apos;ve really sped up our workflow
        </h1>
        <div className="space-y-2 text-slate-600 text-sm sm:text-base">
          <p>
            <span className="font-bold">We&apos;ve just released a new update!</span>Check out the all new dashboard view. Pages and now load faster.you can try us <br /> for free for 30 days.
          </p>
          <p>
            Join 4,000+ companies already growing
          </p>
        </div>
        <div className="flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
          <button className="flex items-center justify-center gap-3 bg-white border-2 border-zinc-300 py-2 px-4 rounded-lg z-10 w-full sm:w-fit">
            <MoveRight /> Start Learning Today
          </button>
          <button className="bg-[#7f56d9] border-2 border-[#7f56d9] text-white py-2 px-4 rounded-lg z-10 w-full sm:w-fit">
            Join Now
          </button>
        </div>
      </div>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={20}
        radius={140}
      >
        <DiJavascript className="scale-[3.5] -z-10 opacity-60" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={10}
        delay={10}
        radius={240}
      >
        <FaNodeJs className="scale-[3.5] -z-10 opacity-60" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={15}
        reverse
        radius={340}
      >
        <FaGitlab className="scale-[3.5] -z-10 opacity-60" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        duration={30}
        delay={20}
        reverse
        radius={440}
      >
        <FaAws className="scale-[3.5] -z-10 opacity-60" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        duration={25}
        delay={20}
        radius={540}
      >
        <FaReact className="scale-[3.5] -z-10 opacity-60" />
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[100px] w-[100px] border-none bg-transparent"
        duration={15}
        delay={20}
        radius={640}
      >
        <FaHtml5 className="scale-[3.5] -z-10 opacity-60" />
      </OrbitingCircles>
    </div>
  )
}
