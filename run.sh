#!/bin/bash
bundle exec rake db:migrate
bundle exec rails server -e development -b 0.0.0.0
