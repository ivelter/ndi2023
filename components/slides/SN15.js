import all from "../../variables.module.scss"
import Degrade from "../Degrade"
import base from "./SN15.module.scss"

export default function SN15() {
    return (
        // TODO: note à thumus, je pense qu'il faudrait ajuster manuellement la hauteur de la page pour faire ce que je veux faire
        // mais j'ai pas envie de tout casser :cryemoji:
        <Degrade color={all.gris}>
            <div className={base.divRoot}>
                <div className={base.firstHalf}>
                    <h1>Vous êtes arrivés à la fin de l&apos;expérience.</h1>
                    <p>Mais gardez en tête que la lutte contre le changement climatique
                    est un combat de tous les jours.</p>
                </div>

                <div className={base.secondHalf}>
                    <p>
                        Vous avez raté quelque chose? Voici les liens vers
                        toutes nos ressources, et notre bibliographie.
                    </p>
                </div>
            </div>
        </Degrade>
    )
} 