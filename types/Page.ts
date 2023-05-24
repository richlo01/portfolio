import { PortableTextBlock } from "sanity"; // needed for content block

export type Page = {
    _id: string;
    _createdAt: Date;
    title: string;
    slug: string;
    content: PortableTextBlock[];
}