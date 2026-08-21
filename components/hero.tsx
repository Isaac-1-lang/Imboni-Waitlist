"use client";
import {motion} from "framer-motion";
import {ArrowRight,Check,ScanFace} from "lucide-react";
import {track} from "@/lib/analytics";
const moments=["arrival","stage","portrait","crowd","celebration"];
export function Hero(){return <section id="top" className="hero-inspired"><div className="shell hero-stage">
<motion.div className="hero-copy" initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.65}}>
<p className="eyebrow"><span/>AI-powered event memory discovery</p><h1>Your event<br/><em>remembers you.</em></h1>
<p className="lede">Upload one selfie and Imboni finds the event photos you appeared in—without scrolling through thousands of pictures.</p>
<div className="actions"><a className="button" href="#waitlist" onClick={()=>track("hero_waitlist_clicked",{location:"hero"})}>Join the waitlist <ArrowRight size={18}/></a><a className="text-link" href="#professionals">For photographers &amp; organizers <ArrowRight size={15}/></a></div>
<p className="hero-note">No app required. Built for effortless event photo discovery.</p></motion.div>
<motion.div className="moment-gallery" initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.15}} aria-label="A gallery of event moments being searched by Imboni">
{moments.map((moment,index)=><motion.div className={`moment-card moment-${index+1}`} key={moment} initial={{opacity:0,y:34}} animate={{opacity:index===0||index===4?.72:1,y:0}} transition={{duration:.65,delay:.22+index*.08}} whileHover={{y:-8}}><span className="card-scan-line"/><span className="moment-label">{moment}</span>{[1,3].includes(index)&&<motion.span className="match-pill" initial={{scale:0}} animate={{scale:1}} transition={{delay:1+index*.15}}><Check size={12}/>Match</motion.span>}</motion.div>)}
<motion.div className="scan-orbit" animate={{boxShadow:["0 0 0 0 rgba(200,255,77,.28)","0 0 0 10px rgba(200,255,77,0)"]}} transition={{duration:1.8,repeat:1}}><ScanFace/><span>Scanning event photos…</span></motion.div>
<div className="scan-pulse" aria-hidden="true"><ScanFace/><i/><i/><i/></div><div className="moments-found"><Check size={15}/><strong>18 moments found</strong></div></motion.div>
</div></section>}
