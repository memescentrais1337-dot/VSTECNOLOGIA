import { getAllProjects } from '../lib/content';
import { ProjectCase } from '../types';

export const projectsData: ProjectCase[] = getAllProjects();
