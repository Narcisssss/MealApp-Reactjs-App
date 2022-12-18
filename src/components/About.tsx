import React from 'react';
import '../styles/About.scss';
import pic2 from '../images/food-pic-2.jpg';
import pic1 from '../images/food-pic-1.jpg';

interface Props {}

function About(props: Props) {
    const {} = props

    return (
       <div className="about-container">
            <h2 className='about-title'>Cooking Addict Story</h2>
            <p className='about-subtitle'>Our Journey</p>
            <div className='about-box row-reverse'>
            <p className='about-p'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit eius eaque animi, voluptate cupiditate blanditiis suscipit provident culpa laudantium corporis, saepe, nemo tenetur. Unde nesciunt maiores modi, distinctio mollitia eveniet.    
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum repellendus vero placeat sapiente cum consequuntur a ab nam sequi molestias distinctio, ea exercitationem voluptatibus corrupti sed? Sint, modi nostrum.
            </p>
            <img src={pic1} alt='food-first' />
            </div>
            <div className='about-box'>
            <p className='about-p'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, consequuntur voluptatum quos perspiciatis impedit natus fuga, ipsam in nam cum maiores incidunt? Exercitationem delectus tempora, repellendus impedit suscipit earum perspiciatis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quod quaerat! Perferendis, expedita. Veniam alias aliquam dolorem cupiditate labore quis modi non odit. Fuga quos dolore cum voluptate unde delectus.
            </p>
            <img src={pic2} alt='food' />
            </div>
       </div>
    )
}

export default About
