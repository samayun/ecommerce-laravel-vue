<?php

namespace App\Jobs;

use App\Models\Brand;
use App\Traits\UploadAble;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class BrandImageUploading implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, UploadAble;
    public $logo;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($request_logo)
    {
        $this->logo = $request_logo;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        info("UPLOADING JOB");
       return $this->uploadBase64File($this->logo , 'uploads/brands/','public');
    }
}
