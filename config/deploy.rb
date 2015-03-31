set :application, 'ember-blog'

set :repo_url, 'git@github.com:galatians/blog-ember'
set :scm, :git

set :branch, :master
set :deploy_to, '/srv/www/ember-blog'

set :migration_role, 'app'
set :conditionally_migrate, true

set :linked_files, %w{config/database.yml config/secrets.yml}
set :linked_dirs, %w{log tmp/pids tmp/cache tmp/sockets vendor/bundle public/paperclip}

set :user, 'tenpin'

set :rails_env, 'production'

set :keep_releases, 2

# set :format, :pretty
# set :log_level, :debug
# set :pty, true
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

namespace :deploy do

  desc 'Restart application'
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute :touch, release_path.join('tmp/restart.txt')
    end
  end

  desc 'Bower Install'
  task :bower_install do
    on roles(:app), in: :sequence do
      within './frontend' do
        execute :bower, 'install --allow-root'
      end
    end
  end

  before :compile_assets, :bower_install
  after :publishing, :restart

end