FROM node:14.18.2-alpine3.12 AS webpack-builder
WORKDIR /app

COPY tsconfig.json package.json yarn.lock webpack.config.js /app/
RUN yarn install

COPY /src /app/src
RUN yarn build

FROM ruby:3.0.0 AS runner
RUN apt-get update && apt-get install -y nodejs postgresql-client libc6
WORKDIR /app
COPY Gemfile Gemfile.lock /app/

ENV RAILS_ENV=production
ENV RAILS_SERVE_STATIC_FILES=true
ENV SECRET_KEY_BASE=secret

# ARM対策
# RUN gem install nokogiri --platform=ruby
# RUN bundle config set force_ruby_platform true

RUN bundle install

COPY . /app/
# WebpackでビルドしたReactの成果物を持ってくる
COPY --from=webpack-builder /app/public/js /app/public/js

RUN rails assets:precompile

EXPOSE 3000
VOLUME [ "/app/log" ]

CMD ["sh", "run.sh"]
