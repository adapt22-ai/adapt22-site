// src/app/page.js — Updated with Final Brand Colors and Button Assignments


import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
 return (
   <div className="bg-background text-text-primary">
     {/* Hero Section */}
     <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center">
 <video
   autoPlay
   muted
   loop
   playsInline
   className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
 >
   <source src="/bg-new.mp4" type="video/mp4" />
 </video>


 <div className="relative z-10 text-center max-w-4xl px-8">
   <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8 drop-shadow-xl text-white">
     AI Automation for the Businesses That Keep Our World Running
   </h1>
   <p className="text-xl md:text-2xl mb-8 text-textMuted font-medium max-w-3xl mx-auto drop-shadow-md">
     Adapt22 offers white-glove implementation, management, and scaling
     of AI-powered communication and automation systems — built for SMBs in the
     trades, field services, construction, retail, and medical practices.
   </p>
   <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
     <Link
       href="/book-a-call"
       className="inline-block bg-primaryLight text-black text-xl font-semibold px-10 py-4 rounded-full shadow hover:brightness-110 transition"
     >
       Book a Call
     </Link>
     <Link
       href="/demo"
       className="inline-block bg-primaryDark text-white text-xl font-semibold px-10 py-4 rounded-full shadow hover:brightness-110 transition"
     >
       Try Our Demo
     </Link>
   </div>
 </div>
</section>


     {/* AI Service Cards Section */}
     <section className="bg-background py-20 px-6 text-white">
       <div className="max-w-screen-xl mx-auto space-y-10">
         <div className="bg-surface p-8 rounded-lg shadow-md hover:shadow-lg transition text-center text-accentIndigo border-l-4 border-primaryDark">
 <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
   Custom AI Implementation, Tailored to You
 </h3>
 <p className="text-md max-w-3xl mx-auto textMuted">
   We specialize in white-glove AI communication and automation services that adapt to your unique business needs.
   Whether you're looking to overhaul your entire tech stack or implement one tool that finally works,
   we’ll plan it, customize it, build it, and manage it — end to end. You don’t lift a finger.
   Our goal is simple: remove complexity, streamline operations, and help you scale smarter.
 </p>
</div>


         <div className="grid gap-10 md:grid-cols-3 text-left">
           {[{
 title: "AI Calling & Text Bots",
 desc: "24/7 voice and SMS systems that handle quotes, bookings, and FAQs — hands-free."
}, {
 title: "CRM & Calendar Automation",
 desc: "Instantly sync leads, jobs, and schedules. Never forget a follow-up again."
}, {
 title: "AI-Generated Proposals",
 desc: "Close more jobs with intelligent proposal templates powered by AI."
}, {
 title: "Meta & Google Ad Management",
 desc: "We drive traffic with smart campaigns — or plug into your existing pipeline."
}, {
 title: "Intelligent Lead Routing",
 desc: "Route new jobs to the right reps or techs based on zip code, priority, or availability."
}, {
 title: "Automated Email & Follow-ups",
 desc: "Send timely emails and reminders using AI to boost conversions and reduce no-shows."
}].map(({ title, desc }, i) => (
 <div key={i} className="bg-surface p-6 rounded-lg shadow hover:shadow-md transition text-white border-l-4 border-primaryDark">
   <h3 className="text-xl font-bold mb-2">{title}</h3>
   <p className="text-sm textMuted">{desc}</p>
 </div>
))}
         </div>
       </div>
     </section>


     {/* Value Proposition */}
     <section className="bg-surface text-center">
       <div className="max-w-4xl mx-auto space-y-4">
         <h2 className="text-3xl md:text-4xl font-bold">
           Whether it’s managing one tool or your entire tech stack, we are here to serve you:
         </h2>
         <p className="text-lg textMuted">
           Get time back. Reduce costs. Scale smarter — without the headache.
         </p>
         <p className="text-lg textMuted">
           Focus on what matters: the craft you’ve mastered and the company you lead.
         </p>
         <p className="text-lg textMuted">
           You maintain full control — we just handle the heavy lifting.
         </p>
         <Link
           href="/what-we-do"
           className="inline-block mt-8 bg-primaryDark text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:brightness-110 transition"
         >
           See What We Do
         </Link>
       </div>
     </section>


     {/* Mission Statement */}
<section className="bg-background text-left">
 <div className="max-w-4xl mx-auto space-y-10">
   <h2 className="text-3xl md:text-4xl font-bold text-textPrimary">
     Adapt22 Mission:{" "}
     <span className="text-primaryLight">Serving Those Who Serve Us.</span>
   </h2>


   <div className="border-l-4 pl-6 space-y-6" style={{ borderColor: "#e0ee28" }}>
     {[
       "Your work is essential to keep our world running and you deserve the same tools that billion-dollar companies have.",
       "Our focus is to understand the problems that cause wasted time and money, and then implement tailored solutions that actually work for you.",
       "We exist to remove the burden that AI and software can be by creating a tech environment tailored to your team, goals, and needs.",
       "Let us handle everything from implementing AI tools, customizing workflows, and automating busy work.",
       "You name your problems and we give solutions."
     ].map((text, index) => (
       <p
         key={index}
         className="text-md flex items-start gap-2 font-medium text-textPrimary"
       >
         <span className="text-primaryLight text-lg leading-6">➜</span>
         {text}
       </p>
     ))}
   </div>


   <div className="text-center">
     <Link
       href="/who-we-are"
       className="inline-block mt-8 bg-primaryDark text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:brightness-110 transition"
     >
       Learn More About Adapt22
     </Link>
   </div>
 </div>
</section>
   </div>
 );
}




