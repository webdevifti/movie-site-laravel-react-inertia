<?php

use Illuminate\Support\Facades\Storage;

if (!function_exists('fileUpload')) {
    function fileUpload($request, $name, $store_path)
    {
        if ($request->hasFile($name)) {
            $request->validate([
                $name => 'mimes:jpg,jpeg,png,gif,pdf|file|max:5000'
            ]);
            $extension = $request->file($name)->getClientOriginalExtension();
            $imgName = uniqid() . '.' . $extension;
            $request->file($name)->storeAs($store_path,$imgName,'public');
            return $imgName;
        }
        return null;
    }
}

// update the file uploaded
if (!function_exists('updateFileUpload')) {
    function updateFileUpload($request, $file_name, $current_path, $destination_path, $model, $column_name)
    {
        if ($request->hasFile($file_name)) {
            $request->validate([
                $file_name => 'mimes:jpg,jpeg,png,gif,pdf|max:5000'
            ]);
            $extension = $request->file($file_name)->getClientOriginalExtension();
            $img = uniqid() . '.' . $extension;
            fileUnlink($current_path, $model->$column_name);
            $request->file($file_name)->storeAs($destination_path, $img,'public');

            return $img;
        } else {
            return $model->$column_name;
        }
    }
}

if (!function_exists('multipleFileUpload')) {
    function multipleFileUpload($request, $path, $name)
    {
        $imagesArr = [];
        if ($request->$name && $request->hasFile($name)) {
            foreach ($request->$name as $image) {
                $extension = $image->getClientOriginalExtension();
                $name = rand(111111, 999999) . '.' . $extension;
                $image->storeAs($path, $name,'public');
                $imagesArr[] = [
                    'img_name' => $name
                ];
            }
            return $imagesArr;
        }
    }
}

// file unlink or delete from directory
if (!function_exists('fileUnlink')) {
    function fileUnlink($path, $name,$disk='public')
    {
        $fullPath = $path.'/'.$name;
        if (Storage::disk($disk)->exists($fullPath)) {
            Storage::disk($disk)->delete($fullPath);
        }
        return true;
    }
}