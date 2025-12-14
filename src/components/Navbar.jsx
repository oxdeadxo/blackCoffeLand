import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { navLinks } from "../../constants"

const Navbar = () => {

    useGSAP(() => {
        const navGlass = gsap.timeline({
            scrollTrigger: {
                trigger: "nav",
                start: "bottom top"
            }
        })

        navGlass.fromTo('nav', { backgroundColor: 'transparent' },  {
            backgroundColor: '#00000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.out'
        })

    })

  return (
    <nav>
        <div>
            <a href="#home" className="flex items-center gap-2"> 
                <img src="/images/Logo 03.png" alt="logo" className="h-10" />
                <p>Black Coffe</p>
            </a>

            <ul>
               {navLinks.map((link) => (    
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
               ))} 
            </ul>
        </div>
    </nav>
  )
}

export default Navbar