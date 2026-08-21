"use client";
import {ArrowRight} from "lucide-react";
export function PartnerWaitlistLink(){return <a className="button" href="#waitlist" onClick={()=>window.dispatchEvent(new CustomEvent("imboni-role",{detail:"Photographer"}))}>Partner with Imboni <ArrowRight/></a>}
