import Link from "next/link";

export default async function Blog() {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return <div className="min-h-screen w-full">
        <h1 className="text-5xl font-['BebasNeue'] m-10">Blog</h1>
        <div className="flex flex-row mx-10 my-2 gap-10">
            <Link href="/blog/blogpost1" className="font-['Fejoa'] text-2xl font-bold underline">Blogpost 1</Link>
            <Link href="/blog/blogpost2" className="font-['Fejoa'] text-2xl font-bold underline">Blogpost 2</Link>
            <Link href="/blog/blogpost3" className="font-['Fejoa'] text-2xl font-bold underline">Blogpost 3</Link>
        </div>
    </div>
}
