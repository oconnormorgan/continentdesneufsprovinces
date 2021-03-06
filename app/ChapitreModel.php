<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChapitreModel extends Model
{
    protected $table = 'chapitre';
    protected $fillable = [
        'numero', 'titre', 'texte', 'id_validation'
    ];
    public $timestamps = false;
    use SoftDeletes;

    public function validation()
    {
        return $this->belongsTo(ValidationModel::class, 'id_validation');
    }

    public function Histoire()
    {
        return $this->belongsToMany(HistoireModel::class, 'histoire_has_chapitre', 'id_histoire', 'id_chapitre');
    }
}
