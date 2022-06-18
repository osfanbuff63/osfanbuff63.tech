source "https://rubygems.org"

gem "jekyll", "~> 4.2.2"
gem "minimal-mistakes-jekyll", "~> 4.24.0"
gem "webrick", "~> 1.7.0"

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-include-cache", "~> 0.2.1"
  gem 'jekyll-paginate-v2', '~> 3.0.0'
  gem 'jekyll-mentions', '~> 1.6.0'
  gem 'jemoji', '~> 0.12.0'
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end

gem 'wdm', '>= 0.1.1' if Gem.win_platform?
gem "http_parser.rb", "~> 0.8.0", :platforms => [:jruby]
