#!/bin/bash

set -o errexit  # if any of the commands in your code fails for any reason, the entire script fails
set -o pipefail  # fail exit if one of your pipe command fails
set -o nounset  # exits if any of your variables is not set

exec cargo watch -q -c -w src/ -x run