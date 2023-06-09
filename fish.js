function getFishList() {
    return ['Anchovy', 'Arapaima', 'Barracuda', 'Black Seabass', 'Bluecrab', 'Bumper', 'Cod', 'Dogfish', 'Dusky Batfish', 'Flounder', 'Flying Fish', 'Goliath Grouper', 'Hammerhead Shark', 'Herring', 'Horseshoe Crab', 'Lamprey', 'Lionfish', 'Mackerel', "Man O' War", 'Marlin', 'Moon Jellyfish', 'Moon Wrasse', 'Moray Eel', 'Pelican Eel', 'Pike', 'Pollock', 'Pufferfish', 'Red Snapper', 'Rock Beauty', 'Sand Shark', 'Seahorse', 'Spiny Lobster', 'Spotted Ray', 'Squid', 'Stingray', 'Sunfish', 'Sunken Bag', 'Toadfish', 'Tuna', 'Angelfish', 'Archer Fish', 'Barb', 'Betta', 'Bluegill', 'Caracha', 'Carp', 'Catfish', 'Clown Featherback', 'Crappie', 'Crayfish', 'Electric Eel', 'Flying Fox', 'Gar', 'Ghost Knifefish', 'Giant Catfish', 'Giant Stingray', 'Golden Dorado', 'Grasscarp', 'Largemouth Bass', 'Loach', 'Mahi Mahi', 'Milkfish', 'Minnow', 'Mudskipper', 'Perch', 'Piranha', 'Pleco', 'Porgy', 'River Eel', 'Rosette', 'Salmon', 'Snake Head', 'Tiger Fish', 'Trout', 'Vampire Crab', 'Zander', 'Arrowana', 'Axolotl', 'Banded Shark', 'Butterflyfish', 'Danio', 'Discus', 'Fiddler Crab', 'Flowerhorn', 'Goldfish', 'Gourami', 'Guppy', 'Hermitcrab', 'Kohaku Koi', 'Labeo', 'Lionhead Goldfish', 'Molly', 'Mosquitofish', 'Mud Crab', 'Neon Tetra', 'Oscar', 'Pacu', 'Pondsnail', 'Pumpkin Seed', 'Rockfish', 'Sawfish', 'Scup', 'Shiro-Utsuri Koi', 'Showa Koi', 'Stickleback', 'Sturgeon', 'Tench', 'Tilapia'];
}

function getFishData() {
    return {
        "Anchovy": {
            "times_string": {
                "ocean": "all day",
                "river": "all day",
                "pond": "-"
            },
            "times": {
                "ocean": "111111111111111111111111",
                "river": "111111111111111111111111",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "anchovy.png"
        },
        "Arapaima": {
            "times_string": {
                "ocean": "all day, if in newspaper",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111111111111111111111",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "arapaima.png"
        },
        "Barracuda": {
            "times_string": {
                "ocean": "5-7pm,9pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000001110100",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "barracuda.png"
        },
        "Black Seabass": {
            "times_string": {
                "ocean": "12am,5am-6pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "100001111111111111100000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "blackseabass.png"
        },
        "Bluecrab": {
            "times_string": {
                "ocean": "6-10pm",
                "river": "-",
                "pond": "6-10pm"
            },
            "times": {
                "ocean": "000000000000000000111110",
                "river": "000000000000000000000000",
                "pond": "000000000000000000111110"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "bluecrab.png"
        },
        "Bumper": {
            "times_string": {
                "ocean": "1-8pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000011111111000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "bumper.png"
        },
        "Cod": {
            "times_string": {
                "ocean": "4-8am,1pm,5-11pm",
                "river": "4-9am,5-11pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000011111000010001111111",
                "river": "000011111100000001111111",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "cod.png"
        },
        "Dogfish": {
            "times_string": {
                "ocean": "8am-2pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000000001111111000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "dogfish.png"
        },
        "Dusky Batfish": {
            "times_string": {
                "ocean": "6pm,9pm-11pm",
                "river": "7am",
                "pond": "7pm"
            },
            "times": {
                "ocean": "000000000000000000100111",
                "river": "000000010000000000000000",
                "pond": "000000000000000000010000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "duskybatfish.png"
        },
        "Flounder": {
            "times_string": {
                "ocean": "1am,5am-2pm,11pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "010001111111111000000001",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "flounder.png"
        },
        "Flying Fish": {
            "times_string": {
                "ocean": "2-4pm,10pm-5am",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111000000001110000011",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "flyingfish.png"
        },
        "Goliath Grouper": {
            "times_string": {
                "ocean": "all day, if in newspaper",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111111111111111111111",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "goliathgrouper.png"
        },
        "Hammerhead Shark": {
            "times_string": {
                "ocean": "all day, if in newspaper",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111111111111111111111",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "hammerheadshark.png"
        },
        "Herring": {
            "times_string": {
                "ocean": "1am,10am-1pm",
                "river": "1am",
                "pond": "-"
            },
            "times": {
                "ocean": "010000000011110000000000",
                "river": "010000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "herring.png"
        },
        "Horseshoe Crab": {
            "times_string": {
                "ocean": "12am-5am,10am-4pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111000011111110000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "horseshoecrab.png"
        },
        "Lamprey": {
            "times_string": {
                "ocean": "5-6am,8-10am",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000001101110000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "lamprey.png"
        },
        "Lionfish": {
            "times_string": {
                "ocean": "12am,10am-7pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "100000000011111111110000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "lionfish.png"
        },
        "Mackerel": {
            "times_string": {
                "ocean": "12am,8am-2pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "100000001111111000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "mackerel.png"
        },
        "Man O' War": {
            "times_string": {
                "ocean": "12-5am",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "manowar.png"
        },
        "Marlin": {
            "times_string": {
                "ocean": "all day, if in newspaper",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111111111111111111111",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "marlin.png"
        },
        "Moon Jellyfish": {
            "times_string": {
                "ocean": "3-7am,3-5pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000111110000000111000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "moonjellyfish.png"
        },
        "Moon Wrasse": {
            "times_string": {
                "ocean": "5am,9am,11am,3pm,10pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000001000101000100000010",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "moonwrasse.png"
        },
        "Moray Eel": {
            "times_string": {
                "ocean": "1-5am",
                "river": "12-4am",
                "pond": "-"
            },
            "times": {
                "ocean": "011111000000000000000000",
                "river": "111110000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "morayeel.png"
        },
        "Pelican Eel": {
            "times_string": {
                "ocean": "12am,1am,3am",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "110100000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "pelicaneel.png"
        },
        "Pike": {
            "times_string": {
                "ocean": "1-6am",
                "river": "5pm",
                "pond": "12-5am,2pm"
            },
            "times": {
                "ocean": "011111100000000000000000",
                "river": "000000000000000001000000",
                "pond": "111111000000001000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "pike.png"
        },
        "Pollock": {
            "times_string": {
                "ocean": "5pm,7pm,23pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000001000001010000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "pollock.png"
        },
        "Pufferfish": {
            "times_string": {
                "ocean": "1-2am,12pm,5-11pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "011000000000100001111111",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "pufferfish.png"
        },
        "Red Snapper": {
            "times_string": {
                "ocean": "3-4am,2-5pm",
                "river": "3-5pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000110000000001111000000",
                "river": "000000000000000111000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "redsnapper.png"
        },
        "Rock Beauty": {
            "times_string": {
                "ocean": "6-8am,10am,1pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000000111010010000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "rockbeauty.png"
        },
        "Sand Shark": {
            "times_string": {
                "ocean": "all day, if in newspaper",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111111111111111111111",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "sandshark.png"
        },
        "Seahorse": {
            "times_string": {
                "ocean": "5-7am,1-10pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000001110000011111111110",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "seahorse.png"
        },
        "Spiny Lobster": {
            "times_string": {
                "ocean": "2am,12-2pm,11pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "001000000000111000000001",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "spinylobster.png"
        },
        "Spotted Ray": {
            "times_string": {
                "ocean": "5-7am,1pm,5pm,9-11pm",
                "river": "5-7am,10-11pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000001110000010001000111",
                "river": "000001110000000000000011",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "spottedray.png"
        },
        "Squid": {
            "times_string": {
                "ocean": "all day",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "111111111111111111111111",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "squid.png"
        },
        "Stingray": {
            "times_string": {
                "ocean": "10am",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000010000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "stingray.png"
        },
        "Sunfish": {
            "times_string": {
                "ocean": "1pm,3pm,5pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000010101000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "sunfish.png"
        },
        "Sunken Bag": {
            "times_string": {
                "ocean": "1am,3am,5am,1pm,3pm,7pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "010101000000010100010000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Epic",
            "worth": "250",
            "bounty": "",
            "img": "sunkenbag.png"
        },
        "Toadfish": {
            "times_string": {
                "ocean": "3pm,5pm",
                "river": "3pm,5pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000101000000",
                "river": "000000000000000101000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "toadfish.png"
        },
        "Tuna": {
            "times_string": {
                "ocean": "10am-5pm,11pm",
                "river": "-",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000011111111000001",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "tuna.png"
        },
        "Angelfish": {
            "times_string": {
                "ocean": "-",
                "river": "1-2pm,6pm,9pm-4am",
                "pond": "12-1pm,9pm-4am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111110000000011000100111",
                "pond": "111110000000110000000111"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "angelfish.png"
        },
        "Archer Fish": {
            "times_string": {
                "ocean": "-",
                "river": "12-1pm,11pm-5am",
                "pond": "12-2pm,11pm-5am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111111000000110000000001",
                "pond": "111111000000111000000001"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "archerfish.png"
        },
        "Barb": {
            "times_string": {
                "ocean": "-",
                "river": "12-10am,3-4pm",
                "pond": "3pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111111111110000110000000",
                "pond": "000000000000000100000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "barb.png"
        },
        "Betta": {
            "times_string": {
                "ocean": "-",
                "river": "12-1am,7am-6pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "110000011111111111100000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "betta.png"
        },
        "Bluegill": {
            "times_string": {
                "ocean": "-",
                "river": "10am,6-8pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000010000000111000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "bluegill.png"
        },
        "Caracha": {
            "times_string": {
                "ocean": "-",
                "river": "5am,8am,9am,11am,1pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000001001101010000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "caracha.png"
        },
        "Carp": {
            "times_string": {
                "ocean": "-",
                "river": "all day",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111111111111111111111111",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "carp.png"
        },
        "Catfish": {
            "times_string": {
                "ocean": "-",
                "river": "8-9am",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000001100000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "catfish.png"
        },
        "Clown Featherback": {
            "times_string": {
                "ocean": "-",
                "river": "1am,3am",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "010100000000000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "clownfeatherback.png"
        },
        "Crappie": {
            "times_string": {
                "ocean": "-",
                "river": "5am,8am,1pm,3pm,6pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000001001000010100100000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "crappie.png"
        },
        "Crayfish": {
            "times_string": {
                "ocean": "-",
                "river": "12-3am,12-3pm",
                "pond": "12-3am,12-3pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111100000000111100000000",
                "pond": "111100000000111100000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "crayfish.png"
        },
        "Electric Eel": {
            "times_string": {
                "ocean": "-",
                "river": "12am,10am-12pm,7-8pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "100000000011100000011000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "electriceel.png"
        },
        "Flying Fox": {
            "times_string": {
                "ocean": "-",
                "river": "8am",
                "pond": "11am,12am,8am,9am,3pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000001000000000000000",
                "pond": "100000001101000100000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "flyingfox.png"
        },
        "Gar": {
            "times_string": {
                "ocean": "-",
                "river": "1-6am,12pm,2pm",
                "pond": "1-7am,12pm,2pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "011111100000101000000000",
                "pond": "011111110000101000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "gar.png"
        },
        "Ghost Knifefish": {
            "times_string": {
                "ocean": "-",
                "river": "2pm-3pm,7pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000001100010000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "ghostknifefish.png"
        },
        "Giant Catfish": {
            "times_string": {
                "ocean": "-",
                "river": "all day, if in newspaper",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111111111111111111111111",
                "pond": "000000000000000000000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "giantcatfish.png"
        },
        "Giant Stingray": {
            "times_string": {
                "ocean": "-",
                "river": "5am,10am",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000001000010000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "giantstingray.png"
        },
        "Golden Dorado": {
            "times_string": {
                "ocean": "-",
                "river": "7pm,8pm-11pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000011111",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "goldendorado.png"
        },
        "Grasscarp": {
            "times_string": {
                "ocean": "-",
                "river": "12-6pm,9pm-1am",
                "pond": "12-5pm,9pm-1am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "110000000000111111100111",
                "pond": "110000000000111111000111"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "grasscarp.png"
        },
        "Largemouth Bass": {
            "times_string": {
                "ocean": "-",
                "river": "all day",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111111111111111111111111",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "largemouthbass.png"
        },
        "Loach": {
            "times_string": {
                "ocean": "-",
                "river": "3am,7am,10pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000100010000000000000010",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "loach.png"
        },
        "Mahi Mahi": {
            "times_string": {
                "ocean": "-",
                "river": "7am-11am",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000011111000000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "mahimahi.png"
        },
        "Milkfish": {
            "times_string": {
                "ocean": "-",
                "river": "8am,1pm",
                "pond": "7am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000001000010000000000",
                "pond": "000000010000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "milkfish.png"
        },
        "Minnow": {
            "times_string": {
                "ocean": "-",
                "river": "12-4am,11am-2pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111110000001111000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "minnow.png"
        },
        "Mudskipper": {
            "times_string": {
                "ocean": "-",
                "river": "5-10pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000001111110",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "mudskipper.png"
        },
        "Perch": {
            "times_string": {
                "ocean": "-",
                "river": "2-7am",
                "pond": "1-7am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "001111110000000000000000",
                "pond": "011111110000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "perch.png"
        },
        "Piranha": {
            "times_string": {
                "ocean": "-",
                "river": "5-8pm",
                "pond": "4-7pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000001111000",
                "pond": "000000000000000011110000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "piranha.png"
        },
        "Pleco": {
            "times_string": {
                "ocean": "-",
                "river": "2am,4-9am,11am-1pm,10-11pm",
                "pond": "1-3am,5am-1pm,10-11pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "001011111101110000000011",
                "pond": "011101111111110000000011"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "pleco.png"
        },
        "Porgy": {
            "times_string": {
                "ocean": "-",
                "river": "all day",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111111111111111111111111",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "porgy.png"
        },
        "River Eel": {
            "times_string": {
                "ocean": "-",
                "river": "12-3am,8am-12pm,2pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111100001111101000000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "rivereel.png"
        },
        "Rosette": {
            "times_string": {
                "ocean": "-",
                "river": "8am,1pm,3pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000001000010100000000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "rosette.png"
        },
        "Salmon": {
            "times_string": {
                "ocean": "-",
                "river": "5-11am,6-7pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000001111111000000110000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "salmon.png"
        },
        "Snake Head": {
            "times_string": {
                "ocean": "-",
                "river": "all day, if in newspaper",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111111111111111111111111",
                "pond": "000000000000000000000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "snakehead.png"
        },
        "Tiger Fish": {
            "times_string": {
                "ocean": "-",
                "river": "all day, if in newspaper",
                "pond": "all day, if in newspaper"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "111111111111111111111111",
                "pond": "111111111111111111111111"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "tigerfish.png"
        },
        "Trout": {
            "times_string": {
                "ocean": "-",
                "river": "5-7am,6-7pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000001110000000000110000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "trout.png"
        },
        "Vampire Crab": {
            "times_string": {
                "ocean": "-",
                "river": "3-5am",
                "pond": "3-5am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000111000000000000000000",
                "pond": "000111000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "vampirecrab.png"
        },
        "Zander": {
            "times_string": {
                "ocean": "-",
                "river": "3-5am,10am-12pm,2-4pm,7pm",
                "pond": "-"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000111000011101110010000",
                "pond": "000000000000000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "zander.png"
        },
        "Arrowana": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "all day, if in newspaper"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "111111111111111111111111"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "arrowana.png"
        },
        "Axolotl": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "3am,6-7am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000100110000000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "axolotl.png"
        },
        "Banded Shark": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "9pm-11pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000000111"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "bandedshark.png"
        },
        "Butterflyfish": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "8am,9pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000001000000000000100"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "butterflyfish.png"
        },
        "Danio": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "all day"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "111111111111111111111111"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "danio.png"
        },
        "Discus": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "3pm,5pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000101000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "discus.png"
        },
        "Fiddler Crab": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "4-7am,9am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000011110100000000000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "fiddlercrab.png"
        },
        "Flowerhorn": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "12am,7am-1pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "100000011111110000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "flowerhorn.png"
        },
        "Goldfish": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "1am,7-11am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "010000011111000000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "goldfish.png"
        },
        "Gourami": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "7-11pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000000011111"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "gourami.png"
        },
        "Guppy": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "12am,11am-2pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "100000000001111000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "guppy.png"
        },
        "Hermitcrab": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "4-5pm,7-8pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000011011000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "hermitcrab.png"
        },
        "Kohaku Koi": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "12am,10am-12pm,2-5pm,7-8pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "100000000011101111011000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "kohakukoi.png"
        },
        "Labeo": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "5am,7am,9am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000001010100000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "labeo.png"
        },
        "Lionhead Goldfish": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "1am,7-10am,3pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "010000011110000100000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "lionheadgoldfish.png"
        },
        "Molly": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "all day"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "111111111111111111111111"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "molly.png"
        },
        "Mosquitofish": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "9am,11am,10pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000101000000000010"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "mosquitofish.png"
        },
        "Mud Crab": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "4-11pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000011111111"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "mudcrab.png"
        },
        "Neon Tetra": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "1am,9am-1pm,9-11pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "010000000111110000000111"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "neontetra.png"
        },
        "Oscar": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "6am-2pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000111111111000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "oscar.png"
        },
        "Pacu": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "5pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000000001000000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "pacu.png"
        },
        "Pondsnail": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "12am,7am-2pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "100000011111111000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "pondsnail.png"
        },
        "Pumpkin Seed": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "1am,7am,9am,11am,12am,3pm,4pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "110000010101000110000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "pumpkinseed.png"
        },
        "Rockfish": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "12am,11am-5pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "100000000001111111000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "rockfish.png"
        },
        "Sawfish": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "8am-9am,12pm-1pm,3pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000001100110100000000"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "sawfish.png"
        },
        "Scup": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "1pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000010000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "scup.png"
        },
        "Shiro-Utsuri Koi": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "5-10am"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000001111110000000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "shiroutsurikoi.png"
        },
        "Showa Koi": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "2pm,5-8pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000000001001111000"
            },
            "rarity": "Rare",
            "worth": "120",
            "bounty": "600",
            "img": "showakoi.png"
        },
        "Stickleback": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "7am,12pm,3pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000010000100100000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "stickleback.png"
        },
        "Sturgeon": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "all day, if in newspaper"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "111111111111111111111111"
            },
            "rarity": "Legendary",
            "worth": "300",
            "bounty": "1500",
            "img": "sturgeon.png"
        },
        "Tench": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "9am,1pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "000000000100010000000000"
            },
            "rarity": "Common",
            "worth": "20",
            "bounty": "100",
            "img": "tench.png"
        },
        "Tilapia": {
            "times_string": {
                "ocean": "-",
                "river": "-",
                "pond": "12-4am,11am,1pm"
            },
            "times": {
                "ocean": "000000000000000000000000",
                "river": "000000000000000000000000",
                "pond": "111110000001010000000000"
            },
            "rarity": "Uncommon",
            "worth": "50",
            "bounty": "250",
            "img": "tilapia.png"
        }
    }
}