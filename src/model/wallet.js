import { ethers } from "ethers";
import cryptoLib from "../lib/crypto";
import storeLib from "../lib/store";

let wallet;

async function hasWallet() {
  const data = await storeLib.getData("wallet", 1);
  return !!data;
}

async function loadWallet(password) {
  // Load the encrypted phrase to storeLib.
  const encPhrase = await storeLib.getData("wallet", 1);

  // Decrypt the phrase.
  const phrase = cryptoLib.decrypt(encPhrase, password);

  // Create the wallet from the phrase.
  wallet = ethers.Wallet.fromPhrase(phrase);

  return wallet;
}

async function createWallet(phrase, password) {
  // Create the wallet from the phrase.
  const wallet = ethers.Wallet.fromPhrase(phrase);

  // Encrypt the phrase.
  let encPhrase = cryptoLib.encrypt(phrase, password);

  // Save the encrypted phrase from storeLib.
  await storeLib.putData("wallet", 1, encPhrase);

  return wallet;
}

function isValidPhrase(phrase) {
  return !ethers.Mnemonic.isValidMnemonic(phrase);
}

function generatePhrase() {
  // Generate a Phrase with 24 words.
  const randomBytes = ethers.randomBytes(32);
  return ethers.Mnemonic.fromEntropy(randomBytes).phrase;
}

async function viewPhrase(password) {
  // Load the encrypted phrase to storeLib.
  const encPhrase = await storeLib.getData("wallet", 1);

  // Decrypt the phrase.
  const phrase = cryptoLib.decrypt(encPhrase, password);

  return phrase;
}

export default {
  hasWallet,
  loadWallet,
  createWallet,
  get wallet() {
    return wallet;
  },
  isValidPhrase,
  generatePhrase,
  viewPhrase,
};
