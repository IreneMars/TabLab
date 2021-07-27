def summarize_report(report,logger):
    reduced_report = reduce_report(report[0],1,logger);
    reduced_report['total-reports']=1
    return reduced_report

def reduce_report(report,report_num,logger):
    reduced_report = {}

    # Basic information
    reduced_report['number'] = report_num
    logger.debug(f'Reducing report {report_num} ...')
    reduced_report['time'] = report.get('time')
    reduced_report['valid'] = report.get('valid')

    warnings = report.get('warnings')
    if warnings is not None and len(warnings) > 0:
        reduced_report['warnings'] = warnings

    for task_dict in report.get('tasks', None):
        reduced_task_dict = __reduce_task(task_dict)
        reduced_report.setdefault('tasks', []).append(reduced_task_dict)

    global_errors = report.get('errors')
    if global_errors is not None and len(global_errors) > 0:
        reduced_report['global_errors'] = global_errors

    return reduced_report


def __reduce_task(task_dict):
    reduced_task = {}
    reduced_task['valid'] = task_dict.get('valid')
    reduced_task['row-count'] = task_dict.get('resource')['stats']['rows']#table_dict.get('row-count')
    reduced_task['fields-count'] = len(task_dict.get('resource')['schema']['fields'])#table_dict.get('row-count')
    reduced_task['source'] = task_dict.get('resource')['path']#.get('source')

    errors = {}
    for error in task_dict.get('errors', []):
        reduced_error = {}

        reduced_error['cell'] = error.get('cell','')
        reduced_error['label'] = error.get('label','')
        reduced_error['field-name'] = error.get('fieldName','')
        reduced_error['field-number'] = error.get('fieldNumber','')
        reduced_error['field-position'] = error.get('fieldPosition','')
        reduced_error['row-number'] = error.get('rowNumber','')
        reduced_error['row-position'] = error.get('rowPosition','')
        reduced_error['message'] = error.get('message','')
        reduced_error['tags'] = error.get('tags','')
        error_code = error.get('code', '')
        errors.setdefault(error_code, []).append(reduced_error)

    reduced_task['errors'] = errors

    return reduced_task

def __sort_errors_by_code(errors):
    sorted_errors = {}
    for error in errors:
        if error['code'] not in sorted_errors.keys():
            sorted_errors[error['code']] = []
            sorted_errors[error['code']].append(error)
        else:
            sorted_errors[error['code']].append(error)
    return sorted_errors

# Logs (via logger.info) the highlights of the summarized report.
def log_highlights_for_summarize_report(report, logger):
    logger.info('Report summary:')
    time = report.get('time')
    if time:
        logger.info(f'  Validation time: {time} seconds')
    valid = report.get('valid', False)

    if valid:
        logger.info('  Validation successful. No errors')
    else:
        logger.info('  Validation errors found:')
        tasks = report.get('tasks', None)
        global_errors = report.get('global_errors', None)
        if not tasks and not global_errors:
            logger.info(f'   · Validation unsuccessful. No tasks and no global errors found.')
        else:
            if global_errors:
                logger.info(f'   · Global errors found in report:')
                errors_by_code = __sort_errors_by_code(global_errors)
                for code in errors_by_code.keys():
                    count = len(errors_by_code[code])
                    logger.info(f'\t   - {code}. Found: {count}')
            if tasks:
                for i in range(len(tasks)):
                    task = tasks[i]
                    errors = task.get('errors',{})
                    if len(errors) > 0:
                        task_source = task['source']
                        logger.info(f'   · Errors found in task {i} with source {task_source}:')
                        for error_code in errors:
                            count = len(errors[error_code])#len(errors.get(error_code, []))
                            if count > 0:
                                logger.info(f'\t   - {error_code}. Found: {count}')

def create_csv_from_summarized_report(report, csv_file_path):
    report_valid = report.get('valid', True)
    if not report_valid:
        csv = __generate_error_csv_from_report(report)
        with open(csv_file_path, 'w', encoding='utf-8') as f:
            for c in csv:
                f.write("%s" % c)

def __generate_error_csv_row(error, csv_separator):
    field_position = error.get('field-position','')
    row_position = error.get('row-position','')
    tags = error.get('tags',''),
    tags = "["+', '.join(tags[0]) + "]"
    csv_row = [
        error.get('code',''),
        tags,
        error.get('label',''),
        error.get('field-name',''),
        str(field_position),
        str(row_position),
        error.get('message', ''),
        error.get('cell','')
    ]
    return '\n' + csv_separator.join(csv_row)

def __generate_error_csv_from_report(report):
    headers = [
        'Error Code',
        'Tags',
        'Label',
        'Field Name',
        'Field Position',
        'Row Position',
        'Error Message',
        'Error Cell'
    ]
    csv_separator = '|'

    yield csv_separator.join(headers)

    tasks = report.get('tasks', None)
    global_errors = report.get('global_errors', None)
    if tasks:
        for task in tasks:
            errors_by_task = task.get('errors',{})
            #for resource in resources:#for index, table in enumerate(tables, start=1):
            for error_code in errors_by_task:#for error_code in dict_errors:
                errors_by_code = errors_by_task.get(error_code, [])
                for error in errors_by_code:
                    error['code']=error_code
                    csv_row = __generate_error_csv_row(error, csv_separator)
                    yield csv_row
    if global_errors:
        errors_by_code = __sort_errors_by_code(global_errors)
        for code in errors_by_code.keys():
            errors = errors_by_code[code]
            for error in errors:
                csv_row = __generate_error_csv_row(error, csv_separator)
                yield csv_row
