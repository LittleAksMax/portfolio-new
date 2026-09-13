export interface ExperienceData {
  id: string;
  title: string;
  type: "experience";
  role: string;
  description: string;
  highlights?: string[];
  tags: string[];
  year: string;
  slug: string;
}
