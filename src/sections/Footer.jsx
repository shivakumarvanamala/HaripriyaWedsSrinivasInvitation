import { motion } from 'framer-motion'
import { Ganesha, Thoranam } from '../components/Motifs'
import { useLang } from '../i18n'

export default function Footer({ content }) {
  const { t } = useLang()
  const { footer, couple } = content
  return (
    <footer
      className="relative overflow-hidden px-6 py-16 text-center text-cream"
      style={{ backgroundImage: 'linear-gradient(135deg,#0F2A21,#08201A 70%,#04150F)' }}
    >
      <Thoranam className="pointer-events-none absolute inset-x-0 top-0 h-14 w-full text-gold/70" />
      <div className="mx-auto max-w-2xl">
        <Ganesha className="mx-auto mt-6 h-16 w-16 text-gold-light animate-glow" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-6 font-display text-2xl italic text-cream/90 md:text-3xl"
        >
          “{t(footer.message)}”
        </motion.p>

        <div className="my-8 flex items-center justify-center gap-4">
          <span className="h-px w-10 bg-gold/50 sm:w-16" />
          {/* bride first — see the note in src/sections/Couple.jsx */}
          <span className="whitespace-nowrap font-deco text-3xl text-gold-light">
            {t(couple.bride.name)} &amp; {t(couple.groom.name)}
          </span>
          <span className="h-px w-10 bg-gold/50 sm:w-16" />
        </div>

        {footer.hashtag && (
          <p className="font-heading text-xl tracking-[0.2em] text-gold-light">{footer.hashtag}</p>
        )}

        <p className="mt-8 whitespace-pre-line font-display text-base text-cream/70">
          {t(footer.fromFamilies)}
        </p>
      </div>
    </footer>
  )
}
