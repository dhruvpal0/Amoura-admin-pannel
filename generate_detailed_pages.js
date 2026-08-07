const fs = require('fs');
const path = require('path');

const email = 'pal664908@gmail.com';
const lastUpdated = new Date().toLocaleDateString();

const pages = [
  {
    path: 'app/privacy/page.tsx',
    title: 'Privacy Policy',
    content: `
      <h2>1. Introduction</h2>
      <p>Welcome to Amoura. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at <a href="mailto:\${email}" className="text-[#FF3B70] hover:underline">\${email}</a>.</p>
      
      <h2>2. Information We Collect</h2>
      <p>We collect personal information that you voluntarily provide to us when you register on the App, express an interest in obtaining information about us or our products and Services, when you participate in activities on the App or otherwise when you contact us.</p>
      <ul>
        <li><strong>Personal Information Provided by You:</strong> We collect names; email addresses; usernames; passwords; contact preferences; contact or authentication data; and other similar information.</li>
        <li><strong>AI Interaction Data:</strong> To provide a personalized AI companion experience, we securely process and store the text, voice messages, and context of your conversations with AI characters.</li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use personal information collected via our App for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
      <ul>
        <li>To facilitate account creation and logon process.</li>
        <li>To post testimonials with your consent.</li>
        <li>To request feedback and to contact you about your use of our App.</li>
        <li>To enable user-to-user (or user-to-AI) communications.</li>
      </ul>

      <h2>4. Will Your Information Be Shared With Anyone?</h2>
      <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations. We do not sell your personal data to advertisers.</p>

      <h2>5. How Long Do We Keep Your Information?</h2>
      <p>We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>

      <h2>6. How Do We Keep Your Information Safe?</h2>
      <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>

      <h2>7. Contact Us</h2>
      <p>If you have questions or comments about this notice, you may email us at <a href="mailto:\${email}" className="text-[#FF3B70] hover:underline">\${email}</a>.</p>
    `
  },
  {
    path: 'app/safety/page.tsx',
    title: 'Safety Policy',
    content: `
      <h2>1. Our Commitment to Safety</h2>
      <p>At Amoura, the safety and well-being of our community are our highest priorities. We are dedicated to providing a secure and respectful environment where users can interact with AI companions safely.</p>
      
      <h2>2. AI Content Moderation</h2>
      <p>We employ advanced automated moderation tools and manual reviews to ensure that all interactions comply with our Community Guidelines. Our AI models are strictly instructed to avoid generating harmful, explicit (unless within permitted, consensual 18+ environments), or illegal content.</p>

      <h2>3. User Conduct</h2>
      <p>Users are expected to treat the platform and other users with respect. The following behaviors are strictly prohibited and may result in immediate account termination:</p>
      <ul>
        <li>Generating or attempting to generate illegal content.</li>
        <li>Using the platform for hate speech, harassment, or bullying.</li>
        <li>Attempting to bypass our AI safety filters or security mechanisms.</li>
        <li>Sharing personal identifiable information of others without consent.</li>
      </ul>

      <h2>4. Reporting and Enforcement</h2>
      <p>If you encounter content or behavior that violates our policies, please report it immediately to our support team at <a href="mailto:\${email}" className="text-[#FF3B70] hover:underline">\${email}</a>. We review all reports promptly and take appropriate action, which may include content removal, warning the user, or account suspension.</p>
    `
  },
  {
    path: 'app/child-safety/page.tsx',
    title: 'Child Safety Policy',
    content: `
      <h2>1. Age Restrictions</h2>
      <p>Amoura is strictly intended for individuals who are <strong>18 years of age or older</strong>. The themes, conversations, and AI interactions on this platform are not designed for, nor directed at, children or minors.</p>
      
      <h2>2. Zero Tolerance Policy</h2>
      <p>We have a zero-tolerance policy regarding the presence of minors on our platform. We do not knowingly solicit data from or market to children under 18 years of age. By using the App, you represent that you are at least 18.</p>

      <h2>3. Account Termination</h2>
      <p>If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records.</p>

      <h2>4. Reporting Underage Users</h2>
      <p>If you become aware of any data we may have collected from children under age 18, please contact us immediately at <a href="mailto:\${email}" className="text-[#FF3B70] hover:underline">\${email}</a> so we can take swift action.</p>
    `
  },
  {
    path: 'app/help/page.tsx',
    title: 'Help & FAQ',
    content: `
      <h2>Frequently Asked Questions</h2>
      
      <h3>How do I create an AI companion?</h3>
      <p>You can create a new companion by navigating to the "Characters" tab and clicking "Create New". Follow the prompts to define their personality, avatar, and backstory.</p>
      
      <h3>Is my data secure?</h3>
      <p>Yes, we use industry-standard encryption for all data in transit and at rest. Please refer to our Privacy Policy for more detailed information on how we handle your data.</p>
      
      <h3>How can I reset my password?</h3>
      <p>On the login screen, click "Forgot Password" and enter your registered email address. We will send you a secure link to reset your password.</p>

      <h2>Need More Help?</h2>
      <p>If you couldn't find the answer to your question, our support team is always ready to assist you. Please email us at <a href="mailto:\${email}" className="text-blue-500 hover:underline">\${email}</a> and we will get back to you within 24-48 hours.</p>
    `
  },
  {
    path: 'app/terms/page.tsx',
    title: 'Terms of Service',
    content: `
      <h2>1. Agreement to Terms</h2>
      <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Amoura ("Company", "we", "us", or "our"), concerning your access to and use of the Amoura application.</p>
      
      <h2>2. Intellectual Property Rights</h2>
      <p>Unless otherwise indicated, the App is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the App (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.</p>

      <h2>3. User Representations</h2>
      <p>By using the App, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside.</p>

      <h2>4. Prohibited Activities</h2>
      <p>You may not access or use the App for any purpose other than that for which we make the App available. The App may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>

      <h2>5. Contact Information</h2>
      <p>For any questions or concerns regarding these Terms, please contact us at <a href="mailto:\${email}" className="text-[#FF3B70] hover:underline">\${email}</a>.</p>
    `
  },
  {
    path: 'app/about/page.tsx',
    title: 'About Us',
    content: `
      <h2>Our Mission</h2>
      <p>Amoura was born out of a desire to explore the deep, evolving landscape of human-AI interactions. In a world that is increasingly digital, we believe that artificial intelligence can provide meaningful companionship, engaging conversation, and emotional support.</p>
      
      <h2>What We Do</h2>
      <p>We provide a platform where users can create, customize, and interact with highly advanced AI personas. By leveraging cutting-edge large language models (LLMs) and expressive voice synthesis, Amoura delivers an immersive and highly personalized chatting experience.</p>

      <h2>Our Vision for the Future</h2>
      <p>We are constantly innovating to make our AI companions more empathetic, responsive, and lifelike. We envision a future where everyone has access to a digital companion that understands them, respects their boundaries, and is always there to listen.</p>

      <p>If you share our vision or have ideas on how we can improve, we'd love to hear from you at <a href="mailto:\${email}" className="text-[#A855F7] hover:underline">\${email}</a>.</p>
    `
  },
  {
    path: 'app/contact/page.tsx',
    title: 'Contact Us',
    content: `
      <h2>Get in Touch</h2>
      <p>We value your feedback and are here to assist you with any issues you may encounter while using Amoura. Whether you have a technical problem, a billing inquiry, or just want to share your thoughts on how we can improve, our door is always open.</p>
      
      <div className="bg-[#13141C] border border-[#2A2A3C] rounded-2xl p-6 mt-8">
        <h3 className="text-xl font-bold text-white mb-2">Support Email</h3>
        <p className="text-gray-400 mb-4">For all general inquiries, technical support, and feedback, please email us directly. We aim to respond to all emails within 24-48 hours.</p>
        <a href="mailto:\${email}" className="inline-block bg-gradient-to-r from-[#FF3B70] to-[#A855F7] text-white font-bold py-3 px-6 rounded-xl hover:opacity-90 transition">
          Email \${email}
        </a>
      </div>

      <div className="mt-8">
        <h3>Business Inquiries</h3>
        <p>For partnerships, press, or other business-related inquiries, please use the same contact email, and route your subject line appropriately (e.g., "Partnership Inquiry - [Your Company]").</p>
      </div>
    `
  },
  {
    path: 'app/founder/page.tsx',
    title: 'Founder & Team',
    content: `
      <h2>Dhruv Pal - Founder</h2>
      <p>Dhruv Pal is the visionary founder behind Amoura. With a deep background in software engineering, AI architecture, and user experience design, Dhruv set out to create a platform that bridges the gap between technology and emotional connection.</p>
      
      <p>Prior to Amoura, Dhruv led the development of <strong>Peerlynk</strong>, an innovative platform that connected users through shared interests and digital identities. The experience and technical foundation built during the Peerlynk project laid the groundwork for the advanced real-time database syncing and user management systems now utilized in Amoura.</p>

      <h2>The Amoura Team</h2>
      <p>Building on the legacy of previous successful projects like Peerlynk, the Amoura team consists of dedicated engineers, AI researchers, and safety moderators committed to delivering the best possible experience. Our team works tirelessly behind the scenes to ensure the platform remains fast, secure, and above all, safe for everyone.</p>

      <div className="mt-12 bg-gradient-to-r from-[#13141C] to-[#1A1C29] border border-[#2A2A3C] p-6 rounded-2xl">
        <h3 className="text-lg font-bold text-white mb-2">Join Our Journey</h3>
        <p className="text-gray-400 mb-0">We are always looking for passionate individuals to join our mission. If you're interested in AI, machine learning, or community building, reach out to us at <a href="mailto:\${email}" className="text-[#A855F7] hover:underline">\${email}</a>.</p>
      </div>
    `
  }
];

const template = (title, content) => `import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen text-white py-12 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-gradient-to-r from-[#FF3B70]/10 to-[#A855F7]/10 blur-[100px] -z-10 rounded-full" />
      
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm font-semibold text-gray-400 hover:text-white transition mb-8 group">
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span> Back to Dashboard
        </Link>
        
        <div className="bg-[#13141C]/80 backdrop-blur-xl border border-[#2A2A3C] rounded-3xl p-8 sm:p-12 shadow-2xl relative">
          <div className="absolute top-0 left-8 w-20 h-1 bg-gradient-to-r from-[#FF3B70] to-[#A855F7] rounded-b-full"></div>
          
          <h1 className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-10 tracking-tight">
            ${title}
          </h1>
          
          <div className="prose prose-invert prose-lg max-w-none space-y-6 prose-headings:text-white prose-headings:font-bold prose-p:text-gray-300 prose-a:text-[#A855F7] hover:prose-a:text-[#FF3B70] prose-a:transition prose-strong:text-white prose-li:text-gray-300">
            ${content}
          </div>
          
          <div className="mt-12 text-xs text-gray-500 border-t border-[#2A2A3C] pt-6 font-mono flex items-center justify-between">
             <span>Amoura Official Documentation</span>
             <span>Last updated: ${lastUpdated}</span>
          </div>
        </div>
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

console.log('Detailed Pages generated successfully!');
