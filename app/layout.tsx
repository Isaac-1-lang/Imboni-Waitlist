import type {Metadata} from "next";import "./globals.css";import "./responsive.css";import "./inspiration.css";import "./navbar-inspired.css";import "./motion-polish.css";
const description="Imboni uses AI to help event guests discover the photos and memories they appeared in—without scrolling through thousands of images.";
export const metadata:Metadata={title:"Imboni — Find Yourself in Every Event",description,metadataBase:new URL("https://imboni.app"),openGraph:{title:"Imboni — Find Yourself in Every Event",description,type:"website",siteName:"Imboni",images:[{url:"/og.png",width:1200,height:630,alt:"Your event remembers you — Imboni"}]},twitter:{card:"summary_large_image",title:"Imboni — Find Yourself in Every Event",description,images:["/og.png"]},icons:{icon:"/favicon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

