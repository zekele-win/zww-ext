import CryptoJS from "crypto-js";

// PBKDF2 key derivation function
const deriveKey = (password, salt) => {
  return CryptoJS.PBKDF2(password, CryptoJS.enc.Hex.parse(salt), {
    keySize: 256 / 32, // 256-bit key
    iterations: 100000,
  });
};

// AES-CBC encryption function
const encrypt = (data, password) => {
  const salt = CryptoJS.lib.WordArray.random(128 / 8).toString(
    CryptoJS.enc.Hex
  ); // Generate 16-byte salt
  const iv = CryptoJS.lib.WordArray.random(128 / 8); // Generate 16-byte IV
  const key = deriveKey(password, salt); // Derive key using PBKDF2

  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  // Combine salt, IV, and encrypted data into one string
  const combinedData =
    salt +
    iv.toString(CryptoJS.enc.Hex) +
    encrypted.ciphertext.toString(CryptoJS.enc.Base64);
  return combinedData;
};

// AES-CBC decryption function
const decrypt = (combinedData, password) => {
  const salt = combinedData.substring(0, 32); // Extract salt (16 bytes in hex)
  const iv = CryptoJS.enc.Hex.parse(combinedData.substring(32, 64)); // Extract IV (16 bytes in hex)
  const encData = CryptoJS.enc.Base64.parse(combinedData.substring(64)); // Extract encrypted data

  const key = deriveKey(password, salt); // Derive key using the same salt

  const decrypted = CryptoJS.AES.decrypt({ ciphertext: encData }, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  return decrypted.toString(CryptoJS.enc.Utf8); // Return the decrypted plaintext
};

export default {
  encrypt,
  decrypt,
};
