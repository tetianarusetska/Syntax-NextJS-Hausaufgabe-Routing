"use client";
import { useParams } from "next/navigation";

export default function BlogPost() {
    const params = useParams();

    const { blogpost } = params;

    return (
        <div>
            <h1 className="font-[Fejoja] text-2xl m-10">
                Slug: {blogpost}
            </h1>
        </div>
    );
}