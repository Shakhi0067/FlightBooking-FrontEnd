const req =  {
    "type": "flight-offer",
    "id": "2",
    "source": "GDS",
    "instantTicketingRequired": false,
    "nonHomogeneous": false,
    "oneWay": false,
    "lastTicketingDate": "2021-12-19",
    "numberOfBookableSeats": 9,
    "itineraries": [
        {
            "duration": "PT8H25M",
            "segments": [
                {
                    "departure": {
                        "iataCode": "COK",
                        "terminal": "1",
                        "at": "2021-12-19T15:30:00"
                    },
                    "arrival": {
                        "iataCode": "BLR",
                        "at": "2021-12-19T17:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "9506",
                    "aircraft": {
                        "code": "ATR"
                    },
                    "duration": "PT2H25M",
                    "id": "2",
                    "numberOfStops": 1,
                    "blacklistedInEU": false
                },
                {
                    "departure": {
                        "iataCode": "BLR",
                        "at": "2021-12-19T21:00:00"
                    },
                    "arrival": {
                        "iataCode": "DEL",
                        "terminal": "3",
                        "at": "2021-12-19T23:55:00"
                    },
                    "carrierCode": "AI",
                    "number": "808",
                    "aircraft": {
                        "code": "32B"
                    },
                    "duration": "PT2H55M",
                    "id": "3",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                }
            ]
        },
        {
            "duration": "PT3H10M",
            "segments": [
                {
                    "departure": {
                        "iataCode": "DEL",
                        "terminal": "3",
                        "at": "2022-01-01T14:10:00"
                    },
                    "arrival": {
                        "iataCode": "COK",
                        "terminal": "1",
                        "at": "2022-01-01T17:20:00"
                    },
                    "carrierCode": "AI",
                    "number": "512",
                    "aircraft": {
                        "code": "32B"
                    },
                    "duration": "PT3H10M",
                    "id": "6",
                    "numberOfStops": 0,
                    "blacklistedInEU": false
                }
            ]
        }
    ],
    "price": {
        "currency": "INR",
        "total": 37854.0,
        "base": 33520.0,
        "fees": [
            {
                "amount": 0.0,
                "type": "SUPPLIER"
            },
            {
                "amount": 0.0,
                "type": "TICKETING"
            }
        ],
        "grandTotal": 37854.0
    },
    "pricingOptions": {
        "includedCheckedBagsOnly": true,
        "fareType": [
            "PUBLISHED"
        ],
        "refundableFare": false,
        "noRestrictionFare": false,
        "noPenaltyFare": false
    },
    "validatingAirlineCodes": [
        "AI"
    ],
    "travelerPricings": [
        {
            "travelerId": "1",
            "fareOption": "STANDARD",
            "travelerType": "ADULT",
            "price": {
                "currency": "INR",
                "total": 18927.0,
                "base": 16760.0,
                "grandTotal": 0.0
            },
            "fareDetailsBySegment": [
                {
                    "segmentId": "2",
                    "cabin": "ECONOMY",
                    "fareBasis": "SIP9I",
                    "class": "S",
                    "includedCheckedBags": {
                        "weight": 15,
                        "weightUnit": "KG"
                    }
                },
                {
                    "segmentId": "3",
                    "cabin": "ECONOMY",
                    "fareBasis": "SIP",
                    "class": "S",
                    "includedCheckedBags": {
                        "weight": 15,
                        "weightUnit": "KG"
                    }
                },
                {
                    "segmentId": "6",
                    "cabin": "ECONOMY",
                    "fareBasis": "SIP",
                    "class": "S",
                    "includedCheckedBags": {
                        "weight": 25,
                        "weightUnit": "KG"
                    }
                }
            ]
        },
        {
            "travelerId": "2",
            "fareOption": "STANDARD",
            "travelerType": "ADULT",
            "price": {
                "currency": "INR",
                "total": 18927.0,
                "base": 16760.0,
                "grandTotal": 0.0
            },
            "fareDetailsBySegment": [
                {
                    "segmentId": "2",
                    "cabin": "ECONOMY",
                    "fareBasis": "SIP9I",
                    "class": "S",
                    "includedCheckedBags": {
                        "weight": 15,
                        "weightUnit": "KG"
                    }
                },
                {
                    "segmentId": "3",
                    "cabin": "ECONOMY",
                    "fareBasis": "SIP",
                    "class": "S",
                    "includedCheckedBags": {
                        "weight": 15,
                        "weightUnit": "KG"
                    }
                },
                {
                    "segmentId": "6",
                    "cabin": "ECONOMY",
                    "fareBasis": "SIP",
                    "class": "S",
                    "includedCheckedBags": {
                        "weight": 25,
                        "weightUnit": "KG"
                    }
                }
            ]
        }
    ]
}

        export default req;