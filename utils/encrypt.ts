import crypto from "crypto";
const IV = "5183666c72eec9e4";
const ALGO = "aes-256-cbc";

export function decryptPassword(text: string, ENC: string) {
  let decipher = crypto.createDecipheriv(ALGO, ENC, IV);
  let decrypted = decipher.update(text, "base64", "utf8");
  return decrypted + decipher.final("utf8");
}

export function encryptPassword(text: string, ENC: string) {
  let cipher = crypto.createCipheriv(ALGO, ENC, IV);
  let encrypted = cipher.update(text, "utf8", "base64");
  encrypted += cipher.final("base64");
  return encrypted;
}
