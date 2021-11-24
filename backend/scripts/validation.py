import os, json, logging, sys, pathlib, logging
from frictionless import validate, Detector, Resource, describe_schema
# from backend.scripts.report_summary import (
#     summarize_report,
#     log_highlights_for_summarize_report,
#     create_csv_from_summarized_report,
# )
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
###########################################################################################
UNCHECKED_ERRORS = ['duplicate-row', 'deviated-value', 'truncated-value',  'forbidden-value', 'sequential-value', 'row-constraint', 'empty-column']
IGNORED_ERRORS = ['general-error', 'row-error', 'cell-error',
                  'error', 'file-error', 'package-error', 'resource-error', 'pipeline-error', 'inquiry-error', 'control-error',
                  'dialect-error', 'layout-error', 'schema-error',
                  'field-error', 'report-error', 'status-error', 'check-error', 'step-error', 'source-error', 'scheme-error',
                  'format-error', 'encoding-error', 'hashing-error', 'compression-error', 'storage-error', 'task-error',
                  'table-error', 'header-error', 'label-error']
CHECKED_ERRORS = ['hash-count-error', 'byte-count-error', 'field-count-error', 'row-count-error', 'blank-header', 'extra-label',
                  'missing-label', 'blank-label', 'duplicate-label', 'incorrect-label', 'blank-row', 'primary-key-error',
                  'foreign-key-error', 'extra-cell', 'missing-cell', 'type-error', 'constraint-error',  'unique-error']

LOG_FILE_NAME = 'process.log'

LOG_FORMAT = '%(asctime)s [%(threadName)-12.12s] [%(levelname)-5.5s]  %(message)s'

DEBUG_LOG_LEVEL = 'DEBUG'
INFO_LOG_LEVEL = 'INFO'
WARNING_LOG_LEVEL = 'WARNING'

LOG_LEVEL = DEBUG_LOG_LEVEL if os.getenv('VALIDATION_DEBUG') == 'True' else INFO_LOG_LEVEL

def create_logger():
    logging.basicConfig(level=LOG_LEVEL)
    log_formatter = logging.Formatter(LOG_FORMAT)
    root_logger = logging.getLogger()

    file_handler = logging.FileHandler(LOG_FILE_NAME)
    file_handler.setLevel(DEBUG_LOG_LEVEL)  # HARDCODED
    file_handler.setFormatter(log_formatter)
    root_logger.addHandler(file_handler)

    console_handler = logging.StreamHandler()
    console_handler.setFormatter(log_formatter)
    # root_logger.addHandler(console_handler) # For docker logs
    return root_logger

def save_report_to_file(report, file):
    logger.info("Saving report to file...")
    report_json = json.dumps(report, indent=2)
    output = open(file, "w")
    output.write(report_json)
    output.close()

def validate_file(file_path, delimiter, schema_file=None,  errors_file_name=None, configurations=None):
    output_directory = 'D:/irene/Desktop/TabLab/backend/output/'
    # Si no existe el path, crearlo
    if not os.path.exists(output_directory):
        os.mkdir(output_directory)
        return;
    schema_report = None
    # logger.setLevel(logging.INFO)

    # Si no existe el file avisar por consola y detener proceso
    if not os.path.exists(file_path):
        # logger.error(f'El archivo no existe en el path {file_path}')
        logger.info(f'El archivo no existe en el path {file_path}')
        return;

    #Establecemos los nombres de los dos únicos ficheros que generaremos: el schema report y el errors report
    file_name = os.path.basename(file_path)
    extension = pathlib.Path(file_name).suffix
    # logger.info('File extension: '+extension.replace(".",""))
    logger.info('File extension: '+extension.replace(".",""))

    name = file_name.replace(extension,"")
    schema_report_file_name = name + "_schema_report.json"
    if not errors_file_name:
        errors_file_name = name + '_errors.csv'

    # UNCHECKED_ERRORS, IGNORED_ERRORS, CHECKED_ERRORS
    skip_errors = []
    pick_errors = []
    checks = []
    if configurations:
        for configuration in configurations:
            error_code = configuration['code']
            if error_code in CHECKED_ERRORS:
                skip_errors.append(error_code)
            elif error_code in IGNORED_ERRORS:
                pick_errors.append(error_code)
            elif error_code in UNCHECKED_ERRORS:
                checks.append(configuration)
    dialect = {}

    if delimiter:
        dialect = { "delimiter": delimiter }

    if schema_file=="":
        schema_file = None

    resource = Resource(path=file_path,schema=schema_file,dialect=dialect)
    resource.infer(stats=True)
    total_poss_errors = resource['stats']['fields']*resource['stats']['rows']
    total_rows = resource['stats']['rows']

    # Validating against the schema
    print(f'Performing schema validation for file {file_path}')
    logger.info(f'Performing schema validation for file {file_path}')
    schema_report = validate(
        resource,
        layout = {"limitRows": total_rows},#tiene que ser >= 1, antes: limit_rows=VALIDATIONS_ROW_LIMIT
        limit_errors=total_poss_errors,#limit_errors=VALIDATIONS_ERROR_LIMIT,
        detector=Detector(schema_sync=True),#sync_schema=True,
        format=extension.replace(".",""),
        skip_errors = skip_errors,
        pick_errors = pick_errors,
        checks = checks
    )
    logger.setLevel(logging.DEBUG)
    print('Schema validation result created.');
    logger.info('Schema validation result created.');
    if output_directory and schema_report:
        schema_report_file_path = os.path.join(output_directory, schema_report_file_name)
        save_report_to_file(schema_report, schema_report_file_path)
        print(f'File schema report saved to {schema_report_file_path}.\n')
        logger.info(f'File schema report saved to {schema_report_file_path}.\n')

    if schema_report:
        summary_report = summarize_report([schema_report],logger)
        print('Validation finished and summarized report created.\n');
        logger.info('Validation finished and summarized report created.\n')

        print(json.dumps(schema_report.get('stats', {})));
        logger.debug(json.dumps(schema_report.get('stats', {})))

        log_highlights_for_summarize_report(summary_report,logger)

        error_csv_file_path = os.path.join(output_directory, errors_file_name)
        create_csv_from_summarized_report(summary_report, csv_file_path=error_csv_file_path)
        if not summary_report.get('valid', True):
            print(f'Error file from summarized report saved to {error_csv_file_path}.')
            logger.info(f'Error file from summarized report saved to {error_csv_file_path}.')

def infer_schema(file_path):
    schema = describe_schema(file_path)
    file_name = os.path.basename(file_path)
    extension = pathlib.Path(file_name).suffix
    name = file_name.replace(extension,"")
    output_path = "schema/" + name + "_schema.yaml"
    schema.to_yaml(output_path)


logger = create_logger()

print(f"Logs started with level {LOG_LEVEL}");
logger.info(f"Logs started with level {LOG_LEVEL}")

out_path = sys.argv[1]
delimiter = sys.argv[2]
esquema_path = sys.argv[3];
file_path = sys.argv[4];
configurations = [{'code':sys.argv[5]}]

logger.info('Out Path: '+out_path);
print('Delimiter: '+delimiter);
logger.info('Delimiter: '+delimiter);
print('Esquema: '+esquema_path);
logger.info('Esquema: '+esquema_path);
print('File: '+file_path);
logger.info('File: '+file_path);
print("Configurations:");
logger.info("Configurations:");
print(configurations);
logger.info(configurations);
# file_path = "D:/irene/Desktop/TabLab/backend/uploads/datafiles/fulls_dmf_full_v1_20200504_short_10_werrs.csv"
# delimiter = None
# esquema_path = "D:/irene/Desktop/TabLab/backend/uploads/esquemas/populate_schema.json"
# configurations = []

validate_file(file_path, delimiter, schema_file=esquema_path, configurations=configurations)
