import React from 'react';

const Footer = () => {
  const footerLinks = {
    products: [
      { section: 'Products', links: ['Chat', 'Build', 'Imagine', 'Voice', 'Bot', 'Grokipedia'] },
      { section: 'Download', links: ['grok.com', 'iOS', 'Android', 'Grok on X'] }
    ],
    solutions: [
      { section: 'Solutions', links: ['Business', 'Startups', 'Government', 'Customer Support', 'Legal', 'Security', 'Use Cases'] },
      { section: '', links: ['Grok Bot', 'Overview', 'Marketplace', 'Guides', 'Use Cases', 'Changelog'] } // No header for the second block
    ],
    developers: [
      { section: 'Developers', links: ['API Overview', 'Pricing', 'Models', 'Console', 'Changelog', 'Docs', 'Status'] },
      { section: 'Enterprise', links: ['Contact Sales', 'FAQs', 'BAA', 'DPA'] }
    ],
    company: [
      { section: 'Company', links: ['About', 'Colossus', 'Careers', 'Partners', 'News', 'Contact'] },
      { section: 'Trust', links: ['Safety', 'Security', 'Privacy Portal', 'Subprocessors', 'Help Center'] }
    ],
    legal: [
      { section: 'Legal', links: ['Terms', 'Enterprise Terms', 'Startup Terms', 'Privacy', 'Cookies', 'AUP', 'Brand', 'Privacy choices'] },
      { section: 'Social', links: ['@SpaceXSI', '@grok', 'Discord'] } // Update these links with your own
    ]
  };

  return (
    <footer className="w-full bg-background border-t border-surface pt-16 pb-8 px-6 md:px-12 lg:px-16 text-sm">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8">
        
        {/* Logo & Copyright (Left Column) */}
        <div className="lg:col-span-1 flex flex-col justify-between min-h-[300px]">
          <div>
            {/* Logo Placeholder */}
            <div className="h-8 mb-4 flex items-center">
              {/* <img src="/assets/your-logo.png" alt="Logo" className="h-6 dark:invert" /> */}
              <span className="text-xl font-bold tracking-widest text-primary">YOUR LOGO</span>
            </div>
            <p className="text-muted text-xs">© {new Date().getFullYear()} AB Corp Super Intelligence LLC</p>
          </div>
        </div>

        {/* Link Columns */}
        <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-muted">
          {Object.entries(footerLinks).map(([key, groups], idx) => (
            <div key={idx} className="flex flex-col gap-10">
              {groups.map((group, groupIdx) => (
                <div key={groupIdx} className="flex flex-col gap-3">
                  {group.section && (
                    <h4 className="text-primary font-medium mb-1">{group.section}</h4>
                  )}
                  {group.links.map((link, linkIdx) => (
                    <a key={linkIdx} href="#" className="hover:text-primary transition-colors">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;