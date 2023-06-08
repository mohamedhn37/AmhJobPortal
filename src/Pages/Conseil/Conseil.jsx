import React from 'react'
import './Conseil.css'
import SeactionHead from '../../Sections/SectionHead/SeactionHead'

const Conseil = () => {
    return (
        <>
            <div className="Conseil">
                <div className="container my-5">
                    <SeactionHead className="mb-1 text-black-50" title="Nos conseils pour réussir votre recherche"  description="Conseils Candidats" />
                    <div className="row">
                        <div className="col-md-12">
                            <section className="fw-bold my-3">
                                <p>Chère Candidate, Cher Candidat,</p>
                                <p>Rechercher un emploi et réaliser une candidature n’est jamais une chose facile. Alors, pour vous accompagner au mieux, voici quelques conseils rassemblés par l’équipe AMH Job Portail:</p>
                                <ul className='text-secondary'>
                                    <li>Pour votre CV et votre profil, utilisez une photo dans un style professionnel : c’est la première image que le recruteur aura de vous, alors oubliez les photos de vacances et n’utilisez pas de filtre ! Attention également à ne pas mettre votre carte d’identité / passeport : vos informations sont personnelles et précieuses !</li>
                                    <li>Avant de postuler à une offre, renseignez-vous sur l’entreprise : sa vision, ses valeurs, sa mission et son histoire ! Pour en savoir davantage, visitez les stands des employeurs et consultez les interviews sur la partie blog. Notre recommandation : postuler moins mais mieux...</li>
                                    <li>Personnalisez votre lettre de motivation : vous devez montrer que les missions sont bien comprises, que vous vous intéressez à l’entreprise et que vous savez ce que vous pouvez lui apporter.</li>                                    </ul>
                                <p>Ayant à cœur de vous accompagner toujours davantage, l’équipe AMH Job Portail met à votre disposition un ensemble d’ateliers gratuits : </p>
                                <ul className='text-secondary'>
                                    <li>Des sessions questions-réponses pour que vous puissiez poser toutes vos questions à nos spécialistes</li>
                                    <li>Des ateliers coaching : se reconvertir, réussir son entretien, quand et comment aborder le sujet du handicap…</li>
                                    <li>Des ateliers dédiés à la préparation de votre CV et à l’alternance…</li>
                                </ul>
                                <p>Ces ateliers se déroulent 100% en ligne, en accès libre et gratuits sur inscription : alors n’hésitez pas à en profiter. </p>
                                <p>Si vous avez des questions, contactez-nous : contact@groupeamh.org ! nous serons toujours ravis de vous répondre et nous vous recommandons aussi de visionner nos vidéos conseils ci-dessous.</p>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Conseil