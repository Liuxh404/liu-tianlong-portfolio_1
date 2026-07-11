import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { value: '9年', label: '设计与品牌执行经验' },
    { value: 'C4D', label: '建模/材质/渲染' },
    { value: 'AI', label: '高效训练/Agent' },
  ];

  return (
    <section ref={ref} className="relative h-screen w-full bg-black">
      <div className="absolute inset-0 p-4 md:p-6">
        <div className="relative h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          />
          
          <div className="noise-overlay absolute inset-0 opacity-[0.7] mix-blend-overlay pointer-events-none" />
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
          
          <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-black/80 rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
              <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
                {['Our story', 'Collective', 'Workshops', 'Programs', 'Inquiries'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      className="text-[10px] sm:text-xs md:text-sm transition-colors duration-300"
                      style={{ color: 'rgba(225, 224, 204, 0.8)' }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#E1E0CC'; }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = 'rgba(225, 224, 204, 0.8)'; }}
                    >
                      {item.toUpperCase()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          
          <div className="absolute top-12 left-6 md:left-12 lg:left-20 z-10">
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary/70 text-xs tracking-wider">—— 求职作品集</span>
            </div>
          </div>

          <div className="absolute bottom-6 md:bottom-12 lg:bottom-16 left-6 md:left-12 lg:left-20 z-10">
            <div className="max-w-lg">
              <motion.h1
                className="text-[24vw] sm:text-[22vw] md:text-[20vw] lg:text-[16vw] xl:text-[14vw] font-black text-white leading-[0.85] tracking-[-0.07em] mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                AIGC
                <br />
                VISUAL
              </motion.h1>
              
              <motion.h2
                className="text-[8vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] font-medium text-[#D4AF37] tracking-wider mb-6"
                style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                刘天龙
              </motion.h2>
              
              <motion.p
                className="text-gray-300/70 text-[10px] sm:text-xs md:text-sm leading-relaxed mb-6 max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                我叫刘天龙，9年的设计工作经验，现在是一名用AIbeCoding的三维设计师，擅长建模、AIGC视觉创造、IP形象、品牌视觉和建筑设计。熟悉Midjourney、GPT、codex也会用Agent思维把设计做的更高效。
              </motion.p>
              
              <motion.div
                className="flex items-center gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="text-gray-400 text-[10px] sm:text-xs">电话:</span>
                <span className="text-white font-medium text-sm md:text-base">185 2172 8252</span>
              </motion.div>
              
              <motion.div
                className="flex flex-wrap gap-4 md:gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center"
                  >
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#D4AF37] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-[10px] sm:text-xs">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
