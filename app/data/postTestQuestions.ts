import type { Question } from "../types";

export const postTestQuestions: Question[] = [
  {
    id: 1,
    question:
      "You receive an email claiming your bank account will be closed unless you verify your information. What should you do?",
    options: [
      "Click the link and provide your information immediately",
      "Reply to the email with your account details",
      "Ignore the email and contact your bank directly through their official website or phone number",
      "Forward the email to all your contacts to warn them",
    ],
    correctAnswer: 2,
    explanation:
      "Always contact your bank directly through official channels. Legitimate banks never ask for sensitive information via email.",
    category: "Phishing",
  },
  {
    id: 2,
    question: "What is a common sign of a phishing website?",
    options: [
      "HTTPS in the URL",
      "Professional design",
      "Misspelled domain name (e.g., 'paypa1.com' instead of 'paypal.com')",
      "Contact information on the page",
    ],
    correctAnswer: 2,
    explanation:
      "Scammers often use URLs that look similar to legitimate sites but contain subtle misspellings or different domains.",
    category: "Website Safety",
  },
  {
    id: 3,
    question:
      "A stranger on social media offers you a job opportunity with high pay and asks for your personal information. What should you do?",
    options: [
      "Provide your information to not miss the opportunity",
      "Research the company, verify the recruiter's identity, and never share sensitive info upfront",
      "Share your resume which includes your address and phone number",
      "Accept immediately and ask questions later",
    ],
    correctAnswer: 1,
    explanation:
      "Legitimate employers don't ask for sensitive personal information before formal interviews. Always verify opportunities independently.",
    category: "Social Engineering",
  },
  {
    id: 4,
    question: "What is ransomware?",
    options: [
      "A legitimate software for backing up files",
      "Malware that encrypts your files and demands payment for decryption",
      "A type of antivirus software",
      "A password manager",
    ],
    correctAnswer: 1,
    explanation:
      "Ransomware is malicious software that locks your files and demands payment (usually cryptocurrency) to unlock them.",
    category: "Malware",
  },
  {
    id: 5,
    question:
      "You receive a message saying you've won a lottery you never entered. It asks for a 'processing fee' to claim your prize. This is:",
    options: [
      "A legitimate lottery win",
      "An advance-fee scam",
      "A mistake that needs to be corrected",
      "A tax requirement",
    ],
    correctAnswer: 1,
    explanation:
      "Advance-fee scams ask for money upfront with promises of larger returns. Legitimate lotteries never require payment to claim prizes.",
    category: "Financial Fraud",
  },
  {
    id: 6,
    question: "Which password is the strongest?",
    options: ["password123", "MyName2024", "T9$kL@mP#3qR&x2Y", "12345678"],
    correctAnswer: 2,
    explanation:
      "Strong passwords use a mix of uppercase, lowercase, numbers, and special characters, and are at least 12 characters long.",
    category: "Security Best Practices",
  },
  {
    id: 7,
    question: "What is 'vishing'?",
    options: [
      "A type of fishing sport",
      "Voice phishing - scams conducted over phone calls",
      "A video game",
      "A legitimate verification process",
    ],
    correctAnswer: 1,
    explanation:
      "Vishing (voice phishing) is when scammers use phone calls to trick people into revealing personal information.",
    category: "Scam Types",
  },
  {
    id: 8,
    question:
      "A pop-up warns that your computer is infected and provides a number to call for 'tech support'. What should you do?",
    options: [
      "Call the number immediately to fix your computer",
      "Close the pop-up, don't call, and run your legitimate antivirus software",
      "Provide your credit card for the repair service",
      "Give them remote access to your computer",
    ],
    correctAnswer: 1,
    explanation:
      "These are tech support scams. Real security alerts come from your installed antivirus, not random pop-ups.",
    category: "Tech Support Scams",
  },
  {
    id: 9,
    question:
      "What information should you NEVER share on public Wi-Fi without protection?",
    options: [
      "The weather forecast",
      "Banking passwords and credit card information",
      "Public news articles",
      "Your favorite color",
    ],
    correctAnswer: 1,
    explanation:
      "Public Wi-Fi can be intercepted. Always use a VPN when accessing sensitive information on public networks.",
    category: "Network Security",
  },
  {
    id: 10,
    question:
      "Someone claiming to be from the IRS calls demanding immediate payment via gift cards for unpaid taxes. This is:",
    options: [
      "A legitimate tax collection method",
      "A scam - the IRS never demands immediate payment via gift cards",
      "An emergency situation requiring immediate action",
      "A new payment system being tested",
    ],
    correctAnswer: 1,
    explanation:
      "The IRS never demands immediate payment via gift cards, wire transfers, or cryptocurrency. They always send official mail first.",
    category: "Government Impersonation",
  },
  {
    id: 11,
    question: "What is smishing?",
    options: [
      "Fishing for salmon",
      "SMS/text message phishing",
      "A type of malware",
      "Email spam",
    ],
    correctAnswer: 1,
    explanation:
      "Smishing is phishing conducted through SMS text messages to trick people into revealing personal information.",
    category: "Scam Types",
  },
  {
    id: 12,
    question:
      "Which is the SAFEST way to handle a suspicious email claiming to be from your bank?",
    options: [
      "Click the link to check if it's real",
      "Reply asking if it's legitimate",
      "Delete it and contact your bank through their official website or phone",
      "Forward it to friends to warn them",
    ],
    correctAnswer: 2,
    explanation:
      "Always contact your bank directly through verified channels rather than responding to unsolicited communications.",
    category: "Best Practices",
  },
  {
    id: 13,
    question:
      "What should you do if you accidentally clicked a suspicious link?",
    options: [
      "Nothing, it's too late",
      "Immediately disconnect from internet, run antivirus, change passwords",
      "Wait and see what happens",
      "Restart your computer",
    ],
    correctAnswer: 1,
    explanation:
      "Act quickly: disconnect, scan for malware, and change passwords for any accounts that may be compromised.",
    category: "Incident Response",
  },
  {
    id: 14,
    question: "Which payment method is MOST commonly requested in scams?",
    options: [
      "Credit card",
      "Bank transfer",
      "Gift cards or cryptocurrency",
      "PayPal",
    ],
    correctAnswer: 2,
    explanation:
      "Scammers prefer gift cards and cryptocurrency because they're difficult to trace and transactions can't be reversed.",
    category: "Financial Fraud",
  },
  {
    id: 15,
    question: "What is a data breach?",
    options: [
      "When you forget your password",
      "Unauthorized access and theft of sensitive data from a system",
      "Deleting files accidentally",
      "Slow internet connection",
    ],
    correctAnswer: 1,
    explanation:
      "A data breach is when cybercriminals gain unauthorized access to systems and steal sensitive information like passwords or credit card numbers.",
    category: "Security Concepts",
  },
];
