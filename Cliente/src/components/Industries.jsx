import { motion } from 'framer-motion';
import { Building2, Shield, Briefcase, ShoppingBag, Users, Network } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Inmobiliarias',
    description: 'Referí compradores, seguí el pipeline y ganá por cada venta cerrada.',
    gradient: 'from-amber-400 to-orange-500',
    image: '/1000738876.jpg',
  },
  {
    icon: Shield,
    title: 'Seguros y financieras',
    description: 'Convertí contactos en pólizas o créditos. Recompensá a tu red de referidos.',
    gradient: 'from-referix-cyan to-referix-blue',
    image: '/Gemini_Generated_Image_2hqvfn2hqvfn2hqv.png',
  },
  {
    icon: Briefcase,
    title: 'Servicios profesionales',
    description: 'Abogados, contadores, consultores: referí clientes y medí resultados.',
    gradient: 'from-purple-400 to-pink-500',
    image: '/Gemini_Generated_Image_nzbn5jnzbn5jnzbn.png',
  },
  {
    icon: ShoppingBag,
    title: 'Comercios y retail',
    description: 'Programa de referidos para tiendas, franquicias y e-commerce.',
    gradient: 'from-green-400 to-emerald-500',
    image: '/Gemini_Generated_Image_x336z4x336z4x336.png',
  },
  {
    icon: Users,
    title: 'Redes de distribución',
    description: 'Motivá a tu red con puntos, ranking y premios por cada referido exitoso.',
    gradient: 'from-rose-400 to-red-500',
    image: '/ChatGPT Image 11 jun 2026, 20_05_49.png',
  },
  {
    icon: Network,
    title: 'Cualquier rubro',
    description: 'Si tu negocio trabaja con referidos, REFERIX se adapta a tu organización.',
    gradient: 'from-referix-lime to-referix-cyan',
    image: '/Gemini_Generated_Image_uj78t9uj78t9uj78.png',
  },
];

const Industries = () => {
  return (
    <section id="industries" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-referix-lime/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-referix-blue/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-badge bg-referix-cyan/10 border-referix-cyan/30 text-referix-cyan mb-4">
            Para todo tipo de organización
          </span>
          <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
            No solo inmobiliarias.{' '}
            <span className="referix-gradient-text">Cualquier rubro con referidos</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            REFERIX se personaliza con el branding, catálogo y premios de tu organización.
            Si trabajás con referidos, esta plataforma es para vos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative glass-card overflow-hidden cursor-default"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-referix-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                </div>
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
