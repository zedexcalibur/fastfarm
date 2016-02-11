"use strict";
$(document).ready(function () {
    var myApp = (function () {
        var k;
        var l;
        var level = 1;
        var experience = 0;
        var expToAdv = 0;
        var expSoFar = 0;
        var money = 350;
        var siloSize = 50;
        var barnSize = 50;
        var siloUsage = 6;
        var barnUsage = 3;
        var cropOfChoice = 0;
        var planted = [];
        var fieldStartTime = [];
        var coopsAvailable = [];
        var coopsBought = [];
        var animalFed = [];
        var animalNo = [];
        var animalsForSale = [];
        var animalTime = [];
        var orchardPlanted = [];
        var orchardTime = [];
        var treeNo = [];
        var treesForSale = [];
        var orderProd = [];
        var orderQty = [];
        var orderSell = [];
        var orderExp = [];
        var cookState = [];
        var cookProd = [];
        var cookTime = [];
        var fieldTimeVar = [];
        var animalTimeVar = [];
        var orchardTimeVar = [];
        var cookTimeVar = [];
        var leveldialogs = [];
        var boundary = [];
        var animal = [];
        var appliance = [];
        var crop = [];
        var fruit = [];
        var product = [];
        leveldialogs[2] = "<p>Now you can</p><p>- buy a bakery!</p><p>- bake bread!</p>";
        leveldialogs[3] = "<p>Look, more fields!</p>";
        leveldialogs[4] = "<p>Your barn and silo got bigger!</p>";
        leveldialogs[5] = "<p>Now you can grow soybeans!</p>";
        leveldialogs[6] = "<p>Now you can</p><p>- buy cows!</p><p>- make cow feed!</p><p>- buy a dairy!</p><p>- make cream!</p>";
        leveldialogs[7] = "<p>Now you can</p><p>- grow sugarcane!</p><p>- buy a sugar mill!</p><p>- make corn bread!</p><p>- make brown sugar!</p>";
        leveldialogs[8] = "<p>Now you can</p><p>- buy a popcorn maker!</p><p>- make popcorn!</p>";
        leveldialogs[9] = "<p>Now you can</p><p>- grow carrots!</p><p>- buy a barbecue!</p><p>- make butter!</p><p>- make pancakes!</p>";
        leveldialogs[10] = "<p>Now you can</p><p>- buy pigs!</p><p>- make pig feed!</p><p>- make cookies!</p>";
        leveldialogs[11] = "<p>Now you can make bacon and eggs!</p>";
        leveldialogs[12] = "<p>Now you can</p><p>- make cheese!</p><p>- upgrade your feed mill!</p><p>- buy another chicken coop!</p>";
        leveldialogs[13] = "<p>Now you can</p><p>- grow indigo!</p><p>- make white sugar!</p>";
        leveldialogs[14] = "<p>Now you can</p><p>- buy a pie oven!</p><p>- make carrot pie!</p>";
        leveldialogs[15] = "<p>Now you can</p><p>- grow pumpkins!</p><p>- make pumpkin pie!</p><p>-buy an apple orchard</p><p>- buy another cow pasture!</p>";
        leveldialogs[16] = "<p>Now you can</p><p>- buy sheep!</p><p>- make sheep feed!</p><p>- make buttered popcorn!</p>";
        leveldialogs[17] = "<p>Now you can</p><p>- buy a loom!</p><p>- make sweaters!</p>";
        leveldialogs[18] = "<p>Now you can</p><p>- grow cotton!</p><p>- make cotton fabric!</p><p>- make bacon pie!</p><p>- make syrup!</p><p>- make hamburgers!</p><p>- buy another pig pen!</p>";
        leveldialogs[19] = "<p>Now you can</p><p>- buy a sewing machine!</p><p>- buy a raspberry orchard!</p><p>- make raspberry muffins!</p><p>- make blue woolly hats!</p><p>- make cotton shirts!</p>";
        leveldialogs[20] = "<p>Now you can make blue sweaters!</p>";
        leveldialogs[21] = "<p>Now you can</p><p>- buy a cake oven!</p><p>- make carrot cake!</p><p>- make woolly chaps!</p>";
        leveldialogs[22] = "<p>Now you can buy a cherry orchard! Very Chekhov!!</p>";
        leveldialogs[23] = "<p>Now you can</p><p>- make cream cake!</p><p>- make red berry cake!</p><p>- buy another chicken coop!</p>";
        leveldialogs[24] = "<p>Now you can make cheese cake!</p>";
        leveldialogs[25] = "<p>Now you can</p><p>- grow chili peppers!</p><p>- make chili popcorn!</p><p>- make violet dresses!</p>";
        leveldialogs[26] = "<p>Now you can</p><p>- buy a juice press!</p><p>- make carrot juice!</p><p>- buy a blackberry orchard!</p><p>- make blackberry muffins!</p><p>- buy another sheep pasture!</p>";
        leveldialogs[27] = "<p>Now you can</p><p>- buy a fish pond!</p><p>- make fish burgers!</p><p>- buy another cow pasture!</p>";
        leveldialogs[28] = "<p>Now you can</p><p>- make apple pie!</p><p>- make fish pie!</p><p>- make apple juice!</p>";
        leveldialogs[29] = "<p>Now you can</p><p>- buy an ice cream maker!</p><p>- make vanilla ice cream!</p>";
        leveldialogs[30] = "<p>Now you can</p><p>- grow tomatoes!</p><p>- make roasted tomatoes!</p><p>- make cherry juice!</p>";
        leveldialogs[31] = "<p>Now you can</p><p>- make tomato juice!</p><p>- make berry juice!</p>";
        leveldialogs[32] = "<p>Now you can</p><p>- buy a goat yard!</p><p>- make goat feed!</p><p>- buy another pig pen!</p>";
        leveldialogs[33] = "<p>Now you can</p><p>- make goat cheese!</p><p>- make pizza!</p><p>- make cherry popsicles!</p>";
        leveldialogs[34] = "<p>Now you can</p><p>- grow strawberries!</p><p>- make feta pie!</p><p>- make strawberry ice cream!</p>";
        leveldialogs[35] = "<p>Now you can</p><p>- grow potatoes!</p><p>- buy a jam maker!</p><p>- make apple jam!</p><p>- make strawberry cake!</p><p>- make baked potatoes!</p>";
        leveldialogs[36] = "<p>Now you can</p><p>- buy a cacao orchard!</p><p>- make chocolate cake!</p><p>- make casserole!</p><p>- make raspberry jam!</p>";
        leveldialogs[37] = "<p>Now you can</p><p>- make spicy pizza!</p><p>- make blackberry jam!</p><p>- buy another goat yard!</p>";
        leveldialogs[38] = "<p>Now you can</p><p>- make potato feta cake!</p><p>- make cherry jam!</p>";
        leveldialogs[39] = "<p>Now you can</p><p>- buy bees!</p><p>- make bee feed!</p><p>- buy a honey extractor!</p><p>- make potato bread!</p><p>- make shepherd's pie!</p><p>- make chocolate ice cream!</p>";
        leveldialogs[40] = "<p>Now you can make honey popcorn!</p>";
        leveldialogs[41] = "<p>Now you can make fish and chips!</p>";
        leveldialogs[42] = "<p>Now you can</p><p>- buy a coffee orchard!</p><p>- buy a coffee kiosk!</p><p>- make espresso!</p><p>- make honey apple cake!</p><p>- buy another sheep pasture!</p>";
        leveldialogs[43] = "<p>Now you can make caffe latte!</p>";
        leveldialogs[44] = "<p>Now you can</p><p>- fish for lobsters!</p><p>- make chocolate popcorn!</p>";
        leveldialogs[45] = "<p>Now you can</p><p>- make frutii di mare pizza!</p><p>- make caffe mocha!</p>";
        boundary[0] = 0;
        boundary[1] = 10;
        boundary[2] = 24;
        boundary[3] = 48;
        boundary[4] = 78;
        boundary[5] = 128;
        boundary[6] = 348;
        boundary[7] = 718;
        boundary[8] = 1208;
        boundary[9] = 1998;
        boundary[10] = 2958;
        boundary[11] = 4138;
        boundary[12] = 5688;
        boundary[13] = 7478;
        boundary[14] = 9748;
        boundary[15] = 12628;
        boundary[16] = 15798;
        boundary[17] = 19918;
        boundary[18] = 24658;
        boundary[19] = 30068;
        boundary[20] = 36188;
        boundary[21] = 43938;
        boundary[22] = 53078;
        boundary[23] = 63708;
        boundary[24] = 75908;
        boundary[25] = 89608;
        boundary[26] = 105008;
        boundary[27] = 122908;
        boundary[28] = 143008;
        boundary[29] = 166408;
        boundary[30] = 192508;
        boundary[31] = 221508;
        boundary[32] = 253908;
        boundary[33] = 289308;
        boundary[34] = 328008;
        boundary[35] = 370208;
        boundary[36] = 415408;
        boundary[37] = 464308;
        boundary[38] = 519208;
        boundary[39] = 581008;
        boundary[40] = 648908;
        boundary[41] = 723908;
        boundary[42] = 805408;
        boundary[43] = 899808;
        boundary[44] = 1000608;
        animal[0] = {
            name: "Chicken",
            type: "coop",
            cost: [20, 140, 270],
            currentcost: 20,
            coopcost: 5,
            time: 10,
            exp: 2,
            image: "chicken.png"
        };
        animal[1] = {
            name: "Cow",
            type: "pasture",
            cost: [50, 600, 1150],
            currentcost: 50,
            coopcost: 50,
            time: 20,
            exp: 3,
            image: "cow.png"
        };
        animal[2] = {
            name: "Pig",
            type: "pen",
            cost: [500, 1400, 2300],
            currentcost: 500,
            coopcost: 150,
            exp: 5,
            time: 30,
            image: "pig.png"
        };
        animal[3] = {
            name: "Sheep",
            type: "pasture",
            coopcost: 300,
            currentcost: 800,
            cost: [800, 2300, 3800],
            exp: 5,
            time: 40,
            image: "sheep.png"
        };
        animal[4] = {
            name: "Goat",
            type: "yard",
            cost: [2500, 5400, 8650],
            currentcost: 2500,
            coopcost: 1000,
            exp: 6,
            time: 50,
            image: "goat.png"
        };
        animal[5] = {
            name: "Bee",
            type: "hive",
            cost: [1500, 2000, 2500],
            currentcost: 1500,
            coopcost: 4000,
            exp: 8,
            time: 60,
            image: "bee.png"
        };
        appliance[0] = {
            name: "Bakery",
            cost: 20,
            level: 2,
            products: [15, 16, 14, 28, 39, 54, 64, 68, 80]
        };
        appliance[1] = {
            name: "Feed mill",
            cost: 5,
            level: 1,
            products: [0, 1, 2, 3, 4, 5]
        };
        appliance[2] = {
            name: "Dairy",
            cost: 50,
            level: 6,
            products: [13, 10, 36, 53]
        };
        appliance[3] = {
            name: "Sugar mill",
            cost: 350,
            level: 7,
            products: [8, 17, 26]
        };
        appliance[4] = {
            name: "Popcorn pot",
            cost: 650,
            level: 8,
            products: [9, 22, 37, 73, 78]
        };
        appliance[5] = {
            name: "Barbecue",
            cost: 730,
            level: 9,
            products: [11, 20, 27, 42, 47, 60, 74]
        };
        appliance[6] = {
            name: "Pie oven",
            cost: 2200,
            level: 14,
            products: [18, 19, 24, 43, 44, 56, 62, 71]
        };
        appliance[7] = {
            name: "Loom",
            cost: 3200,
            level: 17,
            products: [23, 25, 30, 31]
        };
        appliance[8] = {
            name: "Sewing machine",
            cost: 4500,
            level: 19,
            products: [29, 33, 38]
        };
        appliance[9] = {
            name: "Cake oven",
            cost: 12100,
            level: 21,
            products: [32, 34, 35, 52, 58, 61, 66, 76]
        };
        appliance[10] = {
            name: "Juice press",
            cost: 31000,
            level: 26,
            products: [40, 45, 48, 49, 50]
        };
        appliance[11] = {
            name: "Fishing pond",
            cost: 35000,
            level: 27,
            products: [41, 79]
        };
        appliance[12] = {
            name: "Ice cream maker",
            cost: 38000,
            level: 29,
            products: [46, 55, 57, 72]
        };
        appliance[13] = {
            name: "Jam maker",
            cost: 59000,
            level: 35,
            products: [59, 63, 65, 67]
        };
        appliance[14] = {
            name: "Honey extractor",
            cost: 35000,
            level: 39,
            products: [70]
        };
        appliance[15] = {
            name: "Coffee kiosk",
            cost: 75000,
            level: 42,
            products: [75, 77, 81]
        };
        crop[0] = {
            name: "wheat",
            quantity: 3,
            qop: 3,
            level: 1,
            sell: 3,
            time: 2,
            exp: 1,
            letter: 'c',
            no: 0,
            image: "wheat.png"
        };
        crop[1] = {
            name: "corn",
            quantity: 3,
            qop: 3,
            level: 1,
            sell: 7,
            time: 5,
            exp: 1,
            letter: 'c',
            no: 1,
            image: "corn.png"
        };
        crop[2] = {
            name: "soybeans",
            quantity: 0,
            qop: 0,
            level: 5,
            sell: 10,
            time: 15,
            exp: 2,
            letter: 'c',
            no: 2,
            image: "soy.png"
        };
        crop[3] = {
            name: "sugar",
            quantity: 0,
            qop: 0,
            level: 7,
            sell: 14,
            time: 20,
            exp: 3,
            letter: 'c',
            no: 3,
            image: "sugar.png"
        };
        crop[4] = {
            name: "carrots",
            quantity: 0,
            qop: 1,
            level: 9,
            sell: 7,
            time: 10,
            exp: 2,
            letter: 'c',
            no: 4,
            image: "carrot.png"
        };
        crop[5] = {
            name: "indigo",
            quantity: 0,
            qop: 0,
            level: 13,
            sell: 25,
            time: 30,
            exp: 2,
            letter: 'c',
            no: 5,
            image: "indigo.png"
        };
        crop[6] = {
            name: "pumpkins",
            quantity: 0,
            qop: 0,
            level: 15,
            sell: 32,
            time: 35,
            exp: 6,
            letter: 'c',
            no: 6,
            image: "pumpkin.png"
        };
        crop[7] = {
            name: "cotton",
            quantity: 0,
            qop: 0,
            level: 18,
            sell: 28,
            time: 30,
            exp: 6,
            letter: 'c',
            no: 7,
            image: "cotton.png"
        };
        crop[8] = {
            name: "chili peppers",
            quantity: 0,
            qop: 0,
            level: 25,
            sell: 36,
            time: 40,
            exp: 7,
            letter: 'c',
            no: 8,
            image: "chili.png"
        };
        crop[9] = {
            name: "tomatoes",
            quantity: 0,
            qop: 0,
            level: 30,
            sell: 43,
            time: 50,
            exp: 8,
            letter: 'c',
            no: 9,
            image: "tomato.png"
        };
        crop[10] = {
            name: "strawberries",
            quantity: 0,
            qop: 0,
            level: 34,
            sell: 50,
            time: 60,
            exp: 10,
            letter: 'c',
            no: 10,
            image: "strawberry.png"
        };
        crop[11] = {
            name: "potatoes",
            quantity: 0,
            qop: 0,
            level: 35,
            sell: 36,
            time: 40,
            exp: 7,
            letter: 'c',
            no: 11,
            image: "potato.png"
        };
        fruit[0] = {
            name: "Apple",
            type: "tree",
            lcname: "apples",
            quantity: 0,
            level: 15,
            sell: 39,
            exp: 7,
            time: 10,
            treeprice: 160,
            letter: 'f',
            no: 0,
            image: "apple.png",
            treeimage: "appletrans.png"
        };
        fruit[1] = {
            name: "Raspberry",
            type: "bush",
            lcname: "raspberries",
            quantity: 0,
            level: 19,
            sell: 46,
            exp: 9,
            time: 20,
            treeprice: 220,
            letter: 'f',
            no: 1,
            image: "raspberry.png",
            treeimage: "raspberrytrans.png"
        };
        fruit[2] = {
            name: "Cherry",
            type: "tree",
            lcname: "cherries",
            quantity: 0,
            level: 22,
            sell: 68,
            exp: 13,
            time: 30,
            treeprice: 410,
            letter: 'f',
            no: 2,
            image: "cherry.png",
            treeimage: "cherrytrans.png"
        };
        fruit[3] = {
            name: "Blackberry",
            type: "bush",
            lcname: "blackberries",
            quantity: 0,
            level: 26,
            sell: 82,
            exp: 16,
            time: 40,
            treeprice: 530,
            letter: 'f',
            no: 3,
            image: "blackberry.png",
            treeimage: "blackberrytrans.png"
        };
        fruit[4] = {
            name: "Cacao",
            type: "tree",
            lcname: "cacao",
            quantity: 0,
            level: 36,
            sell: 86,
            exp: 16,
            time: 50,
            treeprice: 550,
            letter: 'f',
            no: 4,
            image: "cacao.png",
            treeimage: "cacaotrans.png"
        };
        fruit[5] = {
            name: "Coffee",
            type: "tree",
            lcname: "coffee",
            quantity: 0,
            level: 42,
            sell: 64,
            exp: 12,
            time: 60,
            treeprice: 375,
            letter: 'f',
            no: 5,
            image: "coffee.png",
            treeimage: "coffeetrans.png"
        };
        product[0] = {
            name: "chicken feed",
            quantity: 3,
            image: "chickenfeed.png",
            level: 3,
            ing: [crop[0], crop[1]],
            ingq: [2, 1],
            ingt: ["c", "c"],
            ingn: [0, 1],
            sell: 7,
            time: 5,
            letter: 'p',
            no: 0,
            exp: 1
        };
        product[1] = {
            name: "cow feed",
            quantity: 0,
            image: "cowfeed.png",
            level: 6,
            ing: [crop[2], crop[1]],
            ingq: [2, 1],
            ingt: ["c", "c"],
            ingn: [2, 1],
            sell: 14,
            time: 10,
            letter: 'p',
            no: 1,
            exp: 2
        };
        product[2] = {
            name: "pig feed",
            quantity: 0,
            image: "pigfeed.png",
            level: 10,
            ing: [crop[4], crop[2]],
            ingq: [2, 1],
            ingt: ["c", "c"],
            ingn: [4, 2],
            sell: 14,
            time: 20,
            letter: 'p',
            no: 2,
            exp: 2
        };
        product[3] = {
            name: "Sheep feed",
            quantity: 0,
            image: "sheepfeed.png",
            level: 16,
            ing: [crop[0], crop[2]],
            ingq: [3, 1],
            ingt: ["c", "c"],
            ingn: [0, 2],
            sell: 14,
            time: 30,
            letter: 'p',
            no: 3,
            exp: 3
        };
        product[4] = {
            name: "Goat feed",
            quantity: 0,
            image: "goatfeed.png",
            level: 32,
            ing: [crop[0], crop[1], crop[4]],
            ingq: [1, 1, 2],
            ingt: ["c", "c", "c"],
            ingn: [0, 1, 4],
            sell: 14,
            time: 40,
            letter: 'p',
            no: 4,
            exp: 3
        };
        product[5] = {
            name: "Bee feed",
            quantity: 0,
            image: "beefeed.png",
            level: 39,
            ing: [crop[5]],
            ingq: [3],
            ingt: ["c"],
            ingn: [5],
            sell: 14,
            time: 40,
            letter: 'p',
            no: 5,
            exp: 3
        };
        product[6] = {
            name: "eggs",
            quantity: 0,
            image: "egg.png",
            level: 1,
            sell: 18,
            letter: 'p',
            no: 6,
            exp: 2
        };
        product[7] = {
            name: "milk",
            quantity: 0,
            image: "milk.png",
            level: 6,
            sell: 32,
            letter: 'p',
            no: 7,
            exp: 3
        };
        product[8] = {
            name: "brown sugar",
            quantity: 0,
            image: "brownsugar.png",
            level: 7,
            ing: [crop[3]],
            ingq: [1],
            ingt: ["c"],
            ingn: [3],
            sell: 50,
            time: 10,
            letter: 'p',
            no: 8,
            exp: 6
        };
        product[9] = {
            name: "popcorn",
            quantity: 0,
            image: "popcorn.png",
            level: 8,
            ing: [crop[1]],
            ingq: [2],
            ingt: ["c"],
            ingn: [1],
            sell: 32,
            time: 15,
            letter: 'p',
            no: 9,
            exp: 4
        };
        product[10] = {
            name: "butter",
            quantity: 0,
            image: "butter.png",
            level: 9,
            ing: [product[7]],
            ingq: [2],
            ingt: ["p"],
            ingn: [7],
            sell: 82,
            time: 15,
            letter: 'p',
            no: 10,
            exp: 10
        };
        product[11] = {
            name: "pancakes",
            quantity: 0,
            image: "pancake.png",
            level: 9,
            ing: [product[6], product[8]],
            ingq: [3, 1],
            ingt: ["p", "p"],
            ingn: [6, 8],
            sell: 108,
            time: 15,
            letter: 'p',
            no: 11,
            exp: 13
        };
        product[12] = {
            name: "bacon",
            quantity: 0,
            image: "bacon.png",
            level: 10,
            sell: 50,
            letter: 'p',
            no: 12,
            exp: 5
        };
        product[13] = {
            name: "cream",
            quantity: 0,
            image: "cream.png",
            level: 6,
            ing: [product[7]],
            ingq: [1],
            ingt: ["p"],
            ingn: [7],
            sell: 50,
            time: 10,
            letter: 'p',
            no: 13,
            exp: 6
        };
        product[14] = {
            name: "cookies",
            quantity: 0,
            image: "cookie.png",
            level: 10,
            ing: [crop[0], product[6], product[8]],
            ingq: [2, 2, 1],
            ingt: ["c", "p", "p"],
            ingn: [0, 6, 8],
            sell: 104,
            time: 20,
            letter: 'p',
            no: 14,
            exp: 13
        };
        product[15] = {
            name: "bread",
            quantity: 0,
            image: "bread.png",
            level: 2,
            ing: [crop[0]],
            ingq: [3],
            ingt: ["c"],
            ingn: [0],
            sell: 21,
            time: 5,
            letter: 'p',
            no: 15,
            exp: 3
        };
        product[16] = {
            name: "corn bread",
            quantity: 0,
            image: "cornbread.png",
            level: 7,
            ing: [crop[1], product[6]],
            ingq: [2, 2],
            ingt: ["c", "p"],
            ingn: [1, 6],
            sell: 72,
            time: 15,
            letter: 'p',
            no: 16,
            exp: 8
        };
        product[17] = {
            name: "White sugar",
            quantity: 0,
            image: "whitesugar.png",
            level: 13,
            ing: [crop[3]],
            ingq: [2],
            ingt: ["c"],
            ingn: [3],
            sell: 50,
            time: 15,
            letter: 'p',
            no: 17,
            exp: 6
        };
        product[18] = {
            name: "Carrot pie",
            quantity: 0,
            image: "carrotpie.png",
            level: 14,
            ing: [crop[4], crop[0], product[6]],
            ingq: [3, 2, 1],
            ingt: ["c", "c", "p"],
            ingn: [4, 0, 6],
            sell: 82,
            time: 20,
            letter: 'p',
            no: 18,
            exp: 10
        };
        product[19] = {
            name: "Pumpkin pie",
            quantity: 0,
            image: "pumpkinpie.png",
            level: 15,
            ing: [crop[6], crop[0], product[6]],
            ingq: [3, 2, 1],
            ingt: ["c", "c", "p"],
            ingn: [6, 0, 6],
            sell: 158,
            time: 30,
            letter: 'p',
            no: 19,
            exp: 19
        };
        product[20] = {
            name: "Bacon and eggs",
            quantity: 0,
            image: "baconandeggs.png",
            level: 11,
            ing: [product[6], product[12]],
            ingq: [4, 2],
            ingt: ["p", "p"],
            ingn: [6, 12],
            sell: 201,
            time: 20,
            letter: 'p',
            no: 20,
            exp: 24
        };
        product[21] = {
            name: "Wool",
            quantity: 0,
            image: "wool.png",
            level: 16,
            sell: 54,
            letter: 'p',
            no: 21,
            exp: 5
        };
        product[22] = {
            name: "Buttered popcorn",
            quantity: 0,
            image: "butteredpopcorn.png",
            level: 16,
            ing: [crop[1], product[10]],
            ingq: [2, 1],
            ingt: ["c", "p"],
            ingn: [1, 10],
            sell: 126,
            time: 20,
            letter: 'p',
            no: 22,
            exp: 15
        };
        product[23] = {
            name: "Sweater",
            quantity: 0,
            image: "sweater.png",
            level: 17,
            ing: [product[21]],
            ingq: [2],
            ingt: ["p"],
            ingn: [21],
            sell: 151,
            time: 30,
            letter: 'p',
            no: 23,
            exp: 18
        };
        product[24] = {
            name: "Bacon pie",
            quantity: 0,
            image: "baconpie.png",
            level: 18,
            ing: [product[12], crop[0], product[6]],
            ingq: [3, 2, 1],
            ingt: ["p", "c", "p"],
            ingn: [12, 0, 6],
            sell: 219,
            time: 40,
            letter: 'p',
            no: 24,
            exp: 26
        };
        product[25] = {
            name: "Cotton fabric",
            quantity: 0,
            image: "cottonfabric.png",
            level: 18,
            ing: [crop[7]],
            ingq: [3],
            ingt: ["c"],
            ingn: [7],
            sell: 108,
            time: 15,
            letter: 'p',
            no: 25,
            exp: 13
        };
        product[26] = {
            name: "Syrup",
            quantity: 0,
            image: "syrup.png",
            level: 18,
            ing: [crop[3]],
            ingq: [3],
            ingt: ["c"],
            ingn: [3],
            sell: 90,
            time: 25,
            letter: 'p',
            no: 26,
            exp: 11
        };
        product[27] = {
            name: "Hamburger",
            quantity: 0,
            image: "hamburger.png",
            level: 18,
            ing: [product[12], product[15]],
            ingq: [2, 2],
            ingt: ["p", "p"],
            ingn: [12, 15],
            sell: 180,
            time: 30,
            letter: 'p',
            no: 27,
            exp: 22
        };
        product[28] = {
            name: "Raspberry muffin",
            quantity: 0,
            image: "raspberrymuffin.png",
            level: 19,
            ing: [crop[0], product[6], fruit[1]],
            ingq: [2, 1, 2],
            ingt: ["c", "p", "f"],
            ingn: [0, 6, 1],
            sell: 140,
            time: 20,
            letter: 'p',
            no: 28,
            exp: 17
        };
        product[29] = {
            name: "Cotton shirt",
            quantity: 0,
            image: "cottonshirt.png",
            level: 19,
            ing: [product[25]],
            ingq: [2],
            ingt: ["p"],
            ingn: [25],
            sell: 241,
            time: 20,
            letter: 'p',
            no: 29,
            exp: 29
        };
        product[30] = {
            name: "Blue woolly hat",
            quantity: 0,
            image: "bluewoollyhat.png",
            level: 19,
            ing: [product[21], crop[5]],
            ingq: [1, 1],
            ingt: ["p", "c"],
            ingn: [21, 5],
            sell: 111,
            time: 20,
            letter: 'p',
            no: 30,
            exp: 13
        };
        product[31] = {
            name: "Blue sweater",
            quantity: 0,
            image: "bluesweater.png",
            level: 20,
            ing: [product[21], crop[5]],
            ingq: [2, 2],
            ingt: ["p", "c"],
            ingn: [21, 5],
            sell: 208,
            time: 40,
            letter: 'p',
            no: 31,
            exp: 25
        };
        product[32] = {
            name: "Carrot cake",
            quantity: 0,
            image: "carrotcake.png",
            level: 21,
            ing: [crop[4], product[8], product[10]],
            ingq: [2, 1, 1],
            ingt: ["c", "p", "p"],
            ingn: [4, 8, 10],
            sell: 1165,
            time: 25,
            letter: 'p',
            no: 32,
            exp: 20
        };
        product[33] = {
            name: "Woolly chaps",
            quantity: 0,
            image: "woollychaps.png",
            level: 21,
            ing: [product[25], product[21]],
            ingq: [1, 3],
            ingt: ["p", "p"],
            ingn: [25, 21],
            sell: 309,
            time: 25,
            letter: 'p',
            no: 33,
            exp: 37
        };
        product[34] = {
            name: "Cream cake",
            quantity: 0,
            image: "creamcake.png",
            level: 23,
            ing: [crop[0], product[13], product[17]],
            ingq: [5, 1, 1],
            ingt: ["c", "p", "p"],
            ingn: [0, 13, 17],
            sell: 219,
            time: 40,
            letter: 'p',
            no: 34,
            exp: 26
        };
        product[35] = {
            name: "Red berry cake",
            quantity: 0,
            image: "redberrycake.png",
            level: 23,
            ing: [fruit[1], fruit[2], product[7], product[6]],
            ingq: [1, 2, 1, 1],
            ingt: ["f", "f", "p", "p"],
            ingn: [1, 2, 7, 6],
            sell: 255,
            time: 20,
            letter: 'p',
            no: 35,
            exp: 31
        };
        product[36] = {
            name: "Cheese",
            quantity: 0,
            image: "cheese.png",
            level: 12,
            ing: [product[7]],
            ingq: [3],
            ingt: ["p"],
            ingn: [7],
            sell: 122,
            time: 20,
            letter: 'p',
            no: 52,
            exp: 15
        };
        product[37] = {
            name: "Chili popcorn",
            quantity: 0,
            image: "chilipopcorn.png",
            level: 25,
            ing: [crop[1], crop[8]],
            ingq: [2, 2],
            ingt: ["c", "c"],
            ingn: [1, 8],
            sell: 122,
            time: 30,
            letter: 'p',
            no: 37,
            exp: 15
        };
        product[38] = {
            name: "Violet dress",
            quantity: 0,
            image: "violetdress.png",
            level: 25,
            ing: [product[25], fruit[1], crop[5]],
            ingq: [2, 1, 1],
            ingt: ["p", "f", "c"],
            ingn: [25, 1, 5],
            sell: 327,
            time: 30,
            letter: 'p',
            no: 38,
            exp: 39
        };
        product[39] = {
            name: "Blackberry muffin",
            quantity: 0,
            image: "blackberrymuffin.png",
            level: 26,
            ing: [crop[0], product[6], fruit[3]],
            ingq: [1, 2, 2],
            ingt: ["c", "p", "f"],
            ingn: [0, 6, 3],
            sell: 226,
            time: 20,
            letter: 'p',
            no: 39,
            exp: 27
        };
        product[40] = {
            name: "Carrot juice",
            quantity: 0,
            image: "carrotjuice.png",
            level: 26,
            ing: [crop[4]],
            ingq: [3],
            ingt: ["c"],
            ingn: [4],
            sell: 46,
            time: 15,
            letter: 'p',
            no: 40,
            exp: 6
        };
        product[41] = {
            name: "Fish fillet",
            quantity: 0,
            image: "fishfillet.png",
            ing: [product[12], crop[5]],
            ingq: [1, 1],
            ingt: ["p", "c"],
            ingn: [12, 5],
            level: 27,
            sell: 54,
            time: 25,
            letter: 'p',
            no: 41,
            exp: 4
        };
        product[42] = {
            name: "Fishburger",
            quantity: 0,
            image: "fishburger.png",
            level: 27,
            ing: [product[41], crop[8], product[15]],
            ingq: [2, 1, 2],
            ingt: ["p", "c", "p"],
            ingn: [41, 8, 15],
            sell: 226,
            time: 30,
            letter: 'p',
            no: 42,
            exp: 27
        };
        product[43] = {
            name: "Apple pie",
            quantity: 0,
            image: "applepie.png",
            level: 28,
            ing: [fruit[0], crop[0], product[6], product[26]],
            ingq: [3, 2, 1, 1],
            ingt: ["f", "c", "p", "p"],
            ingn: [0, 0, 6, 26],
            sell: 270,
            time: 35,
            letter: 'p',
            no: 43,
            exp: 32
        };
        product[44] = {
            name: "Fish pie",
            quantity: 0,
            image: "fishpie.png",
            level: 28,
            ing: [product[41], crop[0], product[6]],
            ingq: [3, 2, 1],
            ingt: ["p", "c", "p"],
            ingn: [41, 0, 6],
            sell: 226,
            time: 30,
            letter: 'p',
            no: 44,
            exp: 27
        };
        product[45] = {
            name: "Apple juice",
            quantity: 0,
            image: "applejuice.png",
            level: 28,
            ing: [fruit[0]],
            ingq: [2],
            ingt: ["f"],
            ingn: [0],
            sell: 129,
            time: 30,
            letter: 'p',
            no: 45,
            exp: 15
        };
        product[46] = {
            name: "Vanilla ice cream",
            quantity: 0,
            image: "vanillaicecream.png",
            level: 29,
            ing: [product[7], product[13], product[17]],
            ingq: [1, 1, 1],
            ingt: ["p", "p", "p"],
            ingn: [7, 13, 17],
            sell: 172,
            time: 30,
            letter: 'p',
            no: 46,
            exp: 20
        };
        product[47] = {
            name: "Roasted tomatoes",
            quantity: 0,
            image: "roastedtomatoes.png",
            level: 30,
            ing: [crop[9]],
            ingq: [2],
            ingt: ["c"],
            ingn: [9],
            sell: 118,
            time: 25,
            letter: 'p',
            no: 47,
            exp: 14
        };
        product[48] = {
            name: "Cherry juice",
            quantity: 0,
            image: "cherryjuice.png",
            level: 30,
            ing: [fruit[2]],
            ingq: [2],
            ingt: ["f"],
            ingn: [2],
            sell: 216,
            time: 35,
            letter: 'p',
            no: 48,
            exp: 26
        };
        product[49] = {
            name: "Tomato juice",
            quantity: 0,
            image: "tomatojuice.png",
            level: 31,
            ing: [crop[9]],
            ingq: [3],
            ingt: ["c"],
            ingn: [9],
            sell: 162,
            time: 25,
            letter: 'p',
            no: 49,
            exp: 19
        };
        product[50] = {
            name: "Berry juice",
            quantity: 0,
            image: "berryjuice.png",
            level: 31,
            ing: [fruit[3], fruit[1]],
            ingq: [1, 1],
            ingt: ["f", "f"],
            ingn: [3, 1],
            sell: 205,
            time: 40,
            letter: 'p',
            no: 50,
            exp: 24
        };
        product[51] = {
            name: "Goat milk",
            quantity: 0,
            image: "goatmilk.png",
            level: 32,
            sell: 64,
            letter: 'p',
            no: 51,
            exp: 6
        };
        product[52] = {
            name: "Cheese cake",
            quantity: 0,
            image: "cheesecake.png",
            level: 24,
            ing: [product[36], product[14]],
            ingq: [1, 1],
            ingt: ["p", "p"],
            ingn: [36, 14],
            sell: 284,
            time: 45,
            letter: 'p',
            no: 36,
            exp: 34
        };
        product[53] = {
            name: "Goat cheese",
            quantity: 0,
            image: "goatcheese.png",
            level: 33,
            ing: [product[51]],
            ingq: [2],
            ingt: ["p"],
            ingn: [51],
            sell: 162,
            time: 25,
            letter: 'p',
            no: 53,
            exp: 19
        };
        product[54] = {
            name: "Pizza",
            quantity: 0,
            image: "pizza.png",
            level: 33,
            ing: [crop[0], crop[9], product[36]],
            ingq: [2, 1, 1],
            ingt: ["c", "c", "p"],
            ingn: [0, 9, 36],
            sell: 190,
            time: 10,
            letter: 'p',
            no: 54,
            exp: 23
        };
        product[55] = {
            name: "Cherry popsicle",
            quantity: 0,
            image: "cherrypopsicle.png",
            level: 33,
            ing: [product[26], product[48]],
            ingq: [1, 1],
            ingt: ["p", "p"],
            ingn: [26, 48],
            sell: 352,
            time: 40,
            letter: 'p',
            no: 55,
            exp: 42
        };
        product[56] = {
            name: "Feta pie",
            quantity: 0,
            image: "fetapie.png",
            level: 34,
            ing: [product[53], crop[0], product[6]],
            ingq: [1, 2, 1],
            ingt: ["p", "c", "p"],
            ingn: [53, 0, 6],
            sell: 223,
            time: 25,
            letter: 'p',
            no: 56,
            exp: 26
        };
        product[57] = {
            name: "Strawberry ice cream",
            quantity: 0,
            image: "strawberryicecream.png",
            level: 34,
            ing: [product[13], product[17], crop[10], product[7]],
            ingq: [1, 1, 2, 2],
            ingt: ["p", "p", "c", "p"],
            ingn: [13, 17, 10, 7],
            sell: 331,
            time: 45,
            letter: 'p',
            no: 57,
            exp: 40
        };
        product[58] = {
            name: "Strawberry cake",
            quantity: 0,
            image: "strawberrycake.png",
            level: 35,
            ing: [crop[0], product[17], crop[10], product[13]],
            ingq: [3, 1, 2, 1],
            ingt: ["c", "p", "c", "p"],
            ingn: [0, 17, 10, 13],
            sell: 316,
            time: 40,
            letter: 'p',
            no: 58,
            exp: 38
        };
        product[59] = {
            name: "Apple jam",
            quantity: 0,
            image: "applejam.png",
            level: 35,
            ing: [fruit[0]],
            ingq: [3],
            ingt: ["f"],
            ingn: [0],
            sell: 219,
            time: 50,
            letter: 'p',
            no: 59,
            exp: 26
        };
        product[60] = {
            name: "Baked potato",
            quantity: 0,
            image: "bakedpotato.png",
            level: 35,
            ing: [crop[11], crop[8], product[36], product[13]],
            ingq: [2, 1, 1, 1],
            ingt: ["c", "c", "p", "p"],
            ingn: [11, 8, 36, 13],
            sell: 298,
            time: 15,
            letter: 'p',
            no: 60,
            exp: 36
        };
        product[61] = {
            name: "Chocolate cake",
            quantity: 0,
            image: "chocolatecake.png",
            level: 36,
            ing: [fruit[4], product[8], product[10]],
            ingq: [2, 1, 1],
            ingt: ["f", "p", "p"],
            ingn: [4, 8, 10],
            sell: 320,
            time: 30,
            letter: 'p',
            no: 61,
            exp: 38
        };
        product[62] = {
            name: "Casserole",
            quantity: 0,
            image: "casserole.png",
            level: 36,
            ing: [crop[11], product[12], product[6], product[36]],
            ingq: [2, 2, 2, 1],
            ingt: ["c", "p", "p", "p"],
            ingn: [11, 12, 6, 36],
            sell: 367,
            time: 30,
            letter: 'p',
            no: 62,
            exp: 44
        };
        product[63] = {
            name: "Raspberry jam",
            quantity: 0,
            image: "raspberryjam.png",
            level: 36,
            ing: [fruit[1]],
            ingq: [3],
            ingt: ["f"],
            ingn: [1],
            sell: 252,
            time: 55,
            letter: 'p',
            no: 63,
            exp: 28
        };
        product[64] = {
            name: "Spicy pizza",
            quantity: 0,
            image: "spicypizza.png",
            level: 37,
            ing: [crop[0], crop[9], crop[8], product[36]],
            ingq: [2, 1, 1, 1],
            ingt: ["c", "c", "c", "p"],
            ingn: [0, 9, 8, 36],
            sell: 226,
            time: 15,
            letter: 'p',
            no: 64,
            exp: 27
        };
        product[65] = {
            name: "Blackberry jam",
            quantity: 0,
            image: "blackberryjam.png",
            level: 37,
            ing: [fruit[3]],
            ingq: [3],
            ingt: ["f"],
            ingn: [3],
            sell: 388,
            time: 60,
            letter: 'p',
            no: 65,
            exp: 46
        };
        product[66] = {
            name: "Potato feta cake",
            quantity: 0,
            image: "potatofetacake.png",
            level: 38,
            ing: [crop[11], product[6], product[53]],
            ingq: [1, 4, 1],
            ingt: ["c", "p", "p"],
            ingn: [11, 6, 53],
            sell: 309,
            time: 30,
            letter: 'p',
            no: 66,
            exp: 37
        };
        product[67] = {
            name: "Cherry jam",
            quantity: 0,
            image: "cherryjam.png",
            level: 38,
            ing: [fruit[2]],
            ingq: [3],
            ingt: ["f"],
            ingn: [2],
            sell: 334,
            time: 55,
            letter: 'p',
            no: 67,
            exp: 40
        };
        product[68] = {
            name: "Potato bread",
            quantity: 0,
            image: "potatobread.png",
            level: 39,
            ing: [crop[11], product[17], product[6], product[10]],
            ingq: [2, 1, 3, 1],
            ingt: ["c", "p", "p", "p"],
            ingn: [11, 17, 6, 10],
            sell: 284,
            time: 20,
            letter: 'p',
            no: 68,
            exp: 34
        };
        product[69] = {
            name: "Honeycomb",
            quantity: 0,
            image: "honeycomb.png",
            level: 39,
            sell: 68,
            letter: 'p',
            no: 69,
            exp: 8
        };
        product[70] = {
            name: "Honey",
            quantity: 0,
            image: "honey.png",
            level: 39,
            ing: [product[69]],
            ingq: [2],
            ingt: ["p"],
            ingn: [69],
            sell: 154,
            time: 10,
            letter: 'p',
            no: 70,
            exp: 19
        };
        product[71] = {
            name: "Shepherd's pie",
            quantity: 0,
            image: "shepherdspie.png",
            level: 39,
            ing: [crop[11], product[12], crop[4], crop[6]],
            ingq: [2, 2, 2, 2],
            ingt: ["c", "p", "c", "c"],
            ingn: [11, 12, 4, 6],
            sell: 280,
            time: 30,
            letter: 'p',
            no: 71,
            exp: 34
        };
        product[72] = {
            name: "Chocolate ice cream",
            quantity: 0,
            image: "chocolateicecream.png",
            level: 39,
            ing: [product[13], product[17], fruit[4], product[7]],
            ingq: [1, 1, 2, 1],
            ingt: ["p", "p", "f", "p"],
            ingn: [13, 17, 4, 7],
            sell: 342,
            time: 35,
            letter: 'p',
            no: 72,
            exp: 41
        };
        product[73] = {
            name: "Honey popcorn",
            quantity: 0,
            image: "honeypopcorn.png",
            level: 40,
            ing: [crop[1], product[70]],
            ingq: [2, 2],
            ingt: ["c", "p"],
            ingn: [1, 70],
            sell: 360,
            time: 25,
            letter: 'p',
            no: 73,
            exp: 43
        };
        product[74] = {
            name: "Fish and chips",
            quantity: 0,
            image: "fishandchips.png",
            level: 41,
            ing: [product[41], crop[11]],
            ingq: [2, 3],
            ingt: ["p", "c"],
            ingn: [41, 11],
            sell: 244,
            time: 25,
            letter: 'p',
            no: 74,
            exp: 29
        };
        product[75] = {
            name: "Espresso",
            quantity: 0,
            image: "espresso.png",
            level: 42,
            ing: [fruit[5], product[17]],
            ingq: [3, 1],
            ingt: ["f", "p"],
            ingn: [5, 17],
            sell: 248,
            time: 5,
            letter: 'p',
            no: 75,
            exp: 29
        };
        product[76] = {
            name: "Honey apple cake",
            quantity: 0,
            image: "honeyapplecake.png",
            level: 42,
            ing: [crop[0], product[6], fruit[0], product[70]],
            ingq: [2, 1, 2, 2],
            ingt: ["c", "p", "f", "p"],
            ingn: [0, 6, 0, 70],
            sell: 482,
            time: 40,
            letter: 'p',
            no: 76,
            exp: 57
        };
        product[77] = {
            name: "Caffe latte",
            quantity: 0,
            image: "caffelatte.png",
            level: 43,
            ing: [fruit[5], product[17], product[7]],
            ingq: [2, 1, 1],
            ingt: ["f", "p", "p"],
            ingn: [5, 17, 7],
            sell: 219,
            time: 10,
            letter: 'p',
            no: 77,
            exp: 26
        };
        product[78] = {
            name: "Chocolate popcorn",
            quantity: 0,
            image: "chocolatepopcorn.png",
            level: 44,
            ing: [crop[1], fruit[4]],
            ingq: [2, 2],
            ingt: ["c", "f"],
            ingn: [1, 4],
            sell: 248,
            time: 35,
            letter: 'p',
            no: 78,
            exp: 29
        };
        product[79] = {
            name: "Lobster tail",
            quantity: 0,
            image: "lobstertail.png",
            level: 44,
            ing: [product[41]],
            ingq: [1],
            ingt: ["p"],
            ingn: [41],
            sell: 201,
            time: 50,
            letter: 'p',
            no: 79,
            exp: 24
        };
        product[80] = {
            name: "Frutti di mare pizza",
            quantity: 0,
            image: "fruttidimarepizza.png",
            level: 45,
            ing: [crop[0], product[41], product[79], product[36]],
            ingq: [2, 1, 1, 1],
            ingt: ["c", "p", "p", "p"],
            ingn: [0, 41, 79, 52],
            sell: 403,
            time: 15,
            letter: 'p',
            no: 80,
            exp: 48
        };
        product[81] = {
            name: "Caffe mocha",
            quantity: 0,
            image: "caffemocha.png",
            level: 45,
            ing: [fruit[5], product[13], fruit[4]],
            ingq: [1, 1, 2],
            ingt: ["f", "p", "f"],
            ingn: [5, 13, 4],
            sell: 291,
            time: 15,
            letter: 'p',
            no: 81,
            exp: 35
        };
        // Initialise animal data.
        coopsAvailable[0] = 1;
        coopsBought[0] = 0;
        for (k = 1; k < 6; k += 1) {
            coopsAvailable[k] = 0;
            coopsBought[k] = 0;
        }
        for (k = 0; k < 6; k += 1) {
            animalFed[k] = [];
            animalTime[k] = [];
            animalTimeVar[k] = [];
            for (l = 0; l < 18; l += 1) {
                animalFed[k][l] = 0;
                animalTime[k][l] = 0;
            }
            animalNo[k] = 0;
            animalsForSale[k] = 0;
        }
        // Initialise orchard data.
        for (k = 0; k < 6; k += 1) {
            orchardPlanted[k] = [];
            for (l = 0; l < 10; l += 1) {
                orchardPlanted[k][l] = 0;
            }
            orchardTime[k] = [];
            orchardTimeVar[k] = [];
            treeNo[k] = 0;
            treesForSale[k] = 0;
        }
        // Initialise order data.
        for (k = 0; k < 12; k += 1) {
            orderProd[k] = [];
            orderQty[k] = [];
            for (l = 0; l < 3; l += 1) {
                orderProd[k][l] = crop[0];
                orderQty[k][l] = 1;
            }
            orderSell[k] = 0;
            orderExp[k] = 0;
        }
        // Initialise appliance data.
        for (k = 0; k < 17; k += 1) {
            cookState[k] = 0;
            cookProd[k] = 0;
            cookTime[k] = 0;
        }
        expToAdv = boundary[1];
        return {
            // Set the text at the top of the screen.
            initialiseGameText: function () {
                $("#leveltext").text(level);
                $("#exptext1").text(expSoFar);
                $("#exptext2").text(expToAdv);
                $("#moneytext").text(money);
                $(".silotext1").text(siloUsage);
                $(".silotext2").text(siloSize);
                $(".barntext1").text(barnUsage);
                $(".barntext2").text(barnSize);
            },
            getExperience: function () {
                return experience;
            },
            drawBarn: function () {
                var i;
                var tempText = '';
                for (i = 0; i < 82; i += 1) {
                    tempText += '<tr id="prow' + i + '" style="display: none"><td><img src="images/' + product[i].image + '" alt="' + product[i].name + '" width=40></td><td>x <span class="p' + i + 'no">' + product[i].quantity + '</span></td><td><input id="bp' + i + '" size=4 value="0" class="rightalign"></input></td><td>for ' + product[i].sell + ' gold each</td><td><button class="barnbutton" id="sbp' + i + '">Sell</button></td></tr>';
                }
                return tempText;
            },
            drawSilo: function () {
                var tempText = '';
                var i;
                for (i = 0; i < 12; i += 1) {
                    tempText += '<tr id="crow' + i + '" style="display: none"><td><img src="images/' + crop[i].image + '" alt="' + crop[i].name + '" width=40></td><td>x <span class="c' + i + 'no">' + crop[i].quantity + '</span></td><td><input id="sp' + i + '" size=4 value="0" class="rightalign"></input></td><td>for ' + crop[i].sell + ' gold each</td><td><button class="silobutton" id="ssp' + i + '">Sell</button></td></tr>';
                }
                for (i = 0; i < 6; i += 1) {
                    tempText += '<tr id="frow' + i + '" style="display: none"><td><img src="images/' + fruit[i].image + '" alt="' + fruit[i].name + '" width=40></td><td>x <span class="f' + i + 'no">' + fruit[i].quantity + '</span></td><td><input id="fp' + i + '" size=4 value="0" class="rightalign"></input></td><td>for ' + fruit[i].sell + ' gold each</td><td><button class="fruitbutton" id="sfp' + i + '">Sell</button></td></tr>';
                }
                return tempText;
            },
            drawShop: function () {
                var i;
                var tempText = '<tr id="feeduptext" style="display: none"><td class="left">Feed mill upgrade</td><td class="right">3200 gold</td><td><button id="fub">Buy</button></td></tr>';
                // Draw animals for shop.
                for (i = 0; i < 6; i += 1) {
                    tempText += '<tr id="cooptext' + i + '" style="display: none"><td class="left">' + animal[i].name + ' ' + animal[i].type + '</td><td> ' + animal[i].coopcost + ' gold</td><td> <button class="bcoop" id="bcoop' + i + '">Buy</button></td></tr><tr id="animal' + i + 'text" style="display: none"><td class="left"><span id="animal' + i + 'forsaletext">6</span> x ' + animal[i].name + '</td><td class="right"><span id="animal' + i + 'costtext">' + animal[i].currentcost + '</span> gold </td><td> <button id="ban' + i + '" class="banimal">Buy</button></td></tr>';
                }
                // Draw appliances for shop.
                for (i = 0; i < 16; i += 1) {
                    tempText += '<tr id="app' + i + 'text" style="display: none"><td class="left">' + appliance[i].name + '</td><td class="right">' + appliance[i].cost + ' gold</td><td><button class="bapp" id="bapp' + i + '">Buy</button></td></tr>';
                }
                // Draw orchards for shop.
                for (i = 0; i < 6; i += 1) {
                    tempText += '<tr id="or' + i + 'text" style="display: none"><td class="left">' + fruit[i].name + ' orchard</td><td class="right">500 gold</td><td><button class="bor" id="bor' + i + '">Buy</button></td></tr><tr id="tree' + i + 'text" style="display: none"><td class="left"><span id="tree' + i + 'forsaletext">10</span> x ' + fruit[i].name + ' ' + fruit[i].type + '</td><td class="right">' + fruit[i].treeprice + ' gold</td><td><button class="btree" id="btree' + i + '">Buy</button></td></tr>';
                }
                return tempText;
            },
            drawCrops: function () {
                var i;
                var tempText = '<div class="croppicker"><div class="centeredlow">Pick crop</div>';
                for (i = 0; i < 6; i += 1) {
                    tempText += '<div id="c' + i + '" class="crop" style="display: none"><img src="images/' + crop[i].image + '" alt="' + crop[i].name + '" width=50></div>';
                }
                tempText += '</div><div class="thinleftfloater"><div class="clearlow"></div>';
                tempText += '<div class="centeredlow"><div id="c0number" class="valignedcentered"> <span class="c0no">3</span></div></div>';
                tempText += '<div class="centeredlow"><div id="c1number" class="valigned"> <span class="c1no">3</span></div></div>';
                for (i = 2; i < 6; i += 1) {
                    tempText += '<div id="c' + i + 'number" class="centeredlow" style="display: none"><div class="valignedcentered"> <span class="c' + i + 'no">3</span></div></div>';
                }
                tempText += '</div><div class="fatleftfloater"><div class="clearlow"></div>';
                for (i = 6; i < 12; i += 1) {
                    tempText += '<div id="c' + i + '" class="crop" style="display: none"><img src="images/' + crop[i].image + '" alt="' + crop[i].name + ' "width=50></div>';
                }
                tempText += '</div><div class="thinleftfloater"><div class="clearlow"></div>';
                for (i = 6; i < 12; i += 1) {
                    tempText += '<div id="c' + i + 'number" class="centeredlow" style="display: none"><div class="valignedcentered"> <span class="c' + i + 'no">3</span></div></div>';
                }
                tempText += '</div></div>';
                return tempText;
            },
            drawLand: function () {
                var i;
                var j;
                var tempText = '';
                for (i = 0; i < 8; i += 1) {
                    for (j = 0; j < 10; j += 1) {
                        tempText += '<div class="field" id="a' + parseInt((i * 10) + j) + '"></div>';
                    }
                    tempText += '<div class="rightboundary"></div>';
                }
                tempText += '<div class="landbottom"></div>';
                return tempText;
            },
            // Initialises the fields.
            initialiseCrops: function () {
                var i;
                for (i = 0; i < 8; i += 1) {
                    planted[i] =- 1;
                }
                for (i = 8; i < 80; i += 1) {
                    planted[i] = -2;
                    $("#a" + i).css("background-color", "#333333");
                }
                for (i = 0; i < 80; i += 1) {
                    fieldStartTime[80] = 0;
                }
            },
            // Prepares the animal areas to be drawn.
            drawAnimals: function (creature) {
                var i;
                var tempText = '<div id="an' + creature + 'coop" class="animalareatall"><div class="widelow"><div class="valigned">' + animal[creature].name + ' ' + animal[creature].type + ' - click to feed and collect</div></div><div class="wide">';
                for (i = 0; i < 12; i += 1) {
                    tempText += '<div class="coop" style="display: none" id="an' + creature + i + '"></div>';
                }
                tempText += '<div class="rightboundary"></div><div> Sacks of feed: <span class="p' + creature + 'no">' + product[creature].quantity + '</span></div></div><div class="wideclear">';
                for (i = 12; i < 18; i += 1) {
                    tempText += '<div class="toplesscoop" style="display: none" id="an' + creature + i + '"></div>';
                }
                tempText += '<div class="rightboundary" style="display: none"></div></div></div>';
                return tempText;
            },
            // Prepares the orchards to be drawn.
            drawOrchard: function (no) {
                var i;
                var tempText = '<div id="orchard' + no + '" class="animalareashort"><div class="widelow"><div class="valigned">' + fruit[no].name + ' orchard</div></div>';
                for (i = 0; i < 10; i += 1) {
                    tempText += '<div class="orchard"  id="or' + no + i + '"></div>';
                }
                tempText += '<div class="rightboundary"></div></div>';
                return tempText;
            },
            drawOrders: function () {
                var i;
                var tempText = '<div>';
                for (i = 0; i < 12; i += 1) {
                    tempText += '<div id="o' + i + '" class="';
                    if (i == 0 || i == 5 || i == 6 || i == 11) {
                        tempText += 'thinorderbackground';
                    } else {
                        tempText += 'fatorderbackground';
                    }
                    tempText += '"><div id="order' + i + '" class="wide" style="display: none">';
                    tempText += '<div class="shortwide" id="orp0' + i + '"><img src="images/' + orderProd[i][0].image + '" alt="' + orderProd[i][0].name + '" width=40> x ' + orderQty[i][0] + ' (<span class="' + orderProd[i][0].letter + orderProd[i][0].no + 'no">' + orderProd[i][0].quantity + '</span>) <span id="ot0' + i + '">';
                    if (orderProd[i][0].quantity >= orderQty[i][0] && (orderProd[i][0].letter != 'c' || orderProd[i][0].qop > orderQty[i][0])) {
                        tempText += '<img src="images/greentick.png" alt="Tick" width=20>';
                    } else {
                        tempText += '<img src="images/redcross.png" alt="Cross" width=20>';
                    }
                    tempText += '</span></div><div class="wideshort" id="orp1' + i + '">';
                    if (orderProd[i][1] != 0) {
                        tempText += '<img src="images/' + orderProd[i][1].image + '" alt="' + orderProd[i][1].name + '"  width=40> x ' + orderQty[i][1] + ' (<span class="' + orderProd[i][1].letter + orderProd[i][1].no + 'no">' + orderProd[i][1].quantity + '</span>) <span id="ot1' + i + '">';
                        if (orderProd[i][1].quantity >= orderQty[i][1] && (orderProd[i][1].letter != 'c' || orderProd[i][1].qop > orderQty[i][1])) {
                            tempText += '<img src="images/greentick.png" alt="Tick" width=20>';
                        } else {
                            tempText += '<img src="images/redcross.png" alt="Cross" width=20>';
                        }
                        tempText += '</span>';
                    }
                    if (orderProd[i][2] != 0) {
                        tempText += '<img src="images/' + orderProd[i][2].image + '" alt="' + orderProd[i][2].name + '" width=40> x ' + orderQty[i][2] + ' (<span class="' + orderProd[i][2].letter + orderProd[i][2].no + 'no">' + orderProd[i][2].quantity + '</span>) <span id="ot2' + i + '">';
                        if (orderProd[i][2].quantity >= orderQty[i][2] && (orderProd[i][2].letter != 'c' || orderProd[i][2].qop > orderQty[i][2])) {
                            tempText += '<img src="images/greentick.png" alt="Tick" width=20>';
                        } else {
                            tempText += '<img src="images/redcross.png" alt="Cross" width=20>';
                        }
                        tempText += '</span>';
                    }
                    tempText += '</div><div class="wideshort" id="orp2' + i + '">';
                    tempText += '</div><div class="wide"><br>Exp: <span id="exp' + i + '">' + orderExp[i] + '</span></p><p>Gold: <span id="sell' + i + '">' + orderSell[i] + '</span></p></div><div class="shortwide" id="od' + i + '">';
                    // If we've got enough stuff, enabled button, otherwise disabled button.
                    if (orderProd[i][0].quantity >= orderQty[i][0] && (orderProd[i][0].letter != 'c' || orderProd[i][0].qop > orderQty[i][0]) && (orderProd[i][1] == 0 || (orderProd[i][1].quantity >= orderQty[i][1] && (orderProd[i][1].letter != 'c' || orderProd[i][1].qop > orderQty[i][1]))) && (orderProd[i][2] == 0 || (orderProd[i][2].quantity >= orderQty[i][2] && (orderProd[i][2].letter != 'c' || orderProd[i][2].qop > orderQty[i][2])))) {
                        tempText += '<button class="fo" id="fo' + i + '">Fulfil</button>';
                    } else {
                        tempText += '<button class="fo" id="fo' + i + '" disabled=1>Fulfil</button>';
                    }
                    tempText += '</div></div></div>';
                }
                tempText += "</div>";
                return tempText;
            },
            generateOrder: function (no) {
                // Make an array of possible items, depending on which are available at this level.
                var items = [];
                var i;
                var j = 0;
                var tempNo;
                var tempNo1;
                var tempNo2;
                var tempNo3;
                for (i = 0; i < 12; i += 1) {
                    if (crop[i].level <= level) {
                        items[j] = crop[i];
                        j += 1;
                    }
                }
                for (i = 0; i < 6; i += 1) {
                    if (fruit[i].level <= level) {
                        items[j] = fruit[i];
                        j += 1;
                    }
                }
                for (i = 6; i < 82; i += 1) {
                    if (product[i].level <= level) {
                        items[j] = product[i];
                        j += 1;
                    }
                }
                // tempNo1, 2 and 3 are randomly chosen items.
                tempNo1 = Math.floor(Math.random() * items.length);
                orderProd[no][0] = items[tempNo1];
                tempNo2 = Math.floor(Math.random() * (items.length - 1));
                if (tempNo2 == tempNo1) {
                    tempNo2 = items.length - 1;
                }
                orderProd[no][1] = items[tempNo2];
                tempNo3 = Math.floor(Math.random() * (items.length - 2));
                if (tempNo3 == tempNo1 || tempNo3 == tempNo2) {
                    if (tempNo1 == items.length - 1 || tempNo2 == items.length - 1) {
                        tempNo3 = items.length - 2;
                    } else {
                        tempNo3 = items.length - 1;
                    }
                }
                orderProd[no][2] = items[tempNo3];
                // tempNo randomly 1, 2 or 3.
                tempNo = Math.floor(Math.random() * 3) + 1;
                // Set quantities of items according to how many are desired.
                switch (tempNo) {
                    case 1:
                        orderProd[no][1] = 0;
                        orderProd[no][2] = 0;
                        orderQty[no][0] = Math.floor((Math.random() * 10) + 1);
                        break;
                    case 2:
                        orderProd[no][2] = 0;
                        orderQty[no][0] = Math.floor((Math.random() * 6) + 1);
                        orderQty[no][1] = Math.floor((Math.random() * 6) + 1);
                        break;
                    case 3:
                        orderQty[no][0] = Math.floor((Math.random() * 4) + 1);
                        orderQty[no][1] = Math.floor((Math.random() * 4) + 1);
                        orderQty[no][2] = Math.floor((Math.random() * 4) + 1);
                        break;
                    default:
                        break;
                }
                myApp.generateOrderText(no, 0);
                if (tempNo > 1) {
                    myApp.generateOrderText(no, 1);
                } else {
                    $("#orp" + 1 + no).html("");
                }
                if (tempNo > 2) {
                    myApp.generateOrderText(no, 2);
                } else {
                    $("#orp" + 2 + no).html("");
                }
                // Generate a sell price and print it.
                orderSell[no] = orderProd[no][0].sell * orderQty[no][0];
                if (tempNo > 1) {
                    orderSell[no] += orderProd[no][1].sell * orderQty[no][1];
                }
                if (tempNo > 2) {
                    orderSell[no] += orderProd[no][2].sell * orderQty[no][2];
                }
                orderSell[no] *= (1.1 + Math.random() * 0.2);
                orderSell[no] = Math.round(orderSell[no]);
                $("#sell" + no).text(orderSell[no]);
                // Generate an experience price and print it.
                orderExp[no] = orderSell[no] * (0.8 + Math.random() * 0.4);
                orderExp[no] = Math.round(orderExp[no]);
                if (orderExp[no] > boundary[level] - boundary[level - 1]) {
                    orderExp[no] = boundary[level] - boundary[level - 1];
                }
                $("#exp" + no).text(orderExp[no]);
                myApp.checkDoable();
                $("#order" + no).show();
            },
            // Print a line of an order.
            generateOrderText: function (no, line) {
                var tempText = '<img src="images/' + orderProd[no][line].image + '" alt="' + orderProd[no][line].name + '"  width=40> x ' + orderQty[no][line] + ' (<span class="' + orderProd[no][line].letter + orderProd[no][line].no + 'no">' + orderProd[no][line].quantity + '</span>) <span id="ot' + line + no + '"><img src="images/';
                if (orderProd[no][line].quantity >= orderQty[no][line] && (orderProd[no][line].letter != 'c' || orderProd[no][line].qop > orderQty[no][line])) {
                    tempText += 'greentick.png" alt="Tick"';
                } else {
                    tempText += 'redcross.png" alt="Cross"';
                }
                tempText += ' width=20></span>';
                $("#orp" + line + no).html(tempText);
            },
            // Check whether an order is doable.
            checkDoable: function () {
                var j;
                for (j = 0; j < 12; j += 1) {
                    // Enables / disables the fulfil button accordingly.
                    if (orderProd[j][0].quantity >= orderQty[j][0] && (orderProd[j][0].letter != 'c' || orderProd[j][0].qop > orderQty[j][0]) && (orderProd[j][1] == 0 || (orderProd[j][1].quantity >= orderQty[j][1] && (orderProd[j][1].letter != 'c' || orderProd[j][1].qop > orderQty[j][1]))) && (orderProd[j][2] == 0 || (orderProd[j][2].quantity >= orderQty[j][2] && (orderProd[j][2].letter != 'c' || orderProd[j][2].qop > orderQty[j][2])))) {
                        $("#fo" + j).prop('disabled', false);
                    } else {
                        $("#fo" + j).prop('disabled', true);
                    }
                    myApp.checkEachItem(j, 0); myApp.checkEachItem(j, 1); myApp.checkEachItem(j, 2);
                }
            },
            // Creates a green tick or red cross beside each item on an order.
            checkEachItem: function (no, line) {
                if (orderProd[no][line].quantity >= orderQty[no][line] && (orderProd[no][line].letter != 'c' || orderProd[no][line].qop > orderQty[no][line])) {
                    $("#ot" + line + no).html('<img src="images/greentick.png" alt="Tick" width=20>');
                } else {
                    $("#ot" + line + no).html('<img src="images/redcross.png" alt="Cross" width=20>');
                }
            },
            drawAppliance: function (type) {
                var tempText = '<div id="app' + type + '" class="appliance"><div class="currentlybox"><div class="valigned">' + appliance[type].name + ', <span id="' + type + 'statetext">currently making</span>: </div></div><div id="app' + type + 'image" class="collectbutton"><div class="valigned">nothing</div></div><div id="app' + type + '6image" style="display: none; border-left: 0px solid;" class="collectbutton"><div class="valigned">nothing</div></div></div><div id="app' + type + 'goods"></div>';
                $("#machines").append(tempText);
                $("#app" + type).hide();
            },
            drawProducts: function () {
                var i;
                var j;
                for (i = 0; i < 16; i += 1) {
                    for (j = 0; j < (appliance[i].products).length; j += 1) {
                        myApp.drawProduct(i, appliance[i].products[j]);
                        $("#prod" + appliance[i].products[j]).hide();
                    }
                }
            },
            drawProduct: function (type, number) {
                var tempText = '<div id="prod' + number + '" class="productline"><div class="prodpic"><img src="images/' + product[number].image + '"  alt="' + product[number].name + '" width=50></div><div style="float: left; height: 60px; border-right: 1px solid; width: 20%"><img src="images/' + (product[number].ing[0]).image + '" alt="' + (product[number].ing[0]).name + '"  width=50> x ' + product[number].ingq[0] + ' (<span class="' + product[number].ingt[0] + product[number].ingn[0] + 'no">' + (product[number].ing[0]).quantity + '</span>)</div><div style="padding-top: 5px; float: left; height: 60px; border-right: 1px solid; width: 20%">';
                if (product[number].ing[1] != undefined) {
                    tempText += '<img src="images/' + (product[number].ing[1]).image + '" alt="' + (product[number].ing[1]).name + '" width=50> x ' + product[number].ingq[1] + ' (<span class="' + product[number].ingt[1] + product[number].ingn[1] + 'no">' + (product[number].ing[1]).quantity + '</span>)';
                }
                tempText += '</div><div class="ingbox">';
                if (product[number].ing[2] != undefined) {
                    tempText += '<img src="images/' + (product[number].ing[2]).image + '" alt="' + (product[number].ing[2]).name + '"  width=50> x ' + product[number].ingq[2] + ' (<span class="' + product[number].ingt[2] + product[number].ingn[2] + 'no">' + (product[number].ing[2]).quantity + '</span>)';
                }
                tempText += '</div><div class="ingbox">';
                if (product[number].ing[3] != undefined) {
                    tempText += '<img src="images/' + (product[number].ing[3]).image + '" alt="' + (product[number].ing[3]).name + '"  width=50> x ' + product[number].ingq[3] + ' (<span class="' + product[number].ingt[3] + product[number].ingn[3] + 'no">' + (product[number].ing[3]).quantity + '</span>)';
                }
                tempText += '</div><div class="makebutton" id="app';
                tempText += type + "-" + number + '"><div class="valigned">Make</div></div></div>';
                $("#app" + type + "goods").append(tempText);
            },
            buyCoop: function (no) {
                var i;
                if (money < animal[no].coopcost) {
                    alert("Not enough money.");
                } else {
                    // Sort out money.
                    money -= animal[no].coopcost;
                    $("#moneytext").text(money);
                    // Reduce number of coops for sale, and hide shop text if necessary.
                    coopsAvailable[no] -= 1;
                    if (coopsAvailable[no] == 0) {
                        $("#cooptext" + no).hide();
                    }
                    // If we don't own any of those animals already, draw their area.
                    if (animalNo[no] == 0) {
                        // If it's chickens, change visibility, rather than showing coop - it's set to show and visibility = hidden because otherwise you can't initially click on fields at small screen resolutions. Don't ask why!
                        if (no == 0) {
                            $("#an0coop").css('visibility', 'visible');
                        } else {
                            $("#an" + no + "coop").show();
                        }
                    }
                    // Draw individual coops.
                    for (i = 0; i < 6; i += 1) {
                        $("#an" + no + (coopsBought[no] * 6 + i)).show();
                    }
                    // Increase number of animals for sale and update shop text.
                    animalsForSale[no] += 6;
                    $("#animal" + no + "forsaletext").text(animalsForSale[no]);
                    // Set the animal cost, according to how many you have.
                    // Initially at cost[0].
                    if (animalNo[no] > 5) {
                        animal[no].currentcost = animal[no].cost[1];
                    }
                    if (animalNo[no] > 11) {
                        animal[no].currentcost = animal[no].cost[2];
                    }
                    // Update text to reflect this.
                    $("#animal" + no + "costtext").text(animal[no].currentcost);
                    // Show the animal text.
                    $("#animal" + no + "text").show();
                    // Update number of coops bought.
                    coopsBought[no] += 1;
                    $("#shop").dialog("close").dialog("open");
                }
            },
            buyAnimal: function (no) {
                if (money < animal[no].currentcost) {
                    alert("Not enough money.");
                } else {
                    // Sort out money.
                    money -= animal[no].currentcost;
                    $("#moneytext").text(money);
                    // Reduce number of animals for sale, and change text, hiding it if necessary.
                    animalsForSale[no] -= 1;
                    $("#animal" + no + "forsaletext").text(animalsForSale[no]);
                    if (animalsForSale[no] == 0) {
                        $("#animal" + no + "text").hide();
                    }
                    // Draw the animals and update their fed status.
                    $("#an" + no + animalNo[no]).html("<img src='images/" + animal[no].image + "' alt='" + animal[no].name + "'  height=40>'");
                    animalFed[no][animalNo[no]] = 1;
                    // Increase number of animals.
                    animalNo[no] += 1;
                    // If animal cost has gone up, increase it cost and the corresponding text. Reopen the shop.
                    if (animalNo[no] == 6) {
                        animal[no].currentcost = animal[no].cost[1];
                    }
                    if (animalNo[no] == 12) {
                        animal[no].currentcost = animal[no].cost[2];
                    }
                    $("#animal" + no + "costtext").text(animal[no].currentcost);
                    $("#shop").dialog("close").dialog("open");
                }
            },
            buyOrchard: function (no) {
                if (money < 500) {
                    alert("Not enough money.");
                } else {
                    // Update money.
                    money -= 500;
                    $("#moneytext").text(money);
                    // Delete orchard text in shop.
                    $("#or" + no + "text").hide();
                    // Show orchard.
                    $("#orchard" + no).show();
                    // Update tree date and show it in shop.
                    treesForSale[no] = 10;
                    $("#tree" + no + "text").show();
                    $("#shop").dialog("close").dialog("open");
                }
            },
            buyTree: function (no) {
                var tempNo;
                if (money < fruit[no].treeprice) {
                    alert("Not enough money.");
                } else {
                    // Update money.
                    money -= fruit[no].treeprice;
                    $("#moneytext").text(money);
                    // Reduce number of trees for sale, and change text, hiding it if necessary.
                    treesForSale[no] -= 1;
                    $("#tree" + no + "forsaletext").text(treesForSale[no]);
                    if (treesForSale[no] == 0) {
                        $("#tree" + no + "text").hide();
                    }
                    // Find suitable place to plant the next tree.
                    tempNo = 0;
                    while ($("#or" + no + tempNo).html() != "") {
                        tempNo += 1;
                    }
                    // Draw the trees and update their planted status.
                    $("#or" + no + tempNo).html("<img src='images/" + fruit[no].treeimage + "' alt='" + fruit[no].name + "' height=40>");
                    orchardPlanted[no][tempNo] = 1;
                    // Change background color to red and set timeout.
                    $("#or" + no + tempNo).css("background-color", "#FF0000");
                    orchardTime[no][tempNo] = (new Date()).getTime();
                    orchardTimeVar[no][tempNo] = setTimeout(myApp.updateTreeBackground, fruit[no].time * 1000, no, tempNo);
                    // Increase number of trees.
                    treeNo[no] += 1;
                    $("#shop").dialog("close").dialog("open");
                }
            },
            buyAppliance: function (no) {
                if (money < appliance[no].cost) {
                    alert("Not enough money.");
                } else {
                    // Update money.
                    money -= appliance[no].cost;
                    $("#moneytext").text(money);
                    // Hide text and show appliance.
                    $("#app" + no + "text").hide();
                    $("#app" + no).show();
                    // Show products beneath appliance, based on what's currently available.
                    switch (parseInt(no)) {
                        case 0:
                            $("#prod15").show();
                            if (level > 7) {$("#prod16").show();}
                            if (level > 9) {$("#prod14").show();}
                            if (level > 18) {$("#prod28").show();}
                            if (level > 26) {$("#prod39").show();}
                            if (level > 32) {$("#prod54").show();}
                            if (level > 36) {$("#prod64").show();}
                            if (level > 38) {$("#prod68").show();}
                            if (level > 44) {$("#prod80").show();}
                            break;
                        case 1:
                            $("#prod0").show();
                            if (level > 5) {$("#prod1").show();}
                            if (level > 9) {$("#prod2").show();}
                            if (level > 15) {$("#prod3").show();}
                            if (level > 11) {$("#feeduptext").show();}
                            if (level > 31) {$("#prod4").show();}
                            if (level > 38) {$("#prod5").show();}
                            break;
                        case 2:
                            $("#prod13").show();
                            if (level > 8) {$("#prod10").show();}
                            if (level > 11) {$("#prod36").show();}
                            if (level > 32) {$("#prod53").show();}
                            break;
                        case 3:
                            $("#prod8").show();
                            if (level > 12) {$("#prod17").show();}
                            if (level > 17) {$("#prod26").show();}
                            break;
                        case 4:
                            $("#prod9").show();
                            if (level > 15) {$("#prod22").show();}
                            if (level > 24) {$("#prod37").show();}
                            if (level > 39) {$("#prod73").show();}
                            if (level > 43) {$("#prod78").show();}
                            break;
                        case 5:
                            $("#prod11").show();
                            if (level > 10) {$("#prod20").show();}
                            if (level > 17) {$("#prod27").show();}
                            if (level > 26) {$("#prod42").show();}
                            if (level > 29) {$("#prod47").show();}
                            if (level > 34) {$("#prod60").show();}
                            if (level > 40) {$("#prod74").show();}
                            break;
                        case 6:
                            $("#prod18").show();
                            if (level > 14) {$("#prod19").show();}
                            if (level > 17) {$("#prod24").show();}
                            if (level > 27) {$("#prod43").show(); $("#prod44").show();}
                            if (level > 33) {$("#prod56").show();}
                            if (level > 35) {$("#prod62").show();}
                            if (level > 38) {$("#prod71").show();}
                            break;
                        case 7:
                            $("#prod23").show();
                            if (level > 17) {$("#prod25").show();}
                            if (level > 18) {$("#prod30").show();}
                            if (level > 19) {$("#prod31").show();}
                            break;
                        case 8:
                            $("#prod29").show();
                            if (level > 20) {$("#prod33").show();}
                            if (level > 24) {$("#prod38").show();}
                            break;
                        case 9:
                            $("#prod32").show();
                            if (level > 22) {$("#prod34").show(); $("#prod35").show();}
                            if (level > 23) {$("#prod52").show();}
                            if (level > 34) {$("#prod58").show();}
                            if (level > 35) {$("#prod61").show();}
                            if (level > 37) {$("#prod66").show();}
                            if (level > 41) {$("#prod76").show();}
                            break;
                        case 10:
                            $("#prod40").show();
                            if (level > 27) {$("#prod45").show();}
                            if (level > 29) {$("#prod48").show();}
                            if (level > 30) {$("#prod49").show(); $("#prod50").show();}
                            break;
                        case 11:
                            $("#prod41").show();
                            if (level > 43) {$("#prod79").show();}
                            break;
                        case 12:
                            $("#prod46").show();
                            if (level > 32) {$("#prod55").show();}
                            if (level > 33) {$("#prod57").show();}
                            if (level > 38) {$("#prod72").show();}
                            break;
                        case 13:
                            $("#prod59").show();
                            if (level > 35) {$("#prod63").show();}
                            if (level > 36) {$("#prod65").show();}
                            if (level > 37) {$("#prod67").show();}
                            break;
                        case 14:
                            $("#prod70").show();
                            break;
                        case 15:
                            $("#prod75").show();
                            if (level > 42) {$("#prod77").show();}
                            if (level > 44) {$("#prod81").show();}
                            break;
                        default:
                            break;
                    }
                    $("#shop").dialog("close").dialog("open");
                }
            },
            buyFeedMillUpgrade: function () {
                if (money < 3200) {
                    alert("Not enough money.");
                } else {
                    // Update money.
                    money -= 3200;
                    $("#moneytext").text(money);
                    // Hide shop text.
                    $("#feeduptext").hide();
                    // Show second oven.
                    $("#app16image").show();
                    $("#shop").dialog("close").dialog("open");
                }
            },
            changeCropOfChoice: function (no) {
                $("#c" + cropOfChoice).css("border", "0px");
                cropOfChoice = no;
                $("#c" + cropOfChoice).css("border", "1px solid black");
            },
            getFieldTime: function (no) {
                var tempNo;
                if (planted[no] >= 0 && planted[no] < 12) {
                    tempNo = Math.floor((crop[planted[no]].time * 1000 - (new Date().getTime() - fieldStartTime[no])) / 1000);
                    if (tempNo == 1) {
                        $("#a" + no).prop('title', tempNo + ' second left');
                    } else {
                        $("#a" + no).prop('title', tempNo + ' seconds left');
                    }
                } else {
                    $("#a" + no).prop('title', '');
                }
            },
            clickField: function (no) {
                // If there's nothing in the field.
                if (planted[no] == -1) {
                    if (crop[cropOfChoice].quantity == 0) {
                        alert("No crop left.");
                    } else {
                        // Update amount of crop and wherever that appears.
                        crop[cropOfChoice].quantity = crop[cropOfChoice].quantity - 1;
                        $(".c" + cropOfChoice + "no").text(crop[cropOfChoice].quantity);
                        crop[cropOfChoice].qop = crop[cropOfChoice].qop + 1;
                        // Set timer.
                        fieldStartTime[no] = (new Date()).getTime();
                        fieldTimeVar[no] = setTimeout(myApp.updateFieldBackground, crop[cropOfChoice].time * 1000, no);
                        // Change planted status and image.
                        planted[no] = cropOfChoice;
                        $("#a" + no).html('<img src="images/' + crop[cropOfChoice].image + '" alt="' + crop[cropOfChoice].name + '" width=40>');
                        // Update silo.
                        siloUsage -= 1;
                        $(".silotext1").text(siloUsage);
                        // Now we've planted some crop, see what orders are doable.
                        myApp.checkDoable();
                    }
                }
                // If field ready to harvest.
                if (planted[no] > 99) {
                    if (siloSize - siloUsage < 2) {
                        alert("Not enough space in the silo.");
                    } else {
                        // Update experience.
                        experience = experience + crop[planted[no] - 100].exp;
                        expSoFar = expSoFar + crop[planted[no] - 100].exp;
                        $("#exptext1").text(expSoFar);
                        // Update crop number and wherever it appears.
                        crop[planted[no] - 100].quantity = crop[planted[no] - 100].quantity + 2;
                        $(".c" + (planted[no] - 100) + "no").html(crop[planted[no] - 100].quantity);
                        // Change planted status and what's in field.
                        planted[no] =- 1;
                        $("#a" + no).html("");
                        $("#a" + no).css("background-color", "#663300");
                        // Update silo usage.
                        siloUsage += 2;
                        $(".silotext1").text(siloUsage);
                        // Now we have some crop, check which orders are doable.
                        myApp.checkDoable();
                    }
                }
            },
            updateFieldBackground: function (no) {
                $("#a" + no).css("background-color", "yellow");
                planted[no] = parseInt(planted[no]) + 100;
            },
            getAnimalTime: function (type, no) {
                var tempNo;
                if (animalFed[type][no] == 2) {
                    tempNo = Math.floor((animal[type].time * 1000 - (new Date().getTime() - animalTime[type][no])) / 1000);
                    if (tempNo == 1) {
                        $("#an" + type + no).prop('title', tempNo + ' second left');
                    } else {
                        $("#an" + type + no).prop('title', tempNo + ' seconds left');
                    }
                } else {
                    $("#an" + type + no).prop('title', '');
                }
            },
            clickAnimal: function (type, no, prod) {
                // If the animal is not yet fed.
                if (animalFed[type][no] == 1) {
                    if (product[type].quantity == 0) {
                        alert("Not enough feed.");
                    } else {
                        // Change amount of feed and wherever that appears.
                        product[type].quantity -= 1;
                        $(".p" + type + "no").text(product[type].quantity);
                        // Change fed status and appearance of animal.
                        animalFed[type][no] = 2;
                        $("#an" + type + no).css("background-color", "red");
                        // Set timer.
                        animalTime[type][no] = (new Date()).getTime();
                        animalTimeVar[type][no] = setTimeout(myApp.updateAnimalBackground, animal[type].time * 1000, type, no);
                        // Change barn usage.
                        barnUsage -= 1;
                        $(".barntext1").text(barnUsage);
                    }
                }
                // If the animal product is ready to collect.
                if (animalFed[type][no] == 3) {
                    if (barnUsage == barnSize) {
                        alert("Not enough space in the barn.");
                    } else {
                        // Update experience.
                        experience += animal[type].exp;
                        expSoFar += animal[type].exp;
                        $("#exptext1").text(expSoFar);
                        // Update product quantity and wherever that appears.
                        product[prod].quantity += 1;
                        $(".p" + prod + "no").text(product[prod].quantity);
                        // Change animalfed status and appearance of coop.
                        animalFed[type][no] = 1;
                        $("#an" + type + no).css("background-color", "#663300");
                        // Change barn usage.
                        barnUsage += 1;
                        $(".barntext1").text(barnUsage);
                        // Now we have a new product, check what orders are doable.
                        myApp.checkDoable();
                    }
                }
            },
            updateAnimalBackground: function (type, no) {
                $("#an" + type + no).css("background-color", "yellow");
                animalFed[type][no] = 3;
            },
            getOrchardTime: function (type, no) {
                var tempNo;
                if (orchardPlanted[type][no] % 2 == 1) {
                    tempNo = Math.floor((fruit[type].time * 1000 - (new Date().getTime() - orchardTime[type][no])) / 1000);
                    if (tempNo == 1) {
                        $("#or" + type + no).prop('title', tempNo + ' second left');
                    } else {
                        $("#or" + type + no).prop('title', tempNo + ' seconds left');
                    }
                } else {
                    $("#or" + type + no).prop('title', '');
                }
            },
            clickOrchard: function (type, no) {
                switch (orchardPlanted[type][no]) {
                    case 2:
                        myApp.updateOrchard(2, type, no);
                        break;
                    case 4:
                        myApp.updateOrchard(3, type, no);
                        break;
                    case 6:
                        myApp.updateOrchard(4, type, no);
                        break;
                    case 8:
                        if (siloUsage > siloSize - 4) {
                            alert("Not enough space in the silo.");
                        } else {
                            // Update experience.
                            experience += fruit[type].exp;
                            expSoFar += fruit[type].exp;
                            $("#exptext1").text(expSoFar);
                            // Update number of fruits and wherever this appears.
                            fruit[type].quantity += 4;
                            $(".f" + type + "no").text(fruit[type].quantity);
                            // Update silo.
                            siloUsage += 4;
                            $(".silotext1").text(siloUsage);
                            // Change planted status and erase tree picutre.
                            orchardPlanted[type][no] = 0;
                            $("#or" + type + no).html("");
                            $("#or" + type + no).css("background-color", "#663300");
                            // Reduce number of trees.
                            treeNo[type] -= 1;
                            // Increase number of trees on sale, producing text if needbe.
                            treesForSale[type] += 1;
                            $("#tree"+type+"forsaletext").text(treesForSale[type]);
                            if (treesForSale == 1) {$("#tree" + type + "text").show();}
                            // Now we have fruit, see what orders are doable.
                            myApp.checkDoable();
                        }
                        break;
                    default:
                        break;
                }
            },
            updateOrchard: function (quantity, type, no) {
                if (siloUsage > siloSize - quantity) {
                    alert("Not enough space in the silo.");
                } else {
                    // Update experience.
                    experience += fruit[type].exp;
                    expSoFar += fruit[type].exp;
                    $("#exptext1").text(expSoFar);
                    // Update fruit quantity and wherever this appears.
                    fruit[type].quantity += quantity;
                    $(".f" + type + "no").text(fruit[type].quantity);
                    // Update silo.
                    siloUsage += quantity;
                    $(".silotext1").text(siloUsage);
                    orchardPlanted[type][no] += 1; // This is ok.
                    myApp.checkDoable();
                    orchardTime[type][no] = (new Date()).getTime();
                    $("#or" + type + no).css("background-color", "#FF0000");
                    orchardTimeVar[type][no] = setTimeout(myApp.updateTreeBackground, fruit[type].time * 1000, type, no);
                }
            },
            updateTreeBackground: function (type, no) {
                $("#or" + type + no).css("background-color", "yellow");
                orchardPlanted[type][no] += 1;
            },
            clickFulfil: function (no) {
                // Change the amount of all the items on the order.
                myApp.fulfilChangeLevels(no, 0);
                if (orderProd[no][1] != 0) {
                    myApp.fulfilChangeLevels(no, 1);
                }
                if (orderProd[no][2] != 0) {
                    myApp.fulfilChangeLevels(no, 2);
                }
                // Increase money.
                money += orderSell[no];
                $("#moneytext").text(money);
                // Increase experience.
                experience += orderExp[no];
                expSoFar += orderExp[no];
                $("#exptext1").text(expSoFar);
                // Generate a new order.
                myApp.generateOrder(no);
                // Check what orders are doable, now we have fewer items.
                myApp.checkDoable();
            },
            // Change the quantities of products when an order is fulfilled.
            fulfilChangeLevels: function (prod, no) {
                // Reduce quantity and qop.
                orderProd[prod][no].quantity -= orderQty[prod][no];
                if (orderProd[prod][no].letter == 'c') {
                    orderProd[prod][no].qop -= orderQty[prod][no];
                }
                // Reduce barn or silo usage.
                if (orderProd[prod][no].letter == 'p') {
                    barnUsage -= orderQty[prod][no];
                    $(".barntext1").text(barnUsage);
                } else {
                    siloUsage -= orderQty[prod][no];
                    $(".silotext1").text(siloUsage);
                }
                // Change text for this item.
                $("." + orderProd[prod][no].letter + orderProd[prod][no].no + "no").text(orderProd[prod][no].quantity);
            },
            getCookTime: function (no) {
                var tempNo;
                if (cookState[no] == 1) {
                    tempNo = Math.floor((product[cookProd[no]].time * 1000 - (new Date().getTime() - cookTime[no])) / 1000);
                    if (tempNo == 1) {
                        $("#app" + no + "image").prop('title', tempNo + ' second left');
                    } else {
                        $("#app" + no + "image").prop('title', tempNo + ' seconds left');
                    }
                } else {
                    $("#app" + no + "image").prop('title', '');
                }
            },
            clickMake: function (no, prodno) {
                var tempNo;
                var tempText;
                var tempNo1 = no;
                if (tempNo1 == 1 && cookState[1] > 0 && $("#app16image").css("display") != "none" && cookState[16] == 0) {
                    tempNo1 = 16;
                }
                if (cookState[tempNo1] == 0) {
                    // Set cookProd[tempNo1] to the product number.
                    cookProd[tempNo1] = prodno;
                    // See if we have enough ingredients.
                    tempNo = myApp.checkWeHaveEverything(cookProd[tempNo1]);
                    // If we do.
                    if (tempNo == 1) {
                        // Reduce quantities of ingredients.
                        myApp.reduceIngs(cookProd[tempNo1]);
                        // Update the currently making box.
                        tempText = '<img src="images/' + product[cookProd[tempNo1]].image + '" alt="' + product[cookProd[tempNo1]].name + '" width=50>';
                        $("#app" + tempNo1 + "image").html(tempText);
                        $("#app" + tempNo1 + "image").css("background-color", "red");
                        $("#app" + tempNo1 + "image").css("border-bottom", "1px solid");
                        // Change the cookState of that appliance.
                        cookState[tempNo1] = 1;
                        // Set timer.
                        cookTime[tempNo1] = (new Date()).getTime();
                        cookTimeVar[tempNo1] = setTimeout(myApp.updateAppBackground, product[cookProd[tempNo1]].time * 1000, "app" + tempNo1 + "-" + cookProd[tempNo1]);
                        // Now we've used some ingredients, see what orders are doable.
                        myApp.checkDoable();
                    }
                }
            },
            collectProduct: function (no) {
                if (cookState[no] == 2) {
                if (((no == 1 || no == 16) && barnUsage > barnSize - 3) || ((no != 1 && no != 16) && barnUsage == barnSize)) {
                    alert("Not enough space in the barn.");
                } else {
                    // Erase image.
                    $("#app" + no + "image").html("");
                    $("#app" + no + "image").css("background-color", "");
                    // Update experience.
                    experience += product[cookProd[no]].exp;
                    expSoFar += product[cookProd[no]].exp;
                    $("#exptext1").text(expSoFar);
                    // Update quantity
                    product[cookProd[no]].quantity += 1;
                    // Update barn usage.
                    barnUsage += 1;
                    $(".barntext1").text(barnUsage);
                    // If you've made feed, make quantity and barnusage two higher.
                    if (no == 1 || no == 16) {
                        product[cookProd[no]].quantity += 2;
                        barnUsage += 2;
                        $(".barntext1").text(barnUsage);
                    }
                    // Update product number wherever it appears.
                    $(".p" + cookProd[no] + "no").text(product[cookProd[no]].quantity);
                    // Change cookstate and text regarding machine.
                    cookState[no] = 0;
                    $("#app" + no + "image").html("<div class='valigned'>nothing</div>");
                    // Now we have a new product, see what orders are doable.
                    myApp.checkDoable();
                }
                }
            },
            updateAppBackground: function (field) {
                var tempNo = parseInt(field.substring(3, field.indexOf("-")));
                $("#app" + tempNo + "image").css("background-color", "yellow");
                cookState[tempNo] = 2;
            },
            checkProductQuantity: function (prod) {
                if (product[prod].quantity > 0) {
                    return 1;
                } else {
                    return 0;
                }
            },
            checkCropQuantity: function (prod) {
                if (crop[prod].quantity > 0) {
                    return 1;
                } else {
                    return 0;
                }
            },
            checkFruitQuantity: function (prod) {
                if (fruit[prod].quantity > 0) {
                    return 1;
                } else {
                    return 0;
                }
            },
            // Check we have all the ingredients needed to make something.
            checkWeHaveEverything: function (prod) {
                var answer;
                answer = myApp.checking(prod, 0);
                if (product[prod].ing[1] != undefined && answer == 1) {
                    answer = myApp.checking(prod, 1);
                }
                if (product[prod].ing[2] != undefined && answer == 1) {
                    answer = myApp.checking(prod, 2);
                }
                if (product[prod].ing[3] != undefined && answer == 1) {
                    answer = myApp.checking(prod, 3);
                }
                return answer;
            },
            // Check we have enough of each ingredient to make something.
            checking: function (prod, no) {
                if ((product[prod].ing[no]).quantity < product[prod].ingq[no]) {
                    alert("Not enough " + (product[prod].ing[no]).name + ".");
                    return 0;
                }
                if (product[prod].ingt[no] == "c" && (product[prod].ing[no]).qop - product[prod].ingq[no] < 1) {
                    alert("You can't use all your " + (product[prod].ing[no]).name + ".");
                    return 0;
                }
                return 1;
            },
            // When we make something, reduce the quantities of its ingredients.
            reduceIngs: function (prod) {
                // Reduce quantity of ingredient 0.
                myApp.reduce(prod, 0);
                if (product[prod].ing[1] != undefined) {
                    myApp.reduce(prod, 1);
                }
                if (product[prod].ing[2] != undefined) {
                    myApp.reduce(prod, 2);
                }
                if (product[prod].ing[3] != undefined) {
                    myApp.reduce(prod, 3);
                }
            },
            // Reduce quantity of ingredient no of product prod and update silo.
            reduce: function (prod, no) {
                (product[prod].ing[no]).quantity -= product[prod].ingq[no];
                if (product[prod].ingt[no] == "c") {
                    (product[prod].ing[no]).qop -= product[prod].ingq[no];
                    $(".c" + (product[prod].ing[no]).no + "no").text((product[prod].ing[no]).quantity);
                    siloUsage -= product[prod].ingq[no];
                    $(".silotext1").text(siloUsage);
                }
                if (product[prod].ingt[no] == "p") {
                    $(".p" + (product[prod].ing[no]).no + "no").text((product[prod].ing[no]).quantity);
                    barnUsage -= product[prod].ingq[no];
                    $(".barntext1").text(barnUsage);
                }
            },
            sellCrop: function (value, no) {
                if (parseInt($(value).val()) > crop[no].quantity) {
                    alert("Not enough " + crop[no].name + ".");
                } else if (parseInt($(value).val()) == crop[no].qop) {
                    alert("You can't sell all your " + crop[no].name + ".");
                } else {
                    // Reduce quantity and qop everywhere.
                    crop[no].quantity -= parseInt($(value).val());
                    crop[no].qop -= parseInt($(value).val());
                    $(".c" + no + "no").text(crop[no].quantity);
                    // Increase money.
                    money += parseInt($(value).val()) * crop[no].sell;
                    $("#moneytext").text(money);
                    // Reduce silo usage.
                    siloUsage -= parseInt($(value).val());
                    $(".silotext1").text(siloUsage);
                    $("#silo").dialog("close").dialog("open");
                    // Now you've sold something, check which orders are doable.
                    myApp.checkDoable();
                }
            },
            sellFruit: function (value, no) {
                if (parseInt($(value).val()) > fruit[no].quantity) {
                    alert("Not enough " + fruit[no].lcname + ".");
                } else {
                    // Reduce quantity everywhere.
                    fruit[no].quantity -= parseInt($(value).val());
                    $(".f" + no + "no").text(fruit[no].quantity);
                    // Increase money.
                    money += parseInt($(value).val()) * fruit[no].sell;
                    $("#moneytext").text(money);
                    // Reduce silo usage.
                    siloUsage -= parseInt($(value).val());
                    $(".silotext1").text(siloUsage);
                    $("#silo").dialog("close").dialog("open");
                    // Now you've sold something, check which orders are doable.
                    myApp.checkDoable();
                }
            },
            sellProduct: function (value, no) {
                if (parseInt($(value).val()) > product[no].quantity) {
                    alert("Not enough " + product[no].name + ".");
                } else {
                    // Reduce quantity everywhere.
                    product[no].quantity -= parseInt($(value).val());
                    $(".p" + no + "no").text(product[no].quantity);
                    // Increase money.
                    money += parseInt($(value).val()) * product[no].sell;
                    $("#moneytext").text(money);
                    // Reduce barn usage.
                    barnUsage -= parseInt($(value).val());
                    $(".barntext1").text(barnUsage);
                    // Now you've sold something, check which orders are doable.
                    myApp.checkDoable();
                }
            },
            drawFarm: function () {
                var tempNo;
                // If you've just entered a new level.
                if (level < 45 && experience >= boundary[level]) {
                    // Update experience text.
                    expSoFar = experience - boundary[level];
                    $("#exptext1").text(expSoFar);
                    if (level == 44) {
                        $("#exptext2").text("You've won!");
                    } else {
                        expToAdv = boundary[level + 1] - boundary[level];
                        $("#exptext2").text(expToAdv);
                    }
                    // Update level text.
                    level += 1;
                    $("#leveltext").text(level);
                    // Offer crops,animals,orchards,appliances and products according to level.
                    switch (level) {
                    case 2:
                        $("#app0text").show();
                        break;
                    case 5:
                        $("#c2").show();
                        $("#c2number").show();
                        crop[2].quantity = 3;
                        crop[2].qop = 3;
                        $(".c2no").text(crop[2].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        break;
                    case 6:
                        if ($("#app1").css("display") != "none") {$("#prod1").show();}
                        $("#app2text").show();
                        $("#cooptext1").show();
                        coopsAvailable[1] = 1;
                        break;
                    case 7:
                        $("#c3").show();
                        $("#c3number").show();
                        crop[3].quantity = 3;
                        crop[3].qop = 3;
                        $(".c3no").text(crop[3].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        $("#app3text").show();
                        if ($("#app0").css("display") != "none") {$("#prod16").show();}
                        break;
                    case 8:
                        $("#app4text").show();
                        break;
                    case 9:
                        $("#c4").show();
                        $("#c4number").show();
                        crop[4].quantity = 3;
                        crop[4].qop = 3;
                        $(".c4no").text(crop[4].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        $("#app5text").show();
                        if ($("#app2").css("display") != "none") {$("#prod10").show();}
                        break;
                    case 10:
                        if ($("#app1").css("display") != "none") {$("#prod2").show();}
                        if ($("#app0").css("display") != "none") {$("#prod14").show();}
                        coopsAvailable[2] = 1;
                        $("#cooptext2").show();
                        break;
                    case 11:
                        if ($("#app5").css("display") != "none") {$("#prod20").show();}
                        break;
                    case 12:
                        if ($("#app2").css("display") != "none") {$("#prod36").show();}
                        $("#cooptext0").show();
                        coopsAvailable[0] += 1;
                        if ($("#app1").css("display") != "none") {$("#feeduptext").show();}
                        break;
                    case 13:
                        $("#c5").show();
                        $("#c5number").show();
                        crop[5].quantity = 3;
                        crop[5].qop = 3;
                        $(".c5no").text(crop[5].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        if ($("#app3").css("display") != "none") {$("#prod17").show();}
                        break;
                    case 14:
                        $("#app6text").show();
                        break;
                    case 15:
                        $("#or0text").show();
                        $("#c6").show();
                        $("#c6number").show();
                        crop[6].quantity = 3;
                        crop[6].qop = 3;
                        $(".c6no").text(crop[6].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        $("#cooptext1").show();
                        coopsAvailable[1] += 1;
                        if ($("#app6").css("display") != "none") {$("#prod19").show();}
                        break;
                    case 16:
                        $("#cooptext3").show();
                        coopsAvailable[3] = 1;
                        if ($("#app1").css("display") != "none") {$("#prod3").show();}
                        if ($("#app4").css("display") != "none") {$("#prod22").show();}
                        break;
                    case 17:
                        $("#app7text").show();
                        break;
                    case 18:
                        $("#c7").show();
                        $("#c7number").show();
                        crop[7].quantity = 3;
                        crop[7].qop = 3;
                        $(".c7no").text(crop[5].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        $("#cooptext2").show();
                        coopsAvailable[2] += 1;
                        if ($("#app6").css("display") != "none") {$("#prod24").show();}
                        if ($("#app3").css("display") != "none") {$("#prod26").show();}
                        if ($("#app5").css("display") != "none") {$("#prod27").show();}
                        if ($("#app7").css("display") != "none") {$("#prod25").show();}
                        break;
                    case 19:
                        $("#app8text").show();
                        $("#or1text").show();
                        if ($("#app0").css("display") != "none") {$("#prod28").show();}
                        if ($("#app7").css("display") != "none") {$("#prod30").show();}
                        break;
                    case 20:
                        if ($("#app7").css("display") != "none") {$("#prod31").show();}
                        break;
                    case 21:
                        $("#app9text").show();
                        if ($("#app8").css("display") != "none") {$("#prod33").show();}
                        break;
                    case 22:
                        $("#or2text").show();
                        break;
                    case 23:
                        $("#cooptext0").show();
                        coopsAvailable[0] += 1;
                        if ($("#app9").css("display") != "none") {$("#prod34").show(); $("#prod35").show();}
                        break;
                    case 24:
                        if ($("#app9").css("display") != "none") {$("#prod52").show();}
                        break;
                    case 25:
                        $("#c8").show();
                        $("#c8number").show();
                        crop[8].quantity = 3;
                        crop[8].qop = 3;
                        $(".c8no").text(crop[8].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        if ($("#app4").css("display") != "none") {$("#prod37").show();}
                        if ($("#app8").css("display") != "none") {$("#prod38").show();}
                        break;
                    case 26:
                        $("#or3text").show();
                        $("#cooptext3").show();
                        coopsAvailable[3] += 1;
                        $("#app10text").show();
                        if ($("#app0").css("display") != "none") {$("#prod39").show();}
                        break;
                    case 27:
                        $("#cooptext1").show();
                        coopsAvailable[1] += 1;
                        $("#app11text").show();
                        if ($("#app5").css("display") != "none") {$("#prod42").show();}
                        break;
                    case 28:
                        if ($("#app6").css("display") != "none") {$("#prod43").show(); $("#prod44").show();}
                        if ($("#app10").css("display") != "none") {$("#prod45").show();}
                        break;
                    case 29:
                        $("#app12text").show();
                        break;
                    case 30:
                        $("#c9").show();
                        $("#c9number").show();
                        crop[9].quantity = 3;
                        crop[9].qop = 3;
                        $(".c9no").text(crop[9].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        if ($("#app5").css("display") != "none") {$("#prod47").show();}
                        if ($("#app10").css("display") != "none") {$("#prod48").show();}
                        break;
                    case 31:
                        if ($("#app10").css("display") != "none") {$("#prod49").show(); $("#prod50").show();}
                        break;
                    case 32:
                        $("#cooptext2").show();
                        coopsAvailable[2] += 1;
                        $("#cooptext4").show();
                        coopsAvailable[4] = 1;
                        if ($("#app1").css("display") != "none") {$("#prod4").show();}
                        break;
                    case 33:
                        if ($("#app2").css("display") != "none") {$("#prod53").show();}
                        if ($("#app0").css("display") != "none") {$("#prod54").show();}
                        if ($("#app12").css("display") != "none") {$("#prod55").show();}
                        break;
                    case 34:
                        $("#c10").show();
                        $("#c10number").show();
                        crop[10].quantity = 3;
                        crop[10].qop = 3;
                        $(".c10no").text(crop[10].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        if ($("#app6").css("display") != "none") {$("#prod56").show();}
                        if ($("#app12").css("display") != "none") {$("#prod57").show();}
                        break;
                    case 35:
                        $("#c11").show();
                        $("#c11number").show();
                        crop[11].quantity = 3;
                        crop[11].qop = 3;
                        $(".c11no").text(crop[11].quantity);
                        siloUsage += 3;
                        $(".silotext1").text(siloUsage);
                        myApp.checkDoable();
                        $("#app13text").show();
                        if ($("#app9").css("display") != "none") {$("#prod58").show();}
                        if ($("#app5").css("display") != "none") {$("#prod60").show();}
                        break;
                    case 36:
                        $("#or4text").show();
                        if ($("#app9").css("display") != "none") {$("#prod61").show();}
                        if ($("#app6").css("display") != "none") {$("#prod62").show();}
                        if ($("#app13").css("display") != "none") {$("#prod63").show();}
                        break;
                    case 37:
                        $("#cooptext4").show();
                        coopsAvailable[4] += 1;
                        if ($("#app0").css("display") != "none") {$("#prod64").show();}
                        if ($("#app13").css("display") != "none") {$("#prod65").show();}
                        break;
                    case 38:
                        if ($("#app9").css("display") != "none") {$("#prod66").show();}
                        if ($("#app13").css("display") != "none") {$("#prod67").show();}
                        break;
                    case 39:
                        $("#cooptext5").show();
                        coopsAvailable[5] += 1;
                        $("#app14text").show();
                        if ($("#app1").css("display") != "none") {$("#prod5").show();}
                        if ($("#app0").css("display") != "none") {$("#prod68").show();}
                        if ($("#app6").css("display") != "none") {$("#prod71").show();}
                        if ($("#app12").css("display") != "none") {$("#prod72").show();}
                        break;
                    case 40:
                        if ($("#app4").css("display") != "none") {$("#prod73").show();}
                        break;
                    case 41:
                        if ($("#app5").css("display") != "none") {$("#prod74").show();}
                        break;
                    case 42:
                        $("#or5text").show();
                        $("#cooptext3").show();
                        coopsAvailable[3] += 1;
                        $("#app15text").show();
                        if ($("#app9").css("display") != "none") {$("#prod76").show();}
                        break;
                    case 43:
                        if ($("#app15").css("display") != "none") {$("#prod77").show();}
                        break;
                    case 44:
                        if ($("#app11").css("display") != "none") {$("#prod79").show();}
                        if ($("#app4").css("display") != "none") {$("#prod78").show();}
                        break;
                    case 45:
                        if ($("#app0").css("display") != "none") {$("#prod80").show();}
                        if ($("#app15").css("display") != "none") {$("#prod81").show();}
                        break;
                    default:
                        break;
                    }
                    // Show dialogue box.
                    $(".dialog").dialog("close");
                    $("#leveldialog").html("<h2>Welcome to Level " + level + "</h2>" + leveldialogs[level]);
                    $("#leveldialog").dialog("open");
                    // Generate a new order if in early levels.
                    if (level < 13) {
                        tempNo = level - 1;
                        myApp.generateOrder(tempNo);
                    }
                    // Increase barn and silo size if at an appropriate level.
                    if (level % 3 == 1) {
                        barnSize += 25; 
                        siloSize += 25;
                        $(".silotext2").text(siloSize);
                        $(".barntext2").text(barnSize);
                    }
                    // Open new fields if at an appropriate level.
                    if (level % 2 == 1) {
                        $("#a" + parseInt(1.5 * level + 3.5)).css("background-color", "#663300");
                        $("#a" + parseInt(1.5 * level + 4.5)).css("background-color", "#663300");
                        $("#a" + parseInt(1.5 * level + 5.5)).css("background-color", "#663300");
                        planted[parseInt(1.5 * level + 3.5)] = -1;
                        planted[parseInt(1.5 * level + 4.5)] = -1;
                        planted[parseInt(1.5 * level + 5.5)] = -1;
                    }
                }
            },
            saveGame: function () {
                var i;
                var j;
                // Store game data.
                localStorage.setItem("level", level);
                localStorage.setItem("experience", experience);
                localStorage.setItem("expToAdv", expToAdv);
                localStorage.setItem("expSoFar", expSoFar);
                localStorage.setItem("money", money);
                localStorage.setItem("siloSize", siloSize);
                localStorage.setItem("barnSize", barnSize);
                localStorage.setItem("siloUsage", siloUsage);
                localStorage.setItem("barnUsage", barnUsage);
                // Store crops' and their numbers' visibility.
                for (i = 0; i < 12; i += 1) {
                    if ($("#c" + i).is(':visible')) {
                        localStorage.setItem("c" + i + "vis", 1);
                    } else {
                        localStorage.setItem("c" + i + "vis", 0);
                    }
                    if ($("#c" + i + "number").is(':visible')) {
                        localStorage.setItem("c" + i + "numbervis", 1);
                    } else {
                        localStorage.setItem("c" + i + "numbervis", 0);
                    }
                }
                // Store fields' status.
                for (i = 0; i < 80; i += 1) {
                    localStorage.setItem("planted" + i, planted[i]);
                }
                // Store coops data.
                for (i = 0; i < 6; i += 1) {
                    localStorage.setItem("coopsAvailable" + i, coopsAvailable[i]);
                    localStorage.setItem("coopsBought" + i, coopsBought[i]);
                }
                // Store coops' visibility.
                for (i = 0; i < 6; i += 1) {
                    if (i == 0) {
                        if( $("#an0coop").css('visibility') == 'visible') {
                            localStorage.setItem("an0coopvis", 1);
                        } else {
                            localStorage.setItem("an0coopvis", 0);
                        }
                    } else {
                        if ($("#an" + i + "coop").is(':visible')) {
                            localStorage.setItem("an" + i + "coopvis", 1);
                        } else {
                            localStorage.setItem("an" + i + "coopvis", 0);
                        }
                    }
                }
                // Store orchards' visibility.
                for (i = 0; i < 6; i += 1) {
                    if ($("#orchard" + i).is(':visible')) {
                        localStorage.setItem("orchard" + i + "vis", 1);
                    } else {
                        localStorage.setItem("orchard" + i + "vis", 0);
                    }
                }
                // Save animal data.
                for (i = 0; i < 6; i += 1) {
                    for (j = 0; j < 12; j += 1) {
                        localStorage.setItem("animalFed" + i + j, animalFed[i][j]);
                    }
                    localStorage.setItem("animalcurrentcost" + i, animal[i].currentcost);
                    localStorage.setItem("animalNo" + i, animalNo[i]);
                    localStorage.setItem("animalsForSale" + i, animalsForSale[i]);
                }
                // Save orchard data.
                for (i = 0; i < 6; i += 1) {
                    for (j = 0; j < 10; j += 1) {
                        localStorage.setItem("orchardPlanted" + i + j, orchardPlanted[i][j]);
                    }
                    localStorage.setItem("treeNo" + i, treeNo[i]);
                    localStorage.setItem("treesForSale" + i, treesForSale[i]);
                }
                // Store order data.
                for (i = 0; i < 12; i += 1) {
                    for (j = 0; j < 3; j += 1) {
                        if (orderProd[i][j] == 0) {
                            localStorage.setItem("orderProd" + i + j, 0);
                        } else {
                            localStorage.setItem("orderProd" + i + j, 1);
                            localStorage.setItem("orderProd" + i + j + "letter", orderProd[i][j].letter);
                            localStorage.setItem("orderProd" + i + j + "no", orderProd[i][j].no);
                            localStorage.setItem("orderQty" + i + j, orderQty[i][j]);
                        }
                    }
                    localStorage.setItem("orderSell" + i, orderSell[i]);
                    localStorage.setItem("orderExp" + i, orderExp[i]);
                }
                // Store application and product visibility.
                for (i = 0; i < 16; i += 1) {
                    if ($("#app" + i).is(':visible')) {
                        localStorage.setItem("app" + i + "vis", 1);
                    } else {
                        localStorage.setItem("app" + i + "vis", 0);
                    }
                    for (j = 0; j < (appliance[i].products).length; j += 1) {
                        if ($("#prod" + appliance[i].products[j]).is(':visible')) {
                            localStorage.setItem("prod" + appliance[i].products[j] + "vis", 1);
                        } else {
                            localStorage.setItem("prod" + appliance[i].products[j] + "vis", 0);
                        }
                    }
                }
                // Store whether feed mill upgrade visible.
                if ($("#app16image").is(':visible')) {
                    localStorage.setItem("feedmillupgraded", 1);
                } else {
                    localStorage.setItem("feedmillupgraded", 0);
                }
                // Store cooking data.
                for (i = 0; i < 17; i += 1) {
                    localStorage.setItem("cookState" + i, cookState[i]);
                    localStorage.setItem("cookProd" + i, cookProd[i]);
                }
                // Store crop quantities and qops.
                for (i = 0; i < 12; i += 1) {
                    localStorage.setItem("crop" + i + "qty", crop[i].quantity);
                    localStorage.setItem("crop" + i + "qop", crop[i].qop);
                }
                // Store fruit quantities.
                for (i = 0; i < 6; i += 1) {
                    localStorage.setItem("fruit" + i + "qty", fruit[i].quantity);
                }
                // Store product quantities.
                for (i = 0; i < 82; i += 1) {
                    localStorage.setItem("prod" + i + "qty", product[i].quantity);
                }
                alert("Game saved.");
            },
            restoreGame: function () {
                var i;
                var j;
                var tempNo;
                // Reset game data.
                level = parseInt(localStorage.getItem("level"));
                experience = parseInt(localStorage.getItem("experience"));
                expToAdv = parseInt(localStorage.getItem("expToAdv"));
                expSoFar = parseInt(localStorage.getItem("expSoFar"));
                money = parseInt(localStorage.getItem("money"));
                siloSize = parseInt(localStorage.getItem("siloSize"));
                barnSize = parseInt(localStorage.getItem("barnSize"));
                siloUsage = parseInt(localStorage.getItem("siloUsage"));
                barnUsage = parseInt(localStorage.getItem("barnUsage"));
                myApp.initialiseGameText();
                // Restore crop, fruit and product quantities, and change text where it appears.
                for (i = 0; i < 12; i += 1) {
                    crop[i].quantity = parseInt(localStorage.getItem("crop" + i + "qty"));
                    crop[i].qop = parseInt(localStorage.getItem("crop" + i + "qop"));
                    $(".c" + i + "no").text(crop[i].quantity);
                }
                for (i = 0; i < 6; i += 1) {
                    fruit[i].quantity = parseInt(localStorage.getItem("fruit" + i + "qty"));
                    $(".f" + i + "no").text(fruit[i].quantity);
                }
                for (i = 0; i < 82; i += 1) {
                    product[i].quantity = parseInt(localStorage.getItem("prod" + i + "qty"));
                    $(".p" + i + "no").text(product[i].quantity);
                }
                // Redraw crops and their numbers.
                for (i = 0; i < 12; i += 1) {
                    if (parseInt(localStorage.getItem("c" + i + "vis")) == 1) {
                        $("#c" + i).show();
                    } else {
                        $("#c" + i).hide();
                    }
                    if (parseInt(localStorage.getItem("c" + i + "numbervis")) == 1) {
                        $("#c" + i + "number").show();
                    } else {
                        $("#c" + i + "number").hide();
                    }
                }
                // Redraw fields.
                for (i = 0; i < 80; i += 1) {
                    planted[i] = parseInt(localStorage.getItem("planted" + i));
                    if (planted[i] == -2) {
                        $("#a" + i).css("background-color", "#333333");
                        $("#a" + i).html("");
                    }
                    if (planted[i] == -1) {
                        $("#a" + i).css("background-color", "#663300");
                        $("#a" + i).html("");
                    }
                    if (planted[i] > -1 && planted[i] < 12) {
                        planted[i] += 100;
                    }
                    if (planted[i] > 99) {
                        $("#a" + i).css("background-color", "#FFFF00");
                        $("#a" + i).html('<img src="images/' + crop[planted[i] - 100].image + '" alt="crop" width=40>');
                    }
                }
                // Restore animal area data.
                for (i = 0; i < 6; i += 1) {
                    coopsAvailable[i] = parseInt(localStorage.getItem("coopsAvailable" + i));
                    if (coopsAvailable[i] > 0) {
                        $("#cooptext" + i).show();
                    }
                    coopsBought[i] = parseInt(localStorage.getItem("coopsBought" + i));
                }
                // Redraw animal areas.
                for (i = 0; i < 6; i += 1) {
                    if (i == 0) {
                        if (parseInt(localStorage.getItem("an0coopvis")) == 1) {
                            $("#an0coop").css("visibility","visible");
                        } else {
                            $("#an0coop").css("visibility","hidden");
                        }
                    } else {
                        if (parseInt(localStorage.getItem("an" + i + "coopvis")) == 1) {
                            $("#an" + i + "coop").show();
                        } else {
                            $("#an" + i + "coop").hide();
                        }
                    }
                    tempNo = coopsBought[i] * 6;
                    for (j = 0; j < tempNo; j += 1) {
                        $("#an" + i + j).show();
                    }
                    for (j = tempNo; j < 18; j += 1) {
                        $("#an" + i + j).hide();
                    }
                }
                // Restore animal data.
                for (i = 0; i < 6; i += 1) {
                    for (j = 0; j < 12; j += 1) {
                        animalFed[i][j] = parseInt(localStorage.getItem("animalFed" + i + j));
                    }
                    animal[i].currentcost = parseInt(localStorage.getItem("animalcurrentcost" + i));
                    animalNo[i] = parseInt(localStorage.getItem("animalNo" + i));
                    animalsForSale[i] = parseInt(localStorage.getItem("animalsForSale" + i));
                    if (animalsForSale[i] > 0) {
                        $("#animal" + i + "text").show();
                        $("#animal" + i + "forsaletext").text(animalsForSale[i]);
                        $("#animal" + i + "costtext").text(animal[i].currentcost);
                    }
                    // Draw and colour animals accordingly.
                    for (j = 0; j < animalNo[i]; j += 1) {
                        $("#an" + i + j).html("<img src='images/" + animal[i].image + "' alt='" + animal[i].name + "' height=40>");
                        if (animalFed[i][j] == 0 || animalFed[i][j] == 1) {
                            $("#an" + i + j).css("background-color", "#663300");
                        }
                        if (animalFed[i][j] == 2) {
                            animalFed[i][j] = 3;
                        }
                        if (animalFed[i][j] == 3) {
                            $("#an" + i + j).css("background-color", "#FFFF00");
                        }
                    }
                }
                // Redraw orchards and shop text.
                for (i = 0; i < 6; i += 1) {
                    if (parseInt(localStorage.getItem("orchard" + i + "vis")) == 1) {
                        $("#orchard" + i).show();
                    } else {
                        $("#orchard" + i).hide();
                        if (level >= fruit[i].level) {$("#or" + i + "text").show();}
                    }
                }
                // Restore tree data and shop text.
                for (i = 0; i < 6; i += 1) {
                    for (j = 0; j < 10; j += 1) {
                        orchardPlanted[i][j] = parseInt(localStorage.getItem("orchardPlanted" + i + j));
                    }
                    treeNo[i] = parseInt(localStorage.getItem("treeNo" + i));
                    treesForSale[i] = parseInt(localStorage.getItem("treesForSale" + i));
                    if (treesForSale[i] > 0) {
                        $("#tree" + i + "text").show();
                        $("#tree" + i + "forsaletext").text(treesForSale[i]);
                    }
                    // Draw and colour trees accordingly.
                    for (j = 0; j < 10; j += 1) {
                        if (orchardPlanted[i][j] != 0) {
                            $("#or" + i + j).html("<img src='images/" + fruit[i].treeimage + "' alt='" + fruit[i].name + "' width=40>");
                        } else {
                            $("#or" + i + j).html("");
                        }
                        if (orchardPlanted[i][j] == 0) {
                            $("#or" + i + j).css("background-color", "#663300");
                        } else {
                            $("#or" + i + j).css("background-color", "#FFFF00");
                        }
                        if (orchardPlanted[i][j] % 2 == 1) {
                            orchardPlanted[i][j] += 1;
                        }
                    }
                }
                // Retrieve order data.
                for (i = 0; i < 12; i += 1) {
                    for (j = 0; j < 3; j += 1) {
                        if (parseInt(localStorage.getItem("orderProd" + i + j)) == 0) {
                            orderProd[i][j] = 0;
                        } else {
                            if (localStorage.getItem("orderProd" + i + j + "letter") == 'c') {
                                orderProd[i][j] = crop[parseInt(localStorage.getItem("orderProd" + i + j + "no"))];
                            }
                            if (localStorage.getItem("orderProd" + i + j + "letter") == 'f') {
                                orderProd[i][j] = fruit[parseInt(localStorage.getItem("orderProd" + i + j + "no"))];
                            }
                            if (localStorage.getItem("orderProd" + i + j + "letter") == 'p') {
                                orderProd[i][j] = product[parseInt(localStorage.getItem("orderProd" + i + j + "no"))];
                            }
                        }
                        orderQty[i][j] = parseInt(localStorage.getItem("orderQty" + i + j));
                    }
                    orderSell[i] = parseInt(localStorage.getItem("orderSell" + i));
                    orderExp[i] = parseInt(localStorage.getItem("orderExp" + i));
                }
                // Make the orders show the right products.
                for (i = 0; i < 12; i += 1) {
                    // Line 0.
                    myApp.generateOrderText(i, 0);
                    // Line 1.
                    if (orderProd[i][1] == 0) {
                        $("#orp" + 1 + i).html("");
                    } else {
                        myApp.generateOrderText(i, 1);
                    }
                    // Line 2.
                    if (orderProd[i][2] == 0) {
                        $("#orp" + 2 + i).html("");
                    } else {
                        myApp.generateOrderText(i, 2);
                    }
                    // Exp and sell.
                    $("#sell" + i).text(orderSell[i]);
                    $("#exp" + i).text(orderExp[i]);
                }
                // Show orders according to level.
                for (i = 0; i < 12; i += 1) {
                    if (level > i) {
                        $("#order" + i).show();
                    } else {
                        $("#order" + i).hide();
                    }
                }
                // Redraw appliances and products and appliance text in shop.
                for (i = 0; i < 16; i += 1) {
                    if (parseInt(localStorage.getItem("app" + i + "vis")) == 1) {
                        $("#app" + i).show();
                    } else {
                        $("#app" + i).hide();
                        if (level >= appliance[i].level) {$("#app" + i + "text").show();}
                    }
                    for (j = 0; j < (appliance[i].products).length; j += 1) {
                        if (parseInt(localStorage.getItem("prod" + appliance[i].products[j] + "vis")) == 1) {
                            $("#prod" + appliance[i].products[j]).show();
                        } else {
                            $("#prod" + appliance[i].products[j]).hide();
                        }
                    }
                }
                // Redraw feedmill upgrade.
                if (parseInt(localStorage.getItem("feedmillupgraded")) == 1) {
                    $("#app16image").show();
                } else {
                    $("#app16image").hide();
                    if ($("#app1").css("display") != "none" && level > 11) {
                        $("#feeduptext").show();
                    }
                }
                // Retrieve cooking data and update image.
                for (i = 0; i < 17; i += 1) {
                    cookState[i] = parseInt(localStorage.getItem("cookState" + i));
                    cookProd[i] = parseInt(localStorage.getItem("cookProd" + i));
                    if (cookState[i] == 0) {
                        $("#app" + i + "image").html("");
                        $("#app" + i + "image").css("background-color", "");
                        $("#app" + i + "image").html("<div class='valigned'>nothing</div>");
                    }
                    if (cookState[i] == 1) {
                        cookState[i] = 2;
                    }
                    if (cookState[i] == 2) {
                        $("#app" + i + "image").html('<img src="images/' + product[cookProd[i]].image + '"  alt="' + product[cookProd[i]].name + '" width=50>');
                        $("#app" + i + "image").css("background-color", "#FFFF00");
                        $("#app" + i + "image").css("border-bottom", "1px solid");
                    }
                }
                // Restore all timers to zero.
                for (i = 0; i < 80; i += 1) {
                    fieldStartTime[i] = 0;
                    clearTimeout(fieldTimeVar[i]);
                }
                for (i = 0; i < 6; i += 1) {
                    for (j = 0; j < 18; j += 1) {
                        animalTime[i][j] = 0;
                        clearTimeout(animalTimeVar[i][j]);
                    }
                }
                for (i = 0; i < 6; i += 1) {
                    for (j = 0; j < 10; j += 1) {
                        orchardTime[i][j] = 0;
                        clearTimeout(orchardTimeVar[i][j]);
                    }
                }
                for (i = 0; i < 17; i += 1) {
                    cookTime[i] = 0;
                    clearTimeout(cookTimeVar[i]);
                }
                myApp.checkDoable();
                alert("Game restored.");
            }
        };
    })();
    $(function() {
        FastClick.attach(document.body);
    });
    // Set the text at the top of the screen.
    myApp.initialiseGameText();
    // Draw barn, silo and shop.
    $("#barntext").html(myApp.drawBarn());
    $("#silotext").html(myApp.drawSilo());
    $("#shopcontents").html(myApp.drawShop());
    // Show first things you can buy in the shop.
    $("#cooptext0").show();
    $("#app1text").show();
    // Draw crops.
    $("#croppics").html(myApp.drawCrops());
    // Draw first crops you can use.
    $("#c0").css("border", "1px solid black");
    $("#c0").show();
    $("#c1").show();
    // Draw fields and initialise them.
    $("#land").html(myApp.drawLand());
    myApp.initialiseCrops();
    // Draw animals, orchards and orders.
    for (var j = 0; j < 6; j += 1) {
        $("#animals").append(myApp.drawAnimals(j));
    }
    // Show chicken coop, but make visibility hidden. Otherwise you can't click on fields at smaller screen resolutions until the coop is bought. I know not why!
    $("#an0coop").show().css('visibility', 'hidden');         
    for (var j = 0; j < 6; j += 1) {
        $("#orchard").append(myApp.drawOrchard(j));
    }
    $("#orders").html(myApp.drawOrders());
    // Make first order.
    myApp.generateOrder(0);
    // Draw appliances and products.
    for (var i = 0; i < 16; i += 1) {
        myApp.drawAppliance(i);
    }
    myApp.drawProducts();
    // What happens when we buy certain items.
    // If you buy an animal area.
    $(".bcoop").click(function (event) {
        myApp.buyCoop(this.id.slice(5));
    });
    // If you buy an animal.
    $(".banimal").click(function (event) {
        myApp.buyAnimal(this.id.slice(3));
    });
    // If you buy an orchard.
    $(".bor").click(function (event) {
        myApp.buyOrchard(this.id.slice(3));
    });
    // If you buy a tree.
    $(".btree").click(function (event) {
        myApp.buyTree(this.id.slice(5));
    });
    // If you buy an appliance.
    $(".bapp").click(function (event) {
        myApp.buyAppliance(this.id.slice(4));
    });
    // If you buy a feed mill upgrade.
    $("#fub").click(function (event) {
        myApp.buyFeedMillUpgrade();
    });
    // If you click save.
    $("#savebutton").click(function (event) {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.getItem("experience") !== null) {
                if (parseInt(localStorage.getItem("experience")) > parseInt(myApp.getExperience())) {
                    var r = confirm("Really save this game? Your saved game is more advanced than this one.");
                    if (r == true) {
                        myApp.saveGame();
                    }
                } else {
                    myApp.saveGame();
                }
            } else {
                myApp.saveGame();
            }
        } else {
            alert("Sorry, your browser doesn't support this.");
        }
    });
    // If you click restore.
    $("#restorebutton").click(function (event) {
        if (typeof(Storage) !== "undefined") {
            if (localStorage.getItem("experience") !== null) {
                if (parseInt(localStorage.getItem("experience")) < parseInt(myApp.getExperience())) {
                    var r = confirm("Really restore game? Your current game is more advanced than your saved one.");         
                    if (r == true) {
                        myApp.restoreGame();
                    }
                } else {
                    myApp.restoreGame();
                }
            }
        } else {
            alert("Sorry, your browser doesn't support this.");
        }
    });
    // If you click on a crop, update cropOfChoice and change border.
    $(".crop").click(function () {
        myApp.changeCropOfChoice(this.id.slice(1));
    });
    // If you hover over a field, show how much time is left in a tooltip.
    $(".field").mouseenter(function () {
        myApp.getFieldTime(this.id.slice(1));
    });
    // If you click on a field, plant or collect.
    $(".field").click(function () {
        myApp.clickField(this.id.slice(1));
    });
   // If you hover over an animal, show how much time is left in a tooltip.
    $(".coop, .toplesscoop").mouseenter(function () {
        myApp.getAnimalTime(this.id.slice(2, 3), this.id.slice(3));
    });
    // If you click an animal, collect the appropriate product.
    $(".coop, .toplesscoop").click(function () {
        // Send myApp.clickAnimal the animal type, the animal number and the end product.
        switch (parseInt(this.id.slice(2, 3))) {
           case 0:
               myApp.clickAnimal(this.id.slice(2, 3), this.id.slice(3), 6);
               break;
           case 1:
               myApp.clickAnimal(this.id.slice(2, 3), this.id.slice(3), 7);
               break;
           case 2:
               myApp.clickAnimal(this.id.slice(2, 3), this.id.slice(3), 12);
               break;
           case 3:
               myApp.clickAnimal(this.id.slice(2, 3), this.id.slice(3), 21);
               break;
           case 4:
               myApp.clickAnimal(this.id.slice(2, 3), this.id.slice(3), 51);
               break;
           case 5:
               myApp.clickAnimal(this.id.slice(2, 3), this.id.slice(3), 69);
               break;
           default:
               break;
        }
    });
   // If you hover over a tree, show how much time is left in a tooltip.
    $(".orchard").mouseenter(function () {
        myApp.getOrchardTime(this.id.slice(2, 3), this.id.slice(3));
    });
   // If you click on an orchard, harvest it.
    $(".orchard").click(function () {
        myApp.clickOrchard(this.id.slice(2,3),this.id.slice(3));
    });
    // If you click fulfil order, fulfil it.
    $(".fo").click(function () {
        myApp.clickFulfil(this.id.slice(2));
    });
    // If you click make in an appliance, get a product cooking.
    $(".makebutton").click(function () {
        myApp.clickMake(parseInt(this.id.substring(3, this.id.indexOf("-"))), parseInt(this.id.substring(this.id.indexOf("-")+1)));
    });
    // If you hover over a product being made, show time remaining.
    $(".collectbutton").mouseenter(function () {
        myApp.getCookTime(parseInt(this.id.substring(3, this.id.indexOf("i"))));
    });
    // If you collect a product that's been made, collect it.
    $(".collectbutton").click(function () {
        myApp.collectProduct(parseInt(this.id.slice(3, -5)));
    });
    // Change dialog boxes.
    $.extend($.ui.dialog.prototype.options, {dialogClass: 'noTitleStuff', width: 400, position: {my: "top", at: "center bottom+150", of: "#title"}, autoOpen: false, buttons: [{text: "Close", click: function () {$(this).dialog("close");}}]});
    // If you open the shop, display what's for sale.
    $("#openshop").click(function (event) {
       $(".dialog").dialog("close");
       $( "#shop" ).dialog("open");
    });
    $(".dialog").dialog();
    // If you open the barn, display products.
    $("#openbarn").click(function (event) {
        $(".dialog").dialog("close");
        $("#barn").dialog("open");
        for (i = 0; i < 82; i += 1) {
            if (myApp.checkProductQuantity(i) == 1) {
                $("#prow" + i).show();
            } else {
                $("#prow" + i).hide();
            }
        }
    });
    // If you open the silo, display crops and fruit.
    $("#opensilo").click(function (event) {
       $(".dialog").dialog("close");
       $("#silo").dialog("open");
       for (i = 0; i < 12; i += 1) {
           if (myApp.checkCropQuantity(i) == 1) {
               $("#crow" + i).show();
           } else {
               $("#crow" + i).hide();
           }
       }
       for (i = 0; i < 6; i += 1) {
           if (myApp.checkFruitQuantity(i) == 1) {
               $("#frow" + i).show();
           } else {
               $("#frow" + i).hide();
           }
       }
    });
    // If you sell crops from the silo.
    $(".silobutton").click(function () {
        myApp.sellCrop('#' + this.id.slice(1), this.id.slice(3));
    });
    // If you sell fruit from the silo.
    $(".fruitbutton").click(function () {
        myApp.sellFruit('#' + this.id.slice(1), this.id.slice(3));
    });
    // If you sell from the barn.
    $(".barnbutton").click(function () {
        myApp.sellProduct('#' + this.id.slice(1), this.id.slice(3));
    });
    // Check if new level entered every 0.5 seconds and make changes.
    setInterval(myApp.drawFarm, 500);
    // Open the initial dialog box.
    $("#dialog1").dialog("open");
});