import React from "react";

export default function PasswordInfo() {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Password Security Guide
      </h1>

      {/* //Section 1
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What is a Password?</h2>
        <p className="text-gray-700">
          A password is a secret combination of characters used to verify a user
          and protect personal or sensitive information from unauthorized access.
        </p>
      </section> */}

      {/* Section 2 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Why Strong Passwords Matter
        </h2>
        <p className="text-gray-700">
          Weak passwords can be easily guessed or cracked, leading to account
          hacking, data theft, and identity fraud.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Characteristics of a Strong Password
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>At least 12–16 characters long</li>
          <li>Uppercase and lowercase letters</li>
          <li>Numbers (0–9)</li>
          <li>Special characters (@, #, $, %, !)</li>
          <li>Unique for each account</li>
        </ul>
      </section>

      {/* Section 4 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Examples</h2>
        <p className="text-gray-700 mb-1">
          <strong>Strong:</strong> G7@xP!9L#Qm2
        </p>
        <p className="text-gray-700">
          <strong>Weak:</strong> password123, admin@123
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          How Passwords Get Cracked
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Brute Force Attacks</li>
          <li>Dictionary Attacks</li>
          <li>Phishing</li>
          <li>Keylogging</li>
          <li>Data Breaches</li>
        </ul>
      </section>

      {/* Section 6 */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Best Practices</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Use different passwords for each account</li>
          <li>Enable Two-Factor Authentication (2FA)</li>
          <li>Avoid sharing passwords</li>
          <li>Use a password manager</li>
        </ul>
      </section>

      {/* Section 7 */}
      {/* <section>
        <h2 className="text-xl font-semibold mb-2">Conclusion</h2>
        <p className="text-gray-700">
          Strong passwords protect your digital identity. Understanding how
          passwords work and how they are attacked helps users stay secure online.
        </p>
      </section> */}
    </div>
  );
}
