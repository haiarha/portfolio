interface ProjectData {
  title: string;
  content: string;
}

interface HomepageData {
  projects: ProjectData[];
  pageNumber: number;
  pagesCount: number;
}

interface GeneralData {
  projectsPerPage: number;
}

interface ProjectContext<T> {
  general: GeneralData;
  data: T;
}
