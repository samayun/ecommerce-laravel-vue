<?php

namespace Penguin\Bread\Commands;
use \ Illuminate\Support\Facades\Str;
use \Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class PenguinInstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'penguin:crud {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'PenguinCommand  description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $name = $this->argument('name');
        $this->model($name);
        $this->controller($name);
        $this->call('make:observer $name');
        return 1;
    }
    protected function getStub($type){
        $stubpath =  __DIR__.'/../stubs/'.$type.".stub";
        return file_get_contents($stubpath);
    }
    protected function model($name){
        $name = \Str::ucfirst($name);
        $template = str_replace(
            ['{{ modelName }}'],
            [$name],
            $this->getStub('model')
        );
        if(!file_exists(app_path("/Models/{$name}.php"))){
            file_put_contents(app_path("/Models/{$name}.php"), $template);
            return $this->info($name." Model Created Sucessfully");
        }
        $this->withProgress(10);
        return $this->warn(" * ".$name." Model Already exists");
    }
    protected function controller($name){
        $name = \Str::ucfirst($name);
        $template = str_replace(
            ['{{ class }}','{{ rootNamespace }}' , '{{ modelName }}','{{ modelNameLower }}'],
            [$name."Controller","App", $name , strtolower($name)],
            $this->getStub('controller')
        );
         $this->withProgress(10);
        if(!file_exists(app_path("/Http/Controllers/{$name}Controller.php"))){
            file_put_contents(app_path("/Http/Controllers/{$name}Controller.php"), $template);
            return $this->info($name." Controller Created Sucessfully");
        }
        return $this->warn(" * ".$name." Controller Already exists");
    }
    protected function withProgress($data = 100){
        $bar = $this->output->createProgressBar($data);
        $bar->start();
        $bar->advance();
        $bar->finish();
    }


}
