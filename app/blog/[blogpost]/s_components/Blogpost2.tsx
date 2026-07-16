import ButtonToHome from "@/app/s_components/ButtonToHome";

export default function Blogpost2({ blogpost }: { blogpost: string }) {
    return (
        <>
            <h1 className="font-['Fejoa'] text-2xl font-bold underline mx-10 my-4">Slug: {blogpost}</h1>
            <div>
                <h1 className="font-[Fejoja] text-3xl my-8 mx-10 font-bold">Mein zweiter Blogpost</h1>
                <p className="font-[Fejoja] text-xl my-4 mx-10">`Das ist ein einfacher Blogbeitrag`.</p>
            </div>
        </>
    );
}