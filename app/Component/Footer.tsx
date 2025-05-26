import React from 'react';
import { FaTwitter, FaDiscord, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 bg-gray-900 text-gray-300 border-t border-gray-700 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-xl font-extrabold tracking-tight text-white">
          Block <span className="text-primary">Connect</span>
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-6 text-sm font-medium">
          <a
            href="/about"
            className="hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="hover:text-primary transition-colors"
          >
            Contact
          </a>
          <a
            href="/privacy"
            className="hover:text-primary transition-colors"
          >
            Privacy Policy
          </a>
        </nav>

        {/* Social Icons */}
        <div className="flex space-x-5 text-gray-400 hover:text-primary transition-colors text-lg">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-primary"
          >
            <FaTwitter />
          </a>
          <a
            href="https://discord.gg/yourserver"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:text-primary"
          >
            <FaDiscord />
          </a>
          <a
            href="https://github.com/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-xs text-gray-500 select-none">
        &copy; {new Date().getFullYear()} Block Connect. All rights reserved.
      </p>
    </footer>
  );
}
