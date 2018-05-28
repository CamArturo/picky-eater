// GET /categories
const examples = {
  [
    {
      'category_id': '3',
      'category_name': 'Nightlife'
    }
    ],

// Cities

  [
    {
      'id': '280',
      'name': 'New York City, NY',
      'country_id': '216',
      'country_name': 'United States',
      'is_state': '0',
      'state_id': '103',
      'state_name': 'New York State',
      'state_code': 'NY'
    }
    ],

  // Trending locations - POST MVP
  [
    {
      'collection_id': '1',
      'title': 'Trending this week',
      'url': 'https://www.zomato.com/new-york-city/top-restaurants',
      'description': 'The most popular restaurants in town this week',
      'image_url': 'https://b.zmtcdn.com/data/collections/e40960514831cb9b74c552d69eceee0f_1418387628_l.jpg',
      'res_count': '30',
      'share_url': 'http://www.zoma.to/c-280/1'
    }
    ],

// Cuisines
  // Get a list of all cuisines of restaurants listed in a city. The location/city input can be provided in the following ways -
  [
    {
      "cuisine_id": "25",
      "cuisine_name": "Chinese"
    }
    ]
    ,
// Get a list of restaurant types in a city. The location/City input can be provided in the following ways -
{
  "establishments": [
  {
    "establishment": {
      "id": 21,
      "name": "Quick Bites"
    }
  },
  {
    "establishment": {
      "id": 271,
      "name": "Sandwich Shop"
    }
  },
  {
    "establishment": {
      "id": 1,
      "name": "Café"
    }
  },
  {
    "establishment": {
      "id": 281,
      "name": "Fast Food"
    }
  },
  {
    "establishment": {
      "id": 7,
      "name": "Bar"
    }
  },
  {
    "establishment": {
      "id": 16,
      "name": "Casual Dining"
    }
  },
  {
    "establishment": {
      "id": 24,
      "name": "Deli"
    }
  },
  {
    "establishment": {
      "id": 31,
      "name": "Bakery"
    }
  },
  {
    "establishment": {
      "id": 18,
      "name": "Fine Dining"
    }
  },
  {
    "establishment": {
      "id": 275,
      "name": "Pizzeria"
    }
  },
  {
    "establishment": {
      "id": 101,
      "name": "Diner"
    }
  },
  {
    "establishment": {
      "id": 5,
      "name": "Lounge"
    }
  },
  {
    "establishment": {
      "id": 278,
      "name": "Wine Bar"
    }
  },
  {
    "establishment": {
      "id": 6,
      "name": "Pub"
    }
  },
  {
    "establishment": {
      "id": 286,
      "name": "Coffee Shop"
    }
  },
  {
    "establishment": {
      "id": 23,
      "name": "Dessert Parlour"
    }
  },
  {
    "establishment": {
      "id": 8,
      "name": "Club"
    }
  },
  {
    "establishment": {
      "id": 91,
      "name": "Bistro"
    }
  },
  {
    "establishment": {
      "id": 285,
      "name": "Fast Casual"
    }
  },
  {
    "establishment": {
      "id": 283,
      "name": "Brewery"
    }
  },
  {
    "establishment": {
      "id": 284,
      "name": "Juice Bar"
    }
  },
  {
    "establishment": {
      "id": 20,
      "name": "Food Court"
    }
  },
  {
    "establishment": {
      "id": 295,
      "name": "Noodle Shop"
    }
  },
  {
    "establishment": {
      "id": 292,
      "name": "Beer Garden"
    }
  },
  {
    "establishment": {
      "id": 282,
      "name": "Taqueria"
    }
  },
  {
    "establishment": {
      "id": 272,
      "name": "Cocktail Bar"
    }
  },
  {
    "establishment": {
      "id": 291,
      "name": "Sweet Shop"
    }
  },
  {
    "establishment": {
      "id": 81,
      "name": "Food Truck"
    }
  },
  {
    "establishment": {
      "id": 294,
      "name": "Izakaya"
    }
  },
  {
    "establishment": {
      "id": 161,
      "name": "Microbrewery"
    }
  },
  {
    "establishment": {
      "id": 290,
      "name": "Vineyard"
    }
  },
  {
    "establishment": {
      "id": 293,
      "name": "Shack"
    }
  },
  {
    "establishment": {
      "id": 41,
      "name": "Beverage Shop"
    }
  }
]
}
    // geocode
  // Location
    // get popularity

    {
      "popularity": {
        "popularity": "4.92",
        "nightlife_index": "4.95",
        "top_cuisines": [
          "cafe"
        ]
      },
      "location": {
        "entity_type": "group",
        "entity_id": "36932",
        "title": "Chelsea Market, Chelsea, New York City",
        "latitude": "40.742051",
        "longitude": "-74.004821",
        "city_id": "280",
        "city_name": "New York City",
        "country_id": "216",
        "country_name": "United States"
      },
      "best_rated_restaurants": [
        {
          "id": "16774318",
          "name": "Otto Enoteca & Pizzeria",
          "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
          "location": {
            "address": "1 5th Avenue, New York, NY 10003",
            "locality": "Greenwich Village",
            "city": "New York City",
            "latitude": "40.732013",
            "longitude": "-73.996155",
            "zipcode": "10003",
            "country_id": "216"
          },
          "average_cost_for_two": "60",
          "price_range": "2",
          "currency": "$",
          "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
          "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
          "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
          "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
          "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
          "user_rating": {
            "aggregate_rating": "3.7",
            "rating_text": "Very Good",
            "rating_color": "5BA829",
            "votes": "1046"
          },
          "has_online_delivery": "0",
          "is_delivering_now": "0",
          "has_table_booking": "0",
          "deeplink": "zomato://r/16774318",
          "cuisines": "Cafe",
          "all_reviews_count": "15",
          "photo_count": "18",
          "phone_numbers": "(212) 228-2930",
          "photos": [
            {
              "id": "u_MjA5MjY1OTk5OT",
              "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
              "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
              "user": {
                "name": "John Doe",
                "zomato_handle": "John",
                "foodie_level": "Super Foodie",
                "foodie_level_num": "9",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/john",
                "profile_deeplink": "zoma.to/u/1170245",
                "profile_image": "string"
              },
              "res_id": "16782899",
              "caption": "#awesome",
              "timestamp": "1435111770",
              "friendly_time": "3 months ago",
              "width": "640",
              "height": "640",
              "comments_count": "0",
              "likes_count": "0"
            }
          ],
          "all_reviews": [
            {
              "rating": "5",
              "review_text": "The best latte I've ever had. It tasted a little sweet",
              "id": "24127336",
              "rating_color": "305D02",
              "review_time_friendly": "2 months ago",
              "rating_text": "Insane!",
              "timestamp": "1435507367",
              "likes": "0",
              "user": {
                "name": "John Doe",
                "zomato_handle": "John",
                "foodie_level": "Super Foodie",
                "foodie_level_num": "9",
                "foodie_color": "f58552",
                "profile_url": "https://www.zomato.com/john",
                "profile_deeplink": "zoma.to/u/1170245",
                "profile_image": "string"
              },
              "comments_count": "0"
            }
          ]
        }
      ]
    },  "daily_menu": [
    {
      "daily_menu_id": "16507624",
      "name": "Vinohradský pivovar",
      "start_date": "2016-03-08 11:00",
      "end_date": "2016-03-08 15:00",
      "dishes": [
        {
          "dish_id": "104089345",
          "name": "Tatarák ze sumce s toustem",
          "price": "149 Kč"
        }
      ]
    }
  ],// Restaurant
// Get detailed restaurant information using Zomato restaurant ID. Partner Access is required to access photos and reviews.

{
  "id": "16774318",
  "name": "Otto Enoteca & Pizzeria",
  "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
  "location": {
  "address": "1 5th Avenue, New York, NY 10003",
    "locality": "Greenwich Village",
    "city": "New York City",
    "latitude": "40.732013",
    "longitude": "-73.996155",
    "zipcode": "10003",
    "country_id": "216"
}

,
  "average_cost_for_two": "60",
  "price_range": "2",
  "currency": "$",
  "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
  "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
  "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
  "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
  "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
  "user_rating": {
  "aggregate_rating": "3.7",
    "rating_text": "Very Good",
    "rating_color": "5BA829",
    "votes": "1046"
},
  "has_online_delivery": "0",
  "is_delivering_now": "0",
  "has_table_booking": "0",
  "deeplink": "zomato://r/16774318",
  "cuisines": "Cafe",
  "all_reviews_count": "15",
  "photo_count": "18",
  "phone_numbers": "(212) 228-2930",
  "photos": [
  {
    "id": "u_MjA5MjY1OTk5OT",
    "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
    "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
    "user": {
      "name": "John Doe",
      "zomato_handle": "John",
      "foodie_level": "Super Foodie",
      "foodie_level_num": "9",
      "foodie_color": "f58552",
      "profile_url": "https://www.zomato.com/john",
      "profile_deeplink": "zoma.to/u/1170245",
      "profile_image": "string"
    },
    "res_id": "16782899",
    "caption": "#awesome",
    "timestamp": "1435111770",
    "friendly_time": "3 months ago",
    "width": "640",
    "height": "640",
    "comments_count": "0",
    "likes_count": "0"
  }
],
  "all_reviews": [
  {
    "rating": "5",
    "review_text": "The best latte I've ever had. It tasted a little sweet",
    "id": "24127336",
    "rating_color": "305D02",
    "review_time_friendly": "2 months ago",
    "rating_text": "Insane!",
    "timestamp": "1435507367",
    "likes": "0",
    "user": {
      "name": "John Doe",
      "zomato_handle": "John",
      "foodie_level": "Super Foodie",
      "foodie_level_num": "9",
      "foodie_color": "f58552",
      "profile_url": "https://www.zomato.com/john",
      "profile_deeplink": "zoma.to/u/1170245",
      "profile_image": "string"
    },
    "comments_count": "0"
  }
]
}

// Reviews
[
  {
    "rating": "5",
    "review_text": "The best latte I've ever had. It tasted a little sweet",
    "id": "24127336",
    "rating_color": "305D02",
    "review_time_friendly": "2 months ago",
    "rating_text": "Insane!",
    "timestamp": "1435507367",
    "likes": "0",
    "user": {
      "name": "John Doe",
      "zomato_handle": "John",
      "foodie_level": "Super Foodie",
      "foodie_level_num": "9",
      "foodie_color": "f58552",
      "profile_url": "https://www.zomato.com/john",
      "profile_deeplink": "zoma.to/u/1170245",
      "profile_image": "string"
    },
    "comments_count": "0"
  }
]
};
