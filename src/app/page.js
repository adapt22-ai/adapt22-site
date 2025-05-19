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


{/* Problems We Solve Section */}
<section className="bg-background py-20 px-6 text-white">
  <div className="max-w-screen-xl mx-auto space-y-16">
    
    {/* Section Header */}
    <div className="bg-surface p-8 rounded-lg shadow-md hover:shadow-lg transition text-center text-accentIndigo border-l-4 border-primaryDark">
      <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
        The Most Common Problems We Solve
      </h3>
      <p className="text-md max-w-5xl mx-auto textMuted">
        No two businesses are the same — and we treat them that way. But whether it’s dropped leads, clunky workflows, or too much manual work, the root causes often echo across industries.
        We hear the following problems constantly — and we’ve built our entire service model around solving them.
      </p>
    </div>

    {/* Problem Blocks Grid */}
    <div className="grid gap-12 md:grid-cols-2">
      
      {/* Missed Leads & Poor Follow-Up */}
      <div className="bg-surface p-6 rounded-lg shadow border-l-4 border-primaryDark">
        <h4 className="text-2xl font-bold mb-4 text-white">Missed Leads & Poor Follow-Up</h4>
        <ul className="space-y-3 text-sm text-textMuted list-disc list-inside leading-relaxed">
          <li>“We can’t follow up fast enough — and lose jobs because of it.”</li>
          <li>“Leads come in from 5 different places and fall through the cracks.”</li>
          <li>“If they don’t call us, we forget they even reached out.”</li>
          <li>“We spend on ads, but the lead quality is terrible.”</li>
        </ul>
      </div>

      {/* Too Many Manual, Repetitive Tasks */}
      <div className="bg-surface p-6 rounded-lg shadow border-l-4 border-primaryDark">
        <h4 className="text-2xl font-bold mb-4 text-white">Too Many Manual, Repetitive Tasks</h4>
        <ul className="space-y-3 text-sm text-textMuted list-disc list-inside leading-relaxed">
          <li>“It feels like we spend half our day clicking buttons and typing when I know there has to be a better way to do this.”</li>
          <li>“We waste hours sending reminders, rescheduling, answering the same questions, filling out paperwork.”</li>
          <li>“Nothing is connected — I have to enter the same info in 3 different places.”</li>
        </ul>
      </div>

      {/* Feeling Stuck in the Day-to-Day */}
      <div className="bg-surface p-6 rounded-lg shadow border-l-4 border-primaryDark">
        <h4 className="text-2xl font-bold mb-4 text-white">Feeling Stuck in the Day-to-Day</h4>
        <ul className="space-y-3 text-sm text-textMuted list-disc list-inside leading-relaxed">
          <li>“Everything depends on me. I can’t take a vacation, much less a day off. I playing catch up instead of spending time with my family.”</li>
          <li>“There’s no system — it’s all in my head and no one seems to understand it but me.”</li>
          <li>“My business isn’t growing because I’m too busy working to maintain everything.”</li>
        </ul>
      </div>

      {/* Missed Calls, No-Shows, Disorganized Communication */}
      <div className="bg-surface p-6 rounded-lg shadow border-l-4 border-primaryDark">
        <h4 className="text-2xl font-bold mb-4 text-white">Missed Calls, No-Shows & Disorganized Communication</h4>
        <ul className="space-y-3 text-sm text-textMuted list-disc list-inside leading-relaxed">
          <li>“I miss calls when I’m on a job — and forget to call back because I am so busy.”</li>
          <li>“Customers forget appointments because our system doesn’t remind them.”</li>
          <li>“We get messages from all over — email, text, DMs, voicemails — and things fall through the cracks.”</li>
        </ul>
      </div>

      {/* Customer Experience That Feels Outdated */}
      <div className="bg-surface p-6 rounded-lg shadow border-l-4 border-primaryDark">
        <h4 className="text-2xl font-bold mb-4 text-white">Customer Experience That Feels Outdated</h4>
        <ul className="space-y-3 text-sm text-textMuted list-disc list-inside leading-relaxed">
          <li>“We don’t look as professional as we are — our process comes off as messy to customers.”</li>
          <li>“Our competitors offer online booking and automated texts — we’re still doing everything manually.”</li>
          <li>“When a customer reschedules or cancels — sometimes our system messes up the dates and reminders.”</li>
        </ul>
      </div>

      {/* Wasted Software & Disconnected Tools */}
      <div className="bg-surface p-6 rounded-lg shadow border-l-4 border-primaryDark">
        <h4 className="text-2xl font-bold mb-4 text-white">Wasted Software & Disconnected Tools</h4>
        <ul className="space-y-3 text-sm text-textMuted list-disc list-inside leading-relaxed">
          <li>“Our systems don’t talk to each other — and we spend so much time manually inputting information across all our systems.”</li>
          <li>“We pay so much for software, but it feels like the features we need are always missing.”</li>
          <li>“It’s all too complicated. My team is always putting out fires caused by our software.”</li>
        </ul>
      </div>
    </div>
  </div>
</section>


     {/* Value Proposition */}
     <section className="bg-surface text-center text-accentIndigo py-12">
       <div className="max-w-4xl mx-auto space-y-4">
         <h2 className="text-3xl md:text-4xl font-bold">
           If any of this sounds familiar, you’re in the right place.
         </h2>
         <p className="text-lg textMuted">
           Get time back. Reduce costs. Scale smarter — without the headache.
         </p>
         <p className="text-lg textMuted">
           Focus on what matters: the craft you’ve mastered and the company you lead.
         </p>
         <p className="text-lg textMuted">
           You maintain full control — we just do the heavy lifting.
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
      className="text-md text-textPrimary flex items-start gap-2"
    >
      <span className="text-primaryLight text-lg leading-6">↠</span>
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




