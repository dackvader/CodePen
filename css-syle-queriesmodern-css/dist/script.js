console.clear();

let moneyAvailable = 800;

let data = {
  bitterling: {
    id: 1,
    "file-name": "bitterling",
    name: {
      "name-USen": "bitterling",
      "name-EUen": "bitterling",
      "name-EUde": "Bitterling",
      "name-EUes": "amarguillo",
      "name-USes": "amarguillo",
      "name-EUfr": "bouvière",
      "name-USfr": "bouvière",
      "name-EUit": "rodeo",
      "name-EUnl": "bittervoorn",
      "name-CNzh": "红目鲫",
      "name-TWzh": "紅目鯽",
      "name-JPja": "タナゴ",
      "name-KRko": "납줄개",
      "name-EUru": "горчак"
    },
    availability: {
      "month-northern": "11-3",
      "month-southern": "5-9",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "River",
      rarity: "Common",
      "month-array-northern": [11, 12, 1, 2, 3],
      "month-array-southern": [5, 6, 7, 8, 9],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Smallest (1)",
    price: 900,
    "price-cj": 1350,
    "catch-phrase": "I caught a bitterling! It's mad at me, but only a little.",
    "museum-phrase":
      "Bitterlings hide their eggs inside large bivalves—like clams—where the young can stay safe until grown. The bitterling isn't being sneaky. No, their young help keep the bivalve healthy by eating invading parasites! It's a wonderful bit of evolutionary deal making, don't you think? Each one keeping the other safe... Though eating parasites does not sound like a happy childhood... Is that why the fish is so bitter?",
    image_uri: "https://acnhapi.com/v1/images/fish/1",
    icon_uri: "https://acnhapi.com/v1/icons/fish/1"
  },
  pale_chub: {
    id: 2,
    "file-name": "pale_chub",
    name: {
      "name-USen": "pale chub",
      "name-EUen": "pale chub",
      "name-EUde": "Döbel",
      "name-EUes": "cacho",
      "name-USes": "cacho",
      "name-EUfr": "chevaine",
      "name-USfr": "chevaine",
      "name-EUit": "zacco",
      "name-EUnl": "Japanse drakenvis",
      "name-CNzh": "溪哥",
      "name-TWzh": "溪哥",
      "name-JPja": "オイカワ",
      "name-KRko": "피라미",
      "name-EUru": "светлый закко"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "9am - 4pm",
      isAllDay: false,
      isAllYear: true,
      location: "River",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [9, 10, 11, 12, 13, 14, 15]
    },
    shadow: "Smallest (1)",
    price: 200,
    "price-cj": 300,
    "catch-phrase": "I caught a pale chub! That name seems a bit judgy...",
    "museum-phrase":
      "The pale chub is a river fish with simple back-and-silver coloring. Interestingly, the males' coloring becomes most vibrant when he's trying to attract a mate! Though normally plain, these fellows really know how to look stylish when they want to. Perhaps I could learn a thing or two from the pale chub...",
    image_uri: "https://acnhapi.com/v1/images/fish/2",
    icon_uri: "https://acnhapi.com/v1/icons/fish/2"
  },
  crucian_carp: {
    id: 3,
    "file-name": "crucian_carp",
    name: {
      "name-USen": "crucian carp",
      "name-EUen": "crucian carp",
      "name-EUde": "Karausche",
      "name-EUes": "carpín",
      "name-USes": "carpín",
      "name-EUfr": "carassin",
      "name-USfr": "carassin",
      "name-EUit": "carassio",
      "name-EUnl": "kroeskarper",
      "name-CNzh": "鲫鱼",
      "name-TWzh": "鯽魚",
      "name-JPja": "フナ",
      "name-KRko": "붕어",
      "name-EUru": "карась"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "",
      isAllDay: true,
      isAllYear: true,
      location: "River",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Small (2)",
    price: 160,
    "price-cj": 240,
    "catch-phrase": "I caught a crucian carp! My skills are sharp!",
    "museum-phrase":
      'I wonder... Do you know how to tell the difference between a crucian carp and a standard-issue carp? It\'s quite easy to tell the two apart... One must simply locate the barbels. Or, rather, the lack of them! And just what is a barbel, you ask? Well, a barbel looks a little something like a mustache. A run-of-the-mill carp will sport this unsightly "facial hair," while a crucian carp is considerably better groomed! I tried to grow a mustache when I was younger. It never did fill in quite right... All for the best in the end, as mustaches go so much better with noses than with beaks!',
    image_uri: "https://acnhapi.com/v1/images/fish/3",
    icon_uri: "https://acnhapi.com/v1/icons/fish/3"
  },
  dace: {
    id: 4,
    "file-name": "dace",
    name: {
      "name-USen": "dace",
      "name-EUen": "dace",
      "name-EUde": "Hasel",
      "name-EUes": "leucisco",
      "name-USes": "leucisco",
      "name-EUfr": "vandoise",
      "name-USfr": "vandoise",
      "name-EUit": "lasca",
      "name-EUnl": "serpeling",
      "name-CNzh": "雅罗鱼",
      "name-TWzh": "珠星三塊魚",
      "name-JPja": "ウグイ",
      "name-KRko": "황어",
      "name-EUru": "елец"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "4pm - 9am",
      isAllDay: false,
      isAllYear: true,
      location: "River",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    shadow: "Medium (3)",
    price: 240,
    "price-cj": 360,
    "catch-phrase": "I caught a dace! Hope I have some space!",
    "museum-phrase":
      'Dace are shiny little fish that enjoy freshwater streams with gravelly bottoms and plenty of sunlight. What a fishy paradise...until the larger fish move in and begin eating the dace! Sadly, the shiny dace are easy for other fish to spot, which makes them a popular snack. However, this particular specimen here has no need to worry. There\'s a strict "No Eating Your Neighbor" policy at this institution.',
    image_uri: "https://acnhapi.com/v1/images/fish/4",
    icon_uri: "https://acnhapi.com/v1/icons/fish/4"
  },
  carp: {
    id: 5,
    "file-name": "carp",
    name: {
      "name-USen": "carp",
      "name-EUen": "carp",
      "name-EUde": "Karpfen",
      "name-EUes": "carpa",
      "name-USes": "carpa",
      "name-EUfr": "carpe",
      "name-USfr": "carpe",
      "name-EUit": "carpa",
      "name-EUnl": "karper",
      "name-CNzh": "鲤鱼",
      "name-TWzh": "鯉魚",
      "name-JPja": "コイ",
      "name-KRko": "잉어",
      "name-EUru": "сазан"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "",
      isAllDay: true,
      isAllYear: true,
      location: "Pond",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Medium (4)",
    price: 300,
    "price-cj": 450,
    "catch-phrase": "I caught a carp! If I catch another they can carpool!",
    "museum-phrase":
      "Oh, the carp... have you ever seen their teeth? For your sake, I hope you have not! Carp have teeth in their throat strong enough to crunch on hard things like shells and fingers! A good rule of thumb when dealing with other species is to keep your fingers out of their mouths. Although, having neither thumbs nor fingers, I am quite safe from this little fellow!",
    image_uri: "https://acnhapi.com/v1/images/fish/5",
    icon_uri: "https://acnhapi.com/v1/icons/fish/5"
  },
  koi: {
    id: 6,
    "file-name": "koi",
    name: {
      "name-USen": "koi",
      "name-EUen": "koi",
      "name-EUde": "Koi-Karpfen",
      "name-EUes": "koi",
      "name-USes": "koi",
      "name-EUfr": "carpe koï",
      "name-USfr": "carpe koï",
      "name-EUit": "koi",
      "name-EUnl": "koikarper",
      "name-CNzh": "锦鲤",
      "name-TWzh": "錦鯉",
      "name-JPja": "ニシキゴイ",
      "name-KRko": "비단잉어",
      "name-EUru": "карп кои"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "4pm - 9am",
      isAllDay: false,
      isAllYear: true,
      location: "Pond",
      rarity: "Uncommon",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    shadow: "Medium (4)",
    price: 4000,
    "price-cj": 6000,
    "catch-phrase":
      "I caught a koi! I don't know why it's so shy... or such a bad speller...",
    "museum-phrase":
      "Koi are a variety of carp bred for their color mutations...starting more than a thousand years ago! Well, one glance at their impressive coloring tells you that the centuries of effort were worth it. And even today people still selectively breed koi in search of new color combinations! One marvels at the thought of what the koi may look like in another thousand years.",
    image_uri: "https://acnhapi.com/v1/images/fish/6",
    icon_uri: "https://acnhapi.com/v1/icons/fish/6"
  },
  goldfish: {
    id: 7,
    "file-name": "goldfish",
    name: {
      "name-USen": "goldfish",
      "name-EUen": "goldfish",
      "name-EUde": "Goldfisch",
      "name-EUes": "pez dorado",
      "name-USes": "pez dorado",
      "name-EUfr": "poisson rouge",
      "name-USfr": "poisson rouge",
      "name-EUit": "pesce rosso",
      "name-EUnl": "goudvis",
      "name-CNzh": "金鱼",
      "name-TWzh": "金魚",
      "name-JPja": "キンギョ",
      "name-KRko": "금붕어",
      "name-EUru": "золотая рыбка"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "",
      isAllDay: true,
      isAllYear: true,
      location: "Pond",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Smallest (1)",
    price: 1300,
    "price-cj": 1950,
    "catch-phrase": "I caught a goldfish! It's worth its weight in fish!",
    "museum-phrase":
      "Goldfish are so cute and delicate... but do you know how big they can get? Why, they can grow up to... a foot in length! Well, sometimes. The size of the tank they're kept in tends to restrict their growth. And just how big will this goldfish get in our large museum tank? I look forward to finding out!",
    image_uri: "https://acnhapi.com/v1/images/fish/7",
    icon_uri: "https://acnhapi.com/v1/icons/fish/7"
  },
  "pop-eyed_goldfish": {
    id: 8,
    "file-name": "pop-eyed_goldfish",
    name: {
      "name-USen": "pop-eyed goldfish",
      "name-EUen": "pop-eyed goldfish",
      "name-EUde": "Teleskopauge",
      "name-EUes": "pez telescopio",
      "name-USes": "pez telescopio",
      "name-EUfr": "cyprin doré",
      "name-USfr": "cyprin doré",
      "name-EUit": "pesce telescopio",
      "name-EUnl": "telescoopooggoudvis",
      "name-CNzh": "龙睛金鱼",
      "name-TWzh": "龍睛金魚",
      "name-JPja": "デメキン",
      "name-KRko": "툭눈금붕어",
      "name-EUru": "телескоп"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "9am - 4pm",
      isAllDay: false,
      isAllYear: true,
      location: "Pond",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [9, 10, 11, 12, 13, 14, 15]
    },
    shadow: "Smallest (1)",
    price: 1300,
    "price-cj": 1950,
    "catch-phrase": "I got a pop-eyed goldfish! It looks so...surprised!",
    "museum-phrase":
      "Pop-eyed goldfish have, as the name suggests, huge round eyes. But as babies they look like other goldfish! As they grow, their eyes begin to pop out and they gain their, hoo, distinct appearance... Imagine the poor fish fancier who unknowingly bought one! Their eyes might well pop out just as far!",
    image_uri: "https://acnhapi.com/v1/images/fish/8",
    icon_uri: "https://acnhapi.com/v1/icons/fish/8"
  },
  ranchu_goldfish: {
    id: 9,
    "file-name": "ranchu_goldfish",
    name: {
      "name-USen": "ranchu goldfish",
      "name-EUen": "ranchu goldfish",
      "name-EUde": "Ranchu",
      "name-EUes": "ranchú",
      "name-USes": "ranchú",
      "name-EUfr": "ranchu",
      "name-USfr": "ranchu",
      "name-EUit": "ranchu",
      "name-EUnl": "buffelrug",
      "name-CNzh": "兰寿金鱼",
      "name-TWzh": "蘭壽金魚",
      "name-JPja": "ランチュウ",
      "name-KRko": "난주",
      "name-EUru": "ранчу"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "9am - 4pm",
      isAllDay: false,
      isAllYear: true,
      location: "Pond",
      rarity: "Uncommon",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [9, 10, 11, 12, 13, 14, 15]
    },
    shadow: "Small (2)",
    price: 4500,
    "price-cj": 6750,
    "catch-phrase":
      "I caught a ranchu goldfish! But I prefer balsamicu goldfish!",
    "museum-phrase":
      "The ranchu goldfish is a charming relative of the goldfish with a bumpy head and stout, round body. They have ordinary heads when born, but develop impressive rectangular heads after about three years. Supposedly their head shape changes depending on factors like the size of their tank... So ranchu goldfish enthusiasts aim to raise perfectly shaped specimens and work hard to achieve this. Of course, no one asks the ranchu goldfish themselves what shape they want their heads to be...",
    image_uri: "https://acnhapi.com/v1/images/fish/9",
    icon_uri: "https://acnhapi.com/v1/icons/fish/9"
  },
  killifish: {
    id: 10,
    "file-name": "killifish",
    name: {
      "name-USen": "killifish",
      "name-EUen": "killifish",
      "name-EUde": "Killifisch",
      "name-EUes": "killi",
      "name-USes": "killi",
      "name-EUfr": "fondule barré",
      "name-USfr": "fondule barré",
      "name-EUit": "killifish",
      "name-EUnl": "killivis",
      "name-CNzh": "稻田鱼",
      "name-TWzh": "稻田魚",
      "name-JPja": "メダカ",
      "name-KRko": "송사리",
      "name-EUru": "оризия"
    },
    availability: {
      "month-northern": "4-8",
      "month-southern": "10-2",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "Pond",
      rarity: "Common",
      "month-array-northern": [4, 5, 6, 7, 8],
      "month-array-southern": [10, 11, 12, 1, 2],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Smallest (1)",
    price: 300,
    "price-cj": 450,
    "catch-phrase": "I caught a killifish! The streams are safe again.",
    "museum-phrase":
      "Ah, the magnificent killifish! Did you know there are over 1,000 different species? My own favorite killifish species are the mangrove, which can live on land for weeks, breathing air! And the mummichog, the first fish ever brought to space. I wonder if the killifish you've brought me is related to either those intrepid explorers?",
    image_uri: "https://acnhapi.com/v1/images/fish/10",
    icon_uri: "https://acnhapi.com/v1/icons/fish/10"
  },
  crawfish: {
    id: 11,
    "file-name": "crawfish",
    name: {
      "name-USen": "crawfish",
      "name-EUen": "crawfish",
      "name-EUde": "Flusskrebs",
      "name-EUes": "cangrejo de río",
      "name-USes": "cangrejo de río",
      "name-EUfr": "écrevisse",
      "name-USfr": "écrevisse",
      "name-EUit": "gambero",
      "name-EUnl": "rode rivierkreeft",
      "name-CNzh": "淡水龙虾",
      "name-TWzh": "淡水龍蝦",
      "name-JPja": "ザリガニ",
      "name-KRko": "가재",
      "name-EUru": "рак"
    },
    availability: {
      "month-northern": "4-9",
      "month-southern": "10-3",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "Pond",
      rarity: "Common",
      "month-array-northern": [4, 5, 6, 7, 8, 9],
      "month-array-southern": [10, 11, 12, 1, 2, 3],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Small (2)",
    price: 200,
    "price-cj": 300,
    "catch-phrase":
      "I caught a crawfish! Or else it's a lobster and I'm a giant!",
    "museum-phrase":
      "Ohoo! So you have found a crawfish. Neither crab nor lobster, crawfish evolved in an interesting manner. Beware their fearsome pinchy pinchers! Behold their many legs! I say! It is a big bug-like, eh wot...The more I look at it, the more unsettled I feel... Let's be done with this and never speak of it again, shall we?",
    image_uri: "https://acnhapi.com/v1/images/fish/11",
    icon_uri: "https://acnhapi.com/v1/icons/fish/11"
  },
  "soft-shelled_turtle": {
    id: 12,
    "file-name": "soft-shelled_turtle",
    name: {
      "name-USen": "soft-shelled turtle",
      "name-EUen": "soft-shelled turtle",
      "name-EUde": "Weichschildkröte",
      "name-EUes": "tortuga caparazón blando",
      "name-USes": "tortuga caparazón blando",
      "name-EUfr": "tortue trionyx",
      "name-USfr": "tortue trionyx",
      "name-EUit": "apalone ferox",
      "name-EUnl": "weekschildpad",
      "name-CNzh": "鳖",
      "name-TWzh": "鱉",
      "name-JPja": "スッポン",
      "name-KRko": "자라",
      "name-EUru": "трионикс"
    },
    availability: {
      "month-northern": "8-9",
      "month-southern": "2-3",
      time: "4pm - 9am",
      isAllDay: false,
      isAllYear: false,
      location: "River",
      rarity: "Uncommon",
      "month-array-northern": [8, 9],
      "month-array-southern": [2, 3],
      "time-array": [16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    shadow: "Medium (4)",
    price: 3750,
    "price-cj": 5625,
    "catch-phrase":
      "I caught a soft-shelled turtle! I can really shell it out!",
    "alt-catch-phrase": [
      "I caught a soft-shelled turtle! I should take a shellfie!"
    ],
    "museum-phrase":
      "These relatives of common turtles will not let go when they decide to bite down on something. Although they can be quite shy, they will become a bit aggressive when threatened. They are often found in water and are very good swimmers because of the flat shape of their shells. They swim with their snouts over the surface of the water so they can breathe. Soft-shelled turtles aren't safe to hold because they are so prone to biting at the slightest movement. However, if one bites down on you, it will usually let go when you put it safely back in the water.",
    image_uri: "https://acnhapi.com/v1/images/fish/12",
    icon_uri: "https://acnhapi.com/v1/icons/fish/12"
  },
  snapping_turtle: {
    id: 13,
    "file-name": "snapping_turtle",
    name: {
      "name-USen": "snapping turtle",
      "name-EUen": "snapping turtle",
      "name-EUde": "Schnappschildkröte",
      "name-EUes": "tortuga mordedora",
      "name-USes": "tortuga mordedora",
      "name-EUfr": "tortue serpentine",
      "name-USfr": "tortue serpentine",
      "name-EUit": "tartaruga azzannatrice",
      "name-EUnl": "bijtschildpad",
      "name-CNzh": "拟鳄龟",
      "name-TWzh": "擬鱷龜",
      "name-JPja": "カミツキガメ",
      "name-KRko": "늑대거북",
      "name-EUru": "каймановая черепаха"
    },
    availability: {
      "month-northern": "4-10",
      "month-southern": "10-4",
      time: "9pm - 4am",
      isAllDay: false,
      isAllYear: false,
      location: "River",
      rarity: "Common",
      "month-array-northern": [4, 5, 6, 7, 8, 9, 10],
      "month-array-southern": [10, 11, 12, 1, 2, 3, 4],
      "time-array": [21, 22, 23, 0, 1, 2, 3]
    },
    shadow: "Large (5)",
    price: 5000,
    "price-cj": 7500,
    "catch-phrase":
      "I caught a snapping turtle! How can it snap without fingers?",
    "museum-phrase":
      "The snapping turtle is a large turtle known for it's crocodile-like body and long claws. No, wait-- it is better known for it's ferocious bite, which it can deliver with shocking speed for a turtle. NO, WAIT-- it is BEST known for that time one chased me across a parking lot and I had to climb on top of a car.",
    image_uri: "https://acnhapi.com/v1/images/fish/13",
    icon_uri: "https://acnhapi.com/v1/icons/fish/13"
  },
  tadpole: {
    id: 14,
    "file-name": "tadpole",
    name: {
      "name-USen": "tadpole",
      "name-EUen": "tadpole",
      "name-EUde": "Kaulquappe",
      "name-EUes": "renacuajo",
      "name-USes": "renacuajo",
      "name-EUfr": "têtard",
      "name-USfr": "têtard",
      "name-EUit": "girino",
      "name-EUnl": "kikkervisje",
      "name-CNzh": "蝌蚪",
      "name-TWzh": "蝌蚪",
      "name-JPja": "オタマジャクシ",
      "name-KRko": "올챙이",
      "name-EUru": "головастик"
    },
    availability: {
      "month-northern": "3-7",
      "month-southern": "9-1",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "Pond",
      rarity: "Common",
      "month-array-northern": [3, 4, 5, 6, 7],
      "month-array-southern": [9, 10, 11, 12, 1],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Smallest (1)",
    price: 100,
    "price-cj": 150,
    "catch-phrase": "I caught a tadpole... It's just a tad small.",
    "museum-phrase":
      "Undoubtedly you know that tadpoles eventually turn into frogs. I must say, I find them impossibly adorable with their squiggly little tails. But even cuter... when they sprout legs! Why, we can witness accelerated evolution in these squirmy little ones. Hoo, it makes me so emotional!",
    image_uri: "https://acnhapi.com/v1/images/fish/14",
    icon_uri: "https://acnhapi.com/v1/icons/fish/14"
  },
  frog: {
    id: 15,
    "file-name": "frog",
    name: {
      "name-USen": "frog",
      "name-EUen": "frog",
      "name-EUde": "Frosch",
      "name-EUes": "rana",
      "name-USes": "rana",
      "name-EUfr": "grenouille",
      "name-USfr": "grenouille",
      "name-EUit": "rana",
      "name-EUnl": "kikker",
      "name-CNzh": "青蛙",
      "name-TWzh": "青蛙",
      "name-JPja": "カエル",
      "name-KRko": "개구리",
      "name-EUru": "лягушка"
    },
    availability: {
      "month-northern": "5-8",
      "month-southern": "11-2",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "Pond",
      rarity: "Common",
      "month-array-northern": [5, 6, 7, 8],
      "month-array-southern": [11, 12, 1, 2],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Small (2)",
    price: 120,
    "price-cj": 180,
    "catch-phrase":
      "I caught a frog! Or it's a new neighbor...and I have some apologizing to do.",
    "museum-phrase":
      "I understand that frogs converse with fellow frogs through a number of varied calls, as it were. Ribbit! My prince has arrived! Gribbit riiibbit! This pond is tragic! Ribbity rib't! I think you're splendid! Hoo hoo, of course I have no clue what they're saying, but I like to think if I practice enough, I might!",
    image_uri: "https://acnhapi.com/v1/images/fish/15",
    icon_uri: "https://acnhapi.com/v1/icons/fish/15"
  },
  freshwater_goby: {
    id: 16,
    "file-name": "freshwater_goby",
    name: {
      "name-USen": "freshwater goby",
      "name-EUen": "freshwater goby",
      "name-EUde": "Flussgrundel",
      "name-EUes": "gobio de río",
      "name-USes": "gobio de río",
      "name-EUfr": "gobie d'eau douce",
      "name-USfr": "gobie d'eau douce",
      "name-EUit": "ghiozzo",
      "name-EUnl": "zoetwatergrondel",
      "name-CNzh": "塘鳢鱼",
      "name-TWzh": "塘鱧魚",
      "name-JPja": "ドンコ",
      "name-KRko": "동사리",
      "name-EUru": "одонтобутис"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "4pm - 9am",
      isAllDay: false,
      isAllYear: true,
      location: "River",
      rarity: "Common",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    shadow: "Small (2)",
    price: 400,
    "price-cj": 600,
    "catch-phrase": "I caught a freshwater goby! Time to go bye-bye!",
    "museum-phrase":
      "The freshwater goby is an unassuming specimen. But beneath that calm, fish exterior, true gluttony resides! It will eat anything that will fit in its mouth...And its mouth is quite the gaping maw, so I recommend you refrain from drawing attention to yourself!",
    image_uri: "https://acnhapi.com/v1/images/fish/16",
    icon_uri: "https://acnhapi.com/v1/icons/fish/16"
  },
  loach: {
    id: 17,
    "file-name": "loach",
    name: {
      "name-USen": "loach",
      "name-EUen": "loach",
      "name-EUde": "Bachschmerle",
      "name-EUes": "locha",
      "name-USes": "locha",
      "name-EUfr": "loche d'étang",
      "name-USfr": "loche d'étang",
      "name-EUit": "cobite",
      "name-EUnl": "modderkruiper",
      "name-CNzh": "泥鳅",
      "name-TWzh": "泥鰍",
      "name-JPja": "ドジョウ",
      "name-KRko": "미꾸라지",
      "name-EUru": "вьюн"
    },
    availability: {
      "month-northern": "3-5",
      "month-southern": "9-11",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "River",
      rarity: "Common",
      "month-array-northern": [3, 4, 5],
      "month-array-southern": [9, 10, 11],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Small (2)",
    price: 400,
    "price-cj": 600,
    "catch-phrase": "I caught a loach! It's...looking at me with reproach.",
    "museum-phrase":
      "Loaches are a large group of bottom-feeding freshwater fish. Because there are so many species, it is difficult to generalize about them all. The one thing they all have in common is perhaps their most unappealing trait; the name 'loach.' Repellent, isn't it? They should have just called it the 'cockloach' and been done with it, eh wot! Loach...loach... It just tastes terrible in the beak.",
    image_uri: "https://acnhapi.com/v1/images/fish/17",
    icon_uri: "https://acnhapi.com/v1/icons/fish/17"
  },
  catfish: {
    id: 18,
    "file-name": "catfish",
    name: {
      "name-USen": "catfish",
      "name-EUen": "catfish",
      "name-EUde": "Katzenwels",
      "name-EUes": "siluro",
      "name-USes": "siluro",
      "name-EUfr": "silure",
      "name-USfr": "barbotte",
      "name-EUit": "pesce gatto",
      "name-EUnl": "meerval",
      "name-CNzh": "鲶鱼",
      "name-TWzh": "鯰魚",
      "name-JPja": "ナマズ",
      "name-KRko": "메기",
      "name-EUru": "сом"
    },
    availability: {
      "month-northern": "5-10",
      "month-southern": "11-4",
      time: "4pm - 9am",
      isAllDay: false,
      isAllYear: false,
      location: "Pond",
      rarity: "Common",
      "month-array-northern": [5, 6, 7, 8, 9, 10],
      "month-array-southern": [11, 12, 1, 2, 3, 4],
      "time-array": [16, 17, 18, 19, 20, 21, 22, 23, 0, 1, 2, 3, 4, 5, 6, 7, 8]
    },
    shadow: "Medium (4)",
    price: 800,
    "price-cj": 1200,
    "catch-phrase": "I caught a catfish! I'm more of a dogfish person...",
    "museum-phrase":
      "Catfish don't have scales and are rather slimy. Believe it or not, this slime helps them breathe! Some species of catfish are nocturnal, and they'll feed on almost anything. They use a suctioning action to pull in their food. Did I mention they can grow as large as you or I?",
    image_uri: "https://acnhapi.com/v1/images/fish/18",
    icon_uri: "https://acnhapi.com/v1/icons/fish/18"
  },
  giant_snakehead: {
    id: 19,
    "file-name": "giant_snakehead",
    name: {
      "name-USen": "giant snakehead",
      "name-EUen": "giant snakehead",
      "name-EUde": "Schlangenkopf",
      "name-EUes": "pez cabeza de serpiente",
      "name-USes": "pez cabeza de serpiente",
      "name-EUfr": "tête-de-serpent",
      "name-USfr": "tête-de-serpent",
      "name-EUit": "pesce serpente",
      "name-EUnl": "rode slangenkopvis",
      "name-CNzh": "黑鱼",
      "name-TWzh": "鱧魚",
      "name-JPja": "ライギョ",
      "name-KRko": "가물치",
      "name-EUru": "змееголов"
    },
    availability: {
      "month-northern": "6-8",
      "month-southern": "12-2",
      time: "9am - 4pm",
      isAllDay: false,
      isAllYear: false,
      location: "Pond",
      rarity: "Rare",
      "month-array-northern": [6, 7, 8],
      "month-array-southern": [12, 1, 2],
      "time-array": [9, 10, 11, 12, 13, 14, 15]
    },
    shadow: "Large (5)",
    price: 5500,
    "price-cj": 8250,
    "catch-phrase":
      "I caught a giant snakehead! Um...but I asked for a medium?",
    "museum-phrase":
      "The giant snakehead is quite a sight to behold, wot! One glance conjurs up visions of its namesake. This resilient creature can even find a home in the mud, where it is able to breathe. As a matter of fact, it dislikes cold weather, so during wintertime the mud serves as its temporary home. I hear that they eat anything that swims past their head. While odd, I feel a sense of owlship with them.",
    image_uri: "https://acnhapi.com/v1/images/fish/19",
    icon_uri: "https://acnhapi.com/v1/icons/fish/19"
  },
  king_salmon: {
    id: 32,
    "file-name": "king_salmon",
    name: {
      "name-USen": "king salmon",
      "name-EUen": "king salmon",
      "name-EUde": "Königslachs",
      "name-EUes": "salmón real",
      "name-USes": "salmón real",
      "name-EUfr": "saumon roi",
      "name-USfr": "saumon royal",
      "name-EUit": "salmone reale",
      "name-EUnl": "chinookzalm",
      "name-CNzh": "帝王鲑",
      "name-TWzh": "帝王鮭",
      "name-JPja": "キングサーモン",
      "name-KRko": "왕연어",
      "name-EUru": "чавыча"
    },
    availability: {
      "month-northern": "9",
      "month-southern": "3",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "River (Mouth)",
      rarity: "Uncommon",
      "month-array-northern": [9],
      "month-array-southern": [3],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Largest (6)",
    price: 1800,
    "price-cj": 2700,
    "catch-phrase": "WOO-HOO! I caught a King salmon! Checkmate!",
    "museum-phrase":
      "The king salmon didn't get its name for nothing.This stately fish can weigh in at up to 130 pounds! It's clear why it's referred to as the king of salmon. I imagine even the mightiest net can catch no more than a few at a time.I must say it's a miracle to me that you didn't get dragged out to sea by this one, wot!",
    image_uri: "https://acnhapi.com/v1/images/fish/32",
    icon_uri: "https://acnhapi.com/v1/icons/fish/32"
  },
  "mahi-mahi": {
    id: 69,
    "file-name": "mahi-mahi",
    name: {
      "name-USen": "mahi-mahi",
      "name-EUen": "mahi-mahi",
      "name-EUde": "Goldmakrele",
      "name-EUes": "lampuga",
      "name-USes": "lampuga",
      "name-EUfr": "coryphène",
      "name-USfr": "mahi-mahi",
      "name-EUit": "lampuga",
      "name-EUnl": "goudmakreel",
      "name-CNzh": "鬼头刀",
      "name-TWzh": "鬼頭刀",
      "name-JPja": "シイラ",
      "name-KRko": "만새기",
      "name-EUru": "корифена"
    },
    availability: {
      "month-northern": "5-10",
      "month-southern": "11-4",
      time: "",
      isAllDay: true,
      isAllYear: false,
      location: "Pier",
      rarity: "Rare",
      "month-array-northern": [5, 6, 7, 8, 9, 10],
      "month-array-southern": [11, 12, 1, 2, 3, 4],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Large (5)",
    price: 6000,
    "price-cj": 9000,
    "catch-phrase": "I caught a mahi-mahi! It's all mahine-mahine.",
    "museum-phrase":
      'The mahi-mahi is an ocean fish known for its wide, somewhat-cute face. It can reach over six feet long. It is known by different names including "dolphinfish," even though it has no relation to dolphins. They live in only in warm, tropical waters...which perhaps explains the relaxed, happy look on their faces.',
    image_uri: "https://acnhapi.com/v1/images/fish/69",
    icon_uri: "https://acnhapi.com/v1/icons/fish/69"
  },
  coelacanth: {
    id: 80,
    "file-name": "coelacanth",
    name: {
      "name-USen": "coelacanth",
      "name-EUen": "coelacanth",
      "name-EUde": "Quastenflosser",
      "name-EUes": "celacanto",
      "name-USes": "celacanto",
      "name-EUfr": "cœlacanthe",
      "name-USfr": "cœlacanthe",
      "name-EUit": "celacanto",
      "name-EUnl": "coelacant",
      "name-CNzh": "矛尾鱼",
      "name-TWzh": "矛尾魚",
      "name-JPja": "シーラカンス",
      "name-KRko": "실러캔스",
      "name-EUru": "латимерия"
    },
    availability: {
      "month-northern": "",
      "month-southern": "",
      time: "",
      isAllDay: true,
      isAllYear: true,
      location: "Sea (when raining or snowing)",
      rarity: "Ultra-rare",
      "month-array-northern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "month-array-southern": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      "time-array": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23
      ]
    },
    shadow: "Largest (6)",
    price: 15000,
    "price-cj": 22500,
    "catch-phrase":
      "Blast from the past! I caught a coelacanth! Think positive! Be a coela-CAN!",
    "museum-phrase":
      "The coelacanth is a deep-sea fish that has been around since the age of the dinosaurs. They were long thought extinct, so when living specimens were discovered, it was quite a shock! Now I'll just have to figure out where in the museum to display it— fish or fossils!",
    image_uri: "https://acnhapi.com/v1/images/fish/80",
    icon_uri: "https://acnhapi.com/v1/icons/fish/80"
  }
};
let container = document.querySelector(".container");

function createCard(data) {
  let fragment = document.createDocumentFragment();

  for (const item in data) {
    let cardContainer = document.createElement("div");
    cardContainer.className = "card";
    let fishContainer = document.createElement("div");
    fishContainer.className = "fish-container";
    let {
      icon_uri,
      name: { "name-USen": fishName },
      price
    } = data[item];

    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.className = "card-image";
    img.src = icon_uri;

    let name = document.createElement("p");
    name.innerText = fishName;

    let cost = document.createElement("p");
    cost.innerText = price;

    if (price > moneyAvailable) {
      cardContainer.style = "--expensive: true";
    }

    fishContainer.appendChild(img);
    fishContainer.appendChild(name);
    fishContainer.appendChild(cost);

    cardContainer.appendChild(fishContainer);

    fragment.appendChild(cardContainer);
  }
  container.appendChild(fragment);
}

createCard(data);