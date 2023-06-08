import image from '../../public/img/about.jpg'
import styles from '~/styles/about.css'

export function meta(){
  return {
    title: 'GuitarLA - About Us',
    description: 'Guitar selling, music blog'
  }
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: image,
      as: 'image'
    }
  ]
}

const About = () => {
  return (
    <main className="container about">
      <h2 className="heading">About Us</h2>
      <div className="content">
        <img src={image} alt="about us" />

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio rem tempora quia et error consequuntur possimus explicabo nulla eveniet incidunt, 
            quod laudantium provident culpa! Magni vitae harum dolor minus voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Optio rem tempora quia et error consequuntur possimus explicabo nulla eveniet incidunt, 
            quod laudantium provident culpa! Magni vitae harum dolor minus voluptates.
          </p>
        </div>
      </div>
    </main>
  )
}

export default About
