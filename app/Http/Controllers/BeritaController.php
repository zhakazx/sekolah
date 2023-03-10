<?php

namespace App\Http\Controllers;

use App\Helpers\ImageHelper;
use App\Models\Berita;
use App\Http\Requests\StoreBeritaRequest;
use App\Http\Requests\UpdateBeritaRequest;
use App\Http\Resources\BeritaResource;
use Illuminate\Support\Facades\File;

class BeritaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $berita = Berita::query()
                        ->published()
                        ->latest()
                        ->paginate(10);
        return BeritaResource::collection($berita);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBeritaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBeritaRequest $request)
    {
        $request->validated();

        if($request->file('image')) {
            $storeImage = ImageHelper::saveImage($request->image);
        }

        $berita = Berita::create([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'image' => $storeImage,
            'isPublished' => $request->isPublished
        ]);
        return response()->json([
            'message' => 'Data berhasil ditambahkan',
            'berita' => $berita
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function show(Berita $berita)
    {
        return new BeritaResource($berita);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBeritaRequest  $request
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBeritaRequest $request, Berita $berita)
    {
        $request->validated();

        if($request->hasFile('image')) {
            $path = 'berita/' . $berita->image;
            if (File::exists($path)) {
                File::delete($path);
            }

            $storeImage = ImageHelper::saveImage($request->image);
        }

        $berita->update([
            'judul' => $request->judul,
            'deskripsi' => $request->deskripsi,
            'image' => $storeImage ?? $berita->image,
            'isPublished' => $request->isPublished
        ]);
        return response()->json([
            'message' => 'Data berhasil diubah',
            'berita' => $berita
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Berita  $berita
     * @return \Illuminate\Http\Response
     */
    public function destroy(Berita $berita)
    {
        $berita->delete();
        return response()->json([
            'message' => 'Data berhasil dihapus',
        ]);
    }
}
