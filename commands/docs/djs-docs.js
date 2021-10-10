const axios = require("axios");
module.exports = {
	name: "djs",
	aliases: ["docs"],
	/**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
	run: async (client, message, args) => {
		const query = args.join(" ");
		if (!query) return message.channel.send("Please specify a query!");
		const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
			query,
		)}`;

		axios.get(url).then(({ data }) => {
			if (data) {
				message.channel.send({ embeds: [data] });
			}
		});
	},
};