import React from 'react'
import './OffreDescription.css'
import SeactionHead from '../../../Sections/SectionHead/SeactionHead'
import { FaPaperPlane } from 'react-icons/fa'

const OffreDescription = () => {
    return (
        <>
            <div className="OffreDescription">
                <div className="container-fluid DetailOffre">
                    <SeactionHead className="mb-1 text-white" title="Détail de l'offre" description='Découvrez les détails complets de cette offre exceptionnelle. Obtenez un aperçu clair et concis des responsabilités, des avantages et des qualifications nécessaires. '/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="infos">
                                <div className="offreInfos">
                                    <h1>Nom D'offre</h1>
                                    <p className='text-success'>Date d'annonce : Lundi 15 mai 2023</p>
                                    <p className='fw-bold text-danger'>Date de fin : Lundi 29 mai 2023</p>
                                </div>
                                <button type="button"><FaPaperPlane className='me-2' />Postuler</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="jobdetail">
                                <h5 className='text-primary fw-bold text-center mb-3'>Detail de l'offre</h5>
                                <ul className='list-unstyled'>
                                    <li className='fw-bold'>Référence: <span className='text-primary float-end'>AAAAAA2023</span></li>
                                    <li className='fw-bold'>Lieu: <span className='text-primary float-end'>CASA</span></li>
                                    <li className='fw-bold'>Type: <span className='text-primary float-end'>CDI</span></li>
                                    <li className='fw-bold'>Domaine: <span className='text-primary float-end'>Marketing</span></li>
                                    <li className='fw-bold'>Niveau d'étude: <span className='text-primary float-end'>Bac+5</span></li>
                                    <li className='fw-bold'>Niveau d'expérience: <span className='text-primary float-end'>5 à 10</span></li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-8">
                            <div className="description">
                                <h4 className='fw-bold text-primary'>Description</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia alias necessitatibus optio cumque neque unde maxime eveniet veniam magnam, facere amet consequuntur ut doloribus accusamus maiores quasi minima rerum tempora libero nihil distinctio natus magni! Maiores quod obcaecati doloremque dolores rem, laboriosam a ad repellendus, possimus deserunt, at dolorum iusto numquam corrupti vero minus! Voluptatum fugit, alias rerum, excepturi sit unde, quaerat deserunt voluptates possimus ipsum exercitationem. Assumenda ratione, laboriosam delectus quaerat atque quasi vero iste deleniti perferendis magni beatae nihil! Alias ipsa impedit enim facilis suscipit, optio labore iste at voluptatem id perferendis maxime fugiat! Vitae minima laborum, nihil ducimus, veritatis ad atque velit rerum maiores iusto magnam laboriosam, porro enim non voluptatum explicabo illo debitis harum commodi iste adipisci fugiat quo. Eum sint animi officiis deserunt voluptate dolorem doloremque odio commodi vero, neque itaque nam dignissimos, sunt totam. Reiciendis aliquam temporibus veniam mollitia, asperiores cum ab deleniti dolores assumenda culpa earum numquam nihil maiores iure, magni dicta? Atque magnam adipisci ipsa eum necessitatibus, dolorum quisquam illum temporibus sint repellat ab laborum molestias rem, consequatur neque nihil dolor dicta in odit reiciendis quam sunt mollitia asperiores dolore? Suscipit in repudiandae asperiores veritatis! Impedit quaerat tenetur nobis amet asperiores praesentium.</p>
                                <button type="button"><FaPaperPlane className='me-2' />Postuler</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OffreDescription