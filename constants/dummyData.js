
const Level3 = {
    id: 100,
    name: 'BOOK_PACKAGE_LEVEL3',
    price: 30000,
    image: require('../assets/images/BOOK_PACKAGE_LEVEL31_HZLjJS8.max-350x225.png'),
    description: 'This compilation of 3 tales from the Moran Publishers aims to guide the young readers about wise conduct, human nature, and the right path for attaining success in life. Accompanied with beautiful illustrations and great morals, this Package will inspire the child to follow the path of righteousness and abide by the wise rules of the world. The stories are written in simple language, which makes them easily understandable and keeps the child glued to the books for hours. Each story book gives advice that can be followed by children, as well as adults.'
}


const CreativeThinking = {
    id: 101,
    name: 'CREATIVE_THINKING_WORKBOOK',
    price: 30000,
    image: require('../assets/images/CREATIVE_THINKING_WORKBOOK.max-350x225.png'),
    description: 'Discover how a growth mindset can help you achieve your goals―activities for kids 8 to 13 A Creative Thinking Workbook can help you develop your abilities to tackle just about anything. Creative Thinking Workbook for Kids is a fun and engaging activity book, for ages 8 to 13, that can help you train your brain and develop creative problem-solving skills through practice and perseverance. You’ll learn how to foster a “can-do” attitude and celebrate your mistakes as a path to ultimate success.Packed with awesome activities and easy exercises, this complete workbook addressing growth mindset for kids is a great way to master just about anything with a little effort and encouragement. The real and rewarding work of dreaming big, making missteps, and expanding your mind (like a muscle) starts now. Let’s find out what amazing things you can do―a growth mindset for kids is mission possible!'
}


const KAVUYO = {
    id: 102,
    name: 'KAVUYO GAMES',
    price: 40000,
    image: require('../assets/images/KAVUYO.max-350x225.png'),
    description:
     'GET TO KNOW UGANDA BETTER: You think you know your country? Think again! Our KAVUYO Game is a great chance to spend quality time with your loved ones while getting to know places, people and foods like you never did before! PLAY IT ANYTIME, ANYWHERE: Make any occasion exciting and light-hearted with our card game that you can play for a romantic evening, drinking sessions, meeting with friends, family gatherings, and more! UNIQUE CARD GAME: No need to wrack your brain with this one. It is a simple and fun game to play that will spread laughter to everyone! Kavuyo will inspire funny, engaging chats that will spark connection and intimacy with the people around you. PREMIUM QUALITY: Made of the highest quality raw materials. It also features lamination for durability and long-lasting use.PERFECT GIFT IDEA: Make our card game the perfect gift for people who love to entertain guests or have a good laugh by clicking '
}


const Level1 = {
    id: 100,
    name: 'BOOK_PACKAGE_LEVEL3',
    price: 30000,
    image: require('../assets/images/UGX_25000.max-350x225.png'),
    description: 'This compilation of 3 tales from the Moran Publishers aims to guide the young readers about wise conduct, human nature, and the right path for attaining success in life. Accompanied with beautiful illustrations and great morals, this Package will inspire the child to follow the path of righteousness and abide by the wise rules of the world. The stories are written in simple language, which makes them easily understandable and keeps the child glued to the books for hours. Each story book gives advice that can be followed by children, as well as adults.'
}

const myCart = [
    {
        ...Level1,
        qty: 1
    },
    {
        ...Level3,
        qty: 1
    },
    {
        ...KAVUYO,
        qty: 1
    },
    {
        ...CreativeThinking,
        qty: 1
    }

]

const myCards = [
    {
        id: 1,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
        card_no: "1234"
    },
    {
        id: 2,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
        card_no: "1234"
    },
]

const allCards = [
    {
        id: 1,
        name: "Apple Pay",
        icon: require("../assets/icons/apple.png")
    },
    {
        id: 2,
        name: "Visa",
        icon: require("../assets/icons/visa.png"),
    },
    {
        id: 3,
        name: "PayPal",
        icon: require("../assets/icons/paypal.png"),
    },
    {
        id: 4,
        name: "Google Pay",
        icon: require("../assets/icons/google.png"),
    },
    {
        id: 5,
        name: "Master Card",
        icon: require("../assets/icons/mastercard.png"),
    },
]



export default {
   
    CreativeThinking,
    Level1,
    Level3,
    KAVUYO,
    myCart,
    myCards,
    allCards
}
