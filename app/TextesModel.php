<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TextesModel extends Model
{
    protected $table = 'textes';
    protected $fillable = [
        'titre', 'texte', 'id_auteur',
    ];

    public function auteur()
    {
        return $this->belongsTo(User::class, 'id_auteur');
    }
}
