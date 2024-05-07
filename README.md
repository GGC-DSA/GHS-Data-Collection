# Data Collection for Green and Healthy Schools

<img src="https://imgur.com/zdw7l4F.png" width="800"/>

## Project Description

Students have engineered a user-friendly web interface, facilitating educators in seamlessly inputting data regarding their school's environmental footprint and initiatives. This comprehensive database encompasses narratives, photographs, videos, and participation records. It serves as a centralized repository for information on energy utilization, waste handling, water consumption, carbon footprint, and an array of eco-friendly endeavors such as recycling programs, composting initiatives, sustainability campaigns, and outdoor educational ventures. Furthermore, a dynamic dashboard has been integrated to present statistical analyses, enabling accurate presentation to the district board and stakeholders.

### Project Demo Link

Here is the link to the [demo video](https://ggcedu-my.sharepoint.com/:v:/g/personal/nvu3_ggc_edu/Ee7AYmnrex9JuMssZKyu72EBXwgty1Rot006zFbUj7GvaA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D&e=5iUWHr)

### Project Website

Here is the link to the [website](https://sites.google.com/view/ghsdatacollection-com/home)

### Project Notebook

You can find our code for the notebook of [overall project analysis](code/Overall_Data.py) and [food waste analysis](code/Food_Waste_Data.py). We did not post the ipynb files as it previews personal information.

For access to the dataset or inquiries regarding data usage, please contact one of the team members or Dr. Anca Doloc-Mihu.

### Project Poster

[Marq Poster](https://app.marq.com/documents/edit/e5e7d160-2679-435f-aaf7-2550ec5ca1a6?shared=true)

### Final Report

You can find our final report [here](docs-SPR2024/Final_Report_-_GHS.pdf).

## Spring 2024 Team 

**[Janett Morales](https://github.com/JanettM6)**
1. *Team Manager👍*
2. *Visualization⚜️*

<img src="https://imgur.com/ZvAfbKU.png" width ="200"/>
 
**[Shantel Parrish](https://github.com/sparrish1)**
1. *Data Modeler💻*
2. *Client Liaison😎*

<img src="https://i.imgur.com/Jnxglzh.png" width="200"/>

**[Nhat Vu](https://github.com/nvu3)**
1. *Data Analyzer💻*
2. *Project Documentation📖*

<img src="https://github.com/GGC-DSA/GHS-Data-Collection/assets/111990496/ea8d32a1-7151-4b64-9ad5-7bc8f0018f67" width="200"/>

### Presentation

STaRS - Georgia Gwinnett College - April 11, 2024

CREATE Symposium - Georgia Gwinnett College - April 25, 2024

### Project Usage
1. **Educators**:
   Teachers can use the web interface to submit data regarding their school's environmental initiatives and activities on a quarterly basis. They can access the dynamic dashboard to view statistical analyses and trends related to environmental education activities in their school and compare them with other schools. Educators can utilize the insights generated from the project to inform curriculum development, identify areas for improvement, and track progress towards environmental sustainability goals.
2. **Administrators**:
   School administrators and district officials can access the centralized database to review comprehensive information on energy utilization, waste handling, water consumption, and other eco-friendly endeavors across schools. They can use the dashboard to generate reports and presentations for district board meetings, stakeholders, and policymakers to advocate for funding and support for environmental initiatives. Administrators can identify schools with successful composting practices or lacking initiatives despite having outdoor spaces, allowing targeted interventions and resource allocation.
3. **Future Research**:
   Researchers and academics can utilize the project's dataset and findings as a valuable resource for further analysis and research on environmental education, sustainability practices, and school-based interventions. The project's open-access nature and comprehensive dataset make it a valuable resource for longitudinal studies, comparative analyses, and interdisciplinary research collaborations.

## Spring 2024

### Project Status

- **Real-time Database Updates**: The project successfully utilizes Firebase as a backend database, enabling real-time updates. Any changes made to the database reflect immediately in the system.
- **Web-Based Questionnaire**: The web-based questionnaire feature is fully functional, allowing users to input data seamlessly. Responses are stored in the Firebase database in real-time.
- **Dashboard Integration**: A dashboard interface is implemented, providing a visual representation of the data stored in the Firebase database. The dashboard refreshes every 15 minutes to ensure up-to-date information.

### Datasets

The dataset used in this project contains sensitive personal information and is therefore not publicly available. We are committed to protecting the privacy and confidentiality of individuals whose data is included in the dataset.

For access to the dataset or inquiries regarding data usage, please contact one of the team members or Dr. Anca Doloc-Mihu.

### Main Methods

1. **Data Processing**: Preprocessed the raw data collected from schools to prepare it for analysis
   - Removed any duplicate or null values to ensure data quality
   - Converted categorical variables into numerical formats
   - Other necessary operations
2. **Exploratory Data Analysis**: Conducted exploratory analysis to gain insights into the relationships and patterns within the dataset
   - Created plots and charts to visualize distributions, correlations, and trends in the data
   - Calculated summary statistics to describe the characteristics of the data
3. **Correlation Analysis**: Investigated correlations between different variables to identify potential relationships and dependencies
   - Calculated correlation coefficients to measure the strength and direction of linear relationships between pairs of variables
   - Generated a correlation matrix to visualize the correlations between multiple variables simultaneously
4. **Regression Analysis**: Conducted regression analysis to analyze the relationship between student enrollment, staff numbers, and environmental education activities
   - Fitted linear regression models to explore the association between enrollment, staff numbers, and environmental education activities
   - Evaluated model assumptions and checked for outliers, multicollinearity, and heteroscedasticity
5. **Contingency Table Analysis**: Used contingency tables to analyze the relationship between outdoor spaces and composting practices in schools
   - Applied chi-square tests to determine if there was a significant association between outdoor spaces and composting practices
   - Examined the distribution of schools across categories of outdoor spaces and composting practices to identify patterns and trends

### Results

**Result 1**:
The graph shows that fourth graders consume the highest amount of fruits and vegetables compared to other grades, indicating potential trends in dietary habits among different age groups.

<img src="https://imgur.com/p2xdN5x.png" width="500"/>

**Result 2**:
The contingency table reveals a clear connection between the presence of outdoor spaces and composting practices in schools. Most schools lacking composting initiatives have green areas, except for one school, suggesting a potential target for focused intervention and further research.

<img src="https://imgur.com/X8whLcG.png" width="500"/>

**Result 3**:
The regression lines disprove the hypothesis that student enrollment significantly impacts environmental education activities, with the only positive correlation found between 'Number of Students Enrolled in School' and 'Number of Teachers and Support Staff'.

<img src="https://imgur.com/XzRYcq7.png" width="500"/>


### Remaining Scope

1. **Expand Database for Additional Inputs**
2. **Incorporate Media File Submission**
3. **Organize Media Files by Project Category**
4. **Expand Dashboard with Additional Filters**

More information can be found in the [TODO document](docs-Spr2024/TODO.md)




