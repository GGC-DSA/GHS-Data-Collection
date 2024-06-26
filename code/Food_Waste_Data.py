# -*- coding: utf-8 -*-
"""GHS_statistics.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/15bckrM-33ksLp0r7J0vBYSPhbhPcp8EV

## Importing the data and finding the general information about it
"""

from google.colab import drive
drive.mount('/content/drive')

# Commented out IPython magic to ensure Python compatibility.
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
# %matplotlib inline
from matplotlib.colors import ListedColormap
import seaborn as sns

#load dataset"
df = pd.read_excel("/content/drive/MyDrive/GGC_Copy of 2022-23 of Lovin Compost Collector Data Collection TOTALS (1).xlsx")

df.dtypes

df.head(10)

df.describe()

"""## Cleaning the data

"""

#displaying the data as is
df

#dropping the last rows that have no relevant data
df.drop(df.index[15:21], inplace = True)

#displaying the data after the rows have been dropped
df

#changing the string value to a nan value
df['Compost Temp'] = df['Compost Temp'].replace('rained', np.nan)
df['Outdoor Temp'] = df['Outdoor Temp'].replace('rained', np.nan)
df.head()

df['Date (week of)'] = pd.to_datetime(df['Date (week of)'])
df.head()

df.rename(columns={'Unnamed: 8': 'Grade level'}, inplace=True)

df.columns

fifth_grade = df.iloc[0:6]
fourth_grade = df.iloc[6:11]
third_grade = df.iloc[11:16]

df.loc[0:5, 'Grade level'] = 'Fifth Grade'
df.loc[6:10, 'Grade level'] = 'Fourth Grade'
df.loc[11:15, 'Grade level'] = 'Third Grade'
df.head()

df['Date (week of)'] = df['Date (week of)'].astype('str')
df.head()

"""## Plotting the data"""

# Determine common y-axis limits
fruits_min = min(min(fifth_grade['Fruits\n(kgs)']), min(fourth_grade['Fruits\n(kgs)']), min(third_grade['Fruits\n(kgs)']))
fruits_max = max(max(fifth_grade['Fruits\n(kgs)']), max(fourth_grade['Fruits\n(kgs)']), max(third_grade['Fruits\n(kgs)']))

plt.figure(figsize=(12, 6))

# Fifth grade
plt.subplot(1, 3, 1)
sns.barplot(x='Veggies\n(kgs)', y='Fruits\n(kgs)', data=fifth_grade)
plt.title('Fifth Grade')
plt.ylim(fruits_min, fruits_max)
plt.xlabel('Veggies (kgs)')
plt.ylabel('Fruits (kgs)')

# Fourth grade
plt.subplot(1, 3, 2)
sns.barplot(x='Veggies\n(kgs)', y='Fruits\n(kgs)', data=fourth_grade)
plt.title('Fourth Grade')
plt.ylim(fruits_min, fruits_max)
plt.xlabel('Veggies (kgs)')
plt.ylabel('')

# Third grade
plt.subplot(1, 3, 3)
sns.barplot(x='Veggies\n(kgs)', y='Fruits\n(kgs)', data=third_grade)
plt.title('Third Grade')
plt.ylim(fruits_min, fruits_max)
plt.xlabel('Veggies (kgs)')
plt.ylabel('')

plt.tight_layout()
plt.show()

plt.figure(figsize=(14, 7))

# Use a color palette for better visualization
colors = sns.color_palette("pastel")

# Create the bar plot with error bars using errorbar='sd'
sns.barplot(x='Date (week of)', y='Total Weight\n(kgs)', data=df, errorbar='sd', palette=colors)

# Set title and labels
plt.title('Total Weight (kgs) of fruits & veggies by Week', fontsize=16)
plt.xlabel('Week', fontsize=14)
plt.ylabel('Total Weight (kgs)', fontsize=14)
plt.xticks(rotation=45, ha='right', fontsize=12)

# Add grid for better readability
plt.grid(axis='y', linestyle='--', alpha=0.7)

# Show plot
plt.tight_layout()
plt.show()

import plotly.graph_objects as go

# Create 3D scatter plot

fig = go.Figure(data=[go.Scatter3d(
    x=df['Compost Temp'],
    y=df['Outdoor Temp'],
    z=df['Fruits\n(kgs)'],
    mode='markers',
    marker=dict(
        size=8,
        color=df['Fruits\n(kgs)'],
        colorscale='Viridis',
        opacity=0.8
    )
)])

# Set labels and title
fig.update_layout(
    scene=dict(
        xaxis_title='Compost Temp (°F)',
        yaxis_title='Outdoor Temp (°F)',
        zaxis_title='Fruits (kgs)',
        aspectmode='cube'
    ),
    title='3D Plot: Compost Temp vs Outdoor Temp vs Fruits'
)

# Show plot
fig.show()

# Create scatter plot
fig = go.Figure()

# Add scatter plot trace
fig.add_trace(go.Scatter(
    x=df['Compost Temp'],
    y=df['Outdoor Temp'],
    mode='markers',
    name='Data points'
))

# Add line plot trace
fig.add_trace(go.Scatter(
    x=[df['Compost Temp'].min(), df['Compost Temp'].max()],
    y=[df['Outdoor Temp'].min(), df['Outdoor Temp'].max()],
    mode='lines',
    name='Regression line',
    line=dict(color='red', dash='dash')
))

# Update layout
fig.update_layout(
    title='Compost Temp vs Outdoor Temp',
    xaxis_title='Compost Temp (°F)',
    yaxis_title='Outdoor Temp (°F)'
)

# Show plot
fig.show()

# Create a new DataFrame for grade level and total weight
grade_level_df = pd.DataFrame({
    'Grade Level': ['Fifth Grade', 'Fourth Grade', 'Third Grade'],
    'Total Weight (kgs)': [fifth_grade_total, fourth_grade_total, third_grade_total]
})

# Plot the bar chart with adjusted aesthetics
plt.figure(figsize=(10, 6))
plt.bar(grade_level_df['Grade Level'], grade_level_df['Total Weight (kgs)'],
        color=['skyblue', 'lightgreen', 'lightcoral'], edgecolor='black')  # Adjust colors and add edgecolor
plt.title('Fourth Graders Love Their Fruits & Veggies the Most', fontsize=16)  # Increase title font size
plt.xlabel('Grade Level', fontsize=14)  # Increase x-axis label font size
plt.ylabel('Total Weight (kgs)', fontsize=14)  # Increase y-axis label font size
plt.xticks(fontsize=12, rotation=45, ha='right')  # Rotate x-axis labels for better readability
plt.yticks(fontsize=12)  # Increase y-axis tick font size
plt.grid(axis='y', linestyle='--', alpha=0.7)  # Add horizontal gridlines for better reference
plt.tight_layout()  # Adjust layout to prevent clipping of labels
plt.show()

"""## Statistics"""

from sklearn.cluster import KMeans

# Define the number of clusters
n_clusters = 3

# Create a KMeans object
kmeans = KMeans(n_clusters=n_clusters)

# Fit the KMeans object to the data
kmeans.fit(df[['Veggies\n(kgs)', 'Fruits\n(kgs)']])

# Get the cluster labels for each data point
labels = kmeans.labels_

# Add the cluster labels to the DataFrame
df['Cluster'] = labels

# Plot the data points with different colors for each cluster
plt.scatter(df['Veggies\n(kgs)'], df['Fruits\n(kgs)'], c=labels)
plt.xlabel('Veggies\n(kgs)')
plt.ylabel('Fruits\n(kgs)')
plt.title('K-Means Clustering')
plt.show()

# Perform an independent sample t-test to compare the mean of the compost temperature between the fifth and fourth grade groups.
import scipy.stats as stats

fifth_grade_temp = df[df['Grade level'] == 'Fifth Grade']['Compost Temp']
fourth_grade_temp = df[df['Grade level'] == 'Fourth Grade']['Compost Temp']

t_stat, p_value = stats.ttest_ind(fifth_grade_temp, fourth_grade_temp)

print("T-statistic:", t_stat)
print("P-value:", p_value)

# If the p-value is less than 0.05, we can reject the null hypothesis and conclude that there is a significant difference between the mean compost temperatures of the two groups.

# Create a boxplot to visualize the distribution of compost temperatures for each grade level.
sns.boxplot(x='Grade level', y='Compost Temp', data=df)
plt.xlabel('Grade Level')
plt.ylabel('Compost Temperature')
plt.title('Compost Temperature by Grade Level')
plt.show()

from sklearn.decomposition import PCA

# Create a PCA object with 2 components
pca = PCA(n_components=2)

# Fit the PCA object to the data
pca.fit(df[['Veggies\n(kgs)', 'Fruits\n(kgs)']])

# Get the principal components
principal_components = pca.components_

# Get the explained variance
explained_variance = pca.explained_variance_ratio_

# Print the principal components and explained variance
print('Principal Components:')
print(principal_components)
print('\nExplained Variance:')
print(explained_variance)

# Transform the data into the principal component space
transformed_data = pca.transform(df[['Veggies\n(kgs)', 'Fruits\n(kgs)']])

# Plot the transformed data
plt.scatter(transformed_data[:, 0], transformed_data[:, 1])
plt.xlabel('Principal Component 1')
plt.ylabel('Principal Component 2')
plt.title('PCA Transformation')
plt.show()