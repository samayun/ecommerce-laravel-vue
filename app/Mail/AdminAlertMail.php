<?php

namespace App\Mail;

use App\Listeners\AdminLoginAlertListener;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;

class AdminAlertMail extends Mailable
{
    use Queueable, SerializesModels;
    public $loggedUser;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($loggedUser)
    {
        $this->loggedUser = $loggedUser;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->markdown('emails.admin_log_mail')->with([
            'email' => $this->loggedUser->email,
            'name' => $this->loggedUser->name
        ]);
    }
}
