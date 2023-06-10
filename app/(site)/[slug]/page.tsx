import { getPage } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

type Prop = {
    params: { slug: string}
}

export default async function Page({ params }: Prop) {
    const page = await getPage(params.slug)

    return (
        <div>
            <h1 className="text-7xl font-extrabold">
                {page.title}
            </h1>

            <div className="text-lg prose dark:prose-invert prose-a:text-indigo-600">
                <PortableText value={page.content}/>
            </div>
        </div>
    )
}