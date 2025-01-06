import { ExperienceItem } from "@/data/exp";
import { ProjectItem } from "@/data/proj";

export type BaseItem = {
    title: string;
    description?: string;
    dates?: string;
    startDate?: string | Date;
    endDate?: string | Date;
    techStack?: string;
    technologies?: string;
  };

export type Item = ProjectItem | ExperienceItem;