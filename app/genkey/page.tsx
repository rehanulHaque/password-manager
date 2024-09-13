"use client"
import { useState } from 'react';

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+|}{[]:;?><,./-=';
    
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    setGeneratedPassword(password);
  };

  const handelCLick = () => {
    navigator.clipboard.writeText(generatedPassword);
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-md mt-10">
      <h1 className="text-xl font-semibold mb-4">Password Generator</h1>

      <div className="mb-4">
        <label className="block mb-1">Password Length: {passwordLength}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      <div className="mb-4">
        <label className="block">
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          /> Uppercase Letters
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={() => setIncludeLowercase(!includeLowercase)}
          /> Lowercase Letters
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          /> Numbers
        </label>
      </div>

      <div className="mb-4">
        <label className="block">
          <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          /> Symbols
        </label>
      </div>

      <button
        onClick={generatePassword}
        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
      >
        Generate Password
      </button>

      {generatedPassword && (
        <div className="mt-4 p-2 bg-gray-200 rounded-md cursor-pointer">
          <strong>Generated Password: </strong>
          <span onClick={handelCLick}>{generatedPassword}</span>
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator;
