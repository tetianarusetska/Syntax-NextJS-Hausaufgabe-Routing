import { Suspense } from 'react';
import Pokemon from './s_components/Pokemon';

export default async function PokemonPage() {
    return (
        <main>
            <Suspense
                fallback={
                    <p className="text-orange-600 text-2xl font-bold">
                        Loading pokemon...
                    </p>
                }
            >
                <Pokemon />
            </Suspense>
        </main>
    )
}
