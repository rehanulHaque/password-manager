# PasswordSecure - Manage Your Passwords with Military-Grade Encryption

PasswordSecure is a modern password manager that helps you securely store, manage, and encrypt your passwords with a 32-digit key. It ensures that your passwords are safe and can only be accessed by decrypting them, providing an extra layer of security.

## Features

- **Generate Strong Passwords**: Automatically generate secure and complex passwords for your online accounts.
  
- **User Profile**: Manage your personal settings, including encryption keys, login details, and account preferences.

- **Dashboard**: Get an overview of your stored passwords, recent activity, and security insights all in one place.

- **Add Passwords**: Easily add new passwords to your secure vault, with automatic encryption upon saving.

- **Delete Passwords**: Remove any stored passwords securely with just a click.

- **Password Security**: All passwords are encrypted using a 32-digit key, making it impossible to view or copy passwords without decrypting them first.

## Key Security Features

- **32-Digit Encryption**: Every password you save is encrypted using a 32-digit key for maximum security.
  
- **Password Visibility Control**: Passwords are never visible in plaintext unless you choose to decrypt them. This ensures no unauthorized access.

- **Cannot Copy Without Decrypting**: For added security, you cannot copy or view passwords without decrypting them first.

## Tech Stack

- **Next.js**: Framework for building server-side rendered and static websites.
- **Tailwind CSS**: For fast and responsive UI development.
- **MongoDB & Mongoose**: For managing user data and passwords securely.
- **Auth.js**: For authentication and managing user sessions.

## Getting Started

1. Clone the repository:

   ```bash
   git clone git@github.com:rehanulHaque/password-manager.git
```
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables in a .env file:
```bash
DB_URL="your_db_url"
AUTH_GOOGLE_ID="your_google_id"
AUTH_GOOGLE_SECRET="your_google_secret"
AUTH_SECRET="your_auth_secret"
HOST_URL="http://localhost:3000"
```

4. Run the development server:
```bash
npm run dev
```