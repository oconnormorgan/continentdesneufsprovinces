<?php

namespace App\Http\Controllers;

use App\ChapitreModel;
use App\HistoireModel;
use App\Http\Resources\ChapitreResource;
use App\Http\Resources\HistoireResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use PhpParser\ErrorHandler\Collecting;

class TextesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $histoire = HistoireModel::all();
        return HistoireResource::collection($histoire);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validatedData = Validator::make(
            $request->all(),
            [
                'titre' => 'required|max:255',
                'resumé' => 'required',
            ]
        )->validate();

        $addHistoire = new HistoireModel;

        $addHistoire->titre = $validatedData['titre'];
        $addHistoire->resumé = $validatedData['resumé'];

        $addHistoire->save();

        Log::debug($addHistoire);

        return new HistoireResource($addHistoire);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getChapitre($id)
    {
        $getHistoire = HistoireModel::where('id', '=', $id)->with(["Chapitre"])->get();
        return $getHistoire;
    }

    public function getTexteChapitre($id)
    {
        $getChapitre = ChapitreModel::where('id', '=', $id)->get();
        return $getChapitre;
    }

    public function createChapitre(Request $request)
    {
        $validatedData = Validator::make(
            $request->all(),
            [
                'numero' => 'required|int|max:255',
                'titre' => 'required|max:255',
                'texte' => 'required',
            ]
        )->validate();

        $addChapitre = new ChapitreModel;

        $addChapitre->numero = $validatedData['numero'];
        $addChapitre->titre = $validatedData['titre'];
        $addChapitre->texte = $validatedData['texte'];
        $addChapitre->id_validation = 2;

        $addChapitre->save();

        return new ChapitreResource($addChapitre);
    }
}
