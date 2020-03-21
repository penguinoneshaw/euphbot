require("dotenv").config();
const discord = require("discord.js");
const client = new discord.Client({
  presence: {
    activity: {
      name: "Brassed Off",
      type: "WATCHING",
      url:
        "https://www.amazon.co.uk/Brassed-Off-Ewan-McGregor/dp/B011BVKY2K/ref=sr_1_1"
    }
  }
});

const QUOTATIONS = [
  { regex: /trumpet/i, quotation: "It's a bloody euphonium!" },
  { regex: /aranjuez/i, quotation: "Concierto de Orange Juice" },
  {
    regex: /the chickens are revolting/i,
    quotation: "I TOLD YOU THEY WAS ORGANISED"
  },
  {
    regex: /flugel/i,
    quotation: "And she calls that wobbly."
  },
  {
    regex: /trombone/i,
    quotation: "Lovely bit of brass, that."
  },
  {
    regex: /horn/i,
    quotation: "Where is Clare when we need her?"
  }
];

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", async message => {
  for (let { regex, quotation } of QUOTATIONS) {
    if (regex.test(message.content)) {
      await message.channel.send(quotation);
      break;
    }
  }
});

client.login(process.env.TOKEN);
