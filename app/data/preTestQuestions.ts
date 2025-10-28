import type { Question } from "../types";

export const preTestQuestions: Question[] = [
  {
    id: 1,
    question: "What is phishing?",
    options: [
      "A type of fishing sport",
      "A fraudulent attempt to obtain sensitive information",
      "A legitimate email from your bank",
      "A computer virus",
    ],
    correctAnswer: 1,
    explanation:
      "Phishing is a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity.",
    category: "Email Scams",
  },
  {
    id: 2,
    question: "Which of the following is a red flag in an email?",
    options: [
      "Personalized greeting with your name",
      "Urgent requests for personal information",
      "Professional email signature",
      "Clear sender information",
    ],
    correctAnswer: 1,
    explanation:
      "Urgent requests for personal information are common tactics used by scammers.",
    category: "Email Scams",
  },
  {
    id: 3,
    question:
      "What should you do if you receive a suspicious email asking for your password?",
    options: [
      "Reply with your password",
      "Click the link to verify your account",
      "Delete the email and report it",
      "Forward it to friends",
    ],
    correctAnswer: 2,
    explanation:
      "Never provide passwords via email. Delete suspicious emails and report them.",
    category: "Best Practices",
  },
  {
    id: 4,
    question: "What is two-factor authentication (2FA)?",
    options: [
      "Using two passwords",
      "An extra layer of security requiring a second verification step",
      "A type of malware",
      "A payment method",
    ],
    correctAnswer: 1,
    explanation:
      "2FA adds security by requiring a second form of verification beyond just a password.",
    category: "Security",
  },
  {
    id: 5,
    question: "Which URL is most likely legitimate?",
    options: [
      "http://paypa1.com",
      "https://www.paypal.com",
      "http://paypal-verify.net",
      "https://paypal.secure-login.tk",
    ],
    correctAnswer: 1,
    explanation:
      "Legitimate sites use HTTPS and have the correct domain name without misspellings.",
    category: "Website Safety",
  },
];
