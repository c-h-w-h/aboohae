declare type Category =
  | 'JavaScript'
  | 'React'
  | 'Design System'
  | 'TypeScript'
  | 'ColdStudy';

declare interface Article {
  id: number;
  link: string;
  title: string;
  categories: Category[];
  bookmark: boolean;
  readAt?: Date;
}
