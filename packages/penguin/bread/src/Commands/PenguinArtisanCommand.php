<?php

namespace Penguin\Bread\Commands;
use  Illuminate\Support\Facades\Str;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class PenguinInstallCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:observer {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Penguin observer description';

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
        $this->observer($name);
        return 1;
    }
    protected function getStub($type){
        $stubpath =  __DIR__.'/../stubs/'.$type.".stub";
        return file_get_contents($stubpath);
    }
    protected function observer($name){
        $name = \Str::ucfirst($name)."Observer";
        $this->info($name);
        $template = str_replace(
            ['{{ modelName }}'],
            [$name],
            $this->getStub('Observer')
        );
        if(!file_exists(app_path("/Observers/{$name}.php"))){
            file_put_contents(app_path("/Observers/{$name}.php"), $template);
            return $this->info($name." Observer Created Sucessfully");
        }
        return $this->warn(" * ".$name." Observer Already exists");
    }


}
