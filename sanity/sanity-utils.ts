import { Page } from "@/types/Page";
import { createClient, groq } from "next-sanity";
import { clientConfig } from "./config/client-config";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Project } from "@/sanity.types";

const builder = imageUrlBuilder(clientConfig);

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/;

export function decodeAssetId(id: string) {
  // @ts-expect-error: we want the pattern to be less strict
  const [, assetId, dimensions, format] = pattern.exec(id);
  const [width, height] = dimensions
    .split("x")
    .map((v: string) => parseInt(v, 10));

  return {
    assetId,
    dimensions: { width, height },
    format,
  };
}

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "images":images[] ,
            tag,
            url,
            content,
            alt
        }`
  );
  // "var" : ... --> is a rename convention
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "images":images[],
            tag,
            url,
            content,
            alt
        }`,
    { slug }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
            _id,
            _createdAt,
            title,
            "slug":slug.current
        }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
            _id,
            _createdAt,
            title,
            "slug":slug.current,
            content
        }`,
    { slug }
  );
}
