module.exports = {
  config: {
    name: "monitor",
    aliases: ["m"],
    version: "1.5",
    author: "Denish",
    role: 0,
    shortDescription: { en: "Shows bot uptime." },
    longDescription: { en: "Displays bot running time in a clean bold style." },
    category: "info",
    guide: { en: "Use {p}monitor to check bot uptime." }
  },

  onStart: async function ({ api, event }) {
    try {
      const uptime = process.uptime();
      const days = Math.floor(uptime / 86400);
      const hours = Math.floor((uptime % 86400) / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);

      let uptimeText = "⏳ 𝐁𝐎𝐓 𝐔𝐏𝐓𝐈𝐌𝐄\n\n";
      if (days) uptimeText += `📅 𝐃𝐚𝐲𝐬      : ${days}\n`;
      if (hours) uptimeText += `⏰ 𝐇𝐨𝐮𝐫𝐬     : ${hours}\n`;
      if (minutes) uptimeText += `🕒 𝐌𝐢𝐧𝐮𝐭𝐞𝐬  : ${minutes}\n`;
      uptimeText += `⏱ 𝐒𝐞𝐜𝐨𝐧𝐝𝐬   : ${seconds}\n`;

      const message = `
╭────〔 🤖 𝐁𝐎𝐓 𝐌𝐎𝐍𝐈𝐓𝐎𝐑 〕────╮
│
│ ${uptimeText.trim()}
│
╰────────────────────╯
`;

      await api.sendMessage(
        message,
        event.threadID,
        event.messageID
      );

    } catch (err) {
      console.error("Monitor error:", err);
      api.sendMessage(
        "⚠️ 𝐌𝐨𝐧𝐢𝐭𝐨𝐫 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐦𝐞 𝐞𝐫𝐫𝐨𝐫 𝐚𝐚 𝐠𝐚𝐲𝐚.",
        event.threadID,
        event.messageID
      );
    }
  },
};
