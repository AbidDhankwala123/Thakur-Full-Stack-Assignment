const eventsData = [
    {
        "id": 1,
        "title": "Tech Conference 2024",
        "event_date": "2024-02-18",
        "location": "San Francisco, CA",
        "speakers": [
            {
                "name": "John Doe",
                "designation": "AI Researcher",
                "company": "TechCorp"
            },
            {
                "name": "Jane Smith",
                "designation": "Cloud Architect",
                "company": "CloudX"
            }
        ]
    },
    {
        "id": 2,
        "title": "Startup Pitch Night",
        "event_date": "2024-04-10",
        "location": "New York, NY",
        "speakers": [
            {
                "name": "Mark Cuban",
                "designation": "Investor",
                "company": "Shark Ventures"
            },
            {
                "name": "Elena Garcia",
                "designation": "Angel Investor",
                "company": "Angel Funders"
            }
        ]
    },
    {
        "id": 3,
        "title": "Cybersecurity Summit",
        "event_date": "2024-05-25",
        "location": "London, UK",
        "speakers": [
            {
                "name": "Alice Brown",
                "designation": "Security Analyst",
                "company": "CyberSafe"
            },
            {
                "name": "Bob Green",
                "designation": "CTO",
                "company": "SecureTech"
            }
        ]
    },
    {
        "id": 4,
        "title": "Blockchain Revolution",
        "event_date": "2024-06-15",
        "location": "Singapore",
        "speakers": [
            {
                "name": "Vitalik Buterin",
                "designation": "Co-Founder",
                "company": "Ethereum"
            },
            {
                "name": "Changpeng Zhao",
                "designation": "CEO",
                "company": "Binance"
            }
        ]
    },
    {
        "id": 5,
        "title": "Data Science Bootcamp",
        "event_date": "2024-07-20",
        "location": "Berlin, Germany",
        "speakers": [
            {
                "name": "Andrew Ng",
                "designation": "Professor",
                "company": "DeepLearning.AI"
            },
            {
                "name": "Sebastian Thrun",
                "designation": "Founder",
                "company": "Udacity"
            }
        ]
    },
    {
        "id": 6,
        "title": "AI & ML Expo",
        "event_date": "2024-08-12",
        "location": "Tokyo, Japan",
        "speakers": [
            {
                "name": "Geoffrey Hinton",
                "designation": "Researcher",
                "company": "Google AI"
            },
            {
                "name": "Yann LeCun",
                "designation": "Chief AI Scientist",
                "company": "Meta"
            }
        ]
    },
    {
        "id": 7,
        "title": "Cloud Computing Summit",
        "event_date": "2024-09-05",
        "location": "Seattle, USA",
        "speakers": [
            {
                "name": "Satya Nadella",
                "designation": "CEO",
                "company": "Microsoft"
            },
            {
                "name": "Diane Greene",
                "designation": "Co-Founder",
                "company": "VMware"
            }
        ]
    },
    {
        "id": 8,
        "title": "Green Tech Innovations",
        "event_date": "2024-10-14",
        "location": "Oslo, Norway",
        "speakers": [
            {
                "name": "Elon Musk",
                "designation": "CEO",
                "company": "Tesla"
            },
            {
                "name": "Bill Gates",
                "designation": "Philanthropist",
                "company": "Breakthrough Energy"
            }
        ]
    },
    {
        "id": 9,
        "title": "Quantum Computing Symposium",
        "event_date": "2024-11-22",
        "location": "Zurich, Switzerland",
        "speakers": [
            {
                "name": "John Martinis",
                "designation": "Professor",
                "company": "UC Santa Barbara"
            },
            {
                "name": "Michelle Simmons",
                "designation": "Quantum Physicist",
                "company": "Silicon Quantum Computing"
            }
        ]
    },
    {
        "id": 10,
        "title": "Autonomous Vehicles Conference",
        "event_date": "2024-12-03",
        "location": "Los Angeles, CA",
        "speakers": [
            {
                "name": "Chris Urmson",
                "designation": "CEO",
                "company": "Aurora"
            },
            {
                "name": "Amnon Shashua",
                "designation": "CEO",
                "company": "Mobileye"
            }
        ]
    },
    {
        "id": 11,
        "title": "FinTech World Forum",
        "event_date": "2025-01-17",
        "location": "Dubai, UAE",
        "speakers": [
            {
                "name": "Brian Armstrong",
                "designation": "CEO",
                "company": "Coinbase"
            },
            {
                "name": "Kristalina Georgieva",
                "designation": "Managing Director",
                "company": "IMF"
            }
        ]
    },
    {
        "id": 12,
        "title": "Cyber Resilience Summit",
        "event_date": "2025-02-28",
        "location": "Brussels, Belgium",
        "speakers": [
            {
                "name": "Kevin Mitnick",
                "designation": "Security Consultant",
                "company": "Mitnick Security"
            },
            {
                "name": "Bruce Schneier",
                "designation": "Cybersecurity Expert",
                "company": "Harvard Kennedy School"
            }
        ]
    },
    {
        "id": 13,
        "title": "Metaverse & XR Forum",
        "event_date": "2025-03-15",
        "location": "Seoul, South Korea",
        "speakers": [
            {
                "name": "John Carmack",
                "designation": "VR Pioneer",
                "company": "Oculus"
            },
            {
                "name": "Palmer Luckey",
                "designation": "Founder",
                "company": "Anduril Industries"
            }
        ]
    },
    {
        "id": 14,
        "title": "BioTech Breakthroughs",
        "event_date": "2025-04-07",
        "location": "Boston, USA",
        "speakers": [
            {
                "name": "Jennifer Doudna",
                "designation": "Biochemist",
                "company": "UC Berkeley"
            },
            {
                "name": "Craig Venter",
                "designation": "Geneticist",
                "company": "Human Longevity Inc."
            }
        ]
    },
    {
        "id": 15,
        "title": "Space Exploration Summit",
        "event_date": "2025-05-19",
        "location": "Houston, USA",
        "speakers": [
            {
                "name": "Jim Bridenstine",
                "designation": "Former Administrator",
                "company": "NASA"
            },
            {
                "name": "Gwynne Shotwell",
                "designation": "President",
                "company": "SpaceX"
            }
        ]
    },
    {
        "id": 16,
        "title": "Future of Work Forum",
        "event_date": "2025-06-30",
        "location": "Toronto, Canada",
        "speakers": [
            {
                "name": "Daniel Pink",
                "designation": "Author",
                "company": "Drive"
            },
            {
                "name": "Susan Wojcicki",
                "designation": "Former CEO",
                "company": "YouTube"
            }
        ]
    }
]

module.exports = eventsData