import { GridContainer } from "@/components/GridContainer";
import { getProjects } from "@/sanity/sanity-utils";
import { ContactClient } from "./page.client";
import { ProjectImages } from "@/components/ImageFeature";

export default async function Contact() {
  const projects = await getProjects();

  return <ContactClient projects={projects} />;
}
