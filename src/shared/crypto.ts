import CryptoJS from 'crypto-js';

// Warning: It is highly recommended to override these with your own secure environment variables.
const SECRET_KEY = process.env.NEXT_PUBLIC_CRYPTO_KEY || "default_encryption_key_32_chars!"; 
const SECRET_IV = process.env.NEXT_PUBLIC_CRYPTO_IV || "default_iv_16_ch";

// Convert strings to WordArray for CryptoJS
const key = CryptoJS.enc.Utf8.parse(SECRET_KEY);
const iv = CryptoJS.enc.Utf8.parse(SECRET_IV);

export function encryptString(payload: any) {
    const encrypted = CryptoJS.AES.encrypt(JSON.stringify(payload), key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    // Base64-encoded string (matches backend)
    // Note: btoa/atob are standard in browsers and Node.js 18+ (Next.js)
    return btoa(encrypted.toString()); 
}

export function decryptString(encryptedText: any) {
    const decrypted = CryptoJS.AES.decrypt(atob(encryptedText), key, {
        iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
    });
    // Decrypted string parsed back to original object/value
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)); 
}
