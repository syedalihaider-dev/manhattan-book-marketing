// Next
import Image from "next/image"
// Media
import Checkbox from "media/home/checkbox-pink.svg"
// Css
import styles from "./research-important.module.css"
import { CTAGroupLight } from "@/components"
export default function ResearchImportant() {
  return (
    <section>
      <div className="lg:pb-[100px] md:pb-[80px] pb-[60px]">
        <div className="container">
          <div className={styles.content}>
            <h2 className={styles.title}>
              Our Process for Google Knowledge Panel Success
            </h2>
            <p className={styles.para}>
              Keyword research is the concrete foundation of any successful SEO
              campaign. Get the right keywords using keyword research services
              and from there you can build the brick-and-mortar elements like
              landing pages, website content, blog posts, and social media
              content.
            </p>
            <p className={styles.para}>
              Using our SEO keyword research services allows you to target your
              intended demographic, reach those customers who are most likely to
              interact with your business, and create relevant content that
              increases your online visibility.
            </p>
            <ul className={styles.lists}>
              {[
                "We create focused content to meet Google’s guidelines.",
                "We target relevant keywords for maximum visibility.",
                "Verified details to strengthen your online profile.",
                "Clear prompts to engage your audience further.",
              ].map((e, i) => (
                <li key={i} className={styles.items}>
                  <Image src={Checkbox} alt="domain" className={styles.img} />
                  {e}
                </li>
              ))}
            </ul>
            <div className={styles.cta}>
              <CTAGroupLight />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
