import {getProjects} from '@/sanity/sanity-utils';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const projects = await getProjects();
  
  return (
    <div>

      <h1 className="text-7xl font-extrabold">
        Hello, I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Richard Lopez
        </span>
      </h1>

      <p className="text-xl italic mt-3 dark:text-zinc-400 light:text-zinc-800">Software Developer; Programmer @ Clark County DES</p>
      
      <h2 className="mt-12 font-bold text-3xl">Projects</h2>
      
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link 
            href={`/projects/${project.slug}`}
            key={project._id} 
            className="dark:bg-zinc-800 bg-zinc-100 rounded-lg max-h-60 grid grid-rows-3 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/50 transition group overflow-hidden">
            {project.image && (
            <Image 
              src={project.image}
              alt={project.alt}
              width={250}
              height={100}
              className="object-cover h-full w-full rounded-lg row-span-2 group-hover:scale-105 transition"
            />)}
            <div className="text-xl p-4">{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}