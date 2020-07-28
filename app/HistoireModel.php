<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HistoireModel extends Model
{
    protected $table = 'histoire';
    protected $fillable = [
        'titre', 'resumé', 'id_auteur',
    ];

    public function auteur()
    {
        return $this->belongsTo(User::class, 'id_auteur');
    }

    public function Chapitre()
    {
        return $this->belongsToMany(ChapitreModel::class, 'histoire_has_chapitre', 'id_histoire', 'id_chapitre');
    }
}
