export default function Externe() {

    function randomPerso(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomColor() {
        const colors = [
            "rose",
            "bleu",
            "sky",
            "red",
            "yellow",
            "orange",
        ]
        const gama = [
            50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950
        ]
        return colors[randomPerso(0, colors.length-1)]+"-"+gama[randomPerso(0, gama.length-1)]
    }

    const texte = `flex flex-col gap-10 p-12 bg-${randomColor()}`

    return (
        <div className={`flex flex-col gap-10 p-12 bg-${randomColor()}`}>
            <h1 className={"text-center text-5xl"}>
                6e rapport du GIEC :
                quelles solutions face au changement climatique ?
            </h1>

            <h1>{texte}</h1>

            <h2 className={`text-2xl text-${randomColor()}`}>
                GIEC = Groupe d'experts intergouvernemental sur l'évolution du climat
            </h2>

            <p className={"absolute top-"}>
                La bonne nouvelle provenant du rapport du GIEC est que des solutions existent pour faire face au
                changement climatique. Le GIEC affirme que "dans tous les secteurs, nous disposons de solutions pour
                réduire au moins de moitié les émissions d'ici à 2030", une étape cruciale pour atteindre les objectifs
                climatiques. Le rapport met en évidence plusieurs mesures nécessaires, notamment la transformation des
                modes de vie, l'utilisation des technologies disponibles, l'abandon des énergies fossiles au profit des
                énergies renouvelables, des changements dans notre alimentation, l'adaptation des modes de transport, et
                une coopération internationale renforcée. Ces actions sont essentielles pour inverser la tendance
                actuelle et travailler vers un avenir plus durable.
            </p>

            <p>Première fois dans l'histoire, le GIEC consacre un chapitre à la demande, en mettant en lumière les
                aspects liés à la consommation dans divers secteurs. Le rapport souligne qu'une réduction significative
                des émissions de gaz à effet de serre est possible en modifiant nos modes de vie.</p>

            <button id="boutonDownload" className={"p-5 bg-green-100 rounded-xl text-black hover:bg-green-200"}>télécharger le rapport</button>
        </div>
    );
}
