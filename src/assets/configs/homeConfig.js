import React from 'react'
import { FaComputer } from "react-icons/fa6";
import { FaUniversity } from "react-icons/fa";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Sindhu Satish </strong>
        </h1>,
    titles: [
        "A Data Scientist",
        "A Machine Learning Specialist",
        "A Python programmer"
    ],
    about: {
        start: "I am a Data Scientist with 5+ years of experience. I have built over 40 machine learning models and pipelines in production, in the fields of manufacturing, e-commerce, finance and healthcare. " + 
        "My journey as a Data Scientist thus far can be characterized by a penchant for endless learning and experimentation with new datasets and technology. I am also passionate about philosophy, mathematics, statistics, strength training among other things - and I am interested in leveraging my unique experiences, stories  and interests to bring new perspectives to the table." 
        ,
        exit: "I am currently pursuing my Master's in Computer Science at San Jose State University. I am always looking to collaborate with like-minded individuals - feel free to say Hi!"
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Master's in Computer Science",
            company: "San Jose State University",
            descriptionPoints: [
                "Coursework: Topics in AI, Advanced Algorithms, Statistics and Probability.",
                "Instruction Student Assistant under Prof. Maryam Khazaei-Pool (Spring 2025).",
                "Performing research on Machine Learning techniques for medical applications under Prof. Maryam Khazaei-Pool."
            ],
            date: "Aug 2024 - Present",
            icon: <FaUniversity />,
            tags: ["ml", "mlops", "python", "azure", "llm", "automl"]
        },
        {
            id: "work-3",
            title: "Senior Data Scientist",
            company: "ThoughtClan Technologies",
            descriptionPoints: [
                "Implemented and deployed more than 40 machine learning models in the domains of e-commerce, manufacturing, text-to-speech, and sports analytics.",
                "Implemented and deployed end-to-end data and SQL pipelines on Azure that handle 100GB+ data on a daily basis.",
                "Achieved a 6% increase in accuracy of manufacturing KPIs by leveraging historic data for a prominent Indian manufacturing client.",
                "Modeled historic sales data for a local e-commerce client through time series analysis, increasing quarterly revenue by 21%.",
                "Developed a voice sampling model to convert text input into sampled voice audio for Indian accents by collating and processing a custom dataset for a Public Relations client.",
                "Built a plug-and-play Object Detection and Tracking tool for custom datasets, achieving a median accuracy of 87% on test datasets.",
                "Designed and developed the back-end for a secure app-based verification system to combat counterfeit pharmaceuticals in the supply chain using Blockchain technology.",
                "Implemented digital twin architecture for a wind farm, facilitating energy cost prediction and worst-case scenario analysis, including storm and flood simulations using neo4j and time series forecasting.",
                "Led end-to-end project execution - encompassing requirements gathering, coding, deployment, and client interactions, ensuring timely model delivery - for 4 large-scale projects in a time span of 2 years.",
                "Provided valuable feedback to clients to enhance data management practices and assisted with technical decision-making.",
                "Managed database architecture and consistently delivered rapid, effective proof-of-concept demos."
            ],
            date: "Jan 2019 - Jun 2024",
            icon: <FaComputer/>,
            tags: ["ml", "automl", "python", "docker", "redshift", "superset"]
        },
        {
            id: "work-2",
            title: "Postgraduate in Advanced Computational Data Science",
            company: "Indian Institute of Science",
            descriptionPoints: ["Performed research on using Large Language Models for Image Captioning with Prof. Shashikumaar Ganesan's team.", "Coursework: Deep Learning, Natural Language Processing"],
            date: "March 2022 - April 2023",
            icon: <FaUniversity/>,
            tags: ["ml", "powerbi", "deep-learning", "docker", "pbi", "azure"]
        },
        {
            id: "work-1",
            title: "Summer Research Assistant",
            company: "Old Dominion University",
            descriptionPoints: ["Conducted research on the impact of music on the human brain, analyzing diverse music types with MATLAB, and designed and executed experiments to record brain activity.",  
                "Led a team of 3 in developing a Chatbot serving a US-based Real Estate Company. Developed the back-end using Node.js, Google Dialogflow, and MongoDB."],
            date: "June 2018 - August 2018",
            icon: <FaComputer/>,
            tags: ["google-dialogflow", "python", "mongodb", "nodejs", "matlab", "epoc-emotiv"]
        },
        {
            id: "work-0",
            title: "Bachelor's in Computer Science",
            company: "Visvesvaraya Technological University",
            descriptionPoints: ["Coursework: Algorithms, Databases, Object Oriented Programming, Calculus, Discrete Mathematics, Python Programming", "Capstone Project: Built a Disease Prediction Model using MIMIC III dataset. Accuracy: 82%"],
            date: "August 2015 - May 2019",
            icon: <FaUniversity/>,
            tags: ["google-dialogflow", "python", "mongodb", "nodejs", "matlab", "epoc-emotiv"]
        }
    ]
}


export default homeConfig