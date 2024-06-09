import { getProject } from "@/sanity/sanity-utils";
import { ProjectItemClient } from "./page.client";

type Props = {
  params: {
    project: string;
  };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return <ProjectItemClient project={project} />;
}
