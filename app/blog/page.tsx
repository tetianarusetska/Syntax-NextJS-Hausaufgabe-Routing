import ButtonToHome from "../cl_components/ButtonToHome";
import Menu from "../cl_components/Menu";
import Blog from "./cl_components/Blog";


export default function BlogPage() {
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