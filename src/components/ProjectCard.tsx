"use client";
import { FC } from "react";
import { child } from "@/constants/variants";
import { Project } from "@/interfaces";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  project: Project;
}

export const ProjectCard: FC<Props> = ({ project }) => (
  <motion.div
    layout
    layoutId={project._id}
    variants={child}
    className="relative h-full w-full rounded-lg group overflow-hidden bg-slate-800 aspect-video"
  >
    <Link href={`/project/${project?.slug}`}>
      <div className="absolute bottom-0 left-0 h-14  w-full p-2 z-10 gradient opacity-0 group-hover:opacity-100 transition-all">
        <div className="absolute bottom-2 flex gap-2 left-2 font-bold text-white text-3xl mt-auto">
          <div className="hover:text-orange-600">{project?.title}</div>
        </div>
      </div>
      <Image
        src={project.poster}
        // src="/projects/pop-movie.png"
        alt={project?.title}
        loading="lazy"
        width={500}
        height={100}
        // className={`translate-y-0 hover:translate-y-[-${project.translate}%] transform duration-[10000ms] ease-in-out w-full  bg-cover`}
        className={`translate-y-0 hover:translate-y-[-57%] transform duration-[10000ms] ease-in-out w-full  bg-cover`}
      />
    </Link>
    <span className="absolute uppercase top-2 right-2 py-1 px-5 font-semibold text-xs bg-orange-600 border-2 border-orange-600 rounded-md z-20">
      {project?.type}
    </span>
  </motion.div>
);

export default ProjectCard;
