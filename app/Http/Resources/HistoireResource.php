<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class HistoireResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $auteur = new UsersResource($this->auteur);
        return [
            'id'=>$this->id,
            'titre'=>$this->titre,
            'resumé'=>$this->resumé,
            'id_auteur'=>$auteur,
        ];;
    }
}
