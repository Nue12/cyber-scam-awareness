import type { QuizScenario } from "../types";

export const quizScenarios: QuizScenario[] = [
  {
    id: 1,
    title: "Email from 'Netflix'",
    scenario: `You receive an email with the subject "Your Netflix account has been suspended." 
    
The email states: "Dear Customer, We were unable to process your payment. Your account will be permanently deleted in 24 hours unless you update your payment information immediately."
    
The email includes a button labeled "Update Payment Now" that links to: netflix-secure-billing.com/update`,
    question: "What should you do?",
    options: [
      "Click the link immediately to avoid losing your account",
      "Reply to the email asking for more information",
      "Delete the email and log into Netflix directly through their official app or website",
      "Call the phone number provided in the email",
    ],
    correctAnswer: 2,
    explanation:
      "This is a phishing email. Red flags include: suspicious domain (not netflix.com), urgency tactics, and unsolicited payment requests. Always access accounts through official apps or websites, never through email links.",
  },
  {
    id: 2,
    title: "Social Media Job Offer",
    scenario: `A LinkedIn profile claiming to be a recruiter from Google messages you: "Hi! We're impressed with your profile. We have an urgent opening for a remote position paying $8,000/month. To proceed, we need you to complete a background check which costs $150. Please pay via Venmo to process your application quickly."`,
    question: "What are the red flags in this scenario?",
    options: [
      "The high salary offer and urgency",
      "Requesting payment for a background check",
      "Using Venmo instead of official HR processes",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Multiple red flags: legitimate employers never ask candidates to pay for background checks, use personal payment apps, or create false urgency. Always verify recruiters through official company websites.",
  },
  {
    id: 3,
    title: "Cryptocurrency Investment",
    scenario: `You see an Instagram ad featuring a celebrity endorsing a cryptocurrency investment platform. The ad promises: "Turn $250 into $10,000 in just 30 days! Limited spots available. Join now before it's too late!" 
    
The website looks professional and shows testimonials from "successful investors."`,
    question: "Is this legitimate?",
    options: [
      "Yes, celebrities wouldn't endorse scams",
      "Yes, the professional website proves it's real",
      "No, this is likely a scam using fake celebrity endorsements and unrealistic promises",
      "Maybe, but only if you invest a small amount first",
    ],
    correctAnswer: 2,
    explanation:
      "This is a classic investment scam. Red flags: unrealistic returns, urgency tactics, fake celebrity endorsements (often AI-generated), and pressure to invest quickly. Legitimate investments never guarantee returns.",
  },
  {
    id: 4,
    title: "Package Delivery Text",
    scenario: `You receive a text message: "USPS: Your package is waiting for delivery. Confirm your address and pay $2.99 shipping fee: usps-track-247.com/confirm"
    
You weren't expecting a package, but you did order something online last week.`,
    question: "What should you do?",
    options: [
      "Click the link and pay the small fee to get your package",
      "Check your tracking number through the official USPS website or app",
      "Reply STOP to unsubscribe",
      "Call the number in the text message",
    ],
    correctAnswer: 1,
    explanation:
      "This is a smishing (SMS phishing) scam. USPS doesn't send unexpected payment requests via text. Always track packages through official carrier websites using your original tracking number.",
  },
  {
    id: 5,
    title: "Dating Site Romance",
    scenario: `You've been chatting with someone on a dating app for 3 weeks. They seem perfect but always have excuses why they can't video call. Now they're messaging: "I'm so sorry, but I'm stuck abroad due to an emergency. My wallet was stolen. Could you lend me $500? I'll pay you back as soon as I return home next week. I really care about you."`,
    question: "What is happening?",
    options: [
      "This person genuinely needs help",
      "This is a romance scam - they're building trust to steal money",
      "You should send half the amount to be safe",
      "Ask for their banking details to transfer the money",
    ],
    correctAnswer: 1,
    explanation:
      "This is a romance scam. Red flags: avoiding video calls, moving conversations off the platform quickly, fabricated emergencies, and requests for money. Never send money to someone you've only met online.",
  },
  {
    id: 6,
    title: "Tech Support Pop-up",
    scenario: `While browsing the internet, a full-screen pop-up appears with flashing red text: "CRITICAL ALERT: Your computer is infected with 5 viruses! Your data is at risk! Call Microsoft Support immediately at 1-800-XXX-XXXX. Do not close this window!"
    
Your computer is running normally, but the pop-up won't close easily.`,
    question: "What should you do?",
    options: [
      "Call the number immediately to fix the viruses",
      "Force close your browser using Task Manager, then run your legitimate antivirus",
      "Click the 'Fix Now' button on the pop-up",
      "Restart your computer and call the number",
    ],
    correctAnswer: 1,
    explanation:
      "This is a tech support scam. Microsoft never displays pop-up warnings or provides support numbers this way. Force close your browser (Ctrl+Alt+Delete > Task Manager), and scan with your trusted antivirus software.",
  },
  {
    id: 7,
    title: "University Email Phishing",
    scenario: `You receive an email from "IT-Support@university-secure-login.com" with your university's logo:
    
"Dear Student, Our system detected unusual activity on your account. Your university email will be suspended in 24 hours unless you verify your credentials. Click here to verify: [Link]
    
IT Security Team"`,
    question: "How can you identify this as a phishing attempt?",
    options: [
      "The email uses urgency and fear tactics",
      "The sender domain is not your actual university domain",
      "Universities don't ask for credential verification via email",
      "All of the above",
    ],
    correctAnswer: 3,
    explanation:
      "Multiple red flags: fake sender domain (not @youruniversity.edu), urgency tactics, and request for credentials via email. University IT never asks for passwords via email. Contact your IT department directly.",
  },
  {
    id: 8,
    title: "Free Gift Card Offer",
    scenario: `You see a Facebook post: "Amazon is giving away FREE $500 gift cards to celebrate their anniversary! Only 100 available! Share this post, like our page, and enter your email to claim yours!"
    
The page has 50,000 followers and hundreds of comments from people claiming they received their cards.`,
    question: "Is this legitimate?",
    options: [
      "Yes, major companies often do giveaways on social media",
      "No, this is a scam to harvest email addresses and personal information",
      "Maybe, but you should check Amazon's official page first",
      "Yes, because many people confirmed they received cards",
    ],
    correctAnswer: 1,
    explanation:
      "This is a data harvesting scam. Red flags: unrealistic offers, requests for email/personal info, fake comments (often from bot accounts). Always verify giveaways on official company websites.",
  },
];
