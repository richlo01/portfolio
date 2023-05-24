import { getProject } from "@/sanity/sanity-utils"; 
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
    params: {
        project: string
    };
}

export default async function Project({ params }: Props) {
    const slug = params.project;

    const project = await getProject(slug);

    return (
        <div>
            <header className="flex w-full gap-4">
                <h1 className="text-7xl font-extrabold">{project.name}</h1>

                <a 
                    href={project.url}
                    title="View Project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-full my-auto group transition duration-300"
                >
                    View Project
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-indigo-600"></span>
                </a>
            </header>
            <Image
                src={project.image}
                alt={project.alt}
                height={750}
                width={1200}
                className="object-cover h-full w-full rounded-lg aspect-video"
            />
            <div className="m-20">
                <PortableText value={project.content}></PortableText>
            </div>
        </div>
    )
}