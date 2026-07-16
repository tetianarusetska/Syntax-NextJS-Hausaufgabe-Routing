import { Suspense } from "react";
import { notFound } from "next/navigation";
import Blogpost1 from "./s_components/Blogpost1";
import Blogpost3 from "./s_components/Blogpost3";
import Blogpost2 from "./s_components/Blogpost2";
import Menu from "@/app/cl_components/Menu";
import ButtonToHome from "@/app/s_components/ButtonToHome";
import Spinner from "@/app/s_components/Spinner";

const validSlugs = ["blogpost1", "blogpost2", "blogpost3"];

export default async function BlogPost({ params }: { params: Promise<{ blogpost: string }> }) {
    const { blogpost } = await params;

    if (!validSlugs.includes(blogpost)) {
        notFound();
    }

    // test 
    if (blogpost === "blogpost3") {
        throw new Error("Fehler beim Laden des Blogposts: Server nicht erreichbar");
    }

    return (
        <>
            <div className="flex flex-row justify-between m-10">
                <Menu />
                <ButtonToHome />
            </div>

            <h1 className="text-5xl font-['BebasNeue'] m-10">Blog</h1>

            <Suspense fallback={<Spinner />}>
                {blogpost === "blogpost1" && <Blogpost1 blogpost={blogpost} />}
                {blogpost === "blogpost2" && <Blogpost2 blogpost={blogpost} />}
                {blogpost === "blogpost3" && <Blogpost3 blogpost={blogpost} />}
            </Suspense>
        </>
    );
}