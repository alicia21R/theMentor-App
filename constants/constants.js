const screens = {
    main_layout: "MainLayout",
    home: "Home",
    search: "Search",
    cart: "Cart",
    favourite: "Favourite",
    notification: "Notification",
    my_wallet: "My Wallet",
}

const delivery_time = [
    {
        id: 1,
        label: "10 Mins",
    },
    {
        id: 2,
        label: "20 Mins"
    },
    {
        id: 3,
        label: "30 Mins"
    }
]


const track_order_status = [
    {
        id: 4,
        title: "Order Confirmed",
        sub_title: "Your order has been received"
    },
    {
        id: 6,
        title: "Delivery in Progress",
        sub_title: "Delivery on the way"
    },
    {
        id: 7,
        title: "Delivered",
        sub_title: "Order Delivered!"
    },
    {
        id: 8,
        title: "Rate Us",
        sub_title: "Help us improve our service"
    }
]


export default {
    screens,
    delivery_time,
    track_order_status,
   
}