"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "AI-Powered Product Builder",
  "WordPress Specialist",
];

function TypedRoles() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 35 : 55;
    const timeout = setTimeout(() => {
      if (!deleting) {
        if (text.length < current.length) {
          setText(current.slice(0, text.length + 1));
        } else {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        if (text.length > 0) {
          setText(current.slice(0, text.length - 1));
        } else {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % ROLES.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <span className="text-signal-cyan">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-signal-cyan ml-0.5 align-middle animate-blink" />
    </span>
  );
}

export default function Hero() {
  useEffect(() => {
    fetch("/api/visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ path: "/" }),
    }).catch(() => {});
  }, []);

  return (
    <div id="top" className="relative pt-40 pb-24 sm:pt-48 sm:pb-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border-token border px-3 py-1 text-xs font-mono text-muted mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-signal-cyan opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-signal-cyan" />
            </span>
            available for freelance &amp; full-time roles
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-display text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]"
          >
            Abdelrahman Yousry.
            <br />
            <span className="text-muted">I build interfaces that</span>
            <br />
            ship, scale, and hold up.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 font-mono text-sm sm:text-base h-6"
          >
            <span className="text-muted">const role = </span>
            <TypedRoles />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-xl text-muted text-[15px] leading-relaxed"
          >
            I design and build production web applications — from marketing
            sites to data-dense dashboards — with React, Next.js, Node.js and
            WordPress, and I'm actively deepening my work at the intersection
            of modern web engineering and applied AI.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a href="#projects" className="btn-primary">
              View my work <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              <Mail size={16} /> Get in touch
            </a>
            <a
              href="https://www.linkedin.com/in/abdelrahman-yousry-230768312/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 w-11 grid place-items-center rounded-full border-token border hover:border-signal-cyan/60 hover:text-signal-cyan transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto"
        >
          <div className="relative h-72 w-72 sm:h-80 sm:w-80">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-signal-indigo/30 to-signal-cyan/20 blur-2xl" />
            <div className="relative h-full w-full rounded-[2rem] border-token border overflow-hidden bg-elevated">
            <Image
  src="/myimg.jpg"
  alt="Portrait of Abdelrahman Yousry Abdelaziz"
  width={800}
  height={1000}
  className="w-full h-auto object-cover"
  priority
/>
            </div>
            <div className="absolute -bottom-5 -left-5 card-border px-4 py-3 shadow-glow">
              <p className="font-mono text-[11px] text-muted">status.json</p>
              <p className="font-mono text-xs text-signal-cyan mt-1">
                {"{ open_to_work: true }"}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
