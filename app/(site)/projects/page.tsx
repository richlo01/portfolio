import { getProjects } from "@/sanity/sanity-utils";
import { ProjectClient } from "./page.client";

export default async function ProjectPage() {
  const projects = await getProjects();
  return <ProjectClient projects={projects} />;
}
