
import C from "../assets/icons/C.svg"
import git from "../assets/icons/git.svg"
import github from "../assets/icons/github.svg"
import googlecloudapi from "../assets/icons/googlecloudapi.svg"
import java from "../assets/icons/java.svg"
import javascript from "../assets/icons/javascript.svg"
import matplotlib from "../assets/icons/matplotlib.svg"
import mongodb from "../assets/icons/mongodb.svg"
import nodejs from "../assets/icons/nodejs.svg"
import pandas from "../assets/icons/pandas.svg"
import python from "../assets/icons/python.svg"
import R from "../assets/icons/R.svg"
import react from "../assets/icons/react.svg"
import tailwindcss from "../assets/icons/tailwindcss.svg"
import tensorflow from "../assets/icons/tensorflow.svg"
import threejs from "../assets/icons/threejs.svg"
import backpack_buddies from "../assets/icons/backpack_buddies.svg"
import cstutor from "../assets/icons/cstutor.svg"
import deli from "../assets/icons/deli.svg"
import math from "../assets/icons/math.svg"
import merci from "../assets/icons/merci.svg"
import robotics from "../assets/icons/robotics.svg"
import ski from "../assets/icons/ski.svg"
import freegeek from "../assets/icons/freegeek.svg"
import typescript from "../assets/icons/typescript.svg"
import pytorch from '../assets/icons/pytorch.svg'
import firebase from '../assets/icons/firebase.svg'
import aws from '../assets/icons/aws.svg'
import swift from '../assets/icons/swift.svg'
import huggingface from '../assets/icons/huggingface.svg'
import postgresql from '../assets/icons/postgresql.svg'
import fastapi from '../assets/icons/fastapi.svg'


export const languages = [
    {
        imageUrl: python,
        name: "Python",
        type: "fullstack"
    }, 
    {
        imageUrl: java,
        name: "Python",
        type: "fullstack"
    }, 
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "frontend"
    }, 
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "frontend"
    },
    {
        imageUrl: R,
        name: "R",
        type: "data",
    },
    {
        imageUrl: C,
        name: "C",
        type: "ServerSide"
    },
    {
        imageUrl: swift,
        name: "Swift",
        type: "frontend"
    }
]


export const skills = [
    {
        imageUrl: github,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: git,
        name: "git",
        type: "Version Control",
    },
    {
        imageUrl: pandas,
        name: "Pandas",
        type: "python",
    },
    {
        imageUrl: matplotlib,
        name: "",
        type: "",
    },
    {
        imageUrl: tensorflow,
        name: "TensorFlow",
        type: "ML",
    }, 
    {
        imageUrl: googlecloudapi,
        name: "GoogleCloudAPI",
        type: "API",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Threejs",
        type: "JavaScript",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Database",
    },
    {
        imageUrl: pytorch,
        name: "PyTorch",
        type: "Python",
    },
    {
        imageUrl: firebase,
        name: "Threejs",
        type: "JavaScript",
    },
    {
        imageUrl: fastapi,
        name: "Threejs",
        type: "JavaScript",
    },
    {
        imageUrl: aws,
        name: "Threejs",
        type: "JavaScript",
    },
    {
        imageUrl: huggingface,
        name: "Threejs",
        type: "JavaScript",
    },
];

export const volunteering = [
    {   
        icon: merci,
        company_name: "Merci Charity",
        iconBg: "#ffffff",
        points: [
            "Lead and organized multiple fundraising events such as paid-entry esports tournaments and food stands",
            "Participated in monthly food delivery trips to support hospital workers",
            "Collected a selected of notes and gifts for healthcare workers during the height of the COVID-19 pandemic",
        ],
    },
    {   
        icon: backpack_buddies,
        company_name: "Backpack Buddies",
        iconBg: "#C9ECFC",
        points: [
            "Pack bags of food from donars every week to prepare for delivery to schools with food-insecure children",
            "Participate in fundraisers and donation events",
            "Make sandwhiches and put together food bags to hand out in the downtown east side of Vancouver",
        ],
    },
    {   
        icon:freegeek,
        company_name: "FreeGeek",
        iconBg: "#b7e4c7",
        points: [
            "Disassemble computer, keyboard, and mouses to recycle parts",
            "Test the functionality of different computer parts to determine which parts to recylce and which parts to throw away",
            "Build computers with the parts that are determined still functional to sell for a low price to those who can't afford regular technology",
        ],
    }
];

export const experiences = [
    {   
        icon: cstutor,
        title: "Computer Science Tutor",
        company_name: "Freelance",
        iconBg: "#accbe1",
        points: [
            "Tutoring students taking first year university computer science classes.",
            "Currently tutoring three students have tutored 5 in total.",
            "Classes include: CSC108 and STA130 (University of Toronto), COMPSCI101 (Duke University), and CISC121 (Queens University)",
        ],
    },
    {   
        icon: deli,
        title: "Deli Clerk",
        company_name: "Loblaws",
        iconBg: "#fbc3bc",
        points: [
            "Worked 24-28 hour work weeks part-time.",
            "In charge of serving customers, stocking shelves, cleaning slicers and counters, and making charcuterie boards.",
        ],
    },
    {   
        icon: math,
        title: "Math Tutor",
        company_name: "Freelance",
        iconBg: "#D3D3D3",
        points: [
            "Tutored pre-calculus to highschool kids",
            "Tutored two students on Zoom from China",
            "Used half of the earnings as donations to Merci Charity",
        ],
    },
    {   
        icon: ski,
        title: "Ski Instructor",
        company_name: "Cypress Mountain",
        iconBg: "#C9ECFC",
        points: [
            "Conducted individual ski lessons to beginners.",
            "Teach proper skiing techniques, including stance, balance, turning, stopping, and speed control.",
        ],
    },
    {   
        icon: robotics,
        title: "Circuits and Robotics Class Teacher",
        company_name: "Sager Education",
        iconBg: "#D3D3D3",
        points: [
            "Lead a circuits and robotics class for elementary school students.",
            "Facilitate hands-on learning experiences using robotics kits, software, and tools, ensuring all participants have the opportunity to build, program, and test robots.",
            "Taught lessons about circuit components and circuit systems.",
            "Assisted in circuit kit construction to help them build complete circuit projects such as a mini-radio.",
        ],
    },
];

// export const socialLinks = [
//     {
//         name: 'Contact',
//         iconUrl: contact,
//         link: '/contact',
//     },
//     {
//         name: 'GitHub',
//         iconUrl: github,
//         link: 'https://github.com/YourGitHubUsername',
//     },
//     {
//         name: 'LinkedIn',
//         iconUrl: linkedin,
//         link: 'https://www.linkedin.com/in/YourLinkedInUsername',
//     }
// ];

export const projects = [
    {
        name: 'Portfolio Website',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/tkwang312/portfolio',
    },
    {
        name: 'mental health chatbot',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/tkwang312/mental-health-AI-chatbot',
    },
    {
        theme: 'btn-back-green',
        name: 'North Shore Mountains Review',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/tkwang312/North-Shore-Ski-Mountain-Website',
    },
    {
        name: 'PetPal',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/https://github.com/wangtonykai1/CSC207-Project',
    },
];