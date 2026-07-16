import ButtonToHome from "../s_components/ButtonToHome";
import Menu from "../cl_components/Menu";
import Blog from "./s_components/Blog";


export default async function BlogPage() {

    await new Promise((resolve) => setTimeout(resolve, 2000));

    return (
        <>
            <div className="flex flex-row justify-between m-10">
                <Menu />
                <ButtonToHome />
            </div>

            <Blog />
        </>
    )
}