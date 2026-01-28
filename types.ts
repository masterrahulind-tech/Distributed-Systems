
export interface TopicData {
  title: string;
  summary: string;
  details: string;
  diagram?: string;
}

export interface TopicMap {
  [key: string]: TopicData;
}

export interface NavItem {
  id: number;
  label: string;
  icon: string;
  slideIdx: number;
}
