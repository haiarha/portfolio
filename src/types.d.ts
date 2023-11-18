interface ProjectData {
  slug: string;
  imgSrc: string;
  title: string;
  html: string;
}

interface HomepageData {
  projects: ProjectData[];
}

interface GeneralData {
  homepageTitle: string;
  projectsPerPage: number;
}

interface ProjectContext<T> {
  general: GeneralData;
  data: T;
}
