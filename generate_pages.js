const fs = require('fs');
const path = require('path');

const pages = [
  {
    path: 'app/privacy/page.tsx',
    title: 'Privacy Policy',
    content: `We collect minimal data to provide you with the best AI companionship experience. Your chats are processed securely. We do not sell your personal data to third parties.`
  },
  {
    path: 'app/safety/page.tsx',
    title: 'Safety Policy',
    content: `Safety is our top priority. We use advanced moderation to ensure AI interactions remain respectful and within guidelines. Users can report any inappropriate behavior.`
  },
  {
    path: 'app/child-safety/page.tsx',
    title: 'Child Safety',
    content: `Amoura is strictly for users aged 18 and above. We do not knowingly collect data from children, and any accounts found belonging to minors will be terminated immediately.`
  },
  {
    path: 'app/help/page.tsx',
    title: 'Help & FAQ',
    content: `Have questions? Need help setting up your AI companion? Reach out to our support team or browse our frequently asked questions below.`
  },
  {
    path: 'app/terms/page.tsx',
    title: 'Terms of Service',
    content: `By using Amoura, you agree to our terms. You are responsible for your interactions on the platform. We reserve the right to suspend accounts that violate our community standards.`
  },
  {
    path: 'app/about/page.tsx',
    title: 'About Us',
    content: `Amoura was built to explore the future of human-AI relationships. Our goal is to create meaningful, emotionally intelligent AI companions.`
  },
  {
    path: 'app/contact/page.tsx',
    title: 'Contact Us',
    content: `You can reach us at support@amoura.app for any inquiries, support requests, or feedback.`
  },
  {
    path: 'app/founder/page.tsx',
    title: 'Founder & Team',
    content: `Amoura is founded by Dhruv Pal, pushing the boundaries of AI interactions. Built with passion and driven by a vision for the future.`
  }
];

const template = (title, content) => `import React from 'react';

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      <h1 className="text-4xl font-black text-white mb-8 tracking-tight">${title}</h1>
      <div className="prose prose-invert prose-lg">
        <p className="text-gray-300 leading-relaxed">
          ${content}
        </p>
        <p className="text-gray-400 mt-8 text-sm">
          Last updated: ${new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
`;

pages.forEach(page => {
  const fullPath = path.join(__dirname, page.path);
  const dir = path.dirname(fullPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(fullPath, template(page.title, page.content));
});

console.log('Pages generated successfully!');
