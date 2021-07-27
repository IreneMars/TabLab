import os

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

# Error codes

# Error generated when a POI has no coordinates and the fields used for geocoding are incomplete
ERROR_CODE_INVALID_GEOCODING_PARAMETERS = 'invalid-geocoding-parameters-error'

# Error generated when a POI's latitude or longitude is invalid
ERROR_CODE_INVALID_COORDINATES = 'invalid-coordinates-error'

# Error generated in the registrations file when a column that needs to have
# at least one nonnull value has only null values.
ERROR_CODE_INVALID_EMPTY_COLUMN = 'invalid-empty-column'

# Error generated in a custom check for the geomarketing competitors file, CountryCode field and RevGeocodeCountryCode must be equal for each row.
ERROR_CODE_COUNTRY_CODE_INTEGRITY = 'country-code-integrity-error'


# Output file names

# Georeporting

POIS_SCHEMA_REPORT_FILE_NAME = 'pois_schema_report.json'
POIS_CUSTOM_CHECKS_REPORT_FILE_NAME = 'pois_custom_checks_report.json'
POIS_ERRORS_CSV_FILE_NAME = 'POIs_errors.csv'

SECTORIZATION_DATA_PACKAGE_REPORT_FILE_NAME = 'sectorization_data_package_report.json'
SECTORIZATION_ERROR_CSV_FILE_NAME = 'Sectorization_errors.csv'

ACTEUR_REPORT_FILE_NAME = 'acteur_schema_report.json'
VENDEUR_REPORT_FILE_NAME = 'vendeur_schema_report.json'
ACTEUR_ERRORS_CSV_FILE_NAME = 'Acteur_errors.csv'
VENDEUR_ERRORS_CSV_FILE_NAME = 'Vendeur_errors.csv'

AAA_SCHEMA_REPORT_FILE_NAME = 'AAA_schema_report.json'
AAA_CUSTOM_CHECKS_REPORT_FILE_NAME = 'AAA_custom_checks_report.json'
AAA_ERRORS_CSV_FILE_NAME = 'AAA_errors.csv'

DRIVER_SCHEMA_REPORT_FILE_NAME_1 = 'driver_schema_report_1.json'
DRIVER_SCHEMA_REPORT_FILE_NAME_2 = 'driver_schema_report_2.json'
DRIVER_ERRORS_CSV_FILE_NAME = 'Driver_errors.csv'

PERFORMANCE_APV_REPORT_FILE_NAME = 'performance_apv_schema_report.json'
PERFORMANCE_VN_REPORT_FILE_NAME = 'performance_vn_schema_report.json'
PERFORMANCE_APV_ERRORS_CSV_FILE_NAME = 'Performance_apv_errors.csv'
PERFORMANCE_VN_ERRORS_CSV_FILE_NAME = 'Performance_vn_errors.csv'

PARC_AFFAIRE_REPORT_FILE_NAME = 'parc_affaire_schema_report.json'
PARC_AFFAIRE_ERRORS_CSV_FILE_NAME = 'parc_affaire_errors.csv'

PARC_IRIS_REPORT_FILE_NAME = 'parc_iris_schema_report.json'
PARC_IRIS_ERRORS_CSV_FILE_NAME = 'parc_iris_errors.csv'

# DMF

DMF_SCHEMA_REPORT_FILE_NAME = 'dmf_schema_report.json'
DMF_ERRORS_CSV_FILE_NAME = 'DMF_errors.csv'

# Geomarketing

OUTLETS_SCHEMA_REPORT_FILE_NAME = 'outlets_schema_report.json'
OUTLETS_CUSTOM_CHECKS_REPORT_FILE_NAME = 'outlets_custom_checks_report.json'
OUTLETS_ERRORS_CSV_FILE_NAME = 'Outlets_errors.csv'

SALES_SCHEMA_REPORT_FILE_NAME = "sales_schema_report.json"
SALES_ERRORS_CSV_FILE_NAME = 'Sales_errors.csv'

COMPETITORS_SCHEMA_REPORT_FILE_NAME = "competitors_schema_report.json"
COMPETITORS_CUSTOM_CHECKS_REPORT_FILE_NAME = 'competitors_custom_checks_report.json'
COMPETITORS_ERRORS_CSV_FILE_NAME = 'Competitors_errors.csv'

# Dealer reporting

DEALER_HIERARCHY_SCHEMA_REPORT_FILE_NAME = 'dealer_hierarchy_schema_report.json'
DEALER_HIERARCHY_CUSTOM_CHECKS_REPORT_FILE_NAME = 'dealer_hierarchy_custom_checks_report.json'
DEALER_HIERARCHY_ERRORS_CSV_FILE_NAME = 'dealer_hierarchy_errors.csv'

DEALER_VISITS_REPORT_FILE_NAME = 'dealer_visits_schema_report.json'
DEALER_VISITS_ERRORS_CSV_FILE_NAME = 'dealer_visits_errors.csv'

DEALER_HOURS_REPORT_FILE_NAME = 'dealer_hours_schema_report.json'
DEALER_HOURS_ERRORS_CSV_FILE_NAME = 'dealer_hours_errors.csv'

# Variables

VALIDATIONS_ROW_LIMIT = -1  # -1 means no limit, i.e. validate the whole file
VALIDATIONS_ERROR_LIMIT = -1  # -1 means no limit in number of errors
