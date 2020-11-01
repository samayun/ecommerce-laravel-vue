<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
/**
 * Trait UploadAble
 * @package App\Traits
 */
trait UploadAble{
    public function base64ToImage($encoded_request_data)
    {
        $encoded_image  = preg_replace('/^data:image\/\w+;base64,/','',$encoded_request_data);
        $extension      = explode('/', explode(';',$encoded_request_data)[0])[1];
        return [
            'data'     => base64_decode($encoded_image),
            'extension' => $extension
        ];
    }
    public function setImageValidationError(string $extension, string $feild = 'logo', array $whitelist = [])
    {
        info($extension);
        if (!in_array( $extension , $whitelist)) {
            info($whitelist);
            return [
                'status' => 422,
                'error' => 'FIle is not an image',
                'feild' => $feild
            ];
        };
        return false;

    }

    public function setError($FileError)
    {
        if ($FileError) {
            return response()->json([
               'message' => $FileError['error'],
               'errors' => [
                   $FileError['feild'] => [ $FileError['error'] ]
               ]
           ], $FileError['status']);
       }
    }
    /**
     * @param UploadedFile $file
     * @param null $folder
     * @param string $disk
     * @param null $filename
     * @return false|string
     */
    public function uploadOne(UploadedFile $file, $folder = null, $disk = 'public', $filename = null)
    {
        $name = !is_null($filename) ? $filename : time().Str::random(20);

        return $file->storeAs(
            $folder,
            $name . "." . $file->getClientOriginalExtension(),
            $disk
        );
    }

    public function uploadBase64File($request_file, $folder = null, $disk = 'public')
    {
        $file      = $this->base64ToImage($request_file)['data'];
        $extension = $this->base64ToImage($request_file)['extension'];
        $filename = time(). '.' . $extension;
        Storage::disk($disk)->put($folder.$filename, $file);
        return [
            'name' => $filename,
            'path' => Storage::disk($disk)->get($folder.$filename, $file),
            'url'  => Storage::url($folder.$filename, $file)
        ];
    }
    /**
     * @param null $path
     * @param string $disk
     */
    public function deleteOne($path = null, $disk = 'public')
    {

        Storage::disk($disk)->delete($path);
    }

}
