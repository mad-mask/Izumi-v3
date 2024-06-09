const { izumi,mode } = require('../lib/');

izumi({
	pattern: 'reboot',
	fromMe: true,
	desc: 'Bot restart',
	type: 'user'
}, async (message, match, client) => {
await message.send("_rebooting_");
return require('pm2').restart('index.js');
});
const value = ["99000","88000","77000","660000","55000","44000","33000","22000","11000","9999","999","99"];
izumi({
    pattern: "sc",
    fromMe: mode,
    desc: "Izumi",
    type: "info",
}, async (message, match, client) => {
    var amount = value[Math.floor(Math.random() * value.length)];
    const amountInPaise = parseInt(amount, 10) * 1000;
    const cap = "Iᴢᴜᴍɪ-ᴠ3\n\nRᴇᴘᴏ:*https://github.com/sataniceypz/IZUMI-V3*\n\nLɪᴠᴇ Uꜱᴇʀꜱ Cᴏᴜɴᴛ:*https://users.maskser.me*\n\nSᴜᴘᴘᴏʀᴛ Gʀᴏᴜᴘ:*https://chat.whatsapp.com/KHvcGD7aEUo8gPocJsYXZe*";

    await message.client.relayMessage(message.jid, {
        requestPaymentMessage: {
            currencyCodeIso4217: 'INR',
            amount1000: amountInPaise,
            requestFrom: message.sender,
            noteMessage: {
                extendedTextMessage: {
                    text: cap,
                    contextInfo: {
                        externalAdReply: {
                            showAdAttribution: true
                        }
                    }
                }
            }
        }
    }, { quoted: message.quoted });
});
