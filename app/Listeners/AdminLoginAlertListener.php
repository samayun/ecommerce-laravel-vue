<?php

namespace App\Listeners;

use App\Events\AdminLoginAlert;
use App\Mail\AdminAlertMail;
use App\Models\Admin;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Log;

class AdminLoginAlertListener implements ShouldQueue
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  AdminLoginAlert  $event
     * @return void
     */
    public function handle($event)
    {
        if($event->loggedInAdmin->is_super != 1){
            $superAdmins = Admin::where('is_super',1)->get();
            foreach ($superAdmins as $to) {
                Mail::to($to->email)->send(new AdminAlertMail($event->loggedInAdmin));
                Storage::disk('public')->put('log.json',`Logged In Admin: `.$to->email);
            }
        }

    }
}
