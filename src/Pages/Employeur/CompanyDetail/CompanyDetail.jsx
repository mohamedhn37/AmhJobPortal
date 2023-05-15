import React from 'react'
import SeactionHead from '../../../Sections/SectionHead/SeactionHead'
import { NavLink } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

const CompanyDetail = () => {
    return (
        <>
            <div className="container my-5">
                <SeactionHead title="À propos de {Company Name}" />
                <div className="row">
                    <div className="col-md-12">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magni maiores sit quae, beatae id vero! Debitis voluptate aliquam tempore nulla tempora, possimus eius sit obcaecati, dolorum ea accusantium esse non quam numquam? Aperiam neque, molestiae praesentium impedit dolore, rerum perspiciatis nisi magni consequatur officiis pariatur. Beatae culpa temporibus laboriosam nisi aliquid vitae maxime debitis assumenda? Nostrum incidunt asperiores obcaecati expedita tempora velit necessitatibus. Dolorem voluptatem pariatur eos quidem beatae reiciendis minima sed! Expedita odit exercitationem mollitia! In, laudantium odio! Maxime explicabo maiores dolores dolor deserunt error, eveniet, numquam perspiciatis, iure consequatur placeat fuga. Vel, esse? Accusantium nostrum unde pariatur laboriosam officiis sunt est necessitatibus? Odit vitae commodi, voluptatem omnis earum placeat aspernatur labore eveniet, nobis illo excepturi nam amet minima impedit fuga veritatis soluta nemo est ad saepe, magnam tempore ab suscipit. Doloribus omnis nihil aspernatur vero. Dolorem vel deleniti sunt libero totam nemo dolorum deserunt magni vitae. Impedit commodi corporis consequatur culpa et maxime, suscipit repellendus quam nulla esse architecto in, eaque enim iusto corrupti. Doloribus, ab dolorum, error nesciunt ad ea facilis deleniti ducimus atque, adipisci eum neque voluptatum consectetur nam quos. Aperiam sed, ducimus cupiditate, provident expedita quisquam, repudiandae voluptate ea omnis perspiciatis consectetur excepturi dolore asperiores porro tenetur molestias id veritatis sint? Rem, quisquam magni. Beatae autem ipsa, harum aperiam quam expedita magnam porro vitae cum assumenda ut et ea commodi non at ad voluptatem temporibus! Ducimus harum, recusandae laboriosam beatae modi totam, ullam enim, quos neque sapiente provident maxime tenetur. Tempora nobis fugiat maiores!</p>
                        <NavLink to="#">{/* ici vous avez bnesoin de recupérer le site de company */}
                            <button className='btn btn-primary'>En savoir <FaPlus/></button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CompanyDetail