#!/bin/bash
PROJECT_ROOT=$(pwd)
ZIP_NAME="antispam"

cd ${PROJECT_ROOT}
zip -r ../"${ZIP_NAME}".xpi chrome install.rdf chrome.manifest LICENSE README.md