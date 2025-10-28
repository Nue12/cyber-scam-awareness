import { Link } from "react-router";
import { useState } from "react";

export default function Learn() {
  const [activeSection, setActiveSection] = useState<string>("phishing");

  const sections = [
    { id: "phishing", title: "Phishing & Email Scams", icon: "📧" },
    { id: "social", title: "Social Engineering", icon: "🎭" },
    { id: "financial", title: "Financial Fraud", icon: "💳" },
    { id: "malware", title: "Malware & Ransomware", icon: "🦠" },
    { id: "identity", title: "Identity Theft", icon: "🎭" },
    { id: "protection", title: "Protection Tips", icon: "🛡️" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learn About Cyber Scams
          </h1>
          <p className="text-lg text-gray-600">
            Understand common scams and how to protect yourself online
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h3 className="font-semibold text-gray-800 mb-4">Topics</h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition ${
                      activeSection === section.id
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg shadow-md p-8">
              {/* Phishing Section */}
              {activeSection === "phishing" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    📧 Phishing & Email Scams
                  </h2>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      What is Phishing?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Phishing is a fraudulent attempt to obtain sensitive
                      information by disguising as a trustworthy entity in
                      electronic communications. Scammers send fake emails that
                      appear to be from legitimate companies to steal passwords,
                      credit card numbers, and other personal data.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      Common Warning Signs:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                      <li>
                        <strong>Urgent or threatening language:</strong> "Your
                        account will be closed in 24 hours!"
                      </li>
                      <li>
                        <strong>Suspicious sender address:</strong> Look for
                        misspellings in the email domain
                      </li>
                      <li>
                        <strong>Generic greetings:</strong> "Dear Customer"
                        instead of your name
                      </li>
                      <li>
                        <strong>Requests for personal information:</strong>{" "}
                        Legitimate companies never ask for passwords via email
                      </li>
                      <li>
                        <strong>Suspicious links:</strong> Hover over links to
                        see the actual URL before clicking
                      </li>
                      <li>
                        <strong>Poor grammar and spelling:</strong> Professional
                        companies proofread their emails
                      </li>
                    </ul>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                      <h4 className="font-semibold text-yellow-800 mb-2">
                        Real Example:
                      </h4>
                      <p className="text-yellow-700 text-sm">
                        Email claiming to be from "PayPal Security" asking you
                        to verify your account by clicking a link. The sender is
                        from "paypa1-security.com" (notice the "1" instead of
                        "l"). This is a phishing attempt to steal your PayPal
                        credentials.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      How to Protect Yourself:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Never click links in unsolicited emails</li>
                      <li>
                        Verify sender authenticity by contacting the company
                        directly
                      </li>
                      <li>
                        Type URLs directly into your browser instead of clicking
                        links
                      </li>
                      <li>Enable two-factor authentication on all accounts</li>
                      <li>Use email filtering and spam protection tools</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Social Engineering Section */}
              {activeSection === "social" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    🎭 Social Engineering
                  </h2>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      What is Social Engineering?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Social engineering is the psychological manipulation of
                      people to perform actions or divulge confidential
                      information. Scammers exploit human emotions like trust,
                      fear, and curiosity to bypass security measures.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      Common Tactics:
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Pretexting
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Creating a fabricated scenario to obtain information.
                          Example: Calling pretending to be IT support and
                          asking for your password.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Baiting
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Offering something enticing to trick victims. Example:
                          "Free Netflix Premium - Click Here!" leading to
                          malware or credential theft.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Tailgating
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Following authorized personnel into restricted areas.
                          Example: "I forgot my badge, can you hold the door?"
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Quid Pro Quo
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Offering a service in exchange for information.
                          Example: "Free tech support" in exchange for remote
                          access to your computer.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                      <h4 className="font-semibold text-red-800 mb-2">
                        Romance Scams:
                      </h4>
                      <p className="text-red-700 text-sm mb-2">
                        Scammers create fake profiles on dating sites, build
                        emotional connections, then fabricate emergencies
                        requiring money.
                      </p>
                      <p className="text-red-700 text-sm font-semibold">
                        Warning: Never send money to someone you've only met
                        online!
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      Protection Strategies:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>
                        Verify identities through official channels before
                        sharing information
                      </li>
                      <li>
                        Be skeptical of unsolicited offers that seem too good to
                        be true
                      </li>
                      <li>
                        Don't let urgency pressure you into quick decisions
                      </li>
                      <li>Limit personal information shared on social media</li>
                      <li>
                        Question requests for sensitive information, even from
                        apparent authority
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Financial Fraud Section */}
              {activeSection === "financial" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    💳 Financial Fraud
                  </h2>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      Types of Financial Scams:
                    </h3>

                    <div className="space-y-4 mb-6">
                      <div className="border-l-4 border-blue-500 bg-blue-50 p-4">
                        <h4 className="font-semibold text-blue-900 mb-2">
                          Investment Scams
                        </h4>
                        <p className="text-blue-800 text-sm mb-2">
                          Promises of unrealistic returns with little to no
                          risk. Common in cryptocurrency and forex trading
                          schemes.
                        </p>
                        <p className="text-blue-700 text-sm">
                          <strong>Red Flag:</strong> "Turn $500 into $50,000 in
                          30 days!"
                        </p>
                      </div>

                      <div className="border-l-4 border-purple-500 bg-purple-50 p-4">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          Advance-Fee Scams
                        </h4>
                        <p className="text-purple-800 text-sm mb-2">
                          Victims pay upfront fees for promised benefits that
                          never materialize. Common in "lottery wins" and
                          "inheritance" scams.
                        </p>
                        <p className="text-purple-700 text-sm">
                          <strong>Example:</strong> "You won $1 million! Pay
                          $1,000 processing fee to claim."
                        </p>
                      </div>

                      <div className="border-l-4 border-green-500 bg-green-50 p-4">
                        <h4 className="font-semibold text-green-900 mb-2">
                          Credit Card Fraud
                        </h4>
                        <p className="text-green-800 text-sm mb-2">
                          Unauthorized use of credit card information through
                          skimming devices, data breaches, or phishing.
                        </p>
                        <p className="text-green-700 text-sm">
                          <strong>Prevention:</strong> Monitor statements
                          regularly, use virtual cards online
                        </p>
                      </div>

                      <div className="border-l-4 border-orange-500 bg-orange-50 p-4">
                        <h4 className="font-semibold text-orange-900 mb-2">
                          Fake Shopping Sites
                        </h4>
                        <p className="text-orange-800 text-sm mb-2">
                          Fraudulent e-commerce sites that take payment but
                          never deliver products.
                        </p>
                        <p className="text-orange-700 text-sm">
                          <strong>Warning:</strong> Prices significantly lower
                          than competitors, no contact info
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      How to Avoid Financial Scams:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>
                        Research investment opportunities thoroughly and
                        independently
                      </li>
                      <li>
                        Be skeptical of "guaranteed" returns or "risk-free"
                        investments
                      </li>
                      <li>
                        Never pay fees upfront for promised winnings or loans
                      </li>
                      <li>
                        Use credit cards (not debit) for online purchases for
                        better protection
                      </li>
                      <li>
                        Check website legitimacy: look for HTTPS, contact info,
                        and reviews
                      </li>
                      <li>
                        Use payment methods with buyer protection (PayPal,
                        credit cards)
                      </li>
                      <li>If it sounds too good to be true, it probably is</li>
                    </ul>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                      <h4 className="font-semibold text-blue-900 mb-2">
                        💡 Pro Tip:
                      </h4>
                      <p className="text-blue-800 text-sm">
                        Before making any online purchase from a new site,
                        search for "[website name] + scam" or "[website name] +
                        reviews" to see if others have reported issues.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Malware Section */}
              {activeSection === "malware" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    🦠 Malware & Ransomware
                  </h2>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      What is Malware?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Malware (malicious software) is any software intentionally
                      designed to cause damage to a computer, server, client, or
                      computer network. It includes viruses, worms, trojans,
                      ransomware, spyware, and more.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      Types of Malware:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">
                          🔒 Ransomware
                        </h4>
                        <p className="text-red-800 text-sm">
                          Encrypts your files and demands payment (usually
                          cryptocurrency) for decryption. Can spread across
                          networks.
                        </p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">
                          🕵️ Spyware
                        </h4>
                        <p className="text-purple-800 text-sm">
                          Secretly monitors and collects information about your
                          activities, including passwords and browsing habits.
                        </p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">
                          🐴 Trojans
                        </h4>
                        <p className="text-orange-800 text-sm">
                          Disguises itself as legitimate software but performs
                          malicious actions once installed, like stealing data
                          or creating backdoors.
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">
                          📢 Adware
                        </h4>
                        <p className="text-yellow-800 text-sm">
                          Displays unwanted advertisements, tracks browsing, and
                          can slow down your computer significantly.
                        </p>
                      </div>
                    </div>

                    <div className="bg-red-100 border-l-4 border-red-500 p-4 mb-6">
                      <h4 className="font-semibold text-red-900 mb-2">
                        ⚠️ Ransomware Alert:
                      </h4>
                      <p className="text-red-800 text-sm mb-2">
                        Ransomware attacks have increased dramatically. Common
                        entry points include phishing emails, malicious
                        downloads, and unpatched software vulnerabilities.
                      </p>
                      <p className="text-red-800 text-sm font-semibold">
                        Never pay the ransom! There's no guarantee you'll get
                        your files back.
                      </p>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      Protection Measures:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>
                        Install reputable antivirus software and keep it updated
                      </li>
                      <li>
                        Regularly backup important files to external drives or
                        cloud storage
                      </li>
                      <li>
                        Keep your operating system and software up to date
                      </li>
                      <li>
                        Don't download files or click links from unknown sources
                      </li>
                      <li>
                        Be cautious with email attachments, even from known
                        contacts
                      </li>
                      <li>
                        Use ad-blockers to prevent malicious advertisements
                      </li>
                      <li>
                        Avoid downloading software from unofficial sources
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Identity Theft Section */}
              {activeSection === "identity" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    🎭 Identity Theft
                  </h2>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      What is Identity Theft?
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Identity theft occurs when someone steals your personal
                      information to commit fraud. This can include using your
                      credit cards, opening new accounts in your name, filing
                      false tax returns, or obtaining medical services.
                    </p>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      Common Methods:
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Data Breaches
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Hackers steal large amounts of personal data from
                          companies. Your information may be compromised even if
                          you did nothing wrong.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Social Media Mining
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Criminals collect personal details from social media
                          profiles to answer security questions or impersonate
                          you.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Physical Theft
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Stolen wallets, mail, or documents containing personal
                          information like Social Security numbers or bank
                          statements.
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
                        <h4 className="font-semibold text-gray-800 mb-2">
                          Shoulder Surfing
                        </h4>
                        <p className="text-gray-700 text-sm">
                          Watching you enter passwords or PINs in public places,
                          or viewing sensitive information on your screen.
                        </p>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      Warning Signs of Identity Theft:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                      <li>Unexpected bills or charges on your credit card</li>
                      <li>Missing mail or bills</li>
                      <li>Denied credit for no apparent reason</li>
                      <li>
                        Calls from debt collectors about debts you don't
                        recognize
                      </li>
                      <li>Unfamiliar accounts on your credit report</li>
                      <li>
                        Tax return rejection because one was already filed with
                        your SSN
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-6">
                      Prevention Steps:
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700 space-y-2">
                      <li>Use strong, unique passwords for each account</li>
                      <li>
                        Enable two-factor authentication everywhere possible
                      </li>
                      <li>
                        Monitor your credit reports regularly (free annual
                        reports available)
                      </li>
                      <li>
                        Shred documents containing personal information before
                        disposal
                      </li>
                      <li>Limit information shared on social media</li>
                      <li>Be cautious about who you share your SSN with</li>
                      <li>
                        Use a password manager to create and store complex
                        passwords
                      </li>
                      <li>
                        Check your bank and credit card statements regularly
                      </li>
                    </ul>

                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mt-6">
                      <h4 className="font-semibold text-indigo-900 mb-2">
                        🔐 Password Security:
                      </h4>
                      <p className="text-indigo-800 text-sm mb-2">
                        Create passwords that are at least 12 characters long
                        with a mix of:
                      </p>
                      <ul className="text-indigo-700 text-sm space-y-1 ml-4">
                        <li>• Uppercase letters (A-Z)</li>
                        <li>• Lowercase letters (a-z)</li>
                        <li>• Numbers (0-9)</li>
                        <li>• Special characters (!@#$%)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Protection Tips Section */}
              {activeSection === "protection" && (
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    🛡️ Protection Tips & Best Practices
                  </h2>

                  <div className="prose max-w-none">
                    <p className="text-gray-700 mb-6 text-lg">
                      Follow these essential cybersecurity practices to stay
                      safe online:
                    </p>

                    <div className="space-y-6">
                      {/* Email Security */}
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                          <span className="text-2xl mr-3">📧</span>
                          Email Security
                        </h3>
                        <ul className="space-y-2 text-blue-800">
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Verify sender addresses carefully before clicking
                              links
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Hover over links to preview URLs before clicking
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Don't open unexpected attachments, even from known
                              contacts
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Be wary of urgent requests or threats in emails
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>Use email filtering and spam protection</span>
                          </li>
                        </ul>
                      </div>

                      {/* Password Management */}
                      <div className="bg-green-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                          <span className="text-2xl mr-3">🔑</span>
                          Password Management
                        </h3>
                        <ul className="space-y-2 text-green-800">
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>Use unique passwords for each account</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Make passwords at least 12 characters long
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>Use a reputable password manager</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Enable two-factor authentication (2FA) everywhere
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Change passwords immediately if a breach is
                              suspected
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Online Shopping */}
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                          <span className="text-2xl mr-3">🛒</span>
                          Safe Online Shopping
                        </h3>
                        <ul className="space-y-2 text-purple-800">
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Only shop on secure websites (look for HTTPS and
                              padlock icon)
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Use credit cards instead of debit cards for better
                              protection
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Research unfamiliar websites before purchasing
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Be suspicious of deals that seem too good to be
                              true
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Check for contact information and return policies
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Social Media Safety */}
                      <div className="bg-orange-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-orange-900 mb-4 flex items-center">
                          <span className="text-2xl mr-3">📱</span>
                          Social Media Safety
                        </h3>
                        <ul className="space-y-2 text-orange-800">
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Review and adjust privacy settings regularly
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Limit personal information visible to strangers
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Be cautious about accepting friend requests from
                              unknown people
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>Don't share your location in real-time</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Think before posting - information can't be fully
                              deleted
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Device Security */}
                      <div className="bg-red-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                          <span className="text-2xl mr-3">💻</span>
                          Device Security
                        </h3>
                        <ul className="space-y-2 text-red-800">
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Keep operating systems and software updated
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>Install and maintain antivirus software</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>Use a firewall</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>Encrypt sensitive data</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Lock your devices with strong passwords or
                              biometrics
                            </span>
                          </li>
                        </ul>
                      </div>

                      {/* Public Wi-Fi */}
                      <div className="bg-yellow-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-yellow-900 mb-4 flex items-center">
                          <span className="text-2xl mr-3">📶</span>
                          Public Wi-Fi Safety
                        </h3>
                        <ul className="space-y-2 text-yellow-800">
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Avoid accessing sensitive information on public
                              Wi-Fi
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Use a VPN (Virtual Private Network) for encryption
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>Turn off automatic Wi-Fi connections</span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Verify network names with staff before connecting
                            </span>
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2">✓</span>
                            <span>
                              Use your mobile data for sensitive transactions
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6 mt-8">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        🎯 Remember: The Golden Rules
                      </h3>
                      <ol className="space-y-3 text-gray-700">
                        <li className="flex items-start">
                          <span className="font-bold mr-2 text-blue-600">
                            1.
                          </span>
                          <span>
                            <strong>
                              If it seems too good to be true, it probably is
                            </strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2 text-blue-600">
                            2.
                          </span>
                          <span>
                            <strong>
                              When in doubt, verify through official channels
                            </strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2 text-blue-600">
                            3.
                          </span>
                          <span>
                            <strong>
                              Never share passwords or sensitive information via
                              email
                            </strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2 text-blue-600">
                            4.
                          </span>
                          <span>
                            <strong>
                              Stay informed about new scam tactics
                            </strong>
                          </span>
                        </li>
                        <li className="flex items-start">
                          <span className="font-bold mr-2 text-blue-600">
                            5.
                          </span>
                          <span>
                            <strong>
                              Trust your instincts - if something feels wrong,
                              it probably is
                            </strong>
                          </span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t">
                <Link to="/pre-test">
                  <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition font-medium">
                    ← Take Pre-Test
                  </button>
                </Link>
                <Link to="/quiz">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
                    Try Interactive Quiz →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
