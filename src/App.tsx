/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Instagram, 
  ExternalLink, 
  Mail, 
  User, 
  FileText, 
  BookOpen, 
  MessageSquare, 
  ChevronRight,
  Github,
  Linkedin,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Award
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hakkımda', href: '#hakkimda', icon: User },
    { name: 'Özgeçmiş', href: '#ozgecmis', icon: FileText },
    { name: 'Yayınlar', href: '#yayinlar', icon: BookOpen },
    { name: 'İletişim', href: '#iletisim', icon: MessageSquare },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cyborg-bg/90 backdrop-blur-md border-b border-cyborg-accent/20 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-bold text-cyborg-accent tracking-tighter"
        >
          SUDE<span className="text-white">NAZ</span>
        </motion.a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center space-x-2 text-sm font-display hover:text-cyborg-accent transition-colors group"
            >
              <link.icon size={14} className="group-hover:rotate-12 transition-transform" />
              <span>{link.name}</span>
            </motion.a>
          ))}
        </div>

        <motion.a
          href="https://uskudar.edu.tr/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="px-4 py-2 border border-cyborg-accent text-cyborg-accent text-xs font-display hover:bg-cyborg-accent hover:text-black transition-all duration-300 cyborg-glow"
        >
          ÜSKÜDAR ÜNİ.
        </motion.a>
      </div>
    </nav>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '60px' }}
      className="h-1 bg-cyborg-accent mb-4"
    />
    <h2 className="text-4xl md:text-5xl font-display font-bold mb-2">{title}</h2>
    {subtitle && <p className="text-cyborg-accent font-mono text-sm uppercase tracking-widest">{subtitle}</p>}
  </div>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen grid-bg">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyborg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyborg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 z-10 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyborg-accent font-mono mb-4 tracking-[0.3em] uppercase">Yeni Medya & İletişim</p>
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-none mb-6">
              SUDENAZ <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyborg-accent to-cyborg-secondary">
                ULUDOĞAN
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
              Üsküdar Üniversitesi İletişim Fakültesi 3. sınıf öğrencisi. 
              Dijital dünyanın dinamiklerine ve yeni nesil iletişim stratejilerine odaklanan bir içerik üreticisi.
            </p>
            
            <div className="flex space-x-6">
              <a 
                href="https://www.instagram.com/sudeu0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-cyborg-border hover:border-cyborg-accent hover:text-cyborg-accent transition-all group"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="#iletisim" 
                className="px-8 py-4 bg-cyborg-accent text-black font-display font-bold hover:bg-white transition-all cyborg-glow"
              >
                BANA ULAŞIN
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative hidden md:block"
          >
            <div className="relative z-10 border-2 border-cyborg-accent/30 p-4">
              <img 
                src="https://picsum.photos/seed/cyborg-tech/600/800" 
                alt="Sudenaz Uludoğan" 
                className="grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-cyborg-accent" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyborg-secondary" />
            </div>
            <div className="absolute -z-10 top-10 left-10 w-full h-full border border-cyborg-accent/10" />
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cyborg-accent/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyborg-accent to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="hakkimda" className="py-32 bg-cyborg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading title="Hakkımda" subtitle="Kimim Ben?" />
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Ben, Sudenaz Uludoğan. Üsküdar Üniversitesi İletişim Fakültesi, Yeni Medya ve İletişim Bölümü 3. sınıf öğrencisiyim. 22 yaşındayım.
                </p>
                <p>
                  Dijital dünyanın hızla değişen dinamiklerine, yeni nesil iletişim stratejilerine ve yaratıcı içerik üretimine derin bir ilgi duyuyorum. Akademik eğitimimi pratik projelerle birleştirerek, geleceğin medya dünyasında fark yaratmayı hedefliyorum.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="p-4 border border-cyborg-border bg-cyborg-bg/50">
                    <p className="text-cyborg-accent font-display text-2xl">22</p>
                    <p className="text-xs uppercase font-mono text-gray-500">Yaş</p>
                  </div>
                  <div className="p-4 border border-cyborg-border bg-cyborg-bg/50">
                    <p className="text-cyborg-accent font-display text-2xl">3.</p>
                    <p className="text-xs uppercase font-mono text-gray-500">Sınıf</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="p-8 border border-cyborg-border bg-cyborg-bg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <GraduationCap size={40} className="text-cyborg-accent" />
                </div>
                <h3 className="text-xl font-display mb-4 flex items-center">
                  <GraduationCap className="mr-3 text-cyborg-accent" size={20} />
                  Eğitim
                </h3>
                <p className="text-cyborg-accent font-bold">Üsküdar Üniversitesi</p>
                <p className="text-sm text-gray-400">Yeni Medya ve İletişim (Lisans)</p>
                <p className="text-xs text-gray-500 mt-2">2023 - Günümüz</p>
                <a 
                  href="https://uskudar.edu.tr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center text-xs text-cyborg-accent hover:underline"
                >
                  Üniversite Sayfası <ExternalLink size={12} className="ml-1" />
                </a>
              </div>

              <div className="p-8 border border-cyborg-border bg-cyborg-bg relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <Briefcase size={40} className="text-cyborg-secondary" />
                </div>
                <h3 className="text-xl font-display mb-4 flex items-center">
                  <Briefcase className="mr-3 text-cyborg-secondary" size={20} />
                  Uzmanlık Alanları
                </h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="flex items-center"><ChevronRight size={14} className="text-cyborg-secondary mr-2" /> Dijital İletişim Stratejileri</li>
                  <li className="flex items-center"><ChevronRight size={14} className="text-cyborg-secondary mr-2" /> İçerik Üretimi & Yönetimi</li>
                  <li className="flex items-center"><ChevronRight size={14} className="text-cyborg-secondary mr-2" /> Yeni Medya Dinamikleri</li>
                  <li className="flex items-center"><ChevronRight size={14} className="text-cyborg-secondary mr-2" /> Sosyal Medya Analizi</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="ozgecmis" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Özgeçmiş" subtitle="Deneyim & Yetkinlikler" />
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                title: "İçerik Stratejisti",
                company: "Freelance Projeler",
                desc: "Dijital platformlar için hedef kitle odaklı içerik planlaması ve üretimi."
              },
              {
                year: "2023",
                title: "Yeni Medya Atölyesi",
                company: "Üsküdar Üniversitesi",
                desc: "Üniversite bünyesinde gerçekleştirilen medya projelerinde aktif rol alma."
              },
              {
                year: "2022",
                title: "Dijital Pazarlama Eğitimi",
                company: "Online Sertifika",
                desc: "SEO, SEM ve sosyal medya reklamcılığı üzerine kapsamlı eğitimler."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-8 border border-cyborg-border bg-cyborg-card hover:border-cyborg-accent transition-all group"
              >
                <span className="text-cyborg-accent font-mono text-sm">{item.year}</span>
                <h3 className="text-xl font-display mt-2 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{item.company}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="text-2xl font-display mb-10 flex items-center">
              <Award className="mr-3 text-cyborg-accent" /> Yetenekler
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Adobe Premiere', 'Canva Pro', 'Social Media Analytics', 'Copywriting', 'Digital PR', 'Video Editing', 'Brand Identity', 'SEO Basics'].map((skill, i) => (
                <div key={i} className="px-6 py-4 border border-cyborg-border bg-cyborg-bg/30 text-center font-mono text-sm hover:text-cyborg-accent hover:border-cyborg-accent transition-all">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="yayinlar" className="py-32 bg-cyborg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="Yayınlar" subtitle="Dijital İçerikler & Makaleler" />
          
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "Yeni Nesil İletişimde Yapay Zeka",
                category: "Makale",
                date: "Mart 2024",
                image: "https://picsum.photos/seed/ai-media/800/450"
              },
              {
                title: "Sosyal Medya Algoritmaları ve Etkileşim",
                category: "Blog Yazısı",
                date: "Ocak 2024",
                image: "https://picsum.photos/seed/social-algo/800/450"
              }
            ].map((pub, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden border border-cyborg-border mb-6">
                  <img 
                    src={pub.image} 
                    alt={pub.title} 
                    className="w-full aspect-video object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-cyborg-accent text-black text-[10px] font-display font-bold">
                    {pub.category}
                  </div>
                </div>
                <h3 className="text-2xl font-display group-hover:text-cyborg-accent transition-colors">{pub.title}</h3>
                <p className="text-gray-500 font-mono text-xs mt-2">{pub.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="iletisim" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading title="İletişim" subtitle="Bağlantıda Kalalım" />
          
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <p className="text-gray-400 text-lg mb-10">
                Projeleriniz, iş birlikleri veya sadece merhaba demek için bana ulaşabilirsiniz. 
                Dijital dünyayı birlikte keşfedelim.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-cyborg-border flex items-center justify-center group-hover:border-cyborg-accent transition-all">
                    <Mail className="text-cyborg-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase">E-Posta</p>
                    <p className="text-lg font-display">sudenaz@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-cyborg-border flex items-center justify-center group-hover:border-cyborg-accent transition-all">
                    <Instagram className="text-cyborg-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase">Instagram</p>
                    <a href="https://www.instagram.com/sudeu0" target="_blank" rel="noopener noreferrer" className="text-lg font-display hover:text-cyborg-accent transition-colors">@sudeu0</a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="w-12 h-12 border border-cyborg-border flex items-center justify-center group-hover:border-cyborg-accent transition-all">
                    <MapPin className="text-cyborg-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono uppercase">Konum</p>
                    <p className="text-lg font-display">İstanbul, Türkiye</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-display text-gray-500 uppercase">İsim</label>
                  <input type="text" className="w-full bg-cyborg-card border border-cyborg-border p-4 focus:border-cyborg-accent outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-display text-gray-500 uppercase">E-Posta</label>
                  <input type="email" className="w-full bg-cyborg-card border border-cyborg-border p-4 focus:border-cyborg-accent outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-display text-gray-500 uppercase">Konu</label>
                <input type="text" className="w-full bg-cyborg-card border border-cyborg-border p-4 focus:border-cyborg-accent outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-display text-gray-500 uppercase">Mesaj</label>
                <textarea rows={5} className="w-full bg-cyborg-card border border-cyborg-border p-4 focus:border-cyborg-accent outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-cyborg-accent text-black font-display font-bold hover:bg-white transition-all cyborg-glow">
                MESAJI GÖNDER
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-cyborg-border bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="font-display text-lg tracking-tighter">SUDE<span className="text-cyborg-accent">NAZ</span></p>
            <p className="text-xs text-gray-500 font-mono mt-1">© 2026 Tüm Hakları Saklıdır.</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/sudeu0" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyborg-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-cyborg-accent transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-gray-500 hover:text-cyborg-accent transition-colors"><Github size={20} /></a>
          </div>

          <div className="text-xs font-mono text-gray-500">
            Design by <span className="text-cyborg-accent">Cyborg System</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
