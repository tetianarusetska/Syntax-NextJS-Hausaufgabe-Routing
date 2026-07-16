import ButtonToHome from "../s_components/ButtonToHome";
import Menu from "../cl_components/Menu";
import Blog from "./s_components/Blog";
import Spinner from "../s_components/Spinner";
import { Suspense } from "react";


export default function BlogPage() {

    return (
        <>
            <div className="flex flex-row justify-between m-10">
                <Menu />
                <ButtonToHome />
            </div>
            <Suspense fallback={<Spinner />}>
                <Blog />
            </Suspense>
        </>
    )
}