#!/bin/bash

export PATH=$PATH:/home/max/.nvm/versions/node/v18.16.0/bin
export FORCE_COLOR='false'

exec_dir="/opt/playwright/tests"
cd ${exec_dir}

npx playwright test fail_cartservice.spec.ts