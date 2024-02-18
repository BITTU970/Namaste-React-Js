import React from "react";
import ReactDOM from "react-dom/client";

const Haeder = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const resObj = {
    "card": {
      "card": {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        "info": {
          "id": "148467",
          "name": "King's of Chicken",
          "cloudinaryImageId": "fmq7ffoav3picdl34imk",
          "locality": "Greater noida west",
          "areaName": "Panchsheel Green",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian","Asia"
          ],
          "avgRating": 3.7,
          "parentId": "266061",
          "avgRatingString": "3.7",
          "totalRatingsString": "1K+",
          "promoted": true,
          "adTrackingId": "cid=11289726~p=1~eid=0000018d-b81b-17be-3208-f4ee00b40114~srvts=1708190799806~83645",
          "sla": {
            "deliveryTime": 51,
            "lastMileTravel": 9.9,
            "serviceability": "SERVICEABLE",
            "slaString": "50-55 mins",
            "lastMileTravelString": "9.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-17 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off | Use code PARTY",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ]
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textExtendedBadges": {
                
              },
              "textBased": {
                
              }
            }
          },
          "orderabilityCommunication": {
            "title": {
              
            },
            "subTitle": {
              
            },
            "message": {
              
            },
            "customIcon": {
              
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {
          
        },
        "cta": {
          "link": "swiggy://menu?restaurant_id=148467&source=collection&query=North%20Indian",
          "text": "RESTAURANT_MENU",
          "type": "DEEPLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      "relevance": {
        "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
        "sectionId": "MENU_RETURN_FOOD"
      }
    }
  }

  const resList = [{
    "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "458229",
            "name": "Om Sai Hotel",
            "cloudinaryImageId": "ll6fxeelombmjamkts36",
            "locality": "Gautam Buddha Nagar",
            "areaName": "Amrapali Dream Valley",
            "costForTwo": "₹299 for two",
            "cuisines": [
              "North Indian"
            ],
            "avgRating": 3.6,
            "veg": true,
            "parentId": "151748",
            "avgRatingString": "3.6",
            "totalRatingsString": "500+",
            "promoted": true,
            "adTrackingId": "cid=11250261~p=1~eid=0000018d-b8db-3761-48e5-7b2c00b5013f~srvts=1708203390817~83645",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 9.3,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "9.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-18 03:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=458229&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "393213",
            "name": "Apni Veg Rasoi",
            "cloudinaryImageId": "u32i6651hhhcddcyntly",
            "locality": "Panchsheel Square Mall",
            "areaName": "crossing republic",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "North Indian"
            ],
            "avgRating": 3.9,
            "veg": true,
            "parentId": "22092",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "promoted": true,
            "adTrackingId": "cid=11147032~p=3~eid=0000018d-b8db-3761-48e5-7b2e00b50335~srvts=1708203390817~83645",
            "sla": {
              "deliveryTime": 43,
              "lastMileTravel": 9,
              "serviceability": "SERVICEABLE",
              "slaString": "40-45 mins",
              "lastMileTravelString": "9.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-24 00:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=393213&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "549249",
            "name": "Shivam Pahalwan Dhaba",
            "cloudinaryImageId": "y5kyz5bltxvyaojuwqwh",
            "locality": "Hapur Chungi",
            "areaName": "Raj Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Indian"
            ],
            "avgRating": 3.9,
            "parentId": "330220",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=11278673~p=4~eid=0000018d-b8db-3761-48e5-7b2f00b5041e~srvts=1708203390817~83645",
            "sla": {
              "deliveryTime": 25,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-18 09:55:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=549249&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "615068",
            "name": "Thali By Good Food Pavilion",
            "cloudinaryImageId": "rai9yqpiwrhqlbl8sopd",
            "locality": "Rajnagar Extension",
            "areaName": "Rajnagar Extension",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Snacks"
            ],
            "avgRating": 4,
            "parentId": "366782",
            "avgRatingString": "4.0",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=11298275~p=5~eid=0000018d-b8db-3761-48e5-7b3000b50533~srvts=1708203390817~83645",
            "sla": {
              "deliveryTime": 36,
              "lastMileTravel": 7.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "7.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-18 08:45:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              "header": "25% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "25% off up to ₹65 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ]
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=615068&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "661973",
            "name": "Chawlas 2",
            "cloudinaryImageId": "da76f510fa3623cb078f54656c1fc2b4",
            "locality": "Acharya Sushruta Road",
            "areaName": "Raj Nagar",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Indian"
            ],
            "avgRating": 3.9,
            "parentId": "13653",
            "avgRatingString": "3.9",
            "totalRatingsString": "100+",
            "promoted": true,
            "adTrackingId": "cid=11298227~p=6~eid=0000018d-b8db-3761-48e5-7b3100b5062c~srvts=1708203390817~83645",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 7.7,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "7.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-24 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              "header": "40% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "40% off up to ₹80 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ]
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=661973&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "212378",
            "name": "Annapurna Bhojanalya",
            "cloudinaryImageId": "ot4wnyqrkerptl0yd6or",
            "locality": "sector 10",
            "areaName": "Raj Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
              "North Indian",
              "South Indian",
              "Chinese",
              "Indian",
              "Snacks",
              "Desserts",
              "Beverages"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "34010",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 28,
              "lastMileTravel": 1.7,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.7 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-24 00:00:00",
              "opened": true
            },
            "badges": {
              
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              "header": "50% OFF",
              "shortDescriptionList": [
                {
                  "meta": "Use TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ],
              "descriptionList": [
                {
                  "meta": "50% off up to ₹100 | Use code TRYNEW",
                  "discountType": "Percentage",
                  "operationType": "RESTAURANT"
                }
              ]
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "textBased": {
                  
                },
                "imageBased": {
                  
                },
                "textExtendedBadges": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=212378&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    },
    {
      "card": {
        "card": {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
          "info": {
            "id": "402593",
            "name": "Haldiram's",
            "cloudinaryImageId": "domuja3qjqsuwgtl1fyp",
            "locality": "P And T Colony",
            "areaName": "Raj Nagar",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "North Indian",
              "Sweets",
              "Snacks",
              "South Indian"
            ],
            "avgRating": 4.1,
            "veg": true,
            "parentId": "377669",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 27,
              "lastMileTravel": 1.8,
              "serviceability": "SERVICEABLE",
              "slaString": "25-30 mins",
              "lastMileTravelString": "1.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-02-18 04:00:00",
              "opened": true
            },
            "badges": {
              "imageBadges": [
                {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {
              
            },
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                      }
                    }
                  ]
                },
                "textExtendedBadges": {
                  
                },
                "textBased": {
                  
                }
              }
            },
            "orderabilityCommunication": {
              "title": {
                
              },
              "subTitle": {
                
              },
              "message": {
                
              },
              "customIcon": {
                
              }
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {
                  
                },
                "video": {
                  
                }
              }
            },
            "reviewsSummary": {
              
            },
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {
              
            },
            "externalRatings": {
              "aggregatedRating": {
                "rating": "--"
              }
            },
            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
          },
          "analytics": {
            
          },
          "cta": {
            "link": "swiggy://menu?restaurant_id=402593&source=collection&query=North%20Indian",
            "text": "RESTAURANT_MENU",
            "type": "DEEPLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
        },
        "relevance": {
          "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
          "sectionId": "MENU_RETURN_FOOD"
        }
      }
    }
  
  ];
    


const RestaurantCard = ({resData}) =>{
    //const {resName,cuisine} = props         //(props) -----> {props.resName} , {props.cuisine}
    //console.log(props);
    return(
        <div className="restaurantcard" style={{backgroundColor:"#f0f0f0"}}>
        <img className="restaurant-logo"
            src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +resData.card.card.info.cloudinaryImageId}
            alt="restaurant-logo"
        />
            <h3>{resData.card.card.info.name?.toUpperCase()}</h3>
            <h4>{resData.card.card.info.cuisines.join(", ")}</h4>
            <h4>{resData.card.card.info.avgRating} stars</h4>
            <h4>{resData.card.card.info.costForTwo}</h4>
            <h4>{resData.card.card.info.sla.deliveryTime} minutes</h4>
        </div>
    )
}

const Body = () =>{
    return(
        <div className="body-container">
        <div className="search">search</div>
        <div className="restaurant-container">
            <RestaurantCard resData = {resList[0]}/>
            <RestaurantCard resData = {resList[1]}/>
            <RestaurantCard resData = {resList[2]}/>
            <RestaurantCard resData = {resList[3]}/>
            <RestaurantCard resData = {resList[4]}/>
            <RestaurantCard resData = {resList[5]}/>
            <RestaurantCard resData = {resList[6]}/>
            <RestaurantCard resData = {resList[2]}/>
            {/* <RestaurantCard resName = "KFC" cuisine = "Burger, Fast Food"/> */}
             
        </div>

        </div>
    );
}

const AppLayout = () => {
  return (
    <>
      <div className="container">
        {/* <h1>HELLO GUYS.. 👋👋👋</h1> */}
        <Haeder />
        <Body/>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
