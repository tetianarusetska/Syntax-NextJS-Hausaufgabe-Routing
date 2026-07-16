'use client'

import { useEffect } from 'react'
import Menu from '../cl_components/Menu'
import ButtonToHome from '../s_components/ButtonToHome'

export default function Error({ error, reset, }: { error: Error & { digest?: string }, reset: () => void }) {

    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <>
            <div className="flex flex-row justify-between m-10">
                <Menu />
                <ButtonToHome />
            </div>

            <div className="flex flex-col items-center justify-center gap-4">
                <h2 className="text-4xl font-bold font-['BebasNeue'] mx-10 my-4">Etwas ist schiefgelaufen!</h2>
                <p className="font-['Fejoa'] mx-10 my-4 font-bold text-2xl">
                    Der Inhalt konnte leider nicht geladen werden. Bitte versuche es noch einmal.
                </p>
                <button
                    onClick={() => reset()}
                    className="border rounded-full px-6 py-2 bg-blue-800 text-white font-['Kosmos']"
                >
                    Neu starten
                </button>
            </div>
        </>
    )
}