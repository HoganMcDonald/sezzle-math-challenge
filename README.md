# README

This completes the requirements for the take home challenge provided by Sezzle.

I chose to write it in Rails with a react front-end bootstrapped by webpacker. I chose this stack because it came with many of the required pieces out of the box with minimal friction (with one notable caveat). Getting it running locally is a very quick process.

I have detailed setup instructions for getting it working on OSX. I have also included a note about a particular challenge that made the final steps difficult.

## Setup

**Dependencies**

- [homebrew](https://brew.sh/)
- [ruby 2.6.3](https://rvm.io/)
- [node 10+](https://github.com/nvm-sh/nvm)
- postgresql `brew install postgresql`
- foreman `gem install foreman`

1. After cloning the repo, install dependencies:
    ```
    bundle install
    yarn install
    ```

2. ensure that postgres is running:
    ```
    brew services start postgresql
    ```

3. create and migrate the database:
    ```
    rake db:create
    rake db:migrate
    ```

4. start the dev server through foreman:
    ```
    foreman start -f Procfile.dev
    ```

5. navigate to `localhost:5000`

## Notes

I initially had difficulty getting the front-end to subscribe to the RecentEquation channel through action cable. It turns out it was because there is a bug in the [@rails/actioncable](https://github.com/rails/rails/issues/35501) npm package. I ended up trying 2 other react-specific implementations before getting it to work. I chose this tech stack specifically because I knew that actioncable was very quick to get working. This diversion ended up doubling the time it took to complete this challenge, but i got it working in the end.
