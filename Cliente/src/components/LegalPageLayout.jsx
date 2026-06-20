import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SITE } from '../data/site';

export default function LegalPageLayout({ title, description, children }) {
  return (
    <>
      <Helmet>
        <title>{title} | {SITE.name}</title>
        {description && <meta name="description" content={description} />}
      </Helmet>
      <div className="min-h-screen bg-slate-950 flex flex-col">
        <Navbar />
        <main className="flex-1 pt-24 pb-16">
          <div className="container mx-auto px-6 max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Volver al inicio
            </Link>
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
