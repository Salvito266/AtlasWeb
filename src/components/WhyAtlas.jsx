import { motion } from "framer-motion"

export default function WhyAtlas() {
  return (
    <motion.section
      className="mt-24 px-6 max-w-6xl mx-auto text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Título grande con Atlas destacado */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-4 text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        ¿Por qué elegir{" "}
        <span className="relative inline-block">
          <motion.span
            className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-violet-400"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            style={{
              backgroundSize: "200% 200%",
              display: "inline-block",
            }}
          >
            Atlas Devs
          </motion.span>
          {/* Glow detrás */}
          <motion.span
            className="absolute inset-0 blur-xl bg-gradient-to-r from-sky-400 via-cyan-400 to-violet-400 rounded-lg"
            animate={{ opacity: [0.2, 0.9, 0.2], scale: [0.95, 1.15, 0.95] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          />
        </span>
        ?
      </motion.h2>

      {/* Subtítulo debajo */}
      <motion.p
        className="text-white/70 max-w-2xl mx-auto mb-12 text-base sm:text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Somos tu socio digital. Creamos soluciones claras y seguras que ayudan a tu negocio a crecer: desde páginas web y aplicaciones móviles hasta dashboards de datos e inteligencia artificial.
      </motion.p>

      {/* Bloques con glow respirando en patrón */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bloque 1 */}
        <motion.div
          className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-transparent blur-3xl rounded-2xl"
            animate={{ opacity: [0.1, 1, 0.1], scale: [0.9, 1.15, 0.9] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0 }}
          />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-3">📈 Haz crecer tu negocio</h3>
            <p className="text-sm text-white/70">
              Creamos experiencias digitales que atraen más clientes y mejoran la conexión con ellos.
            </p>
          </div>
        </motion.div>

        {/* Bloque 2 */}
        <motion.div
          className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-transparent blur-3xl rounded-2xl"
            animate={{ opacity: [0.1, 1, 0.1], scale: [0.9, 1.15, 0.9] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1.3 }}
          />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-3">⚡ Soluciones a medida</h3>
            <p className="text-sm text-white/70">
              Cada proyecto se diseña según tus necesidades: web, app, dashboard o IA.
            </p>
          </div>
        </motion.div>

        {/* Bloque 3 */}
        <motion.div
          className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-rose-500/30 to-transparent blur-3xl rounded-2xl"
            animate={{ opacity: [0.1, 1, 0.1], scale: [0.9, 1.15, 0.9] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 2.6 }}
          />
          <div className="relative z-10">
            <h3 className="text-lg font-semibold mb-3">🛡️ Confianza garantizada</h3>
            <p className="text-sm text-white/70">
              Nuestro método Atlas asegura entregas claras y soporte activo. Tu inversión está protegida.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}