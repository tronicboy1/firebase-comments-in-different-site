FROM --platform=arm64 ruby:3.0.0
RUN apt-get update && apt-get install -y nodejs postgresql-client libc6

WORKDIR /app
COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

# ARM対策
RUN gem install nokogiri --platform=ruby
RUN bundle config set force_ruby_platform true

RUN bundle install

COPY . /app/

EXPOSE 3000

CMD ["rails", "server", "-b", "0.0.0.0"]
