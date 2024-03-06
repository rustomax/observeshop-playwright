#!/bin/bash

local_repo_dir=/opt/otel-demo/opentelemetry-demo
adservice_file=/opt/otel-demo/opentelemetry-demo/src/adservice/src/main/java/oteldemo/AdService.java

gh_user={{GH_USER}}
gh_token={{GH_TOKEN}}
gh_repo=github.com/rustomax/opentelemetry-demo.git

sed -i 's/(true)/(false)/g' $adservice_file
commit_message="Fix adservice resource exhausion"

cd $local_repo_dir
pwd
git add .
git commit -m "$commit_message"
git push "https://$gh_user:$gh_token@$gh_repo"