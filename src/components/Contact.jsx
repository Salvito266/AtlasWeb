import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"
import { useState } from "react"

export default function Contact() {
  const [state, handleSubmit] = useForm("mjggklwa") // <-- tu ID real de Formspree
  const [showSuccess, setShowSuccess] = useState(false)

  // Mostrar modal cuando succeeded cambia a true
  if (state.succeeded && !showSuccess) {
    setShowSuccess(true)
  }

  return (
    <section id="contact" className="border-t border-white/10 mt-4 pt-8">
      <div className="mx-auto max-w-8xl px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Formulario */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 rounded-2xl glass p-6 relative"
          >
            <h2 className="text-2xl sm:text-3xl font-bold">Contacto</h2>
            <p className="mt-2 text-sm text-white/60">
               Cotiza, detalla objetivos y restricciones. Respondemos con un plan técnico.
            </p>

            {/* Modal de éxito */}
            {showSuccess && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="fixed inset-0 flex items-center justify-center bg-black/70 z-50"
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-xl p-6 text-center max-w-sm shadow-xl"
                >
                  <h3 className="text-xl font-bold text-atlas-primary">¡Mensaje enviado 🚀!</h3>
                  <p className="mt-2 text-gray-700">
                    Pronto recibirás nuestra propuesta técnica.
                  </p>
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="mt-4 px-4 py-2 rounded bg-atlas-primary text-white hover:bg-atlas-primary/90 transition"
                  >
                    Cerrar
                  </button>
                </motion.div>
              </motion.div>
            )}

            {!state.succeeded && (
              <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                {/* Nombre */}
                <div className="relative">
                  <input
                    name="nombre"
                    placeholder=" "
                    className="peer w-full rounded-lg bg-black/40 border border-white/10 px-3 pt-5 pb-2 text-sm outline-none focus:border-atlas-primary/60 focus:shadow-[0_0_10px_rgba(94,139,255,0.4)] transition-all"
                    required
                  />
                  <label className="absolute left-3 top-2 text-xs text-white/60
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-atlas-primary transition-all">
                    Nombre
                  </label>
                  <ValidationError prefix="Nombre" field="nombre" errors={state.errors} />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder=" "
                    className="peer w-full rounded-lg bg-black/40 border border-white/10 px-3 pt-5 pb-2 text-sm outline-none focus:border-atlas-primary/60 focus:shadow-[0_0_10px_rgba(94,139,255,0.4)] transition-all"
                    required
                  />
                  <label className="absolute left-3 top-2 text-xs text-white/60
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-atlas-primary transition-all">
                    Email
                  </label>
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>

                {/* Mensaje */}
                <div className="relative">
                  <textarea
                    name="mensaje"
                    rows={4}
                    placeholder=" "
                    className="peer w-full rounded-lg bg-black/40 border border-white/10 px-3 pt-5 pb-2 text-sm outline-none focus:border-atlas-primary/60 focus:shadow-[0_0_10px_rgba(94,139,255,0.4)] transition-all"
                    required
                  />
                  <label className="absolute left-3 top-2 text-xs text-white/60
                    peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-white/40
                    peer-focus:top-2 peer-focus:text-xs peer-focus:text-atlas-primary transition-all">
                    Mensaje
                  </label>
                  <ValidationError prefix="Mensaje" field="mensaje" errors={state.errors} />
                </div>

                {/* Botón con spinner */}
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-atlas-primary px-5 py-3 text-sm font-semibold shadow-glow hover:bg-atlas-primary/90 text-white"
                >
                  {state.submitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Enviar
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Reactor energético */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 rounded-2xl glass p-6 relative overflow-hidden flex flex-col items-center justify-center"
          >
            <motion.h3
              className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-atlas-primary via-white to-atlas-accent text-center"
              whileHover={{ scale: 1.05 }}
            >
              Innovación constante
            </motion.h3>
            <motion.p
              className="mt-3 text-base sm:text-lg text-white/70 text-center max-w-xl"
              whileHover={{ color: "#5E8BFF" }}
            >
              Iteramos con rigor técnico y creatividad para mantener sistemas vivos y resilientes.
            </motion.p>

            {/* Bola de energía */}
            <motion.div
              className="mt-8 relative w-full h-64 flex items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="absolute w-56 h-56 rounded-full bg-gradient-to-r from-atlas-primary to-atlas-accent blur-3xl opacity-30"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-40 h-40 rounded-full border-4 border-atlas-primary/50"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-atlas-accent to-atlas-primary shadow-[0_0_40px_rgba(94,139,255,0.8)]"
                animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-8 h-8 rounded-full bg-white"
                animate={{ scale: [1, 2, 1], opacity: [1, 0.6, 1] }}
                transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}