# ClinicalSage: Mistral Fine-tuning for Efficient Clinical Documentation

## Index

1. [Overview](#overview)
2. [Installation and Setup](#installation-and-setup)
3. [Loading and Preparing Data](#loading-and-preparing-data)
4. [Alpaca Prompt Template Definition](#alpaca-prompt-template-definition)
5. [Generating Training and Evaluation Data](#generating-training-and-evaluation-data)
6. [Connecting to Mistral and Uploading Data](#connecting-to-mistral-and-uploading-data)
7. [Initiating Model Training with Mistral](#initiating-model-training-with-mistral)
8. [Retrieving Job Details and Initiating Chat Interaction](#retrieving-job-details-and-initiating-chat-interaction)
9. [Dataset](#dataset)

---

## Overview <a name="overview"></a>

Welcome to our Mistral fine-tuning journey! As part of the Mistral FT Hackathon, we've developed ClinicalSage, an AI-based system designed to alleviate clinicians' documentation burden. Leveraging a quantized fine-tuned Mistral7B 32k Tokens (open-mistral-7b) model, ClinicalSage offers streamlined medical note creation with enhanced accuracy and efficiency. The above notebook can easily be tested on Google Colab. We added a notebook regarding how it would have been highly verbose and technically could be difficult if we did it from scratch using QLoRa Fine-tuning methods.

Notebook from scratch -> Clinical Fine Tune Mistral

Notebook using API -> Mistral FT Hack

## Installation and Setup <a name="installation-and-setup"></a>

Ensure you have all the necessary libraries installed:

- `mistralai`
- `pandas`
- `seaborn`
- `matplotlib`
- `google-colab`

## Loading and Preparing Data <a name="loading-and-preparing-data"></a>

We load and prepare the dataset for Mistral fine-tuning, ensuring balanced training and evaluation subsets.

## Alpaca Prompt Template Definition <a name="alpaca-prompt-template-definition"></a>

Define the Alpaca prompt template for structured input to Mistral.

## Generating Training and Evaluation Data <a name="generating-training-and-evaluation-data"></a>

Format training and evaluation data with specific instructions and responses, saved into JSONL files.

## Connecting to Mistral and Uploading Data <a name="connecting-to-mistral-and-uploading-data"></a>

Establish a connection to Mistral using API keys and upload prepared JSONL files for training and evaluation data.

## Initiating Model Training with Mistral <a name="initiating-model-training-with-mistral"></a>

Start a job to fine-tune the Mistral model (`open-mistral-7b`) using uploaded data files, specifying hyperparameters and integrating with Weights & Biases (WandB) for tracking.

## Retrieving Job Details and Initiating Chat Interaction <a name="retrieving-job-details-and-initiating-chat-interaction"></a>

Retrieve job details, select sample instructions from evaluation data, and interact with the fine-tuned model for chat responses.

WandB Fine-tuning Metrics -

![Screenshot from 2024-06-30 23-24-27](https://github.com/Duolicht/Mistral-FT-Hack/assets/174272054/eb02548f-1ab7-417c-87f3-2a0c497db285)

## Dataset <a name="dataset"></a>

Explore the dataset used for fine-tuning ClinicalSage:

- [Asclepius-Synthetic-Clinical-Notes](https://huggingface.co/datasets/starmpcc/Asclepius-Synthetic-Clinical-Notes)
