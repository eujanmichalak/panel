"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { 
  Shield, 
  Target, 
  Users, 
  Wallet, 
  Gavel, 
  BookOpen,
  FileText
} from 'lucide-react';

const Paragraf = ({ numer, children }: { numer: string, children: React.ReactNode }) => (
  <div className="mb-8 md:mb-10 group">
    <div className="flex items-center gap-2 mb-3">
      <div className="h-[1px] w-4 md:w-6 bg-green-900 group-hover:w-10 group-hover:bg-green-500 transition-all"></div>
      <span className="text-green-500 font-mono text-[8px] md:text-[10px] tracking-[0.3em] font-bold">PARAGRAF_{numer}</span>
    </div>
    <div className="pl-4 md:pl-8 text-gray-300 text-xs md:text-sm leading-relaxed border-l border-green-900/30 group-hover:border-green-500/50 transition-colors text-left whitespace-pre-line">
      {children}
    </div>
  </div>
);

const Rozdzial = ({ tytul, children, ikonka }: { tytul: string, children: React.ReactNode, ikonka: React.ReactNode }) => (
  <section className="mb-16 md:mb-24">
    <div className="flex items-center gap-4 mb-8 md:mb-12 border-b border-green-900/50 pb-6 text-left">
      <div className="text-green-500 p-2 md:p-3 bg-green-950/20 border border-green-900/50 shrink-0">
        {ikonka}
      </div>
      <h2 className="text-sm md:text-xl font-black uppercase tracking-widest text-white leading-tight">{tytul}</h2>
    </div>
    <div className="space-y-2">{children}</div>
  </section>
);

export default function DokumentacjaPage() {
  return (
    <div className="min-h-screen bg-black text-white bg-[radial-gradient(#14532d_0.5px,transparent_0.5px)] [background-size:20px_20px] md:[background-size:25px_25px]">
      <Navbar />
      
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="mb-16 md:mb-28 text-center space-y-4 md:space-y-6">
          <div className="inline-block px-3 py-1 bg-green-900/10 border border-green-600/50 text-green-500 text-[8px] md:text-[10px] font-mono tracking-[0.3em] md:tracking-[0.5em] uppercase mb-2">
            Security Protocol // Master Document
          </div>
          <h1 className="text-3xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            STATUT <br/><span className="text-green-500 text-xl md:text-5xl tracking-normal">SAAS GORZÓW</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-[8px] md:text-[9px] font-mono text-gray-500 uppercase tracking-widest pt-4">
            <span>Ver: 1.0.0</span>
            <span>Auth: Zarząd SAAS</span>
            <span>Loc: Gorzów Wlkp.</span>
          </div>
        </div>

        <div className="bg-black/90 backdrop-blur-xl border border-green-900/40 p-5 md:p-20 relative shadow-2xl">
          
          <Rozdzial tytul="Rozdział I – Postanowienia ogólne" ikonka={<Shield className="w-5 h-5 md:w-7 md:h-7" />}>
            <Paragraf numer="1">Stowarzyszenie nosi nazwę: STOWARZYSZENIE AMATORSKICH AKTYWNOŚCI SPORTOWYCH, zwane dalej „Stowarzyszeniem”.</Paragraf>
            <Paragraf numer="2">Siedzibą Stowarzyszenia jest Gorzów Wielkopolski.</Paragraf>
            <Paragraf numer="3">Stowarzyszenie działa na terenie Rzeczypospolitej Polskiej oraz – w razie potrzeby – poza jej granicami.</Paragraf>
            <Paragraf numer="4">Stowarzyszenie działa na podstawie ustawy Prawo o stowarzyszeniach oraz niniejszego statutu.</Paragraf>
            <Paragraf numer="5">Stowarzyszenie posiada osobowość prawną.</Paragraf>
            <Paragraf numer="6">Czas trwania Stowarzyszenia jest nieoznaczony.</Paragraf>
          </Rozdzial>

          <Rozdzial tytul="Rozdział II – Cele i sposoby działania" ikonka={<Target className="w-5 h-5 md:w-7 md:h-7" />}>
            <Paragraf numer="7">Celem Stowarzyszenia jest prowadzenie działalności sportowej, w szczególności organizowanie i prowadzenie amatorskich rozgrywek ligowych, turniejów i wydarzeń sportowych, promocja zdrowego stylu życia oraz integracja społeczności lokalnej poprzez sport.</Paragraf>
            <Paragraf numer="8">
              Stowarzyszenie realizuje swoje cele poprzez m.in.:{"\n"}
              1. organizowanie lig, turniejów i zawodów;{"\n"}
              2. prowadzenie wydarzeń sportowych;{"\n"}
              3. pozyskiwanie sponsorów, partnerów i darczyńców;{"\n"}
              4. działania promocyjne i informacyjne;{"\n"}
              5. zakup i udostępnianie sprzętu sportowego;{"\n"}
              6. działania integracyjne i edukacyjne.
            </Paragraf>
            <Paragraf numer="9">
              1. Szczegółowe zasady rozgrywek określa regulamin ligi sporządzany przez Zarząd.{"\n"}
              2. Regulamin ligi, turnieju lub innego wydarzenia sportowego jest dokumentem odrębnym od statutu.{"\n"}
              3. Zmiana regulaminu nie wymaga zmiany statutu ani zgłoszenia do KRS.
            </Paragraf>
            <Paragraf numer="9a">
              1. Zmiana regulaminów lig, turniejów i zawodów następuje uchwałą Zarządu.{"\n"}
              2. Ustalanie oraz zmiana wysokości składek członkowskich, wpisowego i opłat ligowych wymaga uchwałą Zarządu.{"\n"}
              3. Uchwały Zarządu są dokumentowane w formie pisemnej lub elektronicznej.
            </Paragraf>
          </Rozdzial>

          <Rozdzial tytul="Rozdział III – Członkowie" ikonka={<Users className="w-5 h-5 md:w-7 md:h-7" />}>
            <Paragraf numer="10">
              1. Stowarzyszenie ma członków zwyczajnych, wspierających i honorowych.{"\n"}
              2. Członkiem zwyczajnym może zostać osoba fizyczna, która: a) ukończyła 16 lat, b) akceptuje statut, c) złoży pisemną deklarację i została przyjęta uchwałą Zarządu.{"\n"}
              3. Członkiem wspierającym może być osoba fizyczna lub prawna wspierająca działalność Stowarzyszenia.{"\n"}
              4. Członkiem honorowym może zostać osoba fizyczna wyróżniona uchwałą Walnego Zebrania.{"\n"}
              5. Członkostwo ustaje przez rezygnację, wykluczenie, śmierć lub likwidację osoby prawnej.{"\n"}
              6. Od decyzji Zarządu przysługuje odwołanie do Walnego Zebrania w terminie 30 dni.
            </Paragraf>
            <Paragraf numer="11a">
              Członek zwyczajny ma prawo: a) czynnego i biernego prawa wyborczego; b) uczestniczenia w Walnym Zebraniu; c) udziału w działalności i projektach; d) zgłaszania wniosków; e) korzystania z działalności.
            </Paragraf>
            <Paragraf numer="11b">
              Członek wspierający ma prawo: a) uczestniczyć w Walnym Zebraniu z głosem doradczym; b) zgłaszać uwagi; c) uczestniczyć w działaniach. Nie posiada prawa wyborczego.
            </Paragraf>
            <Paragraf numer="11c">
              Członek honorowy uczestniczy w Walnym Zebraniu, zgłasza wnioski i opinie. Nie posiada prawa wyborczego.
            </Paragraf>
            <Paragraf numer="12">
              Członek zobowiązany jest do: a) przestrzegania statutu; b) dbania o dobre imię; c) opłacania składek.
            </Paragraf>
            <Paragraf numer="12a">
              Osoby w wieku 16–18 lat mogą być członkami za zgodą rodzica/opiekuna; mają prawa członkowskie, w tym wyborcze, z zastrzeżeniem, że Zarząd musi mieć większość pełnoletnich.
            </Paragraf>
          </Rozdzial>

          <Rozdzial tytul="Rozdział IV – Władze Stowarzyszenia" ikonka={<Gavel className="w-5 h-5 md:w-7 md:h-7" />}>
            <Paragraf numer="13">Władzami są: 1. Walne Zebranie Członków; 2. Zarząd; 3. Komisja Rewizyjna.</Paragraf>
            <Paragraf numer="13a">Walne Zebranie wybiera Zarząd, Komisję Rewizyjną i podejmuje uchwały dotyczące działalności.</Paragraf>
            <Paragraf numer="14">
              1. Zarząd: Prezes, Wiceprezes i Sekretarz. 2. Kadencja: 5 lat. 3. Zarząd reprezentuje, zarządza majątkiem, uchwala regulaminy, powołuje koordynatorów, ustala składki i przyjmuje członków.
            </Paragraf>
            <Paragraf numer="15">
              1. Zarząd reprezentuje Stowarzyszenie na zewnątrz. 2. Oświadczenia składa Prezes samodzielnie LUB dwóch członków Zarządu razem. 4. W umowach z członkiem Zarządu reprezentuje go Komisja Rewizyjna.
            </Paragraf>
            <Paragraf numer="16">Członek Zarządu odwołany uchwałą Walnego Zebrania większością 2/3 przy obecności min. 50% członków.</Paragraf>
            <Paragraf numer="17">Komisja Rewizyjna (Przewodniczący + 2 członków) kontroluje działalność min. raz w roku.</Paragraf>
          </Rozdzial>

          <Rozdzial tytul="Rozdział V – Majątek i finanse" ikonka={<Wallet className="w-5 h-5 md:w-7 md:h-7" />}>
            <Paragraf numer="18">
              1. Majątek stanowią środki pieniężne i inne składniki. 2. Źródła: składki, darowizny, wpływy ze statutowej, dotacje, granty i sponsoring. 3. Środki wyłącznie na cele statutowe.
            </Paragraf>
            <Paragraf numer="19">Przeznaczenie: wynajem obiektów, sprzęt, nagrody, promocja, obsługa sędziowska, koszty organizacyjne.</Paragraf>
            <Paragraf numer="20">Działalność gospodarcza wyłącznie w zakresie celów statutowych.</Paragraf>
            <Paragraf numer="21">1. Zarząd wydaje samodzielnie do kwoty ustalonej przez Walne. Powyżej tej kwoty wymagana uchwała.</Paragraf>
          </Rozdzial>

          <Rozdzial tytul="Rozdział VI i VII – Administracja" ikonka={<BookOpen className="w-5 h-5 md:w-7 md:h-7" />}>
            <Paragraf numer="21a">Dokumentacja papierowa lub elektroniczna (Word, PDF) ma taką samą moc prawną.</Paragraf>
            <Paragraf numer="22">Zmiana statutu wymaga większości 2/3 głosów Walnego Zebrania.</Paragraf>
            <Paragraf numer="23">W przypadku likwidacji majątek przechodzi na cele statutowe zbliżone.</Paragraf>
            <Paragraf numer="24">Statut wchodzi w życie z dniem wpisu do KRS.</Paragraf>
          </Rozdzial>

        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center gap-6">
          <a 
            href="/statut.pdf" 
            download="Statut_SAAS_Gorzow.pdf" 
            className="w-full md:w-auto flex items-center justify-center gap-4 bg-green-600 px-8 md:px-12 py-4 md:py-5 text-black font-black uppercase text-xs tracking-widest hover:bg-green-400 transition-all shadow-lg active:scale-95"
          >
            <FileText size={18} /> Pobierz oficjalny PDF
          </a>
          <p className="text-gray-600 font-mono text-[8px] md:text-[10px] uppercase tracking-widest text-center">
            Kryptograficzna suma kontrolna: SHA-256 Verified
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}