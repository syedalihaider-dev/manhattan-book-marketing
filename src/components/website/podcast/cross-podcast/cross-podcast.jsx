// Next
import Image from "next/image"
// Css
import styles from "./cross-podcast.module.css"
// Media
import One from "media/podcast/icons/5.png"
import Studios from "media/podcast/studios.png"
import Play from "media/home/trending-podcast/play.png"
import { CTA } from "@/components"
export default function CrossPodcast() {
  return (
    <section>
      <div className={styles.root}>
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>
              We are "Cross Podcast" a passionate team dedicated to empowering
              podcasters and enthusiasts worldwide.
            </h2>
          </div>
          <div className={styles.__grid}>
            <div className={styles.leftColumn}>
              <div className={styles.card}>
                <Image src={One} alt="one" />
                <h3 className={styles.title}>Take Action on Your Podcasting Needs</h3>
                <p className={styles.para}>
                Do not lose the chance to engage with your followers through podcasts. Contact us today to learn how Manhattan Book Marketing’s Podcast services can support your journey.
                </p>
                <CTA
                  text="Start Your Podcast"
                  css="lg:!w-[80%] hover:bg-black hover:border hover:border-white hover:[boxShadow:0px_5px_15px_rgba(255,_118,_117,_0.3)] bg-gradient hover:bg-none text-white mt-5"
                />
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={styles.imgBox}>
                <Image src={Studios} alt="domain" />
                <div className={styles.episode}>
                  <div className={styles.icon}>
                    <Image src={Play} alt="domain" />
                  </div>
                  <span className={styles.number}>Episode: 54</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
