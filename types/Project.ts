import { PortableTextBlock } from "sanity"; // needed for content block

type Image = {
  alt: string;
  asset: any;
};

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: string;
  images: string[] | Image[];
  url: string;
  content: PortableTextBlock[];
  alt: string;
};
