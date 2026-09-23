import { getSiteConfig } from '../lib/content';
import { CompanyInfo } from '../types';

export const companyData: CompanyInfo = getSiteConfig().company;
export const turnkeySteps = getSiteConfig().home.turnkey.steps;
