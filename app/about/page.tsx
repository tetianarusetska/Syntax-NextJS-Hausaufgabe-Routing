import ButtonToHome from "../cl_components/ButtonToHome";
import Menu from "../cl_components/Menu";
import About from "./cl_components/About";


export default function AboutPage() {
    return (
        <>
            <div className="flex flex-row justify-between m-10">
                <Menu />
                <ButtonToHome />
            </div>
            <About />
        </>
    )
}