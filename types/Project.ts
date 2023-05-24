import { PortableTextBlock } from "sanity"; // needed for content block

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock[];
    alt: string;
}