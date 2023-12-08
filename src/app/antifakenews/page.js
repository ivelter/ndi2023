import base from "./principal.module.scss";

// TODO: faire un lien vers cette page. l'ancien lien d'eliott pourrait devenir un easter egg psk il est goatesque
export default function antifakenews() {
    return (
        <div className={base.genericLayout}>
            <h1>Naviguer à travers le brouillard médiatique : Comment repérer les fausses informations sur le climat</h1>

            <p>
                Avec la montée en puissance des discussions sur le réchauffement climatique, il est crucial de s&apos;armer contre la propagation des fausses informations. Ne soyez pas pris au dépourvu, et apprenez à distinguer les faits des faux dans ce tourbillon d&apos;informations.
            </p>

            <section>
            <h2>1. Vérifiez vos sources</h2>
            <ul>
                <li>Consultez des sites de confiance : Privilégiez les sources reconnues telles que les organismes gouvernementaux, les institutions scientifiques et les médias réputés.</li>
                <li>Méfiez-vous des sites inconnus : Les plateformes moins connues peuvent parfois manquer de rigueur éditoriale.</li>
            </ul>
            </section>

            <section>
            <h2>2. Examinez les titres avec précaution</h2>
            <ul>
                <li>Titres sensationnalistes : Les titres exagérés ou alarmistes sont souvent un signe de manipulation. Recherchez des titres équilibrés et basés sur des faits.</li>
                <li>Comparez plusieurs sources : Si une information semble trop extraordinaire, vérifiez-la sur plusieurs sites avant de la considérer comme vraie.</li>
            </ul>
            </section>

            <section>
            <h2>3. Vérifiez les dates et les données</h2>
            <ul>
                <li>Actualité vs. Archive : Assurez-vous que les informations que vous consultez sont récentes. Parfois, des données obsolètes peuvent être délibérément utilisées pour tromper.</li>
                <li>Cross-vérification des données : Si les chiffres semblent inhabituels, vérifiez-les auprès de différentes sources ou consultez des rapports scientifiques.</li>
            </ul>
            </section>

            <section>
            <h2>4. Analysez les expertises citées</h2>
            <ul>
                <li>Consultez les références : Des affirmations sans références ou avec des références douteuses peuvent être un signe de désinformation.</li>
                <li>Qui sont les experts ? Méfiez-vous des sources qui citent des experts sans crédibilité dans le domaine climatique.</li>
            </ul>
            </section>

            <section>
            <h2>5. Fact-checking et Organismes de Vérification des Faits</h2>
            <ul>
                <li>Utilisez des sites de vérification des faits : Des organisations telles que Snopes, FactCheck.org, et Climate Feedback vérifient régulièrement les informations et les débunkent si nécessaire.</li>
                <li>Ne partagez pas sans vérifier : Avant de partager une information, assurez-vous qu&apos;elle a été vérifiée par des experts en la matière.</li>
            </ul>
            </section>

            <section>
            <h2>6. Souvenez-vous des fausses informations passées</h2>
            <ul>
                <li>Apprenez des erreurs passées : Souvenez-vous des fausses informations qui ont circulé par le passé, comme les démentis sur le changement climatique. Soyez vigilant face aux schémas récurrents.</li>
            </ul>
            </section>

            <p>Le réchauffement climatique est un enjeu critique qui nécessite une compréhension précise. En naviguant judicieusement dans le paysage médiatique, vous contribuez à prévenir la diffusion de fausses informations et à promouvoir une discussion éclairée sur notre planète. Restez informé, soyez critique et ensemble, agissons pour un avenir durable.</p>
        </div>
    )
}