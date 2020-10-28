<?php

namespace App\Jobs;

use App\Mail\AdminAlertMail;
use App\Models\Admin;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class SendEmailJobs implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;
    public $loggedInAdmin;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($loggedInAdmin)
    {
       $this->loggedInAdmin =  $loggedInAdmin;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        if($this->loggedInAdmin->is_super != 1){
            $superAdmins = Admin::where('is_super',1)->get();
            foreach ($superAdmins as $to) {
                Mail::to($to->email)->send(new AdminAlertMail($this->loggedInAdmin));
                Storage::disk('public')->put('log.json',`Logged In Admin: `.$to->email);
            }
        }
    }
}
