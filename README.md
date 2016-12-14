# Rails Task Manager

This is a Ruby on Rails task manager app. This application is a simple MVC CRUD application using ActiveRecord with Rails. This is a basic task application where you can make task lists and tasks that are associated to those task lists.

## Installation

Clone this repository, run `bundle install` to install the necessary gems, then run `rails s` to start your server. If you want to use the facebook login feature you must get a facebook key and facebook secret from the [facebook developer console](https://developers.facebook.com/). After getting these tokens add these tokens to your environment by using `export FACEBOOK_KEY=your_app_id` and `export FACEBOOK_SECRET=your_app_secret
`

## Usage

This app allows a user to create an account or log in with facebook. Once a user is logged in/signed up a user can create a project task list eg Build Website. After this list is created a user can add tasks to this task list eg build nav bar or build footer. A user can then mark tasks complete.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/rgylling/rails-task-manager. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The work is open source under the terms of the MIT License.
