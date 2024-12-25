export interface WordPressPage {
  id: string;
  title: string;
  content: string;
  slug: string;
  uri: string;
}

export interface MenuItem {
  id: string;
  label: string;
  path: string;
  url: string;
  childItems?: {
    nodes: MenuItem[];
  };
}