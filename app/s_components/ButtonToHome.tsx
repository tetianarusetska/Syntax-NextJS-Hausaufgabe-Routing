import Link from "next/link";

export default function ButtonToHome() {
    return (
        <Link
            href="/"
            className="border rounded-3xl bg-blue-800 text-(--bgColor) px-7 py-4 font-['Kosmos']"
        >
            Zurück
        </Link>
    )
}