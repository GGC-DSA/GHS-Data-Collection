# **Data Collection for Green & Healthy Schools (GHS)**

Georgia Gwinnett College

ITEC 4230

Green Team

Version 1
#

# Version and Approvals

**UTORS**

| **Version History** |
 |
 |
 |
| --- | --- | --- | --- |
| **Version #** | **Date** | **Revised By** | **Reason for change** |
| **Version 1** | **Jan 27, 2024** | **Nhat Vu**** Shantel Parrish ****Janett Morales**
 | **We had an initial meeting with the client to clarify the requirements for the system** |
|
 |
 |
 |
 |
|
 |
 |
 |
 |
|
 |
 |
 |
 |

This document has been approved as the official Requirements Document for **Data Collection for Green & Healthy Schools (GHS)****,** and accurately reflects the current understanding of client requirements. Following approval of this document, requirement changes will be governed by the project's change management process, including impact analysis, appropriate reviews and approvals.

| **Document Approvals** |
 |
 |
 |
| --- | --- | --- | --- |
| **Approver Name** | **Project Role** | **Signature/Electronic Approval** | **Date** |
|
 |
 |
 |
 |
|
 |
 |
 |
 |
|
 |
 |
 |
 |
|
 |
 |
 |
 |

# Contents

[Version and Approvals ii](#_Toc157364937)

[Project Details 2](#_Toc157364938)

[Overview 2](#_Toc157364939)

[Document Resources 2](#_Toc157364940)

_[Green Schools Program Assistant Manager Gwinnett County Public Schools 2](#_Toc157364941)_

_[Green Schools Program Manager Gwinnett County Public Schools 2](#_Toc157364942)_

[Glossary of Terms 2](#_Toc157364943)

[Project Overview 3](#_Toc157364944)

_[4.1 Project Overview and Background 3](#_Toc157364945)_

_[4.2 Project Dependencies 3](#_Toc157364946)_

_[4.3 Stakeholders 3](#_Toc157364947)_

[Key Assumptions and Constraints 3](#_Toc157364948)

_[5.1 Key Assumptions and Constraints 3](#_Toc157364949)_

[Use Cases 4](#_Toc157364950)

_[Use Case Diagram 4](#_Toc157364951)_

_[Use Case Narrative 5](#_Toc157364952)_

[TYPES OF REQUIREMENTS 6](#_Toc157364953)

[1.User requirements 6](#_Toc157364954)

[User Authentication and Access Control: 6](#_Toc157364955)

[2.System requirements 7](#_Toc157364956)

[3.Functional requirements 8](#_Toc157364957)

[4.Non-functional requirements - might be more critical than functional ones 8](#_Toc157364958)

[5.Domain requirements 8](#_Toc157364959)

**Project Details**

| **Project Name** | **Data Collection for Green & Healthy Schools (GHS)** |
| --- | --- |
| **Project Type** | _ **New Initiative or Phase I** _ |
| **Project Start Date** | Jan 8, 2024 |
| **Project End Date** | Apr 25, 2024 |
| **Project Sponsor** | Dr. Anca |
| **Primary Driver** | _ **Mandatory or Efficiency** _ |
| **Secondary Driver** |
 |
| **Division** |
 |
| **Project Manager/Dept** |
 |

**Overview**

The purpose of this document is to define the requirements for the development of data collection for GHS. It will be used as the basis for the following activities:

- Creating solution designs
- Developing test plans, test scripts, and test cases
- Determining project completion
- Assessing project success

**Document Resources**

| **Name** | **Business Unit** | **Role** |
| --- | --- | --- |
| Jenna Mobley | [**Gwinnett County Public Schools**](https://www.linkedin.com/company/gwinnett-county-public-schools?trk=public_profile_topcard-current-company)
 |
## Green Schools Program Assistant Manager Gwinnett County Public Schools
 |
| --- | --- | --- |
| Brenda O McDaniel | [**Gwinnett County Public Schools**](https://www.linkedin.com/company/gwinnett-county-public-schools?trk=public_profile_topcard-current-company) |
## Green Schools Program Manager Gwinnett County Public Schools
 |
|
 |
 |
 |
|
 |
 |
 |

**Glossary of Terms**

| **Term/Acronym** | **Definition** |
| --- | --- |
| Green & Healthy Schools (GHS) | The GHS Program is a joint initiative of Gwinnett Clean & Beautiful and GCPS and provides integrated environmental education, incorporating applications of Science AKS, problem-solving, civic skills, and green career pathways. |
| --- | --- |

**Project Overview**

## 4.1 Project Overview and Background

The system will consist of an online form for data collection and a dashboard for visualizing the environmental impact data. The focus will be on assessing the environmental practices, behaviors, and initiatives within each class.

Objectives:

1. Collect Comprehensive Data: Develop an online form that captures detailed information about environmental practices, recycling efforts, composting initiatives, and other relevant activities
2. Simplify Data Collection: Develop an online form that is easy to use and quick to complete, catering to the needs of busy teachers and principals
3. Enable Visualization: Implement a dashboard that allows users to visualize and analyze data at different levels, including district, school, and classroom
4. Facilitate Data-Driven Decision-Making: Provide a platform that enables administrators to make informed decisions based on data
5. Promote Sustainable Practices: Encourage and recognize the adoption of sustainable practices and initiatives among classes and schools

## 4.2 Project Dependencies

System, Client requirements.

## 4.3 Stakeholders

The following comprises the internal and external stakeholders whose requirements are represented by this document:

|
 | **Stakeholders** |
| --- | --- |
| 1. | Jenna Mobley |
| --- | --- |
| 2.
 | Brenda O McDaniel |

**Key Assumptions and Constraints**

## 5.1 Key Assumptions and Constraints

| **#** | **Assumptions** |
| --- | --- |
| 1 | It is assumed that users will have reliable internet access to fill out the online form and access the dashboard |
| 2 | Users are assumed to have basic computer literacy, and any necessary training will be provided to ensure effective usage of the system |
| 3 | It is assumed that the data entered into the system by users is accurate and reflective of the actual environment practices in their respective classes |
| 4 | The system assumes that users will use commonly available devices with standard web browsers to interact with the online form and dashboard |
| **#** | **Constraints** |
| 1 | The system is constrained to be compatible with commonly used web browsers, such as Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge. Compatibility with older browser versions may not be guaranteed |
| 2 | The system is constrained by the need to maintain optimal performance. It should handle a reasonable number of concurrent users without significant degradation in response time |
|
 |
 |
|
 |
 |
|
 |
 |
|
 |
 |

**Use Cases**

## Use Case Diagram
![image](https://github.com/GGC-DSA/GHS-Data-Collection/assets/111990496/ba9ce272-4050-401e-b158-3f5bed03235a)


![](RackMultipart20240129-1-x8f8u3_html_d62a756d0faf9335.png)

## Use Case Narrative

| Use Case ID: | 1 |
| --- | --- |
| Use Case Name: | GHS Database/website |
| Created by: | Janett Morales |
 |
 |
| Date Created: | Jan 27, 2024 | Date Last Updated: |
 |

| Actors: | The actors are the teachers, principals, and program managers |
| --- | --- |
| Description: | The scenario outlines how individuals can utilize a website to interact with the database. Access is permitted upon entering a valid Gwinnett County email and password. Once granted entry, users can navigate to their desired data category for input. Upon saving the data, the dashboard visualization is promptly refreshed to reflect the latest information. |
| Preconditions: | User must have a Gwinnett County email to access the website |
| Postconditions: | The data should save and update the visualization |
| Normal Course: |
1. Open browser
2. Type in web URL
3. Input login information
4. Select category to input data
5. Dashboard updates with new data information
6. Actor saves their latest input
7. Logs out
 |
| Alternative Courses: |
1. Open browser
2. Type in web URL
3. Input login information
4. Filter data by schools
5. Pull reports needed on the data
 |
| Exceptions: |
 |
| Includes: |
 |
| Priority: | High |
| Frequency of Use: | Quarterly |
| Business Rules |
 |
| Special Requirements: |
- Must have a dashboard that visualizes the data of the school
- Can save the new data
- Can access certain categories instead of filling out the whole file
 |
| Assumptions: | None |
| Notes and Issues: | None |
|


Use Case Graphic
 ![](RackMultipart20240129-1-x8f8u3_html_4a7d684faed2cdbf.png)

 |

**TYPES OF REQUIREMENTS**

1. **User requirements**

- User Authentication and Access Control:
  - The system should support secure user authentication for both teachers and principal.
  - Access control mechanisms should be implemented to ensure that only authorized users (teacher and principal) can submit or view data.
- User Dashboard-Friendly Data Submission Form:
  - Design a simple and intuitive data submission form that can be easily filled out by both students and teachers.
  - Include fields for photos, videos, stories, and project details, such as the number of participating students.
- Data Validation and Error Handling:
  - Implement validation checks on the data submission form to ensure accurate and complete information.
  - Provide error messages and prompts for users to correct any submission errors.
- Searchable Database:
  - Develop a searchable database to store all submitted projects, including photos, videos, and stories.
  - Enable teachers to search and retrieve specific projects based on criteria such as school name, project type, or date.
- Dashboard Interface:
  - Design an intuitive and user-friendly dashboard for teachers to view and manage submitted projects.
  - Include filters and sorting options to facilitate easy navigation and quick access to desired information.
- Reporting and Analytics:
  - Incorporate reporting tools to generate analytics and summaries of submitted projects.
  - Provide visualizations such as charts or graphs to showcase project trends and participation levels.
- Data Security and Privacy:
  - Implement robust data security measures to protect the confidentiality and integrity of submitted information.
  - Ensure compliance with relevant data protection regulations.
- Scalability:
  - Develop the system to be scalable, accommodating an increasing number of submissions and users as the project expands.
- Feedback:
  - Implement a feedback mechanism for users to provide suggestions or report issues with the data submission process or dashboard functionality.

1. **System requirements**

- Hardware Requirements:
  - Web browser Server: A dedicated server with sufficient processing power, storage capacity, and memory to handle the expected volume of data and user requests.
  - Storage: Adequate storage space for storing multimedia files, project data, and system backups.
- Software Requirements:
  - Operating System: The server should run a stable and secure operating system, compatible with the chosen development and database platforms.
  - Database Management System: Implement a relational database management system (RDBMS) to store and manage project data efficiently.
- Scalability and Performance:
  - Design the system architecture to be scalable, allowing for increased user and data loads.
  - Optimize database queries and application code for performance to ensure quick response times.
- Backup and Recovery:
  - Implement a regular backup strategy for both the application data and the database.
  - Develop a robust disaster recovery plan to minimize downtime and data loss in the event of system failures.
- User Support:
  - Provide a support system for users to report issues and ask questions.
  - Establish a mechanism for feedback collection to gather user insights for continuous improvement.

1. **Functional requirements**

  - Teacher/Principle can submit the stories, and Numerical and text data on the dashboard.
  - All the submitted projects can be searched and seen.
  - The data submitted needs to be stored in a searchable database from where teachers can pull the desired information.
  - The simple form for submitting data needs to be easy to complete.


1. **Non-functional requirements - might be more critical than functional ones**

  - Size of the data, story can be problem to save the data.
  - Getting a huge memory to save all the data.
  - The length of the numerical and text should be limited.
  - Time constraints, how long it takes to upload the data, stories, numerical text. How long does it take to retrieve the data.
  - Give the result for that information and send it to the teacher or Principle.
  - Language should be English only.


1. **Domain requirements**

  - Storage capacity.
  - Platform or service to store the data (AWM, Google Drive, One Drive, etc.

iii
