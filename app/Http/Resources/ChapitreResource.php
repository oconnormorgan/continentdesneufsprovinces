<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ChapitreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'numero'=>$this->numero,
            'titre'=>$this->titre,
            'texte'=>$this->texte,
            'id_validation'=>$this->id_validation
        ];
    }
}
