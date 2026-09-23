import { getAllSolutions } from '../lib/content';
import { SolutionLandingData } from '../types/solutionLanding';

export const solutionsLandingData: Record<string, SolutionLandingData> = getAllSolutions();
