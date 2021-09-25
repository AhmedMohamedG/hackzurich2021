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


def xlsx_to_json(filepath: str = "src\\data\\ICHOM_PROM_breast_cancer.xlsx") -> None:
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
        

if __name__ == "__main__":
    pass
