<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateBeritaRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'judul' => ['required', 'max:100'],
            'deskripsi' => ['required'],
            'image' => ['nullable', 'image', 'mimes:png,jpg,jpeg,gif'],
            'isPublished' => ['required', 'boolean']
        ];
    }
}
