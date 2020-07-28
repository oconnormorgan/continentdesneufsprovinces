<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ValidationModel extends Model
{
    protected $table = 'Validation';
    protected $fillable = [
        'validation',
    ];

    public function validation()
    {
        return $this->hasMany(HistoireModel::class, 'id_validation');
    }
}
