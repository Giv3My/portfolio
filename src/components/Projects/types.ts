export interface ActiveSortType {
  name: string;
  order: 'asc' | 'desc';
}

export interface Project {
  id: number;
  name: string;
  type: string;
  year: string;
  projectLink?: string;
  githubLink: string;
  thumbnail: string;
  images: string[];
  tags: {
    name: string;
    bgColor: string;
  }[];
  stack: {
    frontend: string[];
    backend?: string[];
  };
}
