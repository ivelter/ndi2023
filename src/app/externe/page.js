export default function Home() {
    return (
        <div>
            <h1 className={"text-center text-5xl"}>
                6e rapport du GIEC :
                quelles solutions face au changement climatique ?
            </h1>

            <h2 className={"text-2xl"}>
                GIEC = Groupe d'experts intergouvernemental sur l'évolution du climat
            </h2>

            <p className={""}>
                La bonne nouvelle provenant du rapport du GIEC est que des solutions existent pour faire face au
                changement climatique. Le GIEC affirme que "dans tous les secteurs, nous disposons de solutions pour
                réduire au moins de moitié les émissions d'ici à 2030", une étape cruciale pour atteindre les objectifs
                climatiques. Le rapport met en évidence plusieurs mesures nécessaires, notamment la transformation des
                modes de vie, l'utilisation des technologies disponibles, l'abandon des énergies fossiles au profit des
                énergies renouvelables, des changements dans notre alimentation, l'adaptation des modes de transport, et
                une coopération internationale renforcée. Ces actions sont essentielles pour inverser la tendance
                actuelle et travailler vers un avenir plus durable.
            </p>

            <button className={"p-4xl bg-green-100 rounded-sm"}>télécharger le rapport</button>


        </div>
    );
}
