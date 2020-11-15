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
            'image'     => base64_decode($encoded_image),
            'extension' => $extension
        ];
    }
    public function setImageValidationError(string $extension, string $feild = 'logo', array $whitelist = [])
    {
        if (!in_array( $extension , $whitelist)) {
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
        $file      = $this->base64ToImage($request_file)['image'];
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
    public function deleteBase64RequestedFile($request_file , $disk = 'public')
    {
        // $path = preg_replace("/storage/","", $request_file);
        $path = preg_replace("/\/storage\//","", $request_file);

        if (Storage::disk($disk)->exists($path)) {
           return Storage::disk($disk)->delete($path);
        }
        return true;
    }
    public function deleteOne($request_file,$folder= null, $disk = 'public')
    {
        $path = $folder.$request_file;
        if (Storage::disk($disk)->exists($path)) {
           return Storage::disk($disk)->delete($path);
        }
        return true;
    }

    public function deleteFileFromServer($filePath , $hasFullPath = false)
    {
        if(!$hasFullPath){
            $filePath = public_path().$filePath;
        }
        if (file_exists($filePath)) {
            return @unlink($filePath);
        };
        return true;
    }

}
