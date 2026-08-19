"use client";

import { motion } from "framer-motion";
import { ArrowRight, Camera, Check, ScanFace, Sparkles } from "lucide-react";
import { track } from "@/lib/analytics";

const moments = ["arrival", "stage", "portrait", "crowd", "celebration"];

export function Hero() {
  return <section id="top" className="hero-inspired"><div className="shell hero-stage">
    <motion.div className="hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
      <p className="eyebrow"><span/> AI-powered photo discovery</p>
      <h1>Every event photo.<br/><em>Already found.</em></h1>
      <p className="lede">Upload one photo of yourself and let Imboni find your moments across thousands of event photos.</p>
      <div className="actions"><a className="button" href="#waitlist" onClick={()=>track("hero_waitlist_clicked",{location:"hero"})}>Join the waitlist <ArrowRight size={18}/></a><a className="text-link" href="#how-it-works" onClick={()=>track("how_it_works_clicked")}>See how it works</a></div>
    </motion.div>
    <motion.div className="moment-gallery" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.15}} aria-label="A gallery of event moments being searched by Imboni">
      {moments.map((moment,index)=><motion.div className={`moment-card moment-${index+1}`} key={moment} initial={{opacity:0,y:34}} animate={{opacity:(index===0||index===4) ? 0.72 : 1,y:0}} transition={{duration:.65,delay:.22+index*.08}} whileHover={{y:-10,scale:1.025}}><span className="card-scan-line"/><span className="moment-label">{moment}</span>{[1,3].includes(index)&&<motion.span className="match-pill" initial={{scale:0}} animate={{scale:1}} transition={{type:"spring",delay:1+index*.15}}><Check size={12}/> Match</motion.span>}</motion.div>)}
      <motion.div className="scan-orbit" animate={{boxShadow:["0 0 0 0 rgba(200,255,77,.28)","0 0 0 10px rgba(200,255,77,0)"]}} transition={{duration:1.8,repeat:Infinity}}><ScanFace/><span>Searching 1,847 photos</span></motion.div>
      <div className="scan-pulse" aria-hidden="true"><ScanFace/><i/><i/><i/></div>
    </motion.div>
    <div className="hero-values"><article><ScanFace/><div><strong>Find yourself</strong><p>One reference photo starts the search.</p></div></article><article><Sparkles/><div><strong>Instant discovery</strong><p>Likely matches rise to the top.</p></div></article><article><Camera/><div><strong>Made for events</strong><p>From graduations to conferences.</p></div></article></div>
  </div></section>;
}
