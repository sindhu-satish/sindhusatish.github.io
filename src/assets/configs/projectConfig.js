import {BiGitRepoForked} from "react-icons/bi";
import {AiFillGithub, AiFillEye} from "react-icons/ai";
import {ImBook} from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "Retail Price Optimization",
        links: [
            {
                name: "repo",
                url: "https://github.com/sindhu-satish/Sklearn-genetic-opt",
                icon: <AiFillGithub/>,
            },
            {
                name: "fork",
                url: "https://github.com/sindhu-satish/Sklearn-genetic-opt/fork",
                icon: <BiGitRepoForked/>,
            },
            {
                name: "subscription",
                url: "https://github.com/sindhu-satish/Sklearn-genetic-opt/subscription",
                icon: <AiFillEye/>,
            },
            {
                name: "docs",
                url: "https://sklearn-genetic-opt.readthedocs.io/en/stable/",
                icon: <ImBook/>,
            }
        ],
        image: sklearnGenetic,
        description: "scikit-learn models hyperparameters tuning and feature selection, using evolutionary algorithms.",
        target: "_blank"
    }
]

export default projectConfig