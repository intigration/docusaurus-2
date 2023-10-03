---
title: MI Core Roadmap
---

**Updated: August 15, 2021**

The following represents a high level overview of our planned efforts in the
next months. If you think something should be reprioritized, you can create an
[issue](https://code.siemens.com/micore/dev-docs/-/issues) or start a discussion
on [Yammer](https://web.yammer.com/main/groups/eyJfdHlwZSI6Ikdyb3VwIiwiaWQiOiIxNzc3MjgwOSJ9/new). Of course we'd highly
appriciate if you [contribute](https://code.siemens.com/micore/dev-docs/-/blob/master/docs/micore-dev-roadmap.md) your own content to this page!

## FY 2022

**Details will be defined and outlined starting October 2021**

-   Improve (end) customer value
    -   Extend the footprint in existing Siemens product ecosystems
    -   Extend and improve AI offerings and services
    -   Support (regional) business growth
-   R&D efforts
    -   Lower AI development costs through reuse and common best practices
    -   Improve data sharing and efficiency in model training
    -   Gather and streamline R&D needs from the businesses
-   Community building
    -   Continue Inner-source strategy and quality concept
    -   Extend cross-RDA/BU asset development
    -   Train & upskill employees
-   Assetbase
    -   Use code.siemens.com/ai next a top-level group to host high-quality MI Core assets

## FY 2021

### Q4

-   Assetbase:

    -   Further improvements of usability and shown features based on user feedback

-   MI Core Extensions:
    -   AI dev template extension with contribution from T RDA BAM DAS-AT
    -   MI Core library for HW acceleration on IE|P (industrial edge perception)
    -   Data2Model update with contributions from Bronwfield project (T RDA BAM ORD-DE)
    -   Autotrain contributions by T RDA BAM LSY-DE
    -   SALT IE|P connector from T RDA BAM IBI-DE
    -   iPAE / SALT integration with contributions from T RDA BAM ADM-IN and T RDA BAM IBI-DE

### Q3

-   Assetbase:

    -   Integrate use case tagging from Assetgraph and have the use case references displayed per asset
    -   Migration of assets to assetgraph (new assetbase UI) completed

-   MI Core Extensions:

    -   Investigate miVision labeling contribution from T RDA SDT SMV-US
    -   Brayn contributions by T RDA BAM LSY-DE
    -   Data2Model: first version by T RDA BAM ORD-DE (aiming for quality level 2)

-   MLHub:

    -   Log aggregation (for MLHub admins)
    -   Extension of API catalog web UI
    -   Support for API service runtime secrets

-   AI Development Templates:
    -   `template-python-mlapi`: Migration of template from [Connexion](https://github.com/zalando/connexion) to [`openapi-core`](https://github.com/p1c2u/openapi-core)
    -   Assessment of [Copier](https://github.com/copier-org/copier) as a better alternative to [Cookiecutter](https://github.com/cookiecutter/cookiecutter)

### Q2

-   Assetbase:

    -   Assetbase UI overhaul
    -   Full integration of assetgraph-based asset information
    -   Ongoing task: migrate assets from assetbase v1 to assetbase v2

-   MI Core Extensions:

    -   Data2Model (by T RDA BAM ORD-DE): development start

    -   MLHub:
    -   Migration from Docker Swarm to Kubernetes/EKS (continued)
    -   Secrets encryption web UI
    -   Basic API catalog web UI

    -   AI Development Templates:
    -   Automated Python package releases via CI/CD to GitLab's package registry
    -   `template-python-mlapi`: Native support for private package dependencies in code.siemens.com package registry when building Docker image

### Q1

-   Tutorial:
    -   Creating an MLHub service End2end
    -   AI.Store: Updated Tutorial
-   Assetbase:
    -   Assetgraph integration
-   MLHub:
    -   Migration from Docker Swarm to Kubernetes/EKS
    -   Onboarding of Quickstarter project "XaaS" to "MLHub Playground"

## FY 2020

### Q4

-   tispy: Tutorial on fitting trustworthy AI models within tispy
-   Asset quality concept:

    -   Update other levels after feedback from users

-   Website: "PM view" on MI Core assets
    -   Improve UX on website to allow project managers finding the information more easily
    -   General: Provide general documentation on MI Core assets and how to integrate them into projects
    -   Evangelists: Add/update information to better inform project managers
-   tispy: Tutorial for integrating SALT in tispy workflow
-   Asset quality concept:
    -   Add contents for testing reference
    -   Add contents for Design, Code, SCA, Metrics
-   AI development templates: Consolidate documenation and improve tutorials
-   Coding best practices:

    -   Consolidate information on the page and connect the different topics
    -   Create tutorial with code examples

-   Website: Release of developerbase version 0.2
    -   Landing page: Restructured to allow easy access to most important information
    -   Docs section: sidebar restructured for easier understanding, , added several pages of content (asset docs, coding best practices docs, etc.)
-   Assetbase: Include repositories outside MI Core group
-   Asset quality concept: General overhaul and update
    -   Overall documentation update
    -   Reference to OSS Listing Script to list OSS for Python projects automatically
-   Website: Add steps to contribute own assets to the MI Core
-   MLHub: Add tutorials for service development of different use cases
-   AI.Store: Add tutorials for service development of different use cases
