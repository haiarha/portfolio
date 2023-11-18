declare module "*.png" {
  const value: any;
  export default value;
}

interface ProjectData {
  slug: string;
  imgSrc?: string;
  title: string;
  html: string;
}

interface HomepageData {
  projects: ProjectData[];
}

interface PageContextGeneral {
  homepageTitle: string;
  projectsPerPage: number;
}

interface PageContext<TData> {
  general: PageContextGeneral;
  data: TData;
}
