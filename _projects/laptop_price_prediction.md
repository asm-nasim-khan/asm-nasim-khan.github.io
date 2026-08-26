---
layout: page
title: Laptop Price Prediction
description: Comparative machine learning analysis of regression models for predicting laptop prices from hardware specifications.
importance: 1
category: machine-learning
github: https://github.com/asm-nasim-khan/Laptop-Price-Prediction
---

## Overview

**Laptop Price Prediction** is a machine learning project focused on predicting laptop prices from hardware specifications and comparing the performance of multiple regression algorithms.

The project explores how characteristics such as processor type, RAM, storage, screen resolution, weight, and other hardware features influence laptop pricing.

A major objective was not simply to build one predictive model, but to perform a **comparative analysis of different regression approaches** and identify which method provided the strongest predictive performance.

## Machine Learning Models

Four regression algorithms were evaluated:

- Linear Regression
- K-Nearest Neighbors (KNN)
- Decision Tree Regressor
- Random Forest Regressor

Among the evaluated approaches, **Random Forest Regressor achieved the strongest overall performance** and the highest R² score.

## Data Preprocessing

The project included several preprocessing steps to prepare laptop specification data for machine learning.

These included:

- Merging training and testing datasets
- Handling missing values
- Correcting data inconsistencies
- Converting data types
- Standardizing numerical units
- Preparing categorical and numerical variables for modeling

## Feature Engineering

Several hardware characteristics were extracted or transformed to improve the predictive representation of each laptop.

Features included:

- Processor characteristics
- RAM size
- Storage capacity
- Screen resolution
- Laptop weight
- Pixels Per Inch (PPI)
- Total screen resolution

Categorical variables were encoded using one-hot encoding so they could be used by the regression models.

## Exploratory Data Analysis

Exploratory analysis was performed to better understand the dataset and relationships between laptop characteristics and price.

The analysis included:

- Distribution analysis
- Histograms
- Bar plots
- Feature relationship analysis
- Identification of hardware characteristics associated with laptop pricing

These analyses helped guide feature preparation and model development.

## Model Development

The machine learning workflow used preprocessing pipelines and column transformers to combine data preparation with model training.

The four regression approaches were then trained and compared under a common evaluation framework.

## Evaluation Metrics

Model performance was evaluated using:

- **R² Score**
- **Mean Absolute Error (MAE)**
- **Mean Squared Error (MSE)**
- **Root Mean Squared Error (RMSE)**

These metrics provided complementary perspectives on prediction accuracy and error magnitude.

## Results

The comparative evaluation showed that the **Random Forest Regressor was the best-performing model among the evaluated approaches**, achieving the highest R² score.

The analysis also provided insight into how different hardware specifications contribute to laptop pricing.

## Technology Stack

- **Language:** Python
- **Machine Learning:** Scikit-learn
- **Data Processing:** Pandas, NumPy
- **Visualization:** Matplotlib, Seaborn
- **Development Environment:** Jupyter Notebook

## What I Learned

This project gave me practical experience with the complete machine learning workflow, from preparing raw structured data to evaluating multiple predictive models.

It also helped me understand the importance of feature engineering and model comparison. Different regression algorithms can behave very differently on the same dataset, so selecting an appropriate model requires systematic evaluation rather than relying on a single method.

The project also strengthened my understanding of regression evaluation metrics and how they can be used together to assess predictive performance.

## Links

[View the project on GitHub](https://github.com/asm-nasim-khan/Laptop-Price-Prediction)
