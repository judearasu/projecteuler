require 'rake/testtask'
task :default => :test

recent=Dir.glob("*").max_by {|f| File.mtime(f)}
Rake::TestTask.new do |t|
  t.test_files = FileList[recent]
  t.verbose = true
end
