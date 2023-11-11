interface ProjectData {
  title: string
  content: string
};

type HomepageData = ProjectData[];

interface GeneralData {
  favicon: string
}

interface ProjectContext<T> {
  general: GeneralData
  data: T
}
