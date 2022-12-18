<?php

namespace App\Helpers;

class ImageHelper
{
    public static function saveImage($image)
    {
        $getFileName = pathinfo($image->getClientOriginalName(), PATHINFO_FILENAME);
        $getExtension = $image->getClientOriginalExtension();
        $storeFileName = $getFileName . '-' . time() . '.' . $getExtension;
        $image->move(public_path('/berita/'), $storeFileName);

        return $storeFileName;
    }
}