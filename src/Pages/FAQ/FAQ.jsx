import React from 'react'
import SeactionHead from '../../Sections/SectionHead/SeactionHead'
import { NavLink } from 'react-router-dom'

const FAQ = () => {
    return (
        <>
            <div className="container my-5">
                <SeactionHead className="mb-1 text-black-50" title="Foire Aux Questions" description="Obtenez des réponses rapides aux questions les plus courantes." />
                <div className="row">
                    <div className="col-md-12">
                        <div className="accordion" id="accordionExample">
                            <div className="accordion-item my-4 shadow">
                                <h2 className="accordion-header">
                                    <button className="accordion-button fw-bold text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        1. Mot de passe oublié ou perdu?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>Mon mot de passe ne marche pas !  J’ai oublié mon mot de passe ! Je ne peux pas me connecter à mon compte !</strong>  <br />
                                        <p className='text-secondary'>Dans tous ces cas, vous pouvez demander à ce qu’un nouveau mot de passe vous soit renvoyé à votre adresse email.</p>
                                        <p className='my-4'>Attention ! Votre adresse email doit être celle utilisée lors de la création de votre compte Talents Handicap. Pour renseigner votre email, et recevoir un nouveau mot de passe, cliquez sur le lien suivant :<NavLink>un lien vers ton Dashboard pour modifier les infos</NavLink></p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-4 shadow">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        2. Pourquoi dois-je créer un compte sur AMH Job Portail ?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong className='text-secondary'>Disposer d’un compte Candidat, sur "AMH Job Portail" vous offre de nombreux avantages :</strong> <br/>
                                        <ul className='my-4'>
                                            <li>Cela vous permet de créer votre profil une fois pour toutes, qui peut être consulté par tous les employeurs.</li>
                                            <li>A travers votre compte, vous communiquerez des informations sur votre situation professionnelle, vos diplômes, vos expériences, les métiers, etc…, Vous pouvez associer votre CV à votre profil</li>
                                            <li>Cela vous permet de vous inscrire en un clic, pour votre recherche d'emploi-formation-alternance</li>
                                            <li>Cela vous permet d'être informés instantanément, des nouvelles offres publiées sur "AHM Job Portail" qui sont en adéquation avec votre profil.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-4 shadow">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item my-4 shadow">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                        Accordion Item #4
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FAQ