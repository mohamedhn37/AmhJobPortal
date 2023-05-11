import React from 'react'
import './Contact.css'
import SeactionHead from '../../Sections/SectionHead/SeactionHead'
import formImage from '../../img/FormImage.png'

const Contact = () => {
    return (
        <>
            <div className="container my-5">
                <SeactionHead title="Contactez-Nous" description="Vous voulez bénéficier de nos services ? Vous avez une question  ? Une suggestion  ?  Utilisez le formulaire ci-dessous, l’équipe du Groupe AMH vous répondra dans les meilleurs délais." />
                <div className="row my-3">
                    <div className="col-md-5">
                        <iframe className='iframeSource' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53184.78313701171!2d-7.705144978320313!3d33.578078399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2bf564eac39%3A0x189977a1021576fc!2sGroupe%20AMH!5e0!3m2!1sfr!2sma!4v1683277898477!5m2!1sfr!2sma" allowfullscreen="" title='amhlocation' loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="col-md-7">
                        <div className='formContent'>
                            <form>
                                <div className="row m-auto">
                                    <div className="col-md-6">
                                        <div className="form-group mt-3">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Votre Nom" required />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group mt-3">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Votre Email" required/>
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="tele" id="tele" placeholder="Téléphone" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Sujet" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="10" cols="40" placeholder="Message" required ></textarea>
                                    </div>
                                    <div className="text-center mt-3">
                                        <button type="submit" className="rounded-pill text-white fw-bold">Envoyer</button>
                                    </div>
                                </div>
                            </form>
                            <div className='formImg'>
                                <img src={formImage} alt="formImage" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact