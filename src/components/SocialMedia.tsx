import {
    Facebook,
    Linkedin,
    Twitter,
    Youtube,
  } from "../components/icon";
  import Link from "next/link";
  
  export default function SocialMedia() {
    return (
     <nav className="flex gap-2 ">
        <Link href={""} target="_blank">
          <Youtube className={`w-6 h-6`} />
        </Link>
         <Link href={""} target="_blank">
          <Linkedin className={`w-6 h-6`} />
        </Link> 
         <Link href={""} target="_blank">
          <Twitter className={`w-4 h-4 `} fill="light" />
        </Link> 
       <Link href={""} target="_blank">
          <Facebook className={`w-4 h-4`} />
        </Link> 
      </nav>
    );
  }