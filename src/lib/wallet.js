import { ethers } from "ethers";
import crypto from "./crypto";
import store from "./store";

// The encrypted wallet.
let encWallet;

// Check if the wallet existed in DB.
async function existed() {
  const data = await store.getData("wallet", 1);
  return !!data;
}

// Load the wallet from store.
async function load(password) {
  const encMnemonic = await store.getData("wallet", 1);

  // Decrypt the mnemonic.
  const mnemonic = crypto.decrypt(encMnemonic, password);

  // Create the wallet without mnemonic.
  const wallet = ethers.Wallet.fromMnemonic(mnemonic);
  delete wallet.mnemonic;

  // // Or create the wallet again with only private key.
  // const walletWithMnemonic = ethers.Wallet.fromMnemonic(mnemonic);
  // const wallet = new ethers.Wallet(walletWithMnemonic.privateKey);

  // Encrypt the wallet.
  encWallet = wallet.encrypt(password);

  return wallet;
}

async function create(mnemonic, password) {
  // Create the wallet from the mnemonic.
  const mnemonicObj = ethers.Mnemonic.fromPhrase(mnemonic);
  const wallet = ethers.Wallet.fromPhrase(mnemonicObj.phrase);
  delete wallet.mnemonic;

  // Encrypt the mnemonic.
  let encMnemonic = crypto.encrypt(mnemonic, password);

  await store.putData("wallet", 1, encMnemonic);

  // Encrypt the wallet.
  encWallet = wallet.encrypt(password);

  return wallet;
}

function generateMnemonic() {
  // Generate a mnemonic of 24 phases.
  const randomBytes = ethers.randomBytes(32);
  return ethers.Mnemonic.fromEntropy(randomBytes).phrase;
}

async function get(password) {
  return new Promise((resolve, reject) => {
    ethers.Wallet.fromEncryptedJson(encWallet, password)
      .then((wallet) => {
        resolve(wallet);
      })
      .catch((err) => {
        reject(`Decode wallet error: ${err}`);
      });
  });
}

async function viewMnemonic(password) {
  const encMnemonic = await store.getData("wallet", 1);

  // Decrypt the mnemonic.
  const mnemonic = crypto.decrypt(encMnemonic, password);

  return mnemonic;
}

export default {
  existed,
  load,
  create,
  generateMnemonic,
  get,
  viewMnemonic,
};
