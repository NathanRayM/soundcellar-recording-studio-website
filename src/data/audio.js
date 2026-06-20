import colors from "../assets/audio/rnb-colors.wav";
import colorscover from "../assets/images/constance-dees-cover.png";
import showmelove from "../assets/audio/rnb-show-me-love.wav";
import showmelovecover from "../assets/images/k-nacole-cover.png";
import lordofall from "../assets/audio/rnb-lord-of-all.wav";
import lordofallcover from "../assets/images/sydney-andrea-cover.png";
import usedto from "../assets/audio/country-used-to.wav";
import usedtocover from "../assets/images/used-to-cover.png";
import bourbon from "../assets/audio/country-bourbon.wav";
import bourboncover from "../assets/images/matt-clarkson-cover.png";
import keepthechange from "../assets/audio/country-keep-the-change.mp3";
import keepthechangecover from "../assets/images/country-ethan-lucas-cover.png";
import addiction from "../assets/audio/rap-addiction.wav";
import addictioncover from "../assets/images/a-the-kid-cover.png";
import godswill from "../assets/audio/rap-gods-will-be-done.mp3";
import godswillcover from "../assets/images/gabriel-day-cover.png";
import letsdance from "../assets/audio/altrock-lets-dance.wav";
import letsdancecover from "../assets/images/brian-day-cover.png";
import chemicalredeemer from "../assets/audio/altrock-chemical-redeemer.wav";
import chemicalredeemercover from "../assets/images/chemical-redeemer-cover.png";

export const audioPlaylist = {
  pop: [
    {
      id: 1,
      title: "Colors",
      artist: "Constance Dees",
      audio: colors,
      art: colorscover,
      duration: "3:22",
    },

    {
      id: 2,
      title: "Show Me Love",
      artist: "K Nacole",
      audio: showmelove,
      art: showmelovecover,
      duration: "4:12",
    },

    {
      id: 3,
      title: "Lord Of All",
      artist: "Sydney Andrea",
      audio: lordofall,
      art: lordofallcover,
      duration: "3:40",
    },
  ],

  country: [
    {
      id: 1,
      title: "Used To",
      artist: "Matt Clarkson Band",
      audio: usedto,
      art: usedtocover,
      duration: "4:06",
    },
    {
      id: 2,
      title: "Bourbon",
      artist: "Matt Clarkson Band",
      audio: bourbon,
      art: bourboncover,
      duration: "3:32",
    },
    {
      id: 3,
      title: "Keep The Change",
      artist: "Ethan Lucas",
      audio: keepthechange,
      art: keepthechangecover,
      duration: "3:35",
    },
  ],

  rap: [
    {
      id: 1,
      title: "Addiction",
      artist: "A The Kid",
      audio: addiction,
      art: addictioncover,
      duration: "1:56",
    },
    {
      id: 2,
      title: "God's Will Be Done",
      artist: "Gabriel Day",
      audio: godswill,
      art: godswillcover,
      duration: "5:01",
    },
  ],

  rock: [
    {
      id: 1,
      title: "Let's Dance",
      artist: "Brian Day",
      audio: letsdance,
      art: letsdancecover,
      duration: "4:09",
    },
    {
      id: 2,
      title: "Chemical Redeemer",
      artist: "Celebrity Saints",
      audio: chemicalredeemer,
      art: chemicalredeemercover,
      duration: "3:38",
    },
  ],
};
