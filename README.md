# AI Clinical Documentation System

Welcome to our project, an AI-based documentation system designed to address the challenges faced by clinicians in medical note creation. This repository houses the components of ClinicalSage, including notebooks for model development, a frontend for user interaction, and a backend for data processing and model deployment.

## Repository Structure

- **Notebook Folder:** Contains Jupyter notebooks and scripts for fine-tuning the Mistral7B model and handling dataset preparation.
- **Frontend Folder:** Includes code for the web-based interface allowing users to interact with ClinicalSage.
- **Backend Folder:** Houses backend scripts for handling data processing, model inference, and API integrations.

## Problem Statement

In response to the pressing issue of clinicians' overwhelming documentation burden and the need for a more efficient and secure clinical documentation solution, ClinicalSage leverages the power of a Quantized fine-tuned Mistral7B 32k Tokens (open-mistral-7b) supported Large Language Model. Our solution offers:

- **Efficient EHR Creation:** Automates the creation of Electronic Health Records (EHRs) with enhanced accuracy.
- **Data Security:** Prioritizes data security and regulatory compliance, adhering to healthcare regulations such as HIPAA.
- **Multimodal Interaction:** Provides multilingual text-to-speech and Whisper large V3 speech-to-text capabilities for global accessibility.
- **Scalability:** Uses compact generative AI models for scalable deployment.
- **Explainability:** Embeds an explainability model to enhance user understanding of medical summarizations.

Our system ensures that generated notes are not only accurate but also contextually aligned with each patient encounter.

**Dataset Used:** [Asclepius-Synthetic-Clinical-Notes](https://huggingface.co/datasets/starmpcc/Asclepius-Synthetic-Clinical-Notes)
