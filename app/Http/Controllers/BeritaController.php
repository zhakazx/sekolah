<?php

namespace App\Http\Controllers;

use App\Models\Berita;
use App\Http\Requests\StoreBeritaRequest;
use App\Http\Requests\UpdateBeritaRequest;

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
                        ->where('isPublished', '1')
                        ->latest()
                        ->paginate(10);
        return response()->json($berita);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreBeritaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBeritaRequest $request)
    {
        $validator = $request->validated();

        $berita = Berita::create($validator);
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
        return response()->json(['berita' => $berita]);
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
        $validator = $request->validated();

        $berita->update($validator);
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
