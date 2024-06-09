import { getProjects } from "@/sanity/sanity-utils";
import { HomeClient } from "./page.client";

export default async function Home() {
  const projects = await getProjects();
  return <HomeClient projects={projects} />;
}
