#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Created on 25/09/2021
@author: Hendrik

Functions that handle the questionnaire database.
"""

import json
import os

import pandas as pd
import numpy as np


def questionnaire_xlsx_to_json(filepath: str = "src\\data\\ICHOM_PROM_breast_cancer.xlsx") -> None:
    """
    Loads questionnaire data from a curated Excel file (with question categories) and save it as a JSON file with
    structure:
    { sections:
        [{
            time_scale: str, questions:
                [{
                    id: str, type: str, text: str, answers: [text: str, number: int], category: str
                }]
        }]
    }
    --------------------------------------------------------------------------------------------------------------

    Args:
        filepath: Relative path of the Excel file. The JSON file will be saved in the same directory with the same name.

    """

    # Load data
    excel_data = pd.read_excel(filepath)

    data = []

    # Initialize the list of questions and answers for the first section
    curr_answers = []
    questions_per_sec = []

    for row in excel_data.iterrows():
        curr_row = row[1]

        if pd.isna(curr_row['Number']):
            # This is a line where a new time scale section or evaluation scale starts

            # Add the previous section data to the data list (if there is a previous section)
            if questions_per_sec:
                # Check if the section already exists in the list and find its position
                idx = [i for i in range(len(data)) if data[i]['time_scale'] == curr_section]
                # If no index was found, add the section to the list
                if len(idx) == 0:
                    data.append({'time_scale': curr_section, 'questions': questions_per_sec})
                # Otherwise, extend the questions list of the corresponding section
                elif len(idx) == 1:
                    data[idx[0]]['questions'].extend(questions_per_sec)
                else:
                    raise Warning('This should not happen.')

            # Get the section title
            curr_section = curr_row['Question']
            # Construct possible answers, filter out NaNs
            new_answers = [{'text': curr_row[i], 'number': str(i-1)} for i in range(2, 9) if not pd.isna(curr_row[i])]
            if new_answers:
                curr_answers = new_answers

            # Initialize a new list of questions for this section
            questions_per_sec = []
        else:
            # Construct dict for the current question
            questions_per_sec.append(dict(id=str(int(curr_row['Number'])),
                                          type='MultiAnswers',
                                          text=curr_row['Question'],
                                          answers=curr_answers,
                                          category=curr_row['Category']))

    # Wrap data in 'sections'
    data_dict = {'sections': data}

    # Write data to JSON
    json_filepath = os.path.splitext(filepath)[0] + '.json'
    with open(json_filepath, 'w') as f:
        json.dump(data_dict, f, indent=4)

def answers_xlsx_to_json(filepath: str = "src\\data\\ICHOM_PROM_breast_cancer_dummy_answers.xlsx") -> None:
    """

    Args:
        filepath: Relative path of the Excel file. The JSON file will be saved in the same directory with the same name.
    """

    # Hardcoded IDs of questions that have the inverse meaning (high number meaning good instead of bad)
    inverse_questions = (29, 30, 44, 45, 46)

    # Load data
    excel_data = pd.read_excel(filepath)
    # Clean data (remove section headers and question columns)
    data_filt = excel_data.loc[~pd.isna(excel_data['Number'])]
    data_filt = data_filt.drop(data_filt.columns[np.arange(1,10)], axis=1)

    # Hardcoded dummy info about the patient
    name = 'Mary Smith'
    birth = '1962/03/14'
    surgery_date = '2016/02/21'


def summarize_patient_history(filepath: str = "src\\data\\ICHOM_PROM_breast_cancer_dummy_answers.xlsx") -> None:
    """

    Args:
        filepath: Relative path of the Excel file. The JSON file will be saved in the same directory with the same name.
    """

    # Load data
    excel_data = pd.read_excel(filepath)
    # Clean data (remove section headers and question columns)
    data_filt = excel_data.loc[~pd.isna(excel_data['Number'])]
    # Get maximum for each question for normalization
    max_value = data_filt.iloc[:, 2:9].max(axis=1)
    data_filt = data_filt.drop(data_filt.columns[np.arange(1,9)], axis=1)

    data_only = data_filt.drop(columns=['Number', 'Category']).T

    # Normalize answers to 0-1
    norm_data = (data_only - np.ones(len(max_value))) / (max_value - np.ones(len(max_value)))
    norm_data = norm_data.T

    # Flip values of questions with inverse meaning
    # Hardcoded IDs of questions that have the inverse meaning (high number meaning good instead of bad)
    inverse_questions = np.array((31, 32, 48, 49, 50))
    for row in inverse_questions:
        norm_data.loc[row] = norm_data.loc[row] - 2*(norm_data.loc[row]-0.5)

    # Inverse everything and make into percentage, so that a high value means good condition/performance
    for row in norm_data.index:
        norm_data.loc[row] = (norm_data.loc[row] - 2*(norm_data.loc[row]-0.5)) * 100

    # Put processed data back together with labels
    data = pd.concat((data_filt.iloc[:, :2], norm_data), axis=1)

    # Get list of survey dates as possible x-values
    survey_dates = list(data_filt.columns[2:])
    # Hardcoded time in years since treatment start
    years_since_treatment = [0.5, 1, 2, 3, 4, 5]

    # Get averages and SD per category
    data_dic = dict.fromkeys(data_filt['Category'].unique())
    data_dic['survey_dates'] = survey_dates
    data_dic['years_since_treatment'] = years_since_treatment

    for cat in data['Category'].unique():
        curr_cat = data.loc[data['Category'] == cat].drop(['Number', 'Category'], axis=1)
        data_dic[cat] = {}
        data_dic[cat]['mean'] = list(curr_cat.mean())
        data_dic[cat]['std'] = list(curr_cat.std())

    # Write data to JSON
    json_filepath = os.path.dirname(filepath) + '\\plotting_data.json'
    with open(json_filepath, 'w') as f:
        json.dump(data_dic, f, indent=4)


if __name__ == "__main__":
    pass
