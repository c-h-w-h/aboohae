declare interface Article {
  id: number;
  link: string;
  title: string;
  categories: string[];
  bookmark: boolean;
  readAt?: string;
  thumbnail: string;
  description: string;
}
