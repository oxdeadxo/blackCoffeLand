import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"


const Hero = () => {

    useGSAP(() => {

        const titleSplit = new SplitText('.title', { type: 'words, chars' })
        const subtitleSplit = new SplitText('.subtitle', { type: 'lines' })

        titleSplit.chars.forEach((char) => char.classList.add('text-gradient'))

        gsap.from(titleSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true
            }
        })
        .to('.right-grano', { y: 200 }, 0)
        .to('.left-grano', { y: -200 }, 0)
    }, [])

  return (
    <>
        <section id="hero" className="noisy">
            <h1 className="title">Black Metal</h1>

            <img src="/images/hero-left-grano.png" alt="grano01" className="left-grano"/>
            <img src="/images/hero-right-grano.png" alt="grano02" className="right-grano" />

            <div className="body">
                <div className="content">
                    <div className="space-y-5 hidden md:block">
                        <p>Black. Intense. Evil.</p>
                        <p className="subtitle">
                            Get a taste of the darkest coffee experience with our Black Metal blend.
                        </p>
                    </div>


                </div>
            </div>
        </section>
    </>
  )
}

export default Hero