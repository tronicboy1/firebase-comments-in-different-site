#!/bin/bash
bundle exec rake db:migrate
bundle exec rails server
rails server -e production -b 0.0.0.0
