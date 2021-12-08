const req =  {
                "type": "flight-offer",
                "id": "1",
                "source": "GDS",    
                "instantTicketingRequired": false,   
                "nonHomogeneous": false,   
                "oneWay": false,   
                "lastTicketingDate": "2021-12-07",  
                "numberOfBookableSeats": 9,   
                "itineraries": [ 
                    {  
                        "duration": "PT28H25M",
                        "segments": [
                                {
                                    "departure": {
                                        "iataCode": "SYD",
                                        "at": "2021-12-07T16:35:00"
                                    },
                                    "arrival": {
                                        "iataCode": "LHR",
                                        "at": "2021-12-08T05:30:00"
                                    },
                                    "carrierCode": "6X",
                                    "number": "1335",
                                    "aircraft": {
                                        "code": "744"
                                    },
                                    "operating": {
                                        "carrierCode": "6X"
                                    },
                                    "duration": "PT23H55M",
                                    "stops": [
                                        {
                                            "iataCode": "SIN",
                                            "duration": "PT1H15M",
                                            "arrivalAt": "2021-12-07T21:45:00",
                                            "departureAt": "2021-12-07T23:00:00"
                                        }
                                    ],
                                    "id": "1",
                                    "numberOfStops": 1,
                                    "blacklistedInEU": false
                                },
                                {
                                    "departure": {
                                        "iataCode": "LHR",
                                        "at": "2021-12-08T07:00:00"
                                    },
                                    "arrival": {
                                        "iataCode": "BKK",
                                        "at": "2021-12-08T17:00:00"
                                    },
                                    "carrierCode": "6X",
                                    "number": "8702",
                                    "aircraft": {
                                        "code": "744"
                                    },
                                    "operating": {
                                        "carrierCode": "6X"
                                    },
                                    "duration": "PT3H",
                                    "id": "2",
                                    "numberOfStops": 0,
                                    "blacklistedInEU": false
                                }
                            ]
                        },
                        {
                            "duration": "PT9H",
                            "segments": [
                                {
                                    "departure": {
                                        "iataCode": "BKK",
                                       "at": "2021-12-08T19:10:00"
                                    },
                                    "arrival": {
                                        "iataCode": "SYD",
                                        "at": "2021-12-09T08:10:00"
                                    },
                                    "carrierCode": "6X",
                                    "number": "1909",
                                    "aircraft": {
                                        "code": "744"
                                    },
                                    "operating": {
                                        "carrierCode": "6X"
                                    },
                                    "duration": "PT9H",
                                    "id": "7",
                                    "numberOfStops": 0,
                                    "blacklistedInEU": false
                                }
                            ]
                        }
                    ],
                    "price": {
                        "currency": "EUR",
                        "total": "5183.92",
                        "base": "4696.00",
                        "fees": [
                            {
                                "amount": "0.00",
                                "type": "SUPPLIER"
                            },
                            {
                                "amount": "0.00",
                                "type": "TICKETING"
                            }
                        ],
                        "grandTotal": "5183.92"
                   },
                    "pricingOptions": {
                        "fareType": [
                            "PUBLISHED"
                        ],
                        "includedCheckedBagsOnly": true
                    },
                    "validatingAirlineCodes": [
                        "6X"
                    ],
                    "travelerPricings": [
                        {
                            "travelerId": "1",
                            "fareOption": "STANDARD",
                            "travelerType": "ADULT",
                            "price": {
                                "currency": "EUR",
                                "total": "2591.96",
                                "base": "2348.00"
                            },
                            "fareDetailsBySegment": [
                                {
                                    "segmentId": "1",
                                    "cabin": "ECONOMY",
                                    "fareBasis": "K6XDWTST",
                                    "class": "K",
                                    "includedCheckedBags": {
                                        "quantity": 9
                                    }
                                },
                                {
                                    "segmentId": "2",
                                    "cabin": "ECONOMY",
                                    "fareBasis": "K6XDWTST",
                                    "class": "K",
                                    "includedCheckedBags": {
                                        "quantity": 9
                                    }
                                },
                                {
                                    "segmentId": "7",
                                    "cabin": "ECONOMY",
                                    "fareBasis": "K6XDWTST",
                                    "class": "K",
                                    "includedCheckedBags": {
                                        "quantity": 9
                                    }
                                }
                            ]
                        },
                        {
                            "travelerId": "2",
                            "fareOption": "STANDARD",
                            "travelerType": "ADULT",
                            "price": {
                                "currency": "EUR",
                                "total": "2591.96",
                                "base": "2348.00"
                            },
                            "fareDetailsBySegment": [
                                {
                                    "segmentId": "1",
                                    "cabin": "ECONOMY",
                                    "fareBasis": "K6XDWTST",
                                    "class": "K",
                                    "includedCheckedBags": {
                                        "quantity": 9
                                    }
                                },
                                {
                                    "segmentId": "2",
                                    "cabin": "ECONOMY",
                                    "fareBasis": "K6XDWTST",
                                    "class": "K",
                                    "includedCheckedBags": {
                                        "quantity": 9
                                    }
                                },
                                {
                                    "segmentId": "7",
                                    "cabin": "ECONOMY",
                                    "fareBasis": "K6XDWTST",
                                    "class": "K",
                                    "includedCheckedBags": {
                                        "quantity": 9
                                    }
                                }
                            ]
                        }
                    ]
                }

        export default req;