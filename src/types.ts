export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  location?: string;
}

export interface PressItem {
  publication: string;
  title: string;
  year: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  patientInfo: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  duration: string;
  recovery: string;
}
